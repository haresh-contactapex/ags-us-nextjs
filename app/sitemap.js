import { listPublicSlugs } from "@/lib/posts";
import { listCategories } from "@/lib/categories";
import { listTags } from "@/lib/tags";

const BASE_URL = "https://ags-us-nextjs.vercel.app";

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
  "/banners-posters-design",
  "/brochure-design",
  "/content-management-systems",
  "/desktop-software",
  "/glendora-web-design-company",
  "/hybrid-app-development",
  "/irvine-web-design-company",
  "/legal-disclaimer",
  "/logo-business-card-design",
  "/los-angeles-web-design-company",
  "/mobile-app-development",
  "/native-android-apps",
  "/native-ios-apps",
  "/our-process",
  "/partner-with-us",
  "/pasadena-web-design-company",
  "/pay-per-click-services",
  "/privacy-policy",
  "/rebranding-services",
  "/saas-application-development",
  "/search-engine-optimization",
  "/social-media-marketing",
  "/texas-web-design-company",
  "/web-banner-design",
  "/web-hosting",
  "/website-marketing-analysis",
  "/who-we-are",
];

export default async function sitemap() {
  const staticEntries = routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));

  // A DB hiccup here should never take down the whole sitemap — fall
  // back to just the static routes if the blog tables are unreachable.
  try {
    const [posts, categories, tags] = await Promise.all([
      listPublicSlugs(),
      listCategories(),
      listTags(),
    ]);

    const postEntries = posts.map((post) => ({
      url: `${BASE_URL}/blog/${post.slug}`,
      lastModified: post.updated_at,
      changeFrequency: "monthly",
      priority: 0.6,
    }));

    const categoryEntries = categories.map((category) => ({
      url: `${BASE_URL}/blog/category/${category.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    }));

    const tagEntries = tags.map((tag) => ({
      url: `${BASE_URL}/blog/tag/${tag.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.4,
    }));

    return [...staticEntries, ...postEntries, ...categoryEntries, ...tagEntries];
  } catch (error) {
    console.error("sitemap: failed to load blog entries", error);
    return staticEntries;
  }
}
