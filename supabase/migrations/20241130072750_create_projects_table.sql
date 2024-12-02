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
