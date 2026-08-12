import { getPublicPostBySlug } from "@/lib/posts";
import { ok, fail } from "@/lib/apiResponse";

export const revalidate = 60;

export async function GET(request, { params }) {
  const { slug } = await params;

  try {
    const post = await getPublicPostBySlug(slug);
    if (!post) return fail(404, "Post not found.");
    return ok({ data: { post } });
  } catch (error) {
    console.error("posts/[slug]: failed to load post", error);
    return fail(500, "Something went wrong. Please try again later.");
  }
}
