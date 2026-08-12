import {
  listPublicPosts,
  countPublicPosts,
  PUBLIC_PAGE_SIZE,
} from "@/lib/posts";
import { ok, fail } from "@/lib/apiResponse";

export const revalidate = 60;

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const page = Math.max(1, Number(searchParams.get("page")) || 1);
  const categorySlug = searchParams.get("category") || null;
  const tagSlug = searchParams.get("tag") || null;

  try {
    const [posts, total] = await Promise.all([
      listPublicPosts({ page, categorySlug, tagSlug }),
      countPublicPosts({ categorySlug, tagSlug }),
    ]);
    return ok({
      data: {
        posts,
        pagination: {
          page,
          pageSize: PUBLIC_PAGE_SIZE,
          total,
          totalPages: Math.max(1, Math.ceil(total / PUBLIC_PAGE_SIZE)),
        },
      },
    });
  } catch (error) {
    console.error("posts: failed to list posts", error);
    return fail(500, "Something went wrong. Please try again later.");
  }
}
