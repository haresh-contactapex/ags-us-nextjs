-- Run this once in the Neon SQL editor (console.neon.tech -> your project -> SQL Editor)
-- before the admin dashboard is used for the first time.
-- Requires users.sql and media.sql to have been run first.

CREATE TABLE IF NOT EXISTS posts (
  id SERIAL PRIMARY KEY,
  slug TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  excerpt TEXT,
  content TEXT NOT NULL,
  featured_image_id INTEGER REFERENCES media(id) ON DELETE SET NULL,
  status TEXT NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'scheduled', 'published')),
  published_at TIMESTAMPTZ,
  author_id INTEGER REFERENCES users(id) ON DELETE SET NULL,
  seo_title TEXT,
  seo_description TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS posts_public_idx ON posts (status, published_at DESC);
