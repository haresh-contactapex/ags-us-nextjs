"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import axios from "axios";

export default function AdminNav() {
  const pathname = usePathname();
  const router = useRouter();

  if (pathname === "/admin/login") return null;

  const handleLogout = async () => {
    await axios.post("/api/admin/logout");
    router.push("/admin/login");
  };

  return (
    <div className="flex items-center justify-between border-b border-gray-200 bg-white px-6 py-4">
      <div className="flex gap-6 text-sm font-semibold">
        <Link href="/admin/blog" className="text-[#333] hover:text-[#f3763a]">
          Blog Posts
        </Link>
        <Link
          href="/admin/blog/new"
          className="text-[#333] hover:text-[#f3763a]"
        >
          New Post
        </Link>
      </div>
      <button
        onClick={handleLogout}
        className="text-sm font-semibold text-[#333] hover:text-[#f3763a]"
      >
        Log out
      </button>
    </div>
  );
}
