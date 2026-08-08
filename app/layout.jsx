import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import "./globals.css";

// Site-wide default metadata. Override per-route with an exported
// `metadata` object in any app/**/page.jsx (see app/contact-us/page.jsx
// for an example) — that's the main SEO win over the old SPA, which had
// one static <title> for every route.
export const metadata = {
  metadataBase: new URL("https://agswebsite.com/agsnew/nextjs"),
  title: {
    default: "Apex Global Solutions",
    template: "%s | Apex Global Solutions",
  },
  description:
    "Apex Global Solutions — custom web development, e-commerce, website redesign, and digital marketing services.",
  icons: {
    icon: "/favicon.png",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Font Awesome (kept as a plain stylesheet, same as the old index.html) */}
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css"
          rel="stylesheet"
        />
      </head>
      <body className="text-[#666666] text-[18px] leading-[1.65] scroll-smooth">
        {/* Alpine.js, loaded the same way it was in index.html */}
        <Script src="https://unpkg.com/alpinejs" strategy="afterInteractive" />

        <ScrollToTop />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
