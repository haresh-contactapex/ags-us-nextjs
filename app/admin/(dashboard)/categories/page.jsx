import TaxonomyManager from "@/components/admin/TaxonomyManager";

export const metadata = { title: "Categories" };

export default function AdminCategoriesPage() {
  return (
    <div>
      <h1 className="mb-6 text-2xl font-semibold text-[#06283c]">
        Categories
      </h1>
      <TaxonomyManager resource="categories" hasDescription />
    </div>
  );
}
