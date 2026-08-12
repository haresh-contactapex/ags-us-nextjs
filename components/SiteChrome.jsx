"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";

// The admin dashboard renders its own chrome (see app/admin layouts), so
// it opts out of the public Header/Footer here rather than duplicating
// the root <html>/<body> shell in a second top-level layout.
export default function SiteChrome({ children }) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/admin");

  if (isAdmin) {
    return children;
  }

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
