import {
  listCategories,
  createCategory,
  isCategorySlugTaken,
} from "@/lib/categories";
import { slugify } from "@/lib/slugify";
import { ok, fail } from "@/lib/apiResponse";

export async function GET() {
  try {
    const categories = await listCategories();
    return ok({ data: { categories } });
  } catch (error) {
    console.error("admin/categories: failed to list categories", error);
    return fail(500, "Something went wrong. Please try again later.");
  }
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return fail(400, "Invalid request body.");
  }

  const name = String(body?.name ?? "").trim();
  const description = String(body?.description ?? "").trim();
  const slug = slugify(body?.slug || name);

  const errors = {};
  if (!name) errors.name = "Name is required.";
  if (!slug) errors.slug = "A valid slug is required.";

  try {
    if (slug && (await isCategorySlugTaken(slug))) {
      errors.slug = "This slug is already in use.";
    }
  } catch (error) {
    console.error("admin/categories: failed to check slug", error);
    return fail(500, "Something went wrong. Please try again later.");
  }

  if (Object.keys(errors).length > 0) {
    return fail(422, "Please fix the errors below.", errors);
  }

  try {
    const category = await createCategory({ name, slug, description });
    return ok({ message: "Category created.", data: { category } }, 201);
  } catch (error) {
    console.error("admin/categories: failed to create category", error);
    return fail(500, "Something went wrong. Please try again later.");
  }
}
