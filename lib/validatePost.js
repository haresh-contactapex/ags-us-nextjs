import { slugify } from "./slugify";

const STATUSES = ["draft", "scheduled", "published"];

export function validatePostInput(body) {
  const title = String(body?.title ?? "").trim();
  const excerpt = String(body?.excerpt ?? "").trim();
  const content = String(body?.content ?? "");
  const status = STATUSES.includes(body?.status) ? body.status : "draft";
  const seoTitle = String(body?.seoTitle ?? "").trim();
  const seoDescription = String(body?.seoDescription ?? "").trim();
  const categoryIds = Array.isArray(body?.categoryIds)
    ? body.categoryIds.map(Number).filter(Number.isInteger)
    : [];
  const tagIds = Array.isArray(body?.tagIds)
    ? body.tagIds.map(Number).filter(Number.isInteger)
    : [];
  const featuredImageId =
    body?.featuredImageId != null && Number.isInteger(Number(body.featuredImageId))
      ? Number(body.featuredImageId)
      : null;

  const slug = slugify(body?.slug || title);

  let publishedAt = null;
  if (body?.publishedAt) {
    const parsed = new Date(body.publishedAt);
    if (!Number.isNaN(parsed.getTime())) {
      publishedAt = parsed.toISOString();
    }
  }
  if (status === "published" && !publishedAt) {
    publishedAt = new Date().toISOString();
  }

  const errors = {};
  if (!title) errors.title = "Title is required.";
  if (!content.trim()) errors.content = "Content is required.";
  if (!slug) errors.slug = "A valid slug is required.";
  if (status === "scheduled" && !publishedAt) {
    errors.publishedAt =
      "A future publish date is required for scheduled posts.";
  }

  return {
    data: {
      title,
      excerpt,
      content,
      status,
      slug,
      seoTitle,
      seoDescription,
      categoryIds,
      tagIds,
      featuredImageId,
      publishedAt,
    },
    errors,
  };
}
