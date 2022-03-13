/* Replace with your SQL commands */
CREATE TABLE IF NOT EXISTS users(
  id SERIAL PRIMARY KEY,
  full_name varchar not null,
  role varchar not null DEFAULT 'user',
  created_at timestamp default now(),
  updated_at timestamp default now()
);