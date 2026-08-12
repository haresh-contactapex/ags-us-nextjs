import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { SESSION_COOKIE, verifySessionToken } from "@/lib/auth";
import { getUserById } from "@/lib/users";
import AdminNav from "@/components/admin/AdminNav";

export default async function DashboardLayout({ children }) {
  const cookieStore = await cookies();
  const token = cookieStore.get(SESSION_COOKIE)?.value;
  const session = token ? await verifySessionToken(token) : null;

  // proxy.js already gates /admin/* — this redirect only covers the edge
  // case of a session that expired between the proxy check and render.
  if (!session) {
    redirect("/admin/login");
  }

  const user = await getUserById(session.id);

  return (
    <div className="flex min-h-screen">
      <AdminNav user={user} />
      <main className="flex-1 p-6 md:p-8">{children}</main>
    </div>
  );
}
