import { getDb } from "./db";
import { hashPassword } from "./password";

export async function listUsers() {
  const sql = getDb();
  return sql`
    SELECT id, name, email, role, is_active, created_at
    FROM users ORDER BY created_at DESC
  `;
}

export async function getUserByEmail(email) {
  const sql = getDb();
  const rows = await sql`SELECT * FROM users WHERE email = ${email}`;
  return rows[0] ?? null;
}

export async function getUserById(id) {
  const sql = getDb();
  const rows = await sql`
    SELECT id, name, email, role, is_active, created_at
    FROM users WHERE id = ${id}
  `;
  return rows[0] ?? null;
}

export async function isEmailTaken(email, excludeId = null) {
  const sql = getDb();
  const rows = await sql`
    SELECT 1 FROM users
    WHERE email = ${email} AND (${excludeId}::int IS NULL OR id != ${excludeId})
    LIMIT 1
  `;
  return rows.length > 0;
}

export async function createUser({ name, email, password, role }) {
  const sql = getDb();
  const passwordHash = await hashPassword(password);
  const rows = await sql`
    INSERT INTO users (name, email, password_hash, role)
    VALUES (${name}, ${email}, ${passwordHash}, ${role})
    RETURNING id, name, email, role, is_active, created_at
  `;
  return rows[0];
}

export async function updateUser(id, { name, email, role, isActive, password }) {
  const sql = getDb();
  if (password) {
    const passwordHash = await hashPassword(password);
    const rows = await sql`
      UPDATE users
      SET name = ${name}, email = ${email}, role = ${role}, is_active = ${isActive}, password_hash = ${passwordHash}
      WHERE id = ${id}
      RETURNING id, name, email, role, is_active, created_at
    `;
    return rows[0] ?? null;
  }
  const rows = await sql`
    UPDATE users
    SET name = ${name}, email = ${email}, role = ${role}, is_active = ${isActive}
    WHERE id = ${id}
    RETURNING id, name, email, role, is_active, created_at
  `;
  return rows[0] ?? null;
}

export async function deleteUser(id) {
  const sql = getDb();
  await sql`DELETE FROM users WHERE id = ${id}`;
}
