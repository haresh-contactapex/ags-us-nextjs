import { getDb } from "./db";

export async function listTags() {
  const sql = getDb();
  return sql`SELECT id, name, slug FROM tags ORDER BY name ASC`;
}

export async function getTagBySlug(slug) {
  const sql = getDb();
  const rows = await sql`SELECT id, name, slug FROM tags WHERE slug = ${slug}`;
  return rows[0] ?? null;
}

export async function isTagSlugTaken(slug, excludeId = null) {
  const sql = getDb();
  const rows = await sql`
    SELECT 1 FROM tags
    WHERE slug = ${slug} AND (${excludeId}::int IS NULL OR id != ${excludeId})
    LIMIT 1
  `;
  return rows.length > 0;
}

export async function createTag({ name, slug }) {
  const sql = getDb();
  const rows = await sql`
    INSERT INTO tags (name, slug) VALUES (${name}, ${slug})
    RETURNING id, name, slug
  `;
  return rows[0];
}

export async function updateTag(id, { name, slug }) {
  const sql = getDb();
  const rows = await sql`
    UPDATE tags SET name = ${name}, slug = ${slug}
    WHERE id = ${id}
    RETURNING id, name, slug
  `;
  return rows[0] ?? null;
}

export async function deleteTag(id) {
  const sql = getDb();
  await sql`DELETE FROM tags WHERE id = ${id}`;
}
