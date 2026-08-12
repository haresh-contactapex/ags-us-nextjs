import { readFileSync } from "fs";
import { neon } from "@neondatabase/serverless";

const files = [
  "sql/users.sql",
  "sql/media.sql",
  "sql/categories.sql",
  "sql/tags.sql",
  "sql/posts.sql",
  "sql/post_categories.sql",
  "sql/post_tags.sql",
];

if (!process.env.DATABASE_URL) {
  console.error("DATABASE_URL is not set.");
  process.exit(1);
}

const sql = neon(process.env.DATABASE_URL);

for (const file of files) {
  const text = readFileSync(file, "utf8");
  const statements = text
    .split("\n")
    .filter((line) => !line.trim().startsWith("--"))
    .join("\n")
    .split(";")
    .map((s) => s.trim())
    .filter(Boolean);
  for (const statement of statements) {
    await sql.query(statement, []);
  }
  console.log(`Ran ${file}`);
}

console.log("All migrations applied.");
