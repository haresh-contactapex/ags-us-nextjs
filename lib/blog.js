import { getDb } from "@/lib/db";

export function slugify(title) {
  return String(title || "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

const POSTS_PER_PAGE = 9;

export async function listPublishedPosts({ page = 1 } = {}) {
  const sql = getDb();
  const limit = POSTS_PER_PAGE;
  const offset = (Math.max(1, page) - 1) * limit;

  const posts = await sql`
    SELECT id, slug, title, excerpt, cover_image_url, author, published_at
    FROM blog_posts
    WHERE status = 'published' AND published_at <= now()
    ORDER BY published_at DESC
    LIMIT ${limit} OFFSET ${offset}
  `;

  const [{ count }] = await sql`
    SELECT count(*)::int AS count
    FROM blog_posts
    WHERE status = 'published' AND published_at <= now()
  `;

  return {
    posts,
    total: count,
    totalPages: Math.max(1, Math.ceil(count / limit)),
    page: Math.max(1, page),
  };
}

export async function listPublishedSlugs() {
  const sql = getDb();
  return sql`
    SELECT slug, updated_at
    FROM blog_posts
    WHERE status = 'published' AND published_at <= now()
  `;
}

export async function getPublishedPostBySlug(slug) {
  const sql = getDb();
  const rows = await sql`
    SELECT id, slug, title, excerpt, content, cover_image_url, author, published_at
    FROM blog_posts
    WHERE slug = ${slug} AND status = 'published' AND published_at <= now()
    LIMIT 1
  `;
  return rows[0] || null;
}

export async function listAllPostsAdmin() {
  const sql = getDb();
  return sql`
    SELECT id, slug, title, status, author, published_at, updated_at
    FROM blog_posts
    ORDER BY updated_at DESC
  `;
}

export async function getPostById(id) {
  const sql = getDb();
  const rows = await sql`
    SELECT id, slug, title, excerpt, content, cover_image_url, status, author, published_at
    FROM blog_posts
    WHERE id = ${id}
    LIMIT 1
  `;
  return rows[0] || null;
}

export async function createPost(data) {
  const sql = getDb();
  const publishedAt = data.status === "published" ? new Date() : null;

  const rows = await sql`
    INSERT INTO blog_posts
      (slug, title, excerpt, content, cover_image_url, status, author, published_at)
    VALUES
      (${data.slug}, ${data.title}, ${data.excerpt}, ${data.content}, ${data.cover_image_url}, ${data.status}, ${data.author}, ${publishedAt})
    RETURNING id, slug, title, status, published_at
  `;
  return rows[0];
}

export async function updatePost(id, data) {
  const sql = getDb();
  const existing = await getPostById(id);
  if (!existing) return null;

  const publishedAt =
    data.status === "published"
      ? existing.published_at || new Date()
      : null;

  const rows = await sql`
    UPDATE blog_posts SET
      slug = ${data.slug},
      title = ${data.title},
      excerpt = ${data.excerpt},
      content = ${data.content},
      cover_image_url = ${data.cover_image_url},
      status = ${data.status},
      author = ${data.author},
      published_at = ${publishedAt},
      updated_at = now()
    WHERE id = ${id}
    RETURNING id, slug, title, status, published_at
  `;
  return rows[0] || null;
}

export async function deletePost(id) {
  const sql = getDb();
  const rows = await sql`
    DELETE FROM blog_posts WHERE id = ${id} RETURNING id
  `;
  return rows.length > 0;
}

export async function isSlugTaken(slug, excludeId) {
  const sql = getDb();
  const rows = excludeId
    ? await sql`SELECT id FROM blog_posts WHERE slug = ${slug} AND id != ${excludeId} LIMIT 1`
    : await sql`SELECT id FROM blog_posts WHERE slug = ${slug} LIMIT 1`;
  return rows.length > 0;
}
