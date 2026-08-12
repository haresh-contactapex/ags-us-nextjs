import { getSessionFromRequest } from "@/lib/auth";
import { createMedia } from "@/lib/media";
import { ok, fail } from "@/lib/apiResponse";

export async function POST(request) {
  const session = getSessionFromRequest(request);
  if (!session) return fail(401, "Unauthorized.");

  let body;
  try {
    body = await request.json();
  } catch {
    return fail(400, "Invalid request body.");
  }

  const url = String(body?.url ?? "").trim();
  const pathname = String(body?.pathname ?? "").trim();
  const filename = String(body?.filename ?? pathname.split("/").pop() ?? "");
  const mimeType = String(body?.mimeType ?? "");
  const sizeBytes = Number(body?.sizeBytes) || 0;
  const width = Number.isInteger(Number(body?.width)) ? Number(body.width) : null;
  const height = Number.isInteger(Number(body?.height))
    ? Number(body.height)
    : null;
  const altText = String(body?.altText ?? "").trim();

  if (!url || !pathname) {
    return fail(422, "Please fix the errors below.", {
      url: "Missing uploaded file information.",
    });
  }

  try {
    const media = await createMedia({
      url,
      pathname,
      filename,
      mimeType,
      sizeBytes,
      width,
      height,
      altText,
      uploadedBy: session.id,
    });
    return ok({ message: "Media saved.", data: { media } }, 201);
  } catch (error) {
    console.error("admin/media/confirm: failed to save media", error);
    return fail(500, "Something went wrong. Please try again later.");
  }
}
