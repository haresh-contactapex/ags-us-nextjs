import PostForm from "@/components/admin/PostForm";
import { listCategories } from "@/lib/categories";
import { listTags } from "@/lib/tags";

export const metadata = { title: "New Post" };

export default async function NewPostPage() {
  const [categories, tags] = await Promise.all([
    listCategories(),
    listTags(),
  ]);

  return (
    <div>
      <h1 className="mb-6 text-2xl font-semibold text-[#06283c]">New Post</h1>
      <PostForm categories={categories} tags={tags} />
    </div>
  );
}
