create table roles (
  id serial primary key,
  name text unique not null
);

insert into roles (name) values ('user'), ('admin');

alter table profiles
add column role_id integer references roles(id) default 1 not null;
