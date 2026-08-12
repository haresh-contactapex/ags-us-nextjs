// One-off CLI to bootstrap the first admin account (there's no UI path to
// create a user before one already exists to log in as).
//
// Usage (DATABASE_URL must be set in the environment):
//   node scripts/create-admin-user.mjs "Full Name" email@example.com "StrongPass123!" admin

import { neon } from "@neondatabase/serverless";
import bcrypt from "bcryptjs";

const [, , name, email, password, role = "admin"] = process.argv;

if (!name || !email || !password) {
  console.error(
    'Usage: node scripts/create-admin-user.mjs "Full Name" email@example.com password [admin|editor]',
  );
  process.exit(1);
}

if (!process.env.DATABASE_URL) {
  console.error("DATABASE_URL is not set in the environment.");
  process.exit(1);
}

const sql = neon(process.env.DATABASE_URL);
const passwordHash = await bcrypt.hash(password, 10);

const rows = await sql`
  INSERT INTO users (name, email, password_hash, role)
  VALUES (${name}, ${email}, ${passwordHash}, ${role})
  RETURNING id, name, email, role
`;

console.log("Created user:", rows[0]);
