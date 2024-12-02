create table messages (
  id uuid primary key default uuid_generate_v4(),
  to_user_id uuid not null references profiles(id) on delete cascade,
  from_user_id uuid not null references profiles(id) on delete cascade,
  content text not null,
  read_at timestamp with time zone default null,
  created_at timestamp with time zone default now() not null
);
