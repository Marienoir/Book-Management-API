/* Replace with your SQL commands */
CREATE TABLE IF NOT EXISTS reviews(
  id SERIAL PRIMARY KEY,
  bookId int REFERENCES books(id) not null,
  comment varchar not null,
  created_at timestamp default now()
);