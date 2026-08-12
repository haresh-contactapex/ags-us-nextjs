import { getSessionFromRequest } from "@/lib/auth";
import { getUserById } from "@/lib/users";
import { ok, fail } from "@/lib/apiResponse";

export async function GET(request) {
  const session = getSessionFromRequest(request);
  if (!session) return fail(401, "Unauthorized.");

  try {
    const user = await getUserById(session.id);
    if (!user) return fail(401, "Unauthorized.");
    return ok({ data: { user } });
  } catch (error) {
    console.error("admin/me: failed to load user", error);
    return fail(500, "Something went wrong. Please try again later.");
  }
}
