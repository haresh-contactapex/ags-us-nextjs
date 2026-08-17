-- Run this once in the Neon SQL editor (console.neon.tech -> your project -> SQL Editor)
-- before the /api/partner-with-us route is used for the first time.

CREATE TABLE IF NOT EXISTS partner_requests (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  company_name TEXT NOT NULL,
  phone TEXT NOT NULL,
  city TEXT NOT NULL,
  country TEXT NOT NULL,
  email TEXT NOT NULL,
  website_url TEXT NOT NULL,
  partnership_info TEXT NOT NULL,
  ip_address TEXT,
  user_agent TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
