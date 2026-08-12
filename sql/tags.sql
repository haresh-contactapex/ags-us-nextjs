-- Run this once in the Neon SQL editor (console.neon.tech -> your project -> SQL Editor)
-- before the admin dashboard is used for the first time.

CREATE TABLE IF NOT EXISTS tags (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE
);
