import { notFound } from "next/navigation";
import {
  listPublicPosts,
  countPublicPosts,
  PUBLIC_PAGE_SIZE,
} from "@/lib/posts";
import { listCategories } from "@/lib/categories";
import { getTagBySlug, listTags } from "@/lib/tags";
import PostList from "@/components/blog/PostList";

export const revalidate = 60;

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const tag = await getTagBySlug(slug);
  if (!tag) return {};

  return {
    title: `#${tag.name}`,
    description: `Posts tagged ${tag.name}`,
    alternates: { canonical: `/blog/tag/${tag.slug}` },
  };
}

export default async function TagArchivePage({ params }) {
  const { slug } = await params;
  const tag = await getTagBySlug(slug);
  if (!tag) notFound();

  const [posts, total, categories, tags] = await Promise.all([
    listPublicPosts({ page: 1, tagSlug: slug }),
    countPublicPosts({ tagSlug: slug }),
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
      <h1 className="heading1 mb-8">Tag: #{tag.name}</h1>
      <PostList
        initialPosts={posts}
        initialPagination={pagination}
        categories={categories}
        tags={tags}
        tagSlug={slug}
      />
    </div>
  );
}
