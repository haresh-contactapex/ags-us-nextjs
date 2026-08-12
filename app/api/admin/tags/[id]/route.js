import { updateTag, deleteTag, isTagSlugTaken } from "@/lib/tags";
import { slugify } from "@/lib/slugify";
import { ok, fail } from "@/lib/apiResponse";

export async function PUT(request, { params }) {
  const { id } = await params;
  const tagId = Number(id);
  if (!Number.isInteger(tagId)) return fail(400, "Invalid tag id.");

  let body;
  try {
    body = await request.json();
  } catch {
    return fail(400, "Invalid request body.");
  }

  const name = String(body?.name ?? "").trim();
  const slug = slugify(body?.slug || name);

  const errors = {};
  if (!name) errors.name = "Name is required.";
  if (!slug) errors.slug = "A valid slug is required.";

  try {
    if (slug && (await isTagSlugTaken(slug, tagId))) {
      errors.slug = "This slug is already in use.";
    }
  } catch (error) {
    console.error("admin/tags/[id]: failed to check slug", error);
    return fail(500, "Something went wrong. Please try again later.");
  }

  if (Object.keys(errors).length > 0) {
    return fail(422, "Please fix the errors below.", errors);
  }

  try {
    const tag = await updateTag(tagId, { name, slug });
    if (!tag) return fail(404, "Tag not found.");
    return ok({ message: "Tag updated.", data: { tag } });
  } catch (error) {
    console.error("admin/tags/[id]: failed to update tag", error);
    return fail(500, "Something went wrong. Please try again later.");
  }
}

export async function DELETE(request, { params }) {
  const { id } = await params;
  const tagId = Number(id);
  if (!Number.isInteger(tagId)) return fail(400, "Invalid tag id.");

  try {
    await deleteTag(tagId);
    return ok({ message: "Tag deleted." });
  } catch (error) {
    console.error("admin/tags/[id]: failed to delete tag", error);
    return fail(500, "Something went wrong. Please try again later.");
  }
}
