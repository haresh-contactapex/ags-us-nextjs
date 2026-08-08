"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Scrolls to top on every route change (App Router equivalent of the
// old react-router `useLocation`-based version).
export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
