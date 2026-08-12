import { getUserByEmail } from "@/lib/users";
import { verifyPassword } from "@/lib/password";
import { createSessionToken, SESSION_COOKIE } from "@/lib/auth";
import { ok, fail } from "@/lib/apiResponse";

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return fail(400, "Invalid request body.");
  }

  const email = String(body?.email ?? "").trim().toLowerCase();
  const password = String(body?.password ?? "");

  if (!email || !password) {
    return fail(422, "Please fix the errors below.", {
      ...(!email && { email: "Email is required." }),
      ...(!password && { password: "Password is required." }),
    });
  }

  let user;
  try {
    user = await getUserByEmail(email);
  } catch (error) {
    console.error("admin/login: failed to look up user", error);
    return fail(500, "Something went wrong. Please try again later.");
  }

  if (!user || !user.is_active) {
    return fail(401, "Invalid email or password.");
  }

  const passwordOk = await verifyPassword(password, user.password_hash);
  if (!passwordOk) {
    return fail(401, "Invalid email or password.");
  }

  const token = await createSessionToken({ id: user.id, role: user.role });

  const response = ok({
    message: "Logged in successfully.",
    data: {
      user: { id: user.id, name: user.name, email: user.email, role: user.role },
    },
  });
  response.cookies.set(SESSION_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 8 * 60 * 60,
  });
  return response;
}
