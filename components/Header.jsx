"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Logo from "@/assets/images/apex_logo.png";
import RequestButton from "@/assets/images/requset-btn.svg";

// ---------------------------------------------------------------------------
// Menu icons — add your SVG files at these paths (assets/images/icons/*.svg).
// Rename the files to match, or update the paths below to match your files.
// ---------------------------------------------------------------------------
import ResponsiveWebIcon from "@/assets/images/icons/responsive-web-development.svg";
import EcommerceIcon from "@/assets/images/icons/ecommerce-website-development.svg";
import CustomWebIcon from "@/assets/images/icons/custom-web-development.svg";
import WordpressIcon from "@/assets/images/icons/wordpress-website-development.svg";
import WebsiteRedesignIcon from "@/assets/images/icons/website-redesign.svg";
import WebsiteMaintenanceIcon from "@/assets/images/icons/website-maintenance.svg";
import WebsiteSecurityIcon from "@/assets/images/icons/website-security.svg";

import LogoDesignIcon from "@/assets/images/icons/logo-business-card-design.svg";
import RebrandingIcon from "@/assets/images/icons/rebranding-services.svg";
import BrochureIcon from "@/assets/images/icons/brochure-design.svg";
import BannersPostersIcon from "@/assets/images/icons/banners-posters-design.svg";
import WebBannerIcon from "@/assets/images/icons/web-banner-design.svg";

import MobileAppIcon from "@/assets/images/icons/mobile-app-development.svg";
import NativeIOSIcon from "@/assets/images/icons/native-ios-apps.svg";
import NativeAndroidIcon from "@/assets/images/icons/native-android-apps.svg";
import HybridAppIcon from "@/assets/images/icons/hybrid-app-development.svg";

import SEOIcon from "@/assets/images/icons/search-engine-optimization.svg";
import PPCIcon from "@/assets/images/icons/pay-per-click.svg";
import SocialMediaIcon from "@/assets/images/icons/social-media-marketing.svg";

