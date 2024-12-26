create type project_status as enum ('draft', 'published', 'closed');

create table projects (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid not null references profiles(id) on delete cascade,
  title text not null,
  contents text not null,
  category text[] not null,
  status project_status not null default 'draft',
  created_at timestamp with time zone default now() not null,
  updated_at timestamp with time zone default now() not null
);

-- プロジェクトのセキュリティポリシー
alter table projects enable row level security;
create policy "Projects are viewable by everyone." on projects for select using (true);
create policy "Projects can be created by the owner." on projects for insert with check (auth.uid() is not null);
create policy "Projects can be updated by the owner." on projects for update using (auth.uid() = user_id);
create policy "Projects can be deleted by the owner." on projects for delete using (auth.uid() = user_id);

-- 更新日時を更新する関数
create or replace function public.update_project_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger trigger_update_project_updated_at
  before update on public.projects
for each row execute procedure public.update_project_updated_at();

create index projects_user_id_idx on public.projects (user_id);
create index projects_status_idx on public.projects (status);