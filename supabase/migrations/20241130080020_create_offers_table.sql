create type offer_status as enum ('draft', 'published', 'closed');

create table offers (
  id uuid primary key default uuid_generate_v4(),
  project_id uuid not null references projects(id) on delete cascade,
  title text not null,
  contents text not null,
  status offer_status not null default 'draft',
  created_at timestamp with time zone default now() not null,
  updated_at timestamp with time zone default now() not null
);

create type offer_application_status as enum ('applied', 'accepted', 'rejected');
create table offer_applications (
  id uuid primary key default uuid_generate_v4(),
  offer_id uuid not null references offers(id) on delete cascade,
  user_id uuid not null references profiles(id) on delete cascade,
  status offer_application_status not null default 'applied',
  applied_at timestamp with time zone default now() not null
);
