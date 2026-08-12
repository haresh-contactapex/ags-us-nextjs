import { SignJWT, jwtVerify } from "jose";

// Kept free of bcryptjs (see lib/password.js) so this module stays light
// enough to import from proxy.js, which runs on every /admin request.
export const SESSION_COOKIE = "admin_session";

function getSecretKey() {
  const secret = process.env.ADMIN_SESSION_SECRET;
  if (!secret) {
    throw new Error("ADMIN_SESSION_SECRET is not set");
  }
  return new TextEncoder().encode(secret);
}

export async function createSessionToken({ id, role }) {
  return new SignJWT({ role })
    .setProtectedHeader({ alg: "HS256" })
    .setSubject(String(id))
    .setIssuedAt()
    .setExpirationTime("8h")
    .sign(getSecretKey());
}

export async function verifySessionToken(token) {
  try {
    const { payload } = await jwtVerify(token, getSecretKey());
    if (payload.role !== "admin" && payload.role !== "editor") {
      return null;
    }
    return { id: Number(payload.sub), role: payload.role };
  } catch {
    return null;
  }
}

// Reads the identity proxy.js attached to the request headers after
// verifying the session cookie, so route handlers don't re-verify the JWT.
export function getSessionFromRequest(request) {
  const id = request.headers.get("x-user-id");
  const role = request.headers.get("x-user-role");
  if (!id || !role) return null;
  return { id: Number(id), role };
}
