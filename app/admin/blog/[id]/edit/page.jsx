import { notFound } from "next/navigation";
import BlogForm from "@/components/admin/BlogForm";
import { getPostById } from "@/lib/blog";

export default async function EditBlogPostPage({ params }) {
  const { id } = await params;
  const post = await getPostById(Number(id));

  if (!post) {
    notFound();
  }

  return (
    <div>
      <h1 className="mb-6 text-2xl font-semibold text-[#06283c]">
        Edit Blog Post
      </h1>
      <BlogForm initialPost={post} />
    </div>
  );
}
