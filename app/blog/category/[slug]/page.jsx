import { notFound } from "next/navigation";
import {
  listPublicPosts,
  countPublicPosts,
  PUBLIC_PAGE_SIZE,
} from "@/lib/posts";
import { getCategoryBySlug, listCategories } from "@/lib/categories";
import { listTags } from "@/lib/tags";
import PostList from "@/components/blog/PostList";

export const revalidate = 60;

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const category = await getCategoryBySlug(slug);
  if (!category) return {};

  return {
    title: category.name,
    description: category.description || `Posts in ${category.name}`,
    alternates: { canonical: `/blog/category/${category.slug}` },
  };
}

export default async function CategoryArchivePage({ params }) {
  const { slug } = await params;
  const category = await getCategoryBySlug(slug);
  if (!category) notFound();

  const [posts, total, categories, tags] = await Promise.all([
    listPublicPosts({ page: 1, categorySlug: slug }),
    countPublicPosts({ categorySlug: slug }),
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
      <h1 className="heading1 mb-8">Category: {category.name}</h1>
      <PostList
        initialPosts={posts}
        initialPagination={pagination}
        categories={categories}
        tags={tags}
        categorySlug={slug}
      />
    </div>
  );
}
