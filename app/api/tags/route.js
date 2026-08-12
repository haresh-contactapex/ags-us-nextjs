import { listTags } from "@/lib/tags";
import { ok, fail } from "@/lib/apiResponse";

export const revalidate = 300;

export async function GET() {
  try {
    const tags = await listTags();
    return ok({ data: { tags } });
  } catch (error) {
    console.error("tags: failed to list tags", error);
    return fail(500, "Something went wrong. Please try again later.");
  }
}
