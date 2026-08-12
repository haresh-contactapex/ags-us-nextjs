"use client";

import { useCallback, useEffect, useState } from "react";

const ROLES = ["editor", "admin"];

export default function UsersManager({ currentUserId }) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "editor",
  });
  const [editingId, setEditingId] = useState(null);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const load = useCallback(async () => {
    setLoading(true);
    const res = await fetch("/api/admin/users");
    const json = await res.json();
    setUsers(json?.data?.users ?? []);
    setLoading(false);
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  function resetForm() {
    setForm({ name: "", email: "", password: "", role: "editor" });
    setEditingId(null);
    setErrors({});
  }

  function startEdit(user) {
    setEditingId(user.id);
    setForm({ name: user.name, email: user.email, password: "", role: user.role });
    setErrors({});
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setSubmitting(true);
    setErrors({});

    const payload = editingId
      ? {
          name: form.name,
          email: form.email,
          role: form.role,
          isActive: true,
          password: form.password || undefined,
        }
      : form;

    const url = editingId ? `/api/admin/users/${editingId}` : "/api/admin/users";
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
    if (!confirm("Delete this user?")) return;
    const res = await fetch(`/api/admin/users/${id}`, { method: "DELETE" });
    const json = await res.json();
    if (!res.ok) {
      alert(json.message);
      return;
    }
    load();
  }

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
      <form
        onSubmit={handleSubmit}
        className="space-y-3 rounded-lg bg-white p-5 shadow-sm"
      >
        <h2 className="text-sm font-semibold text-slate-700">
          {editingId ? "Edit user" : "Add user"}
        </h2>
        <input
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          placeholder="Name"
          className="w-full rounded border border-slate-300 px-3 py-2 text-sm"
        />
        {errors.name && <p className="text-xs text-red-600">{errors.name}</p>}
        <input
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          placeholder="Email"
          className="w-full rounded border border-slate-300 px-3 py-2 text-sm"
        />
        {errors.email && <p className="text-xs text-red-600">{errors.email}</p>}
        <input
          type="password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          placeholder={editingId ? "New password (optional)" : "Password"}
          className="w-full rounded border border-slate-300 px-3 py-2 text-sm"
        />
        {errors.password && (
          <p className="text-xs text-red-600">{errors.password}</p>
        )}
        <select
          value={form.role}
          onChange={(e) => setForm({ ...form, role: e.target.value })}
          className="w-full rounded border border-slate-300 px-3 py-2 text-sm"
        >
          {ROLES.map((role) => (
            <option key={role} value={role}>
              {role}
            </option>
          ))}
        </select>
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
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Role</th>
              <th className="px-4 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={4} className="px-4 py-6 text-center text-slate-400">
                  Loading…
                </td>
              </tr>
            ) : (
              users.map((user) => (
                <tr key={user.id} className="border-t border-slate-100">
                  <td className="px-4 py-3 font-medium text-slate-800">
                    {user.name}
                  </td>
                  <td className="px-4 py-3 text-slate-500">{user.email}</td>
                  <td className="px-4 py-3 text-slate-500">{user.role}</td>
                  <td className="space-x-3 px-4 py-3 text-right">
                    <button
                      onClick={() => startEdit(user)}
                      className="text-sm font-medium text-[#06283c] hover:underline"
                    >
                      Edit
                    </button>
                    {user.id !== currentUserId && (
                      <button
                        onClick={() => handleDelete(user.id)}
                        className="text-sm font-medium text-red-600 hover:underline"
                      >
                        Delete
                      </button>
                    )}
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
