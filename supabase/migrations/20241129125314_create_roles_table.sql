create table roles (
  id serial primary key,
  name text unique not null
);

insert into roles (name) values ('user'), ('admin');
alter table profiles
add column role_id integer references roles(id) default 1 not null;

alter table roles enable row level security;
create policy "Roles can be viewed by admins." on public.roles for select using (
  exists (
    select 1 from public.profiles
    where id = auth.uid() and role_id = (select id from public.roles where name = 'admin')
  )
);
create policy "Roles can be created by admins." on public.roles for insert with check (
  exists (
    select 1 from public.profiles
    where id = auth.uid() and role_id = (select id from public.roles where name = 'admin')
  )
);
create policy "Roles can be updated by admins." on public.roles for update using (
  exists (
    select 1 from public.profiles
    where id = auth.uid() and role_id = (select id from public.roles where name = 'admin')
  )
);
create policy "Roles can be deleted by admins." on public.roles for delete using (
  exists (
    select 1 from public.profiles where id = auth.uid() and role_id = (select id from public.roles where name = 'admin')
  )
);
