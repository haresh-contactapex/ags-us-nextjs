import Link from "next/link";
import Image from "next/image";

export default function PostCard({ post }) {
  return (
    <article className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition hover:shadow-md">
      <Link href={`/blog/${post.slug}`}>
        {post.featured_image_url ? (
          <Image
            src={post.featured_image_url}
            alt={post.featured_image_alt || post.title}
            width={600}
            height={340}
            className="h-48 w-full object-cover"
          />
        ) : (
          <div className="h-48 w-full bg-slate-100" />
        )}
      </Link>
      <div className="p-5">
        {post.categories?.length > 0 && (
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-[#f3763a]">
            {post.categories.map((c) => c.name).join(", ")}
          </p>
        )}
        <h2 className="mb-2 text-lg font-semibold text-[#06283c]">
          <Link href={`/blog/${post.slug}`} className="hover:underline">
            {post.title}
          </Link>
        </h2>
        {post.excerpt && (
          <p className="mb-3 text-sm text-slate-600">{post.excerpt}</p>
        )}
        <p className="text-xs text-slate-400">
          {post.published_at &&
            new Date(post.published_at).toLocaleDateString()}
        </p>
      </div>
    </article>
  );
}
