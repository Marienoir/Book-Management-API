/* Replace with your SQL commands */
ALTER TABLE books
ADD IF NOT EXISTS category varchar,
ADD IF NOT EXISTS no_of_comments int default 0;