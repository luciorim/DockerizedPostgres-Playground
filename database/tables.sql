create table users(
    user_id serial primary key,
    email varchar(255) not null,
    password varchar(255) not null,
    banned boolean default false,
    banReason varchar(255)
)
