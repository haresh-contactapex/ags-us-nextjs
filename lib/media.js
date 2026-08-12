import { del } from "@vercel/blob";
import { getDb } from "./db";

export const MEDIA_PAGE_SIZE = 24;

export async function listMedia({ page = 1 } = {}) {
  const sql = getDb();
  const offset = (page - 1) * MEDIA_PAGE_SIZE;
  return sql`
    SELECT id, url, filename, mime_type, size_bytes, width, height, alt_text, created_at
    FROM media
    ORDER BY created_at DESC
    LIMIT ${MEDIA_PAGE_SIZE} OFFSET ${offset}
  `;
}

export async function countMedia() {
  const sql = getDb();
  const rows = await sql`SELECT count(*)::int AS count FROM media`;
  return rows[0].count;
}

export async function getMediaById(id) {
  const sql = getDb();
  const rows = await sql`SELECT * FROM media WHERE id = ${id}`;
  return rows[0] ?? null;
}

export async function createMedia(data) {
  const sql = getDb();
  const rows = await sql`
    INSERT INTO media
      (url, pathname, filename, mime_type, size_bytes, width, height, alt_text, uploaded_by)
    VALUES
      (${data.url}, ${data.pathname}, ${data.filename}, ${data.mimeType}, ${data.sizeBytes}, ${data.width ?? null}, ${data.height ?? null}, ${data.altText ?? null}, ${data.uploadedBy ?? null})
    RETURNING id, url, filename, mime_type, size_bytes, width, height, alt_text, created_at
  `;
  return rows[0];
}

export async function deleteMedia(id) {
  const media = await getMediaById(id);
  if (!media) return;
  const sql = getDb();
  await sql`DELETE FROM media WHERE id = ${id}`;
  try {
    await del(media.pathname);
  } catch (error) {
    console.error("media: failed to delete blob", error);
  }
}
