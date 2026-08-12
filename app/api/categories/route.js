import { listCategories } from "@/lib/categories";
import { ok, fail } from "@/lib/apiResponse";

export const revalidate = 300;

export async function GET() {
  try {
    const categories = await listCategories();
    return ok({ data: { categories } });
  } catch (error) {
    console.error("categories: failed to list categories", error);
    return fail(500, "Something went wrong. Please try again later.");
  }
}
