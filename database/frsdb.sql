create database if not exists frsdb;
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
create table if not exists users(
  user_id uuid DEFAULT uuid_generate_v4(),
  user_last_name VARCHAR(255) NOT NULL,
  user_first_name VARCHAR(255),
  user_password VARCHAR(255),
  user_email VARCHAR(255) unique,
  user_phone_number VARCHAR(255),
  user_organization VARCHAR(255)
);
create table if not exists admins(
  admin_id uuid DEFAULT uuid_generate_v4(),
  admin_last_name VARCHAR(255) NOT NULL,
  admin_first_name VARCHAR(255),
  admin_password VARCHAR(255),
  admin_email VARCHAR(255) unique,
  admin_phone_number VARCHAR(255),
  admin_organization VARCHAR(255)
);