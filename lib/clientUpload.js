import { upload } from "@vercel/blob/client";

function probeImageDimensions(file) {
  if (!file.type.startsWith("image/")) return Promise.resolve(null);
  return new Promise((resolve) => {
    const img = new window.Image();
    img.onload = () =>
      resolve({ width: img.naturalWidth, height: img.naturalHeight });
    img.onerror = () => resolve(null);
    img.src = URL.createObjectURL(file);
  });
}

// Uploads a file directly to Vercel Blob (via a scoped token from
// /api/admin/media), then records its metadata in Postgres via
// /api/admin/media/confirm.
export async function uploadFile(file, { altText } = {}) {
  const blob = await upload(file.name, file, {
    access: "public",
    handleUploadUrl: "/api/admin/media",
  });

  const dimensions = await probeImageDimensions(file);

  const res = await fetch("/api/admin/media/confirm", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      url: blob.url,
      pathname: blob.pathname,
      filename: file.name,
      mimeType: file.type,
      sizeBytes: file.size,
      width: dimensions?.width,
      height: dimensions?.height,
      altText: altText ?? "",
    }),
  });
  const json = await res.json();
  if (!res.ok) {
    throw new Error(json.message || "Upload failed.");
  }
  return json.data.media;
}
