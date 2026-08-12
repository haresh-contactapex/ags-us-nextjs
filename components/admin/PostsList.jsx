"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";

const STATUS_OPTIONS = [
  { value: "", label: "All" },
  { value: "draft", label: "Draft" },
  { value: "scheduled", label: "Scheduled" },
  { value: "published", label: "Published" },
];

const STATUS_STYLES = {
  published: "bg-green-100 text-green-700",
  scheduled: "bg-amber-100 text-amber-700",
  draft: "bg-slate-100 text-slate-600",
};

export default function PostsList() {
  const [posts, setPosts] = useState([]);
  const [pagination, setPagination] = useState({ page: 1, totalPages: 1 });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(true);

  const load = useCallback(
    async (page = 1, statusFilter = status) => {
      setLoading(true);
      const params = new URLSearchParams({ page: String(page) });
      if (statusFilter) params.set("status", statusFilter);
      const res = await fetch(`/api/admin/posts?${params.toString()}`);
      const json = await res.json();
      setPosts(json?.data?.posts ?? []);
      setPagination(json?.data?.pagination ?? { page: 1, totalPages: 1 });
      setLoading(false);
    },
    [status],
  );

  useEffect(() => {
    load(1, status);
  }, [status, load]);

  async function handleDelete(id) {
    if (!confirm("Delete this post? This cannot be undone.")) return;
    await fetch(`/api/admin/posts/${id}`, { method: "DELETE" });
    load(pagination.page, status);
  }

  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="rounded border border-slate-300 px-3 py-2 text-sm"
        >
          {STATUS_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <Link
          href="/admin/posts/new"
          className="rounded bg-[#f3763a] px-4 py-2 text-sm font-semibold text-white hover:bg-[#e0672d]"
        >
          New Post
        </Link>
      </div>

      <div className="overflow-hidden rounded-lg bg-white shadow-sm">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-50 text-slate-500">
            <tr>
              <th className="px-4 py-3">Title</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Author</th>
              <th className="px-4 py-3">Updated</th>
              <th className="px-4 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={5} className="px-4 py-6 text-center text-slate-400">
                  Loading…
                </td>
              </tr>
            ) : posts.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-4 py-6 text-center text-slate-400">
                  No posts yet.
                </td>
              </tr>
            ) : (
              posts.map((post) => (
                <tr key={post.id} className="border-t border-slate-100">
                  <td className="px-4 py-3 font-medium text-slate-800">
                    {post.title}
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`rounded-full px-2 py-1 text-xs font-medium ${STATUS_STYLES[post.status]}`}
                    >
                      {post.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-slate-500">
                    {post.author_name ?? "—"}
                  </td>
                  <td className="px-4 py-3 text-slate-500">
                    {new Date(post.updated_at).toLocaleDateString()}
                  </td>
                  <td className="space-x-3 px-4 py-3 text-right">
                    <Link
                      href={`/admin/posts/${post.id}/edit`}
                      className="text-sm font-medium text-[#06283c] hover:underline"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(post.id)}
                      className="text-sm font-medium text-red-600 hover:underline"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {pagination.totalPages > 1 && (
        <div className="mt-4 flex justify-center gap-2">
          {Array.from({ length: pagination.totalPages }, (_, i) => i + 1).map(
            (p) => (
              <button
                key={p}
                onClick={() => load(p, status)}
                className={`h-8 w-8 rounded text-sm ${
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
