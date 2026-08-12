import {
  updateCategory,
  deleteCategory,
  isCategorySlugTaken,
} from "@/lib/categories";
import { slugify } from "@/lib/slugify";
import { ok, fail } from "@/lib/apiResponse";

export async function PUT(request, { params }) {
  const { id } = await params;
  const categoryId = Number(id);
  if (!Number.isInteger(categoryId)) return fail(400, "Invalid category id.");

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
    if (slug && (await isCategorySlugTaken(slug, categoryId))) {
      errors.slug = "This slug is already in use.";
    }
  } catch (error) {
    console.error("admin/categories/[id]: failed to check slug", error);
    return fail(500, "Something went wrong. Please try again later.");
  }

  if (Object.keys(errors).length > 0) {
    return fail(422, "Please fix the errors below.", errors);
  }

  try {
    const category = await updateCategory(categoryId, {
      name,
      slug,
      description,
    });
    if (!category) return fail(404, "Category not found.");
    return ok({ message: "Category updated.", data: { category } });
  } catch (error) {
    console.error("admin/categories/[id]: failed to update category", error);
    return fail(500, "Something went wrong. Please try again later.");
  }
}

export async function DELETE(request, { params }) {
  const { id } = await params;
  const categoryId = Number(id);
  if (!Number.isInteger(categoryId)) return fail(400, "Invalid category id.");

  try {
    await deleteCategory(categoryId);
    return ok({ message: "Category deleted." });
  } catch (error) {
    console.error("admin/categories/[id]: failed to delete category", error);
    return fail(500, "Something went wrong. Please try again later.");
  }
}
