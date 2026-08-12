import { handleUpload } from "@vercel/blob/client";
import { listMedia, countMedia, MEDIA_PAGE_SIZE } from "@/lib/media";
import { ok, fail } from "@/lib/apiResponse";

const ALLOWED_CONTENT_TYPES = [
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/gif",
  "video/mp4",
  "video/webm",
];

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const page = Math.max(1, Number(searchParams.get("page")) || 1);

  try {
    const [media, total] = await Promise.all([
      listMedia({ page }),
      countMedia(),
    ]);
    return ok({
      data: {
        media,
        pagination: {
          page,
          pageSize: MEDIA_PAGE_SIZE,
          total,
          totalPages: Math.max(1, Math.ceil(total / MEDIA_PAGE_SIZE)),
        },
      },
    });
  } catch (error) {
    console.error("admin/media: failed to list media", error);
    return fail(500, "Something went wrong. Please try again later.");
  }
}

// Issues a short-lived, scoped upload token for the client to upload
// directly to Vercel Blob. The DB row is created separately via
// /api/admin/media/confirm once the client-side upload finishes, since
// Vercel's onUploadCompleted webhook can't reach a local dev server.
export async function POST(request) {
  const body = await request.json();

  try {
    const jsonResponse = await handleUpload({
      body,
      request,
      onBeforeGenerateToken: async () => ({
        allowedContentTypes: ALLOWED_CONTENT_TYPES,
        maximumSizeInBytes: 20 * 1024 * 1024,
        addRandomSuffix: true,
      }),
      onUploadCompleted: async () => {},
    });
    return ok(jsonResponse);
  } catch (error) {
    console.error("admin/media: upload token generation failed", error);
    return fail(400, error.message || "Upload failed.");
  }
}
