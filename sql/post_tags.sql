-- Run this once in the Neon SQL editor (console.neon.tech -> your project -> SQL Editor)
-- before the admin dashboard is used for the first time.
-- Requires posts.sql and tags.sql to have been run first.

CREATE TABLE IF NOT EXISTS post_tags (
  post_id INTEGER NOT NULL REFERENCES posts(id) ON DELETE CASCADE,
  tag_id INTEGER NOT NULL REFERENCES tags(id) ON DELETE CASCADE,
  PRIMARY KEY (post_id, tag_id)
);
