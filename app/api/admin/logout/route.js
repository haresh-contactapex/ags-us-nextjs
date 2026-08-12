import { ok } from "@/lib/apiResponse";
import { SESSION_COOKIE } from "@/lib/auth";

export async function POST() {
  const response = ok({ message: "Logged out." });
  response.cookies.delete(SESSION_COOKIE);
  return response;
}
