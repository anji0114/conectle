create type link as (
  url text,
  name text
);

create table profiles (
  id uuid primary key references auth.users on delete cascade,
  username text unique default null,
  name text,
  introduce text,
  links link[] default array[]::link[] not null,
  avatar_url text,
  created_at timestamp with time zone default now() not null,
  updated_at timestamp with time zone default now() not null
);

-- ユーザー名の一意性制約
create unique index unique_username on profiles(username) where username is not null;

-- プロフィールのセキュリティポリシー
alter table profiles enable row level security;
create policy "Profiles are viewable by everyone." on profiles for select using (true);
create policy "Profiles are editable by the owner." on profiles for update using (auth.uid() = id);
create policy "Profiles are deletable by the owner." on profiles for delete using (auth.uid() = id);

-- 新規ユーザー作成時にプロフィールを作成する関数
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = ''
as $$
begin
  insert into public.profiles (id)
  values (new.id);
  return new;
end;
$$;

create trigger on_auth_user_created
  after insert on auth.users
for each row execute procedure public.handle_new_user();

-- プロフィールの更新日時を更新する関数
create or replace function public.update_profile_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger trigger_update_profile_updated_at
  before update on public.profiles
for each row execute procedure public.update_profile_updated_at();
