import { getSessionFromRequest } from "@/lib/auth";
import { updateUser, deleteUser, isEmailTaken } from "@/lib/users";
import { ok, fail } from "@/lib/apiResponse";

const ROLES = ["admin", "editor"];

export async function PUT(request, { params }) {
  const session = getSessionFromRequest(request);
  if (session?.role !== "admin") return fail(403, "Forbidden.");

  const { id } = await params;
  const userId = Number(id);
  if (!Number.isInteger(userId)) return fail(400, "Invalid user id.");

  let body;
  try {
    body = await request.json();
  } catch {
    return fail(400, "Invalid request body.");
  }

  const name = String(body?.name ?? "").trim();
  const email = String(body?.email ?? "").trim().toLowerCase();
  const role = ROLES.includes(body?.role) ? body.role : "editor";
  const isActive = Boolean(body?.isActive ?? true);
  const password = body?.password ? String(body.password) : null;

  const errors = {};
  if (!name) errors.name = "Name is required.";
  if (!email) errors.email = "Email is required.";
  if (password && password.length < 8) {
    errors.password = "Password must be at least 8 characters.";
  }

  try {
    if (email && (await isEmailTaken(email, userId))) {
      errors.email = "This email is already in use.";
    }
  } catch (error) {
    console.error("admin/users/[id]: failed to check email", error);
    return fail(500, "Something went wrong. Please try again later.");
  }

  if (Object.keys(errors).length > 0) {
    return fail(422, "Please fix the errors below.", errors);
  }

  try {
    const user = await updateUser(userId, {
      name,
      email,
      role,
      isActive,
      password,
    });
    if (!user) return fail(404, "User not found.");
    return ok({ message: "User updated.", data: { user } });
  } catch (error) {
    console.error("admin/users/[id]: failed to update user", error);
    return fail(500, "Something went wrong. Please try again later.");
  }
}

export async function DELETE(request, { params }) {
  const session = getSessionFromRequest(request);
  if (session?.role !== "admin") return fail(403, "Forbidden.");

  const { id } = await params;
  const userId = Number(id);
  if (!Number.isInteger(userId)) return fail(400, "Invalid user id.");

  if (userId === session.id) {
    return fail(400, "You cannot delete your own account.");
  }

  try {
    await deleteUser(userId);
    return ok({ message: "User deleted." });
  } catch (error) {
    console.error("admin/users/[id]: failed to delete user", error);
    return fail(500, "Something went wrong. Please try again later.");
  }
}
