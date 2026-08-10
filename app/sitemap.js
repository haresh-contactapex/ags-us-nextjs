import { listPublishedSlugs } from "@/lib/blog";

const BASE_URL = "https://agswebsite.com/agsnew/nextjs";

const routes = [
  "",
  "/custom-web-development",
  "/website-redesign-los-angeles",
  "/responsive-web-development",
  "/ecommerce-web-development",
  "/website-maintenance",
  "/website-security",
  "/wordpress-web-development",
  "/contact-us",
  "/site-map",
  "/blog",
];

export default async function sitemap() {
  const staticEntries = routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));

  let blogEntries = [];
  try {
    const posts = await listPublishedSlugs();
    blogEntries = posts.map((post) => ({
      url: `${BASE_URL}/blog/${post.slug}`,
      lastModified: post.updated_at,
      changeFrequency: "monthly",
      priority: 0.6,
    }));
  } catch (error) {
    console.error("sitemap: failed to load blog slugs", error);
  }

  return [...staticEntries, ...blogEntries];
}
