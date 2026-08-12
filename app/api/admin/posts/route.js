import { getSessionFromRequest } from "@/lib/auth";
import {
  listAdminPosts,
  countAdminPosts,
  createPost,
  isSlugTaken,
  ADMIN_PAGE_SIZE,
} from "@/lib/posts";
import { validatePostInput } from "@/lib/validatePost";
import { sanitizeContent } from "@/lib/sanitizeContent";
import { ok, fail } from "@/lib/apiResponse";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const page = Math.max(1, Number(searchParams.get("page")) || 1);
  const status = searchParams.get("status") || null;

  try {
    const [posts, total] = await Promise.all([
      listAdminPosts({ page, status }),
      countAdminPosts({ status }),
    ]);
    return ok({
      data: {
        posts,
        pagination: {
          page,
          pageSize: ADMIN_PAGE_SIZE,
          total,
          totalPages: Math.max(1, Math.ceil(total / ADMIN_PAGE_SIZE)),
        },
      },
    });
  } catch (error) {
    console.error("admin/posts: failed to list posts", error);
    return fail(500, "Something went wrong. Please try again later.");
  }
}

export async function POST(request) {
  const session = getSessionFromRequest(request);
  if (!session) return fail(401, "Unauthorized.");

  let body;
  try {
    body = await request.json();
  } catch {
    return fail(400, "Invalid request body.");
  }

  const { data, errors } = validatePostInput(body);

  try {
    if (data.slug && (await isSlugTaken(data.slug))) {
      errors.slug = "This slug is already in use.";
    }
  } catch (error) {
    console.error("admin/posts: failed to check slug", error);
    return fail(500, "Something went wrong. Please try again later.");
  }

  if (Object.keys(errors).length > 0) {
    return fail(422, "Please fix the errors below.", errors);
  }

  try {
    const postId = await createPost({
      ...data,
      content: sanitizeContent(data.content),
      authorId: session.id,
    });
    return ok({ message: "Post created.", data: { id: postId } }, 201);
  } catch (error) {
    console.error("admin/posts: failed to create post", error);
    return fail(500, "Something went wrong. Please try again later.");
  }
}
