import { notFound } from "next/navigation";
import PostForm from "@/components/admin/PostForm";
import { getPostById } from "@/lib/posts";
import { listCategories } from "@/lib/categories";
import { listTags } from "@/lib/tags";

export const metadata = { title: "Edit Post" };

export default async function EditPostPage({ params }) {
  const { id } = await params;
  const postId = Number(id);
  if (!Number.isInteger(postId)) notFound();

  const [post, categories, tags] = await Promise.all([
    getPostById(postId),
    listCategories(),
    listTags(),
  ]);

  if (!post) notFound();

  return (
    <div>
      <h1 className="mb-6 text-2xl font-semibold text-[#06283c]">Edit Post</h1>
      <PostForm initialPost={post} categories={categories} tags={tags} />
    </div>
  );
}
