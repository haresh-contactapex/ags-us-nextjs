"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Logo from "@/assets/images/apex_logo.png";
import RequestButton from "@/assets/images/requset-btn.svg";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);

  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = (menu) => {
    setActive(active === menu ? null : menu);
  };

  // Close the mobile menu (and any open submenu) — called when a link is clicked
  const closeMobileMenu = () => {
    setOpen(false);
    setActive(null);
  };

  // Main Menu
  const menuData = [
    {
      title: "Web Development",
      key: "web-development",
      items: [
        {
          name: "Responsive Web Development",
          link: "/responsive-web-development",
        },
        {
          name: "E-commerce Website Development",
          link: "/ecommerce-web-development",
        },
        {
          name: "Custom Web Development",
          link: "/custom-web-development",
        },
        {
          name: "Wordpress Website Development",
          link: "/wordpress-web-development",
        },
        {
          name: "Website Redesign",
          link: "/website-redesign-los-angeles",
        },
        {
          name: "Website Maintenance",
          link: "/website-maintenance",
        },
        {
          name: "Website Security",
          link: "/website-security",
        },
      ],
    },
    {
      title: "Graphic Design",
      key: "graphic-design",
      items: [
        {
          name: "Logo & Business Card Design",
          link: "/logo-business-card-design",
        },
        {
          name: "Rebranding Services",
          link: "/rebranding-services",
        },
        {
          name: "Brochure Design",
          link: "/brochure-design",
        },
        {
          name: "Banners & Posters Design",
          link: "/banners-posters-design",
        },
        {
          name: "Web Banner Design",
          link: "/web-banner-design",
        },
      ],
    },
    {
      title: "App Development",
      key: "app-development",
      items: [
        {
          name: "Mobile App Development",
          link: "/mobile-app-development",
        },
        {
          name: "Native iOS Apps",
          link: "/native-ios-apps",
        },
        {
          name: "Native Android Apps",
          link: "/native-android-apps",
        },
        {
          name: "Hybrid App Development",
          link: "/hybrid-app-development",
        },
      ],
    },
    {
      title: "Digital Marketing",
      key: "digital-marketing",
      items: [
        {
          name: "Search Engine Optimization",
          link: "/search-engine-optimization",
        },
        {
          name: "Pay Per Click (PPC Campaigns)",
          link: "/pay-per-click-services",
        },
        {
          name: "Social Media Marketing",
          link: "/social-media-marketing",
        },
      ],
    },
    {
      title: "Software Development",
      key: "software-development",
      items: [
        {
          name: "SaaS Application Development",
          link: "/saas-application-development",
        },
        {
          name: "Content Management Systems (CMS)",
          link: "/content-management-systems",
        },
        {
          name: "Desktop Software",
          link: "/desktop-software",
        },
      ],
    },
  ];

  // Active-link helpers
  const isLinkActive = (link) => pathname === link;
  const isMenuActive = (menu) =>
    menu.items.some((item) => isLinkActive(item.link));

  return (
    <>
      <Link href="/request-a-quote/" className="request-btn">
        <Image src={RequestButton} alt="Request a Quote" />
      </Link>
      <header
        className={`sticky top-0 z-50 bg-white/80 shadow-2xs backdrop-blur transition-all duration-100 ${
          scrolled ? "py-[2px]" : "py-4 scrolled"
        }`}
      >
        {/* <div className="mx-auto px-4 py-4 2xl:max-w-[1552px] max-w-7xl"> */}
        <div className="px-4 py-0 MainContainer">
          <div className="flex justify-between items-center">
            {/* LOGO */}
            <Link href="/" className="navbar-brand">
              <img
                src={Logo.src}
                alt="Apex Global Solutions"
                className="w-[65%] sm:w-[180px] md:w-[250px]"
              />
            </Link>

            {/* RIGHT */}
            <div className="flex-1">
              {/* TOP BAR */}
              <div className="hidden md:flex justify-end gap-6 mb-2 md:pr-[80px] lg:pr-[0px] [&>*]:font-[700] [&>*]:text-[20px]">
                <Link
                  href="/contact-us"
                  className={`underline uppercase ${
                    isLinkActive("/contact-us")
                      ? "text-[#f3763a]"
                      : "text-[#333333] hover:text-[#f3763a]"
                  }`}
                >
                  Let’s Talk
                </Link>

                <a
                  href="tel:2136242600"
                  className="text-[#f3763a] hover:text-[#333333]"
                >
                  (213) 624-2600
                </a>
              </div>

              {/* DESKTOP MENU */}
              <nav className="hidden lg:flex justify-end gap-4 xl:gap-4 [&>*]:font-[500] [&>*]:hover:text-[#f3763a] [&>*]:text-[#333333] NavFonts">
                {/* <Link href="/blog" className="hover:text-black leading-[42px]">
                Blog
              </Link> */}
                {menuData.map((menu, menuIndex) => {
                  const menuActive = isMenuActive(menu);
                  const isLastMenu = menuIndex === menuData.length - 1;
                  return (
                    <div key={menu.key} className="group relative">
                      <Link
                        href={menu.items[0].link}
                        aria-current={menuActive ? "page" : undefined}
                        className={`relative leading-[42px] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-[#f3763a] after:transition-all after:duration-300 ${
                          menuActive
                            ? "text-[#f3763a] font-[700] after:w-full"
                            : "hover:text-black after:w-0 hover:after:w-full"
                        }`}
                      >
                        {menu.title} ▾
                      </Link>

                      <div
                        className={`hidden group-hover:block top-10 absolute space-y-2 bg-white shadow-xl p-4 rounded-lg min-w-[330px] ${
                          isLastMenu ? "right-0" : "left-0"
                        }`}
                      >
                        {menu.items.map((item, index) => {
                          const itemActive = isLinkActive(item.link);
                          return (
                            <Link
                              key={index}
                              href={item.link}
                              aria-current={itemActive ? "page" : undefined}
                              className={`block font-[500] text-[15px] ${
                                itemActive
                                  ? "text-[#f3763a] font-[700]"
                                  : "text-[#333] hover:text-[#f3763a]"
                              }`}
                            >
                              {item.name}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </nav>
            </div>

            {/* MOBILE TOGGLE */}
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden relative w-8 h-8"
            >
              <span className="top-2 left-[-60px] absolute w-[50px] h-0.5 font-semibold text-[#333] text-[17px] leading-[20px]">
                MENU
              </span>

              <span
                className={`absolute left-0 h-0.5 w-full bg-black transition-all ${
                  open ? "top-4 rotate-45" : "top-2"
                }`}
              />

              <span
                className={`absolute left-0 top-4 h-0.5 w-full bg-black transition-all ${
                  open ? "opacity-0" : ""
                }`}
              />

              <span
                className={`absolute left-0 h-0.5 w-full bg-black transition-all ${
                  open ? "top-[17px] -rotate-45" : "top-6"
                }`}
              />
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="lg:hidden top-[20px] relative space-y-4 bg-white px-6 py-4 border-t">
            <Link
              href="/"
              onClick={closeMobileMenu}
              aria-current={isLinkActive("/") ? "page" : undefined}
              className={`block font-medium ${
                isLinkActive("/")
                  ? "text-[#f3763a]"
                  : "text-[#333333] hover:text-[#f3763a]"
              }`}
            >
              Home
            </Link>
            {menuData.map((menu) => {
              const menuActive = isMenuActive(menu);
              return (
                <div key={menu.key}>
                  <button
                    onClick={() => toggleMenu(menu.key)}
                    className={`flex justify-between items-center w-full font-medium ${
                      menuActive ? "text-[#f3763a]" : "text-[#333333]"
                    }`}
                  >
                    {menu.title}

                    <svg
                      className={`transition-transform ${
                        active === menu.key ? "rotate-180" : ""
                      }`}
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M19 9L12 16L5 9"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>

                  {active === menu.key && (
                    <div className="flex flex-col space-y-2 mt-2 pl-4 font-[500] text-[15px]">
                      {menu.items.map((item, index) => {
                        const itemActive = isLinkActive(item.link);
                        return (
                          <Link
                            key={index}
                            href={item.link}
                            onClick={closeMobileMenu}
                            aria-current={itemActive ? "page" : undefined}
                            className={
                              itemActive
                                ? "text-[#f3763a] font-[700]"
                                : "text-[#333333] hover:text-[#f3763a]"
                            }
                          >
                            {item.name}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
