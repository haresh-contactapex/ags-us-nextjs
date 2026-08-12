import {
  listPublicPosts,
  countPublicPosts,
  PUBLIC_PAGE_SIZE,
} from "@/lib/posts";
import { listCategories } from "@/lib/categories";
import { listTags } from "@/lib/tags";
import PostList from "@/components/blog/PostList";

export const revalidate = 60;

export const metadata = {
  title: "Blog",
  description:
    "Insights, updates, and guides from Apex Global Solutions.",
  alternates: { canonical: "/blog" },
};

export default async function BlogPage() {
  const [posts, total, categories, tags] = await Promise.all([
    listPublicPosts({ page: 1 }),
    countPublicPosts({}),
    listCategories(),
    listTags(),
  ]);

  const pagination = {
    page: 1,
    pageSize: PUBLIC_PAGE_SIZE,
    total,
    totalPages: Math.max(1, Math.ceil(total / PUBLIC_PAGE_SIZE)),
  };

  return (
    <div className="MainContainer py-16">
      <h1 className="heading1 mb-8">Blog</h1>
      <PostList
        initialPosts={posts}
        initialPagination={pagination}
        categories={categories}
        tags={tags}
      />
    </div>
  );
}
