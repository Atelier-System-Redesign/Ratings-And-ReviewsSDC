-- To drop all tables run the following in postgres database:
-- DO $$ DECLARE
--     r RECORD;
-- BEGIN
--     FOR r IN (SELECT tablename FROM pg_tables WHERE schemaname = current_schema()) LOOP
--         EXECUTE 'DROP TABLE IF EXISTS ' || quote_ident(r.tablename) || ' CASCADE';
--     END LOOP;
-- END $$;


-- To add tables run the following in postgress database
-- \i server/schema.sql


\c reviews;

CREATE TABLE IF NOT EXISTS reviews (
  id SERIAL PRIMARY KEY,
  product_id INT,
  rating INT NOT NULL,
  unix_timestamp BIGINT DEFAULT extract(epoch from now()) * 1000,
  summary TEXT,
  body TEXT NOT NULL,
  recommend BOOLEAN DEFAULT false,
  reported BOOLEAN DEFAULT false,
  reviewer_name VARCHAR(255) NOT NULL,
  reviewer_email VARCHAR(255) NOT NULL,
  response TEXT DEFAULT NULL,
  helpfulness INT DEFAULT 0
);

CREATE TABLE IF NOT EXISTS reviews_photos (
  id SERIAL PRIMARY KEY,
  review_id INT,
  url VARCHAR(255),
  FOREIGN KEY (review_id) REFERENCES reviews(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS characteristics (
  id SERIAL PRIMARY KEY,
  product_id INT,
  name VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS reviews_characteristics (
  id SERIAL PRIMARY KEY,
  characteristic_id INT,
  review_id INT,
  value FLOAT,
  FOREIGN KEY (review_id) REFERENCES reviews(id) ON DELETE CASCADE,
  FOREIGN KEY (characteristic_id) REFERENCES characteristics(id) ON DELETE CASCADE
);