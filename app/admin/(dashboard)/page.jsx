import { countAdminPosts } from "@/lib/posts";
import { countMedia } from "@/lib/media";
import { listCategories } from "@/lib/categories";
import { listTags } from "@/lib/tags";

export const metadata = { title: "Dashboard" };

export default async function AdminDashboardPage() {
  const [draft, scheduled, published, mediaCount, categories, tags] =
    await Promise.all([
      countAdminPosts({ status: "draft" }),
      countAdminPosts({ status: "scheduled" }),
      countAdminPosts({ status: "published" }),
      countMedia(),
      listCategories(),
      listTags(),
    ]);

  const cards = [
    { label: "Draft posts", value: draft },
    { label: "Scheduled posts", value: scheduled },
    { label: "Published posts", value: published },
    { label: "Media items", value: mediaCount },
    { label: "Categories", value: categories.length },
    { label: "Tags", value: tags.length },
  ];

  return (
    <div>
      <h1 className="mb-6 text-2xl font-semibold text-[#06283c]">Dashboard</h1>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        {cards.map((card) => (
          <div key={card.label} className="rounded-lg bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">{card.label}</p>
            <p className="mt-1 text-3xl font-semibold text-[#06283c]">
              {card.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
