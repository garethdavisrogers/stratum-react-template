create database if not exists frsdb;
create table if not exists users(
  id BIGSERIAL primary key NOT NULL,
  last_name VARCHAR(40) NOT NULL,
  first_name VARCHAR(40),
  password VARCHAR(40),
  email VARCHAR(40),
  phone_number VARCHAR(40),
  organization VARCHAR(40),
  UNIQUE (email);
);
create table if not exists admins(
  id BIGSERIAL primary key NOT NULL,
  last_name VARCHAR(40) NOT NULL,
  first_name VARCHAR(40),
  password VARCHAR(500),
  email VARCHAR(40),
  phone_number VARCHAR(40),
  organization VARCHAR(40),
  UNIQUE (email);
);