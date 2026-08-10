import { NextResponse } from "next/server";
import {
  deletePost,
  getPostById,
  isSlugTaken,
  slugify,
  updatePost,
} from "@/lib/blog";
import { sanitizeBlogContent } from "@/lib/sanitizeBlogContent";

export async function GET(request, { params }) {
  const { id } = await params;
  const post = await getPostById(Number(id));
  if (!post) {
    return NextResponse.json({ message: "Not found." }, { status: 404 });
  }
  return NextResponse.json({ post });
}

export async function PUT(request, { params }) {
  const { id } = await params;
  const postId = Number(id);

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

  const slug = slugify(body?.slug || title);
  if (!slug) {
    return NextResponse.json(
      { message: "Could not generate a slug from the title.", data: { errors: { slug: "Enter a valid title or slug." } } },
      { status: 422 },
    );
  }

  if (await isSlugTaken(slug, postId)) {
    return NextResponse.json(
      { message: "That slug is already in use.", data: { errors: { slug: "That slug is already in use." } } },
      { status: 409 },
    );
  }

  try {
    const post = await updatePost(postId, {
      slug,
      title,
      excerpt: String(body?.excerpt ?? "").trim() || null,
      content: sanitizeBlogContent(content),
      cover_image_url: body?.cover_image_url || null,
      status,
      author: String(body?.author ?? "").trim() || null,
    });
    if (!post) {
      return NextResponse.json({ message: "Not found." }, { status: 404 });
    }
    return NextResponse.json({ post });
  } catch (error) {
    console.error("admin blog update: failed", error);
    return NextResponse.json(
      { message: "Failed to update post." },
      { status: 500 },
    );
  }
}

export async function DELETE(request, { params }) {
  const { id } = await params;
  try {
    const deleted = await deletePost(Number(id));
    if (!deleted) {
      return NextResponse.json({ message: "Not found." }, { status: 404 });
    }
    return NextResponse.json({ message: "Deleted." });
  } catch (error) {
    console.error("admin blog delete: failed", error);
    return NextResponse.json(
      { message: "Failed to delete post." },
      { status: 500 },
    );
  }
}
