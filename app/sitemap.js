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
];

export default function sitemap() {
  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
