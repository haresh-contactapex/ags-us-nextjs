"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { slugify } from "@/lib/slugify";
import PostEditor from "./PostEditor";
import MediaPickerModal from "./MediaPickerModal";

const STATUS_OPTIONS = [
  { value: "draft", label: "Draft" },
  { value: "scheduled", label: "Scheduled" },
  { value: "published", label: "Published" },
];

function toLocalDatetimeInputValue(isoString) {
  if (!isoString) return "";
  const date = new Date(isoString);
  const offsetMs = date.getTimezoneOffset() * 60000;
  return new Date(date.getTime() - offsetMs).toISOString().slice(0, 16);
}

export default function PostForm({ initialPost, categories, tags }) {
  const router = useRouter();
  const isEditing = Boolean(initialPost);

  const [title, setTitle] = useState(initialPost?.title ?? "");
  const [slug, setSlug] = useState(initialPost?.slug ?? "");
  const [slugTouched, setSlugTouched] = useState(isEditing);
  const [excerpt, setExcerpt] = useState(initialPost?.excerpt ?? "");
  const [content, setContent] = useState(initialPost?.content ?? "");
  const [status, setStatus] = useState(initialPost?.status ?? "draft");
  const [publishedAt, setPublishedAt] = useState(
    toLocalDatetimeInputValue(initialPost?.published_at),
  );
  const [featuredImage, setFeaturedImage] = useState(
    initialPost?.featured_image_id
      ? { id: initialPost.featured_image_id, url: initialPost.featured_image_url }
      : null,
  );
  const [categoryIds, setCategoryIds] = useState(
    initialPost?.category_ids ?? [],
  );
  const [tagIds, setTagIds] = useState(initialPost?.tag_ids ?? []);
  const [seoTitle, setSeoTitle] = useState(initialPost?.seo_title ?? "");
  const [seoDescription, setSeoDescription] = useState(
    initialPost?.seo_description ?? "",
  );
  const [pickerOpen, setPickerOpen] = useState(false);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState("");

  useEffect(() => {
    if (!slugTouched) {
      setSlug(slugify(title));
    }
  }, [title, slugTouched]);

  function toggleId(list, setList, id) {
    setList(list.includes(id) ? list.filter((x) => x !== id) : [...list, id]);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setSubmitting(true);
    setErrors({});
    setFormError("");

    const payload = {
      title,
      slug,
      excerpt,
      content,
      status,
      publishedAt: publishedAt ? new Date(publishedAt).toISOString() : null,
      featuredImageId: featuredImage?.id ?? null,
      categoryIds,
      tagIds,
      seoTitle,
      seoDescription,
    };

    try {
      const res = await fetch(
        isEditing ? `/api/admin/posts/${initialPost.id}` : "/api/admin/posts",
        {
          method: isEditing ? "PUT" : "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        },
      );
      const json = await res.json();
      if (!res.ok) {
        setErrors(json?.data?.errors ?? {});
        setFormError(json.message || "Something went wrong.");
        return;
      }
      router.push("/admin/posts");
      router.refresh();
    } catch {
      setFormError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 gap-6 lg:grid-cols-3"
    >
      <div className="space-y-6 lg:col-span-2">
        {formError && (
          <p className="rounded bg-red-50 px-3 py-2 text-sm text-red-600">
            {formError}
          </p>
        )}

        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">
            Title
          </label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full rounded border border-slate-300 px-3 py-2 text-sm"
          />
          {errors.title && (
            <p className="mt-1 text-xs text-red-600">{errors.title}</p>
          )}
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">
            Slug
          </label>
          <input
            value={slug}
            onChange={(e) => {
              setSlug(e.target.value);
              setSlugTouched(true);
            }}
            className="w-full rounded border border-slate-300 px-3 py-2 text-sm"
          />
          {errors.slug && (
            <p className="mt-1 text-xs text-red-600">{errors.slug}</p>
          )}
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">
            Excerpt
          </label>
          <textarea
            value={excerpt}
            onChange={(e) => setExcerpt(e.target.value)}
            rows={2}
            className="w-full rounded border border-slate-300 px-3 py-2 text-sm"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">
            Content
          </label>
          <PostEditor value={content} onChange={setContent} />
          {errors.content && (
            <p className="mt-1 text-xs text-red-600">{errors.content}</p>
          )}
        </div>

        <div className="rounded-lg bg-white p-5 shadow-sm">
          <h2 className="mb-3 text-sm font-semibold text-slate-700">SEO</h2>
          <label className="mb-1 block text-sm font-medium text-slate-700">
            SEO Title
          </label>
          <input
            value={seoTitle}
            onChange={(e) => setSeoTitle(e.target.value)}
            className="mb-3 w-full rounded border border-slate-300 px-3 py-2 text-sm"
          />
          <label className="mb-1 block text-sm font-medium text-slate-700">
            SEO Description
          </label>
          <textarea
            value={seoDescription}
            onChange={(e) => setSeoDescription(e.target.value)}
            rows={2}
            className="w-full rounded border border-slate-300 px-3 py-2 text-sm"
          />
        </div>
      </div>

      <div className="space-y-6">
        <div className="rounded-lg bg-white p-5 shadow-sm">
          <label className="mb-1 block text-sm font-medium text-slate-700">
            Status
          </label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="mb-3 w-full rounded border border-slate-300 px-3 py-2 text-sm"
          >
            {STATUS_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>

          {(status === "scheduled" || status === "published") && (
            <>
              <label className="mb-1 block text-sm font-medium text-slate-700">
                {status === "scheduled" ? "Publish at" : "Published at"}
              </label>
              <input
                type="datetime-local"
                value={publishedAt}
                onChange={(e) => setPublishedAt(e.target.value)}
                className="w-full rounded border border-slate-300 px-3 py-2 text-sm"
              />
              {errors.publishedAt && (
                <p className="mt-1 text-xs text-red-600">
                  {errors.publishedAt}
                </p>
              )}
            </>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="mt-4 w-full rounded bg-[#f3763a] px-4 py-2 text-sm font-semibold text-white hover:bg-[#e0672d] disabled:opacity-60"
          >
            {submitting ? "Saving…" : isEditing ? "Update Post" : "Create Post"}
          </button>
        </div>

        <div className="rounded-lg bg-white p-5 shadow-sm">
          <h2 className="mb-3 text-sm font-semibold text-slate-700">
            Featured Image
          </h2>
          {featuredImage?.url ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={featuredImage.url}
              alt=""
              className="mb-3 h-32 w-full rounded object-cover"
            />
          ) : (
            <p className="mb-3 text-sm text-slate-400">No image selected.</p>
          )}
          <button
            type="button"
            onClick={() => setPickerOpen(true)}
            className="w-full rounded border border-slate-300 px-3 py-2 text-sm hover:bg-slate-50"
          >
            {featuredImage ? "Change image" : "Choose image"}
          </button>
        </div>

        <div className="rounded-lg bg-white p-5 shadow-sm">
          <h2 className="mb-3 text-sm font-semibold text-slate-700">
            Categories
          </h2>
          <div className="space-y-2">
            {categories.map((cat) => (
              <label
                key={cat.id}
                className="flex items-center gap-2 text-sm text-slate-700"
              >
                <input
                  type="checkbox"
                  checked={categoryIds.includes(cat.id)}
                  onChange={() => toggleId(categoryIds, setCategoryIds, cat.id)}
                />
                {cat.name}
              </label>
            ))}
            {categories.length === 0 && (
              <p className="text-sm text-slate-400">No categories yet.</p>
            )}
          </div>
        </div>

        <div className="rounded-lg bg-white p-5 shadow-sm">
          <h2 className="mb-3 text-sm font-semibold text-slate-700">Tags</h2>
          <div className="space-y-2">
            {tags.map((tag) => (
              <label
                key={tag.id}
                className="flex items-center gap-2 text-sm text-slate-700"
              >
                <input
                  type="checkbox"
                  checked={tagIds.includes(tag.id)}
                  onChange={() => toggleId(tagIds, setTagIds, tag.id)}
                />
                {tag.name}
              </label>
            ))}
            {tags.length === 0 && (
              <p className="text-sm text-slate-400">No tags yet.</p>
            )}
          </div>
        </div>
      </div>

      <MediaPickerModal
        open={pickerOpen}
        onClose={() => setPickerOpen(false)}
        onSelect={(item) => setFeaturedImage(item)}
      />
    </form>
  );
}
