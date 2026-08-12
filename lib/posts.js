import { getDb } from "./db";

export const PUBLIC_PAGE_SIZE = 9;
export const ADMIN_PAGE_SIZE = 20;

// A post is publicly visible once it's published, or once a scheduled
// post's publish time has passed — computed at query time so nothing
// needs a cron job to "flip" a status.
const PUBLIC_VISIBILITY_SQL =
  "(status = 'published' OR (status = 'scheduled' AND published_at <= now()))";

export async function listPublicPosts({
  page = 1,
  categorySlug = null,
  tagSlug = null,
} = {}) {
  const sql = getDb();
  const offset = (page - 1) * PUBLIC_PAGE_SIZE;
  return sql`
    SELECT
      p.id, p.slug, p.title, p.excerpt, p.published_at,
      m.url AS featured_image_url, m.alt_text AS featured_image_alt,
      COALESCE(
        (SELECT json_agg(json_build_object('name', c.name, 'slug', c.slug))
         FROM post_categories pc JOIN categories c ON c.id = pc.category_id
         WHERE pc.post_id = p.id),
        '[]'
      ) AS categories,
      COALESCE(
        (SELECT json_agg(json_build_object('name', t.name, 'slug', t.slug))
         FROM post_tags pt JOIN tags t ON t.id = pt.tag_id
         WHERE pt.post_id = p.id),
        '[]'
      ) AS tags
    FROM posts p
    LEFT JOIN media m ON m.id = p.featured_image_id
    WHERE ${sql.unsafe(PUBLIC_VISIBILITY_SQL)}
      AND (
        ${categorySlug}::text IS NULL OR EXISTS (
          SELECT 1 FROM post_categories pc2 JOIN categories c2 ON c2.id = pc2.category_id
          WHERE pc2.post_id = p.id AND c2.slug = ${categorySlug}
        )
      )
      AND (
        ${tagSlug}::text IS NULL OR EXISTS (
          SELECT 1 FROM post_tags pt2 JOIN tags t2 ON t2.id = pt2.tag_id
          WHERE pt2.post_id = p.id AND t2.slug = ${tagSlug}
        )
      )
    ORDER BY p.published_at DESC
    LIMIT ${PUBLIC_PAGE_SIZE} OFFSET ${offset}
  `;
}

export async function countPublicPosts({
  categorySlug = null,
  tagSlug = null,
} = {}) {
  const sql = getDb();
  const rows = await sql`
    SELECT count(*)::int AS count
    FROM posts p
    WHERE ${sql.unsafe(PUBLIC_VISIBILITY_SQL)}
      AND (
        ${categorySlug}::text IS NULL OR EXISTS (
          SELECT 1 FROM post_categories pc2 JOIN categories c2 ON c2.id = pc2.category_id
          WHERE pc2.post_id = p.id AND c2.slug = ${categorySlug}
        )
      )
      AND (
        ${tagSlug}::text IS NULL OR EXISTS (
          SELECT 1 FROM post_tags pt2 JOIN tags t2 ON t2.id = pt2.tag_id
          WHERE pt2.post_id = p.id AND t2.slug = ${tagSlug}
        )
      )
  `;
  return rows[0].count;
}

export async function getPublicPostBySlug(slug) {
  const sql = getDb();
  const rows = await sql`
    SELECT
      p.id, p.slug, p.title, p.excerpt, p.content, p.published_at,
      p.seo_title, p.seo_description,
      m.url AS featured_image_url, m.alt_text AS featured_image_alt,
      u.name AS author_name,
      COALESCE(
        (SELECT json_agg(json_build_object('name', c.name, 'slug', c.slug))
         FROM post_categories pc JOIN categories c ON c.id = pc.category_id
         WHERE pc.post_id = p.id),
        '[]'
      ) AS categories,
      COALESCE(
        (SELECT json_agg(json_build_object('name', t.name, 'slug', t.slug))
         FROM post_tags pt JOIN tags t ON t.id = pt.tag_id
         WHERE pt.post_id = p.id),
        '[]'
      ) AS tags
    FROM posts p
    LEFT JOIN media m ON m.id = p.featured_image_id
    LEFT JOIN users u ON u.id = p.author_id
    WHERE p.slug = ${slug} AND ${sql.unsafe(PUBLIC_VISIBILITY_SQL)}
  `;
  return rows[0] ?? null;
}

