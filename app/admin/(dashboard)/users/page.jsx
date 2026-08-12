import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { SESSION_COOKIE, verifySessionToken } from "@/lib/auth";
import UsersManager from "@/components/admin/UsersManager";

export const metadata = { title: "Users" };

export default async function AdminUsersPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get(SESSION_COOKIE)?.value;
  const session = token ? await verifySessionToken(token) : null;

  if (session?.role !== "admin") {
    redirect("/admin");
  }

  return (
    <div>
      <h1 className="mb-6 text-2xl font-semibold text-[#06283c]">Users</h1>
      <UsersManager currentUserId={session.id} />
    </div>
  );
}
