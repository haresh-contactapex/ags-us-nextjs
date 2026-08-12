"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    setSubmitting(true);
    setErrors({});
    setFormError("");

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const json = await res.json();
      if (!res.ok) {
        setErrors(json?.data?.errors ?? {});
        setFormError(json.message || "Login failed.");
        return;
      }
      router.push("/admin");
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
      className="w-full max-w-sm rounded-lg bg-white p-8 shadow-md"
    >
      <h1 className="mb-6 text-xl font-semibold text-[#06283c]">Admin Login</h1>
      {formError && (
        <p className="mb-4 rounded bg-red-50 px-3 py-2 text-sm text-red-600">
          {formError}
        </p>
      )}

      <label className="mb-1 block text-sm font-medium text-slate-700">
        Email
      </label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="mb-1 w-full rounded border border-slate-300 px-3 py-2 text-sm focus:border-[#f3763a] focus:outline-none"
      />
      {errors.email && (
        <p className="mb-3 text-xs text-red-600">{errors.email}</p>
      )}

      <label className="mb-1 block text-sm font-medium text-slate-700">
        Password
      </label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="mb-1 w-full rounded border border-slate-300 px-3 py-2 text-sm focus:border-[#f3763a] focus:outline-none"
      />
      {errors.password && (
        <p className="mb-3 text-xs text-red-600">{errors.password}</p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="mt-4 w-full rounded bg-[#f3763a] px-4 py-2 text-sm font-semibold text-white hover:bg-[#e0672d] disabled:opacity-60"
      >
        {submitting ? "Logging in…" : "Log in"}
      </button>
    </form>
  );
}
