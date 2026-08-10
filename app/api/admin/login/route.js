import { timingSafeEqual } from "node:crypto";
import { NextResponse } from "next/server";
import { SESSION_COOKIE, createSessionToken } from "@/lib/adminAuth";

function safeCompare(a, b) {
  const bufA = Buffer.from(String(a));
  const bufB = Buffer.from(String(b));
  if (bufA.length !== bufB.length) return false;
  return timingSafeEqual(bufA, bufB);
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { message: "Invalid request body." },
      { status: 400 },
    );
  }

  const password = typeof body?.password === "string" ? body.password : "";
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!adminPassword) {
    console.error("admin login: ADMIN_PASSWORD is not set");
    return NextResponse.json(
      { message: "Admin login is not configured." },
      { status: 500 },
    );
  }

  if (!password || !safeCompare(password, adminPassword)) {
    return NextResponse.json(
      { message: "Incorrect password." },
      { status: 401 },
    );
  }

  const token = await createSessionToken();
  const response = NextResponse.json({ message: "Logged in." });
  response.cookies.set(SESSION_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 8 * 60 * 60,
  });

  return response;
}
