create type listing_status as enum ('draft', 'published', 'closed');

create table listings (
  id uuid primary key default uuid_generate_v4(),
  project_id uuid references projects(id) on delete set null,
  user_id uuid not null references profiles(id) on delete cascade,
  title text not null,
  contents text not null,
  status listing_status not null default 'draft',
  created_at timestamp with time zone default now() not null,
  updated_at timestamp with time zone default now() not null
);

alter table listings enable row level security;
create policy "Listings are viewable by everyone." on listings for select using (true);
create policy "Listings can be created by the owner." on listings for insert with check (auth.uid() is not null);
create policy "Listings can be updated by the owner." on listings for update using (
  auth.uid() = user_id or auth.uid() = (
    select user_id from projects where id = listings.project_id
  )
);
create policy "Listings can be deleted by the owner." on listings for delete using (
  auth.uid() = user_id or auth.uid() = (
    select user_id from projects where id = listings.project_id
  )
);

create or replace function public.update_listing_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger trigger_update_listing_updated_at
  before update on public.listings
for each row execute procedure public.update_listing_updated_at();

create index listings_project_id_idx on public.listings (project_id);
create index listings_user_id_idx on public.listings (user_id);
create index listings_status_idx on public.listings (status);

-- application
create type listing_application_status as enum ('applied', 'accepted', 'rejected');
create table listing_applications (
  id uuid primary key default uuid_generate_v4(),
  listing_id uuid not null references listings(id) on delete cascade,
  user_id uuid not null references profiles(id) on delete cascade,
  status listing_application_status not null default 'applied',
  applied_at timestamp with time zone default now() not null,
  updated_at timestamp with time zone default now() not null 
);

alter table listing_applications enable row level security;
create policy "Listing applications are viewable by listing creator and applicant." on listing_applications for select using (
  auth.uid() = (select user_id from listings where id = listing_applications.listing_id) or
  auth.uid() = user_id
);
create policy "Listing applications can be created by the owner." on listing_applications for insert with check (
  auth.uid() is not null and auth.uid() = user_id
);
create policy "Listing applications can be updated by the applicant or the owner." on listing_applications for update using (
  auth.uid() = user_id or auth.uid() = (
    select user_id from listings where id = listing_applications.listing_id
  )
);
create policy "Listing applications can be deleted by the applicant or the owner." on listing_applications for delete using (
  auth.uid() = user_id or auth.uid() = (
    select user_id from listings where id = listing_applications.listing_id
  )
);

create index listing_applications_listing_id_idx on public.listing_applications (listing_id);
create index listing_applications_user_id_idx on public.listing_applications (user_id);
create index listing_applications_status_idx on public.listing_applications (status);

create or replace function public.update_listing_application_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger trigger_update_listing_application_updated_at
  before update on public.listing_applications
for each row execute procedure public.update_listing_application_updated_at();

