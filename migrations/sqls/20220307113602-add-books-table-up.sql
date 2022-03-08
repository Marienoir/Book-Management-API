/* Replace with your SQL commands */
CREATE TABLE IF NOT EXISTS books(
  id SERIAL PRIMARY KEY,
  name varchar not null,
  author varchar not null,
  quantity varchar not null,
  price varchar not null,
  ISBN varchar not null UNIQUE,
  date timestamp default now(),
  updated_at timestamp default now()
);