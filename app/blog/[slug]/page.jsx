import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getPublicPostBySlug } from "@/lib/posts";

export const revalidate = 60;

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getPublicPostBySlug(slug);
  if (!post) return {};

  const title = post.seo_title || post.title;
  const description = post.seo_description || post.excerpt || undefined;

  return {
    title,
    description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title,
      description,
      type: "article",
      images: post.featured_image_url ? [post.featured_image_url] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = await getPublicPostBySlug(slug);
  if (!post) notFound();

  return (
    <article className="MainContainer py-16">
      <header className="mb-8">
        {post.categories?.length > 0 && (
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-[#f3763a]">
            {post.categories.map((c) => c.name).join(", ")}
          </p>
        )}
        <h1 className="heading1 mb-3">{post.title}</h1>
        <p className="text-sm text-slate-500">
          {post.author_name && <>By {post.author_name} · </>}
          {post.published_at &&
            new Date(post.published_at).toLocaleDateString()}
        </p>
      </header>

      {post.featured_image_url && (
        <Image
          src={post.featured_image_url}
          alt={post.featured_image_alt || post.title}
          width={1200}
          height={630}
          className="mb-8 w-full rounded-lg object-cover"
        />
      )}

      <div
        className="blog-content"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {post.tags?.length > 0 && (
        <div className="mt-10 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <Link
              key={tag.slug}
              href={`/blog/tag/${tag.slug}`}
              className="rounded-full border border-slate-300 px-3 py-1 text-sm text-slate-600 hover:border-[#f3763a] hover:text-[#f3763a]"
            >
              #{tag.name}
            </Link>
          ))}
        </div>
      )}
    </article>
  );
}
