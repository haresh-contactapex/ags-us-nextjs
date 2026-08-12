"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const NAV_ITEMS = [
  { href: "/admin", label: "Dashboard" },
  { href: "/admin/posts", label: "Posts" },
  { href: "/admin/categories", label: "Categories" },
  { href: "/admin/tags", label: "Tags" },
  { href: "/admin/media", label: "Media" },
  { href: "/admin/users", label: "Users", adminOnly: true },
];

export default function AdminNav({ user }) {
  const pathname = usePathname();
  const router = useRouter();

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  }

  return (
    <aside className="flex w-64 shrink-0 flex-col bg-[#06283c] text-white">
      <div className="border-b border-white/10 px-6 py-5">
        <p className="text-lg font-semibold">Blog Admin</p>
        <p className="mt-1 truncate text-sm text-white/60">{user?.name}</p>
        <p className="text-xs uppercase tracking-wide text-white/40">
          {user?.role}
        </p>
      </div>
      <nav className="flex-1 space-y-1 px-3 py-4">
        {NAV_ITEMS.filter(
          (item) => !item.adminOnly || user?.role === "admin",
        ).map((item) => {
          const active =
            pathname === item.href ||
            (item.href !== "/admin" && pathname.startsWith(item.href));
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`block rounded px-3 py-2 text-sm font-medium transition ${
                active
                  ? "bg-white/10 text-white"
                  : "text-white/70 hover:bg-white/5 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
      <div className="border-t border-white/10 px-3 py-4">
        <Link
          href="/"
          className="block rounded px-3 py-2 text-sm font-medium text-white/70 hover:bg-white/5 hover:text-white"
        >
          View site
        </Link>
        <button
          onClick={handleLogout}
          className="block w-full rounded px-3 py-2 text-left text-sm font-medium text-white/70 hover:bg-white/5 hover:text-white"
        >
          Log out
        </button>
      </div>
    </aside>
  );
}
