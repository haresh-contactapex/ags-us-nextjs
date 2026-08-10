import Link from "next/link";
import { listPublishedPosts } from "@/lib/blog";

export const metadata = {
  title: "Blog",
  description:
    "Insights on web development, design, and digital marketing from Apex Global Solutions.",
  alternates: { canonical: "/blog" },
};

export const revalidate = 60;

export default async function BlogPage({ searchParams }) {
  const params = await searchParams;
  const page = Math.max(1, Number(params?.page) || 1);
  const { posts, totalPages } = await listPublishedPosts({ page });

  return (
    <section className="py-[40px] lg:py-[60px]">
      <div className="MainContainer">
        <h1 className="heading1 text-center">Blog</h1>

        {posts.length === 0 ? (
          <p className="text-center text-gray-500">
            No blog posts published yet. Check back soon.
          </p>
        ) : (
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group block overflow-hidden rounded-lg border border-gray-100 shadow-sm transition hover:shadow-md"
              >
                {post.cover_image_url && (
                  <img
                    src={post.cover_image_url}
                    alt={post.title}
                    className="h-48 w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                )}
                <div className="p-5">
                  <h2 className="mb-2 font-playfairdisplay text-[22px] text-[#06283c] group-hover:text-[#f3763a]">
                    {post.title}
                  </h2>
                  {post.excerpt && (
                    <p className="mb-3 text-sm text-[#666]">{post.excerpt}</p>
                  )}
                  <p className="text-xs text-gray-400">
                    {post.published_at &&
                      new Date(post.published_at).toLocaleDateString(
                        "en-US",
                        { year: "numeric", month: "long", day: "numeric" },
                      )}
                    {post.author ? ` · ${post.author}` : ""}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}

        {totalPages > 1 && (
          <div className="mt-10 flex justify-center gap-3">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <Link
                key={p}
                href={p === 1 ? "/blog" : `/blog?page=${p}`}
                className={`rounded px-3 py-1 text-sm font-semibold ${
                  p === page
                    ? "bg-[#f3763a] text-white"
                    : "bg-gray-100 text-[#333] hover:bg-gray-200"
                }`}
              >
                {p}
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
