import { getDb } from "./db";

export async function listCategories() {
  const sql = getDb();
  return sql`SELECT id, name, slug, description FROM categories ORDER BY name ASC`;
}

export async function getCategoryBySlug(slug) {
  const sql = getDb();
  const rows = await sql`
    SELECT id, name, slug, description FROM categories WHERE slug = ${slug}
  `;
  return rows[0] ?? null;
}

export async function isCategorySlugTaken(slug, excludeId = null) {
  const sql = getDb();
  const rows = await sql`
    SELECT 1 FROM categories
    WHERE slug = ${slug} AND (${excludeId}::int IS NULL OR id != ${excludeId})
    LIMIT 1
  `;
  return rows.length > 0;
}

export async function createCategory({ name, slug, description }) {
  const sql = getDb();
  const rows = await sql`
    INSERT INTO categories (name, slug, description)
    VALUES (${name}, ${slug}, ${description ?? null})
    RETURNING id, name, slug, description
  `;
  return rows[0];
}

export async function updateCategory(id, { name, slug, description }) {
  const sql = getDb();
  const rows = await sql`
    UPDATE categories
    SET name = ${name}, slug = ${slug}, description = ${description ?? null}
    WHERE id = ${id}
    RETURNING id, name, slug, description
  `;
  return rows[0] ?? null;
}

export async function deleteCategory(id) {
  const sql = getDb();
  await sql`DELETE FROM categories WHERE id = ${id}`;
}
