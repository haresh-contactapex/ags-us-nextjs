import BlogForm from "@/components/admin/BlogForm";

export default function NewBlogPostPage() {
  return (
    <div>
      <h1 className="mb-6 text-2xl font-semibold text-[#06283c]">
        New Blog Post
      </h1>
      <BlogForm />
    </div>
  );
}
