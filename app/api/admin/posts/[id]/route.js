import { getPostById, updatePost, deletePost, isSlugTaken } from "@/lib/posts";
import { validatePostInput } from "@/lib/validatePost";
import { sanitizeContent } from "@/lib/sanitizeContent";
import { ok, fail } from "@/lib/apiResponse";

export async function GET(request, { params }) {
  const { id } = await params;
  const postId = Number(id);
  if (!Number.isInteger(postId)) return fail(400, "Invalid post id.");

  try {
    const post = await getPostById(postId);
    if (!post) return fail(404, "Post not found.");
    return ok({ data: { post } });
  } catch (error) {
    console.error("admin/posts/[id]: failed to load post", error);
    return fail(500, "Something went wrong. Please try again later.");
  }
}

export async function PUT(request, { params }) {
  const { id } = await params;
  const postId = Number(id);
  if (!Number.isInteger(postId)) return fail(400, "Invalid post id.");

  let body;
  try {
    body = await request.json();
  } catch {
    return fail(400, "Invalid request body.");
  }

  const { data, errors } = validatePostInput(body);

  try {
    if (data.slug && (await isSlugTaken(data.slug, postId))) {
      errors.slug = "This slug is already in use.";
    }
  } catch (error) {
    console.error("admin/posts/[id]: failed to check slug", error);
    return fail(500, "Something went wrong. Please try again later.");
  }

  if (Object.keys(errors).length > 0) {
    return fail(422, "Please fix the errors below.", errors);
  }

  try {
    await updatePost(postId, {
      ...data,
      content: sanitizeContent(data.content),
    });
    return ok({ message: "Post updated." });
  } catch (error) {
    console.error("admin/posts/[id]: failed to update post", error);
    return fail(500, "Something went wrong. Please try again later.");
  }
}

export async function DELETE(request, { params }) {
  const { id } = await params;
  const postId = Number(id);
  if (!Number.isInteger(postId)) return fail(400, "Invalid post id.");

  try {
    await deletePost(postId);
    return ok({ message: "Post deleted." });
  } catch (error) {
    console.error("admin/posts/[id]: failed to delete post", error);
    return fail(500, "Something went wrong. Please try again later.");
  }
}
