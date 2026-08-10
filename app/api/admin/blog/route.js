import { NextResponse } from "next/server";
import {
  createPost,
  isSlugTaken,
  listAllPostsAdmin,
  slugify,
} from "@/lib/blog";
import { sanitizeBlogContent } from "@/lib/sanitizeBlogContent";

export async function GET() {
  try {
    const posts = await listAllPostsAdmin();
    return NextResponse.json({ posts });
  } catch (error) {
    console.error("admin blog list: failed", error);
    return NextResponse.json(
      { message: "Failed to load posts." },
      { status: 500 },
    );
  }
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

  const title = String(body?.title ?? "").trim();
  const content = String(body?.content ?? "").trim();
  const status = body?.status === "published" ? "published" : "draft";

  if (!title) {
    return NextResponse.json(
      { message: "Title is required.", data: { errors: { title: "Title is required." } } },
      { status: 422 },
    );
  }
  if (!content) {
    return NextResponse.json(
      { message: "Content is required.", data: { errors: { content: "Content is required." } } },
      { status: 422 },
    );
  }

  let slug = slugify(body?.slug || title);
  if (!slug) {
    return NextResponse.json(
      { message: "Could not generate a slug from the title.", data: { errors: { slug: "Enter a valid title or slug." } } },
      { status: 422 },
    );
  }

  if (await isSlugTaken(slug)) {
    return NextResponse.json(
      { message: "That slug is already in use.", data: { errors: { slug: "That slug is already in use." } } },
      { status: 409 },
    );
  }

  try {
    const post = await createPost({
      slug,
      title,
      excerpt: String(body?.excerpt ?? "").trim() || null,
      content: sanitizeBlogContent(content),
      cover_image_url: body?.cover_image_url || null,
      status,
      author: String(body?.author ?? "").trim() || null,
    });
    return NextResponse.json({ post }, { status: 201 });
  } catch (error) {
    console.error("admin blog create: failed", error);
    return NextResponse.json(
      { message: "Failed to create post." },
      { status: 500 },
    );
  }
}
