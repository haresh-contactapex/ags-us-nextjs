import { deleteMedia } from "@/lib/media";
import { ok, fail } from "@/lib/apiResponse";

export async function DELETE(request, { params }) {
  const { id } = await params;
  const mediaId = Number(id);
  if (!Number.isInteger(mediaId)) return fail(400, "Invalid media id.");

  try {
    await deleteMedia(mediaId);
    return ok({ message: "Media deleted." });
  } catch (error) {
    console.error("admin/media/[id]: failed to delete media", error);
    return fail(500, "Something went wrong. Please try again later.");
  }
}
