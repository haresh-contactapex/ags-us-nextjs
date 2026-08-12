import PostsList from "@/components/admin/PostsList";

export const metadata = { title: "Posts" };

export default function AdminPostsPage() {
  return (
    <div>
      <h1 className="mb-6 text-2xl font-semibold text-[#06283c]">Posts</h1>
      <PostsList />
    </div>
  );
}
