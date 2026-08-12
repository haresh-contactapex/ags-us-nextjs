import TaxonomyManager from "@/components/admin/TaxonomyManager";

export const metadata = { title: "Tags" };

export default function AdminTagsPage() {
  return (
    <div>
      <h1 className="mb-6 text-2xl font-semibold text-[#06283c]">Tags</h1>
      <TaxonomyManager resource="tags" />
    </div>
  );
}
