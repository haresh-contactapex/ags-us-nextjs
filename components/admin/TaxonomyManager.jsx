"use client";

import { useCallback, useEffect, useState } from "react";

export default function TaxonomyManager({ resource, hasDescription = false }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const load = useCallback(async () => {
    setLoading(true);
    const res = await fetch(`/api/admin/${resource}`);
    const json = await res.json();
    setItems(json?.data?.[resource] ?? []);
    setLoading(false);
  }, [resource]);

  useEffect(() => {
    load();
  }, [load]);

  function resetForm() {
    setName("");
    setDescription("");
    setEditingId(null);
    setErrors({});
  }

  function startEdit(item) {
    setEditingId(item.id);
    setName(item.name);
    setDescription(item.description ?? "");
    setErrors({});
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setSubmitting(true);
    setErrors({});

    const payload = hasDescription ? { name, description } : { name };
    const url = editingId
      ? `/api/admin/${resource}/${editingId}`
      : `/api/admin/${resource}`;
    const method = editingId ? "PUT" : "POST";

    try {
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (!res.ok) {
        setErrors(json?.data?.errors ?? {});
        return;
      }
      resetForm();
      load();
    } finally {
      setSubmitting(false);
    }
  }

  async function handleDelete(id) {
    if (!confirm("Delete this item?")) return;
    await fetch(`/api/admin/${resource}/${id}`, { method: "DELETE" });
    load();
  }

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
      <form
        onSubmit={handleSubmit}
        className="space-y-3 rounded-lg bg-white p-5 shadow-sm lg:col-span-1"
      >
        <h2 className="text-sm font-semibold text-slate-700">
          {editingId ? "Edit" : "Add new"}
        </h2>
        <div>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            className="w-full rounded border border-slate-300 px-3 py-2 text-sm"
          />
          {errors.name && (
            <p className="mt-1 text-xs text-red-600">{errors.name}</p>
          )}
        </div>
        {hasDescription && (
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description (optional)"
            rows={2}
            className="w-full rounded border border-slate-300 px-3 py-2 text-sm"
          />
        )}
        {errors.slug && <p className="text-xs text-red-600">{errors.slug}</p>}
        <div className="flex gap-2">
          <button
            type="submit"
            disabled={submitting}
            className="rounded bg-[#f3763a] px-4 py-2 text-sm font-semibold text-white hover:bg-[#e0672d] disabled:opacity-60"
          >
            {editingId ? "Save" : "Add"}
          </button>
          {editingId && (
            <button
              type="button"
              onClick={resetForm}
              className="rounded border border-slate-300 px-4 py-2 text-sm"
            >
              Cancel
            </button>
          )}
        </div>
      </form>

      <div className="overflow-hidden rounded-lg bg-white shadow-sm lg:col-span-2">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-50 text-slate-500">
            <tr>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Slug</th>
              <th className="px-4 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={3} className="px-4 py-6 text-center text-slate-400">
                  Loading…
                </td>
              </tr>
            ) : items.length === 0 ? (
              <tr>
                <td colSpan={3} className="px-4 py-6 text-center text-slate-400">
                  Nothing here yet.
                </td>
              </tr>
            ) : (
              items.map((item) => (
                <tr key={item.id} className="border-t border-slate-100">
                  <td className="px-4 py-3 font-medium text-slate-800">
                    {item.name}
                  </td>
                  <td className="px-4 py-3 text-slate-500">{item.slug}</td>
                  <td className="space-x-3 px-4 py-3 text-right">
                    <button
                      onClick={() => startEdit(item)}
                      className="text-sm font-medium text-[#06283c] hover:underline"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(item.id)}
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
    </div>
  );
}