import SaaSIcon from "@/assets/images/icons/saas-application-development.svg";
import CMSIcon from "@/assets/images/icons/content-management-systems.svg";
import DesktopSoftwareIcon from "@/assets/images/icons/desktop-software.svg";

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
          description: "Make Suitability Your Website Essence",
          link: "/responsive-web-development",
          icon: ResponsiveWebIcon,
        },
        {
          name: "E-commerce Website Development",
          description: "Custom E-commerce Solutions, well-suited to your business needs",
          link: "/ecommerce-web-development",
          icon: EcommerceIcon,
        },
        {
          name: "Custom Web Development",
          description: "Let's design your magical mark",
          link: "/custom-web-development",
          icon: CustomWebIcon,
        },
        {
          name: "Wordpress Website Development",
          description: "Wordpress Website Development has been our core forte",
          link: "/wordpress-web-development",
          icon: WordpressIcon,
        },
        {
          name: "Website Redesign",
          description: "Align Your Brand and Look Good on the Outside",
          link: "/website-redesign-los-angeles",
          icon: WebsiteRedesignIcon,
        },
        {
          name: "Website Maintenance",
          description: "Stay on the top by constant maintenance",
          link: "/website-maintenance",
          icon: WebsiteMaintenanceIcon,
        },
        {
          name: "Website Security",
          description: "Don't Let Security Gaps Wreck Your Name",
          link: "/website-security",
          icon: WebsiteSecurityIcon,
        },
      ],
    },
    {
      title: "Graphic Design",
      key: "graphic-design",
      items: [
        {
          name: "Logo & Business Card Design",
          description: "Identify Yourself Amongst Many",
          link: "/logo-business-card-design",
          icon: LogoDesignIcon,
        },
        {
          name: "Rebranding Services",
          description: "Be The Quickest Modified Brand",
          link: "/rebranding-services",
          icon: RebrandingIcon,
        },
        {
          name: "Brochure Design",
          description: "Drive People To Action By Stunning Designs",
          link: "/brochure-design",
          icon: BrochureIcon,
        },
        {
          name: "Banners & Posters Design",
          description: "Get Ahead Of Your Competition",
          link: "/banners-posters-design",
          icon: BannersPostersIcon,
        },
        {
          name: "Web Banner Design",
          description: "Let us make everyone online—your customer",
          link: "/web-banner-design",
          icon: WebBannerIcon,
        },
      ],
    },
    {
      title: "App Development",
      key: "app-development",
      items: [
        {
          name: "Mobile App Development",
          description: "Don't Be An Old-Time Business",
          link: "/mobile-app-development",
          icon: MobileAppIcon,
        },
        {
          name: "Native iOS Apps",
          description: "One-stop solution for top native iOS apps",
          link: "/native-ios-apps",
          icon: NativeIOSIcon,
        },
        {
          name: "Native Android Apps",
          description: "Cutting-edge applications and solutions for your business",
          link: "/native-android-apps",
          icon: NativeAndroidIcon,
        },
        {
          name: "Hybrid App Development",
          description: "Hybrid App services for the best customer experience",
          link: "/hybrid-app-development",
          icon: HybridAppIcon,
        },
      ],
    },
    {
      title: "Digital Marketing",
      key: "digital-marketing",
      items: [
        {
          name: "Search Engine Optimization",
          description: "Make Your Website's Backbone Stronger With SEO",
          link: "/search-engine-optimization",
          icon: SEOIcon,
        },
        {
          name: "Pay Per Click (PPC Campaigns)",
          description: "Reach Out Millions With Pay Per Click Advertising",
          link: "/pay-per-click-services",
          icon: PPCIcon,
        },
        {
          name: "Social Media Marketing",
          description: "Let Us Create Some Social Media Fire",
          link: "/social-media-marketing",
          icon: SocialMediaIcon,
        },       
     
        
        
        
      ],
    },
    {
      title: "Software Development",
      key: "software-development",
      items: [
        {
          name: "SaaS Application Development",
          description: "We help you become the modern age SaaS leaders",
          link: "/saas-application-development",
          icon: SaaSIcon,
        },
        {
          name: "Content Management Systems (CMS)",
          description: "Experience best of the content management Systems with us",
          link: "/content-management-systems",
          icon: CMSIcon,
        },
        {
          name: "Desktop Software",
          description: "Genuine desktop software services at your disposal",
          link: "/desktop-software",
          icon: DesktopSoftwareIcon,
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
                        className={`hidden group-hover:block top-10 absolute space-y-4 bg-white shadow-xl p-5 rounded-lg min-w-[370px] max-w-[380px] ${
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
                              className="group/item flex items-center gap-3"
                            >
                              {item.icon && (
                                <img
                                  src={item.icon.src}
                                  alt=""
                                  className="shrink-0 mt-0.5 w-[46px] h-[46px]"
                                />
                              )}
                              <span>
                                <span
                                  className={`block font-[500] text-[14px] leading-[1.3] ${
                                    itemActive
                                      ? "text-[#f3763a]"
                                      : "text-[#333] group-hover/item:text-[#f3763a]"
                                  }`}
                                >
                                  {item.name}
                                </span>
                                {item.description && (
                                  <span className="block mt-0.5 text-[#888] text-[11px] font-[500] leading-[1.4]">
                                    {item.description}
                                  </span>
                                )}
                              </span>
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
                    <div className="flex flex-col space-y-3 mt-2 pl-4 font-[500] text-[15px]">
                      {menu.items.map((item, index) => {
                        const itemActive = isLinkActive(item.link);
                        return (
                          <Link
                            key={index}
                            href={item.link}
                            onClick={closeMobileMenu}
                            aria-current={itemActive ? "page" : undefined}
                            className="flex items-start gap-2"
                          >
                            {item.icon && (
                              <img
                                src={item.icon.src}
                                alt=""
                                className="shrink-0 mt-0.5 w-5 h-5"
                              />
                            )}
                            <span
                              className={
                                itemActive
                                  ? "text-[#f3763a] font-[700]"
                                  : "text-[#333333] hover:text-[#f3763a]"
                              }
                            >
                              {item.name}
                            </span>
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
