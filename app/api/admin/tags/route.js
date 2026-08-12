import { listTags, createTag, isTagSlugTaken } from "@/lib/tags";
import { slugify } from "@/lib/slugify";
import { ok, fail } from "@/lib/apiResponse";

export async function GET() {
  try {
    const tags = await listTags();
    return ok({ data: { tags } });
  } catch (error) {
    console.error("admin/tags: failed to list tags", error);
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
  const slug = slugify(body?.slug || name);

  const errors = {};
  if (!name) errors.name = "Name is required.";
  if (!slug) errors.slug = "A valid slug is required.";

  try {
    if (slug && (await isTagSlugTaken(slug))) {
      errors.slug = "This slug is already in use.";
    }
  } catch (error) {
    console.error("admin/tags: failed to check slug", error);
    return fail(500, "Something went wrong. Please try again later.");
  }

  if (Object.keys(errors).length > 0) {
    return fail(422, "Please fix the errors below.", errors);
  }

  try {
    const tag = await createTag({ name, slug });
    return ok({ message: "Tag created.", data: { tag } }, 201);
  } catch (error) {
    console.error("admin/tags: failed to create tag", error);
    return fail(500, "Something went wrong. Please try again later.");
  }
}
