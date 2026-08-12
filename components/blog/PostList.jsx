"use client";

import { useCallback, useState } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import PostCard from "./PostCard";

// Pagination fetches JSON from /api/posts and swaps local state — the URL
// is kept in sync via router.replace(..., { scroll: false }) so pages stay
// shareable/bookmarkable, but no full document navigation ever happens.
export default function PostList({
  initialPosts,
  initialPagination,
  categories,
  tags,
  categorySlug = null,
  tagSlug = null,
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [posts, setPosts] = useState(initialPosts);
  const [pagination, setPagination] = useState(initialPagination);
  const [loading, setLoading] = useState(false);

  const loadPage = useCallback(
    async (page) => {
      setLoading(true);
      const params = new URLSearchParams({ page: String(page) });
      if (categorySlug) params.set("category", categorySlug);
      if (tagSlug) params.set("tag", tagSlug);

      try {
        const res = await fetch(`/api/posts?${params.toString()}`);
        const json = await res.json();
        setPosts(json?.data?.posts ?? []);
        setPagination((prev) => json?.data?.pagination ?? prev);
      } finally {
        setLoading(false);
      }

      const url = page > 1 ? `${pathname}?page=${page}` : pathname;
      router.replace(url, { scroll: false });
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    [categorySlug, tagSlug, pathname, router],
  );

  return (
    <div>
      {(categories.length > 0 || tags.length > 0) && (
        <div className="mb-8 flex flex-wrap gap-2">
          <Link
            href="/blog"
            className={`rounded-full border px-3 py-1 text-sm ${
              !categorySlug && !tagSlug
                ? "border-[#f3763a] bg-[#f3763a] text-white"
                : "border-slate-300 text-slate-600"
            }`}
          >
            All
          </Link>
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/blog/category/${cat.slug}`}
              className={`rounded-full border px-3 py-1 text-sm ${
                categorySlug === cat.slug
                  ? "border-[#f3763a] bg-[#f3763a] text-white"
                  : "border-slate-300 text-slate-600"
              }`}
            >
              {cat.name}
            </Link>
          ))}
          {tags.map((tag) => (
            <Link
              key={tag.slug}
              href={`/blog/tag/${tag.slug}`}
              className={`rounded-full border px-3 py-1 text-sm ${
                tagSlug === tag.slug
                  ? "border-[#f3763a] bg-[#f3763a] text-white"
                  : "border-slate-300 text-slate-600"
              }`}
            >
              #{tag.name}
            </Link>
          ))}
        </div>
      )}

      {posts.length === 0 ? (
        <p className="text-slate-500">No posts yet. Check back soon.</p>
      ) : (
        <div
          className={`grid gap-8 sm:grid-cols-2 lg:grid-cols-3 ${
            loading ? "opacity-50" : ""
          }`}
        >
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      )}

      {pagination.totalPages > 1 && (
        <div className="mt-10 flex justify-center gap-2">
          {Array.from({ length: pagination.totalPages }, (_, i) => i + 1).map(
            (p) => (
              <button
                key={p}
                onClick={() => loadPage(p)}
                disabled={loading}
                className={`h-9 w-9 rounded text-sm font-medium ${
                  p === pagination.page
                    ? "bg-[#06283c] text-white"
                    : "bg-white text-slate-600 hover:bg-slate-100"
                }`}
              >
                {p}
              </button>
            ),
          )}
        </div>
      )}
    </div>
  );
}
