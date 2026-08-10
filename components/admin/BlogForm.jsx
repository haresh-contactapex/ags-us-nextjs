"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { upload } from "@vercel/blob/client";
import BlogEditor from "@/components/admin/BlogEditor";

export default function BlogForm({ initialPost }) {
  const router = useRouter();
  const isEditing = Boolean(initialPost);

  const [title, setTitle] = useState(initialPost?.title || "");
  const [slug, setSlug] = useState(initialPost?.slug || "");
  const [excerpt, setExcerpt] = useState(initialPost?.excerpt || "");
  const [content, setContent] = useState(initialPost?.content || "");
  const [coverImageUrl, setCoverImageUrl] = useState(
    initialPost?.cover_image_url || "",
  );
  const [status, setStatus] = useState(initialPost?.status || "draft");
  const [author, setAuthor] = useState(initialPost?.author || "");
  const [uploadingCover, setUploadingCover] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const handleCoverUpload = async (file) => {
    if (!file) return;
    setUploadingCover(true);
    setError("");
    try {
      const blob = await upload(file.name, file, {
        access: "public",
        handleUploadUrl: "/api/admin/blog/upload",
      });
      setCoverImageUrl(blob.url);
    } catch {
      setError("Cover image upload failed. Please try again.");
    } finally {
      setUploadingCover(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setError("");

    const payload = {
      title: title.trim(),
      slug: slug.trim(),
      excerpt: excerpt.trim(),
      content,
      cover_image_url: coverImageUrl || null,
      status,
      author: author.trim(),
    };

    try {
      if (isEditing) {
        await axios.put(`/api/admin/blog/${initialPost.id}`, payload);
      } else {
        await axios.post("/api/admin/blog", payload);
      }
      router.push("/admin/blog");
    } catch (err) {
      setError(
        err?.response?.data?.message || "Something went wrong. Please try again.",
      );
    } finally {
      setSaving(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {error && (
        <p className="rounded bg-red-50 px-4 py-3 text-sm text-red-600">
          {error}
        </p>
      )}

      <div>
        <label className="mb-1 block text-sm font-medium text-[#333]">
          Title
        </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full rounded border border-gray-300 px-3 py-2"
          required
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-[#333]">
          Slug (leave blank to auto-generate from title)
        </label>
        <input
          type="text"
          value={slug}
          onChange={(e) => setSlug(e.target.value)}
          placeholder="my-blog-post"
          className="w-full rounded border border-gray-300 px-3 py-2"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-[#333]">
          Excerpt
        </label>
        <textarea
          value={excerpt}
          onChange={(e) => setExcerpt(e.target.value)}
          rows={2}
          className="w-full rounded border border-gray-300 px-3 py-2"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-[#333]">
          Author
        </label>
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="w-full rounded border border-gray-300 px-3 py-2"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-[#333]">
          Cover image
        </label>
        {coverImageUrl && (
          <img
            src={coverImageUrl}
            alt="Cover"
            className="mb-2 h-40 w-auto rounded border border-gray-200 object-cover"
          />
        )}
        <input
          type="file"
          accept="image/*"
          onChange={(e) => handleCoverUpload(e.target.files?.[0])}
          disabled={uploadingCover}
        />
        {uploadingCover && (
          <p className="mt-1 text-sm text-gray-500">Uploading...</p>
        )}
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-[#333]">
          Content
        </label>
        <BlogEditor value={content} onChange={setContent} />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-[#333]">
          Status
        </label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="w-full rounded border border-gray-300 px-3 py-2 md:w-60"
        >
          <option value="draft">Draft</option>
          <option value="published">Published</option>
        </select>
      </div>

      <div className="flex gap-3 pt-2">
        <button
          type="submit"
          disabled={saving || uploadingCover}
          className="rounded bg-[#f3763a] px-6 py-2 font-semibold text-white transition hover:bg-black disabled:opacity-60"
        >
          {saving ? "Saving..." : isEditing ? "Save Changes" : "Create Post"}
        </button>
        <button
          type="button"
          onClick={() => router.push("/admin/blog")}
          className="rounded border border-gray-300 px-6 py-2 font-semibold text-[#333] hover:bg-gray-100"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
