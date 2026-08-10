export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://ags-us-nextjs.vercel.app/sitemap.xml",
  };
}
