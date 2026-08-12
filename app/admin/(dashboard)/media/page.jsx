import MediaLibrary from "@/components/admin/MediaLibrary";

export const metadata = { title: "Media" };

export default function AdminMediaPage() {
  return (
    <div>
      <h1 className="mb-6 text-2xl font-semibold text-[#06283c]">
        Media Library
      </h1>
      <MediaLibrary />
    </div>
  );
}
