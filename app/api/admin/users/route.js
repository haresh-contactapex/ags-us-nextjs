import { getSessionFromRequest } from "@/lib/auth";
import { listUsers, createUser, isEmailTaken } from "@/lib/users";
import { ok, fail } from "@/lib/apiResponse";

const ROLES = ["admin", "editor"];

export async function GET(request) {
  const session = getSessionFromRequest(request);
  if (session?.role !== "admin") return fail(403, "Forbidden.");

  try {
    const users = await listUsers();
    return ok({ data: { users } });
  } catch (error) {
    console.error("admin/users: failed to list users", error);
    return fail(500, "Something went wrong. Please try again later.");
  }
}

export async function POST(request) {
  const session = getSessionFromRequest(request);
  if (session?.role !== "admin") return fail(403, "Forbidden.");

  let body;
  try {
    body = await request.json();
  } catch {
    return fail(400, "Invalid request body.");
  }

  const name = String(body?.name ?? "").trim();
  const email = String(body?.email ?? "").trim().toLowerCase();
  const password = String(body?.password ?? "");
  const role = ROLES.includes(body?.role) ? body.role : "editor";

  const errors = {};
  if (!name) errors.name = "Name is required.";
  if (!email) errors.email = "Email is required.";
  if (!password || password.length < 8) {
    errors.password = "Password must be at least 8 characters.";
  }

  try {
    if (email && (await isEmailTaken(email))) {
      errors.email = "This email is already in use.";
    }
  } catch (error) {
    console.error("admin/users: failed to check email", error);
    return fail(500, "Something went wrong. Please try again later.");
  }

  if (Object.keys(errors).length > 0) {
    return fail(422, "Please fix the errors below.", errors);
  }

  try {
    const user = await createUser({ name, email, password, role });
    return ok({ message: "User created.", data: { user } }, 201);
  } catch (error) {
    console.error("admin/users: failed to create user", error);
    return fail(500, "Something went wrong. Please try again later.");
  }
}
