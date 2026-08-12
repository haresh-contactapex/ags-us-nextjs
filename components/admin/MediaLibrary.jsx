"use client";

import { useCallback, useEffect, useState } from "react";
import { uploadFile } from "@/lib/clientUpload";

export default function MediaLibrary({ selectable = false, onSelect }) {
  const [media, setMedia] = useState([]);
  const [pagination, setPagination] = useState({ page: 1, totalPages: 1 });
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);

  const load = useCallback(async (page = 1) => {
    setLoading(true);
    const res = await fetch(`/api/admin/media?page=${page}`);
    const json = await res.json();
    setMedia(json?.data?.media ?? []);
    setPagination(json?.data?.pagination ?? { page: 1, totalPages: 1 });
    setLoading(false);
  }, []);

  useEffect(() => {
    load(1);
  }, [load]);

  async function handleUpload(event) {
    const files = Array.from(event.target.files ?? []);
    if (files.length === 0) return;
    setUploading(true);
    for (const file of files) {
      try {
        await uploadFile(file);
      } catch (error) {
        alert(error.message || "Upload failed.");
      }
    }
    setUploading(false);
    event.target.value = "";
    load(1);
  }

  async function handleDelete(id) {
    if (!confirm("Delete this media item? This cannot be undone.")) return;
    await fetch(`/api/admin/media/${id}`, { method: "DELETE" });
    load(pagination.page);
  }

  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <label className="cursor-pointer rounded bg-[#f3763a] px-4 py-2 text-sm font-semibold text-white hover:bg-[#e0672d]">
          {uploading ? "Uploading…" : "Upload"}
          <input
            type="file"
            accept="image/*,video/*"
            multiple
            className="hidden"
            onChange={handleUpload}
            disabled={uploading}
          />
        </label>
      </div>

      {loading ? (
        <p className="text-slate-400">Loading…</p>
      ) : media.length === 0 ? (
        <p className="text-slate-400">No media uploaded yet.</p>
      ) : (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 md:grid-cols-6">
          {media.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-lg border border-slate-200 bg-white"
            >
              {item.mime_type?.startsWith("video/") ? (
                <video src={item.url} className="h-28 w-full object-cover" muted />
              ) : (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={item.url}
                  alt={item.alt_text || item.filename}
                  className="h-28 w-full object-cover"
                />
              )}
              <p className="truncate px-2 py-1 text-xs text-slate-500">
                {item.filename}
              </p>
              <div className="absolute inset-0 flex items-center justify-center gap-2 bg-black/50 opacity-0 transition group-hover:opacity-100">
                {selectable && (
                  <button
                    type="button"
                    onClick={() => onSelect?.(item)}
                    className="rounded bg-white px-3 py-1 text-xs font-medium text-slate-800"
                  >
                    Select
                  </button>
                )}
                <button
                  type="button"
                  onClick={() => handleDelete(item.id)}
                  className="rounded bg-red-600 px-3 py-1 text-xs font-medium text-white"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {pagination.totalPages > 1 && (
        <div className="mt-4 flex justify-center gap-2">
          {Array.from({ length: pagination.totalPages }, (_, i) => i + 1).map(
            (p) => (
              <button
                key={p}
                onClick={() => load(p)}
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