export async function listPublicSlugs() {
  const sql = getDb();
  return sql`
    SELECT slug, updated_at FROM posts
    WHERE ${sql.unsafe(PUBLIC_VISIBILITY_SQL)}
    ORDER BY published_at DESC
  `;
}

export async function listAdminPosts({ page = 1, status = null } = {}) {
  const sql = getDb();
  const offset = (page - 1) * ADMIN_PAGE_SIZE;
  return sql`
    SELECT p.id, p.slug, p.title, p.status, p.published_at, p.updated_at,
      u.name AS author_name
    FROM posts p
    LEFT JOIN users u ON u.id = p.author_id
    WHERE (${status}::text IS NULL OR p.status = ${status})
    ORDER BY p.updated_at DESC
    LIMIT ${ADMIN_PAGE_SIZE} OFFSET ${offset}
  `;
}

export async function countAdminPosts({ status = null } = {}) {
  const sql = getDb();
  const rows = await sql`
    SELECT count(*)::int AS count FROM posts
    WHERE (${status}::text IS NULL OR status = ${status})
  `;
  return rows[0].count;
}

export async function getPostById(id) {
  const sql = getDb();
  const rows = await sql`
    SELECT
      p.*,
      m.url AS featured_image_url,
      COALESCE(
        (SELECT json_agg(category_id) FROM post_categories WHERE post_id = p.id),
        '[]'
      ) AS category_ids,
      COALESCE(
        (SELECT json_agg(tag_id) FROM post_tags WHERE post_id = p.id),
        '[]'
      ) AS tag_ids
    FROM posts p
    LEFT JOIN media m ON m.id = p.featured_image_id
    WHERE p.id = ${id}
  `;
  return rows[0] ?? null;
}

export async function isSlugTaken(slug, excludeId = null) {
  const sql = getDb();
  const rows = await sql`
    SELECT 1 FROM posts
    WHERE slug = ${slug} AND (${excludeId}::int IS NULL OR id != ${excludeId})
    LIMIT 1
  `;
  return rows.length > 0;
}

export async function setPostCategories(postId, categoryIds) {
  const sql = getDb();
  await sql`DELETE FROM post_categories WHERE post_id = ${postId}`;
  if (categoryIds.length > 0) {
    await sql`
      INSERT INTO post_categories (post_id, category_id)
      SELECT ${postId}, unnest(${categoryIds}::int[])
    `;
  }
}

export async function setPostTags(postId, tagIds) {
  const sql = getDb();
  await sql`DELETE FROM post_tags WHERE post_id = ${postId}`;
  if (tagIds.length > 0) {
    await sql`
      INSERT INTO post_tags (post_id, tag_id)
      SELECT ${postId}, unnest(${tagIds}::int[])
    `;
  }
}

export async function createPost(data) {
  const sql = getDb();
  const rows = await sql`
    INSERT INTO posts
      (slug, title, excerpt, content, featured_image_id, status, published_at, author_id, seo_title, seo_description)
    VALUES
      (${data.slug}, ${data.title}, ${data.excerpt ?? null}, ${data.content}, ${data.featuredImageId ?? null}, ${data.status}, ${data.publishedAt ?? null}, ${data.authorId ?? null}, ${data.seoTitle ?? null}, ${data.seoDescription ?? null})
    RETURNING id
  `;
  const postId = rows[0].id;
  await setPostCategories(postId, data.categoryIds ?? []);
  await setPostTags(postId, data.tagIds ?? []);
  return postId;
}

export async function updatePost(id, data) {
  const sql = getDb();
  await sql`
    UPDATE posts SET
      slug = ${data.slug},
      title = ${data.title},
      excerpt = ${data.excerpt ?? null},
      content = ${data.content},
      featured_image_id = ${data.featuredImageId ?? null},
      status = ${data.status},
      published_at = ${data.publishedAt ?? null},
      seo_title = ${data.seoTitle ?? null},
      seo_description = ${data.seoDescription ?? null},
      updated_at = now()
    WHERE id = ${id}
  `;
  await setPostCategories(id, data.categoryIds ?? []);
  await setPostTags(id, data.tagIds ?? []);
}

export async function deletePost(id) {
  const sql = getDb();
  await sql`DELETE FROM posts WHERE id = ${id}`;
}
