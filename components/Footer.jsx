"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

import Logo from "@/assets/images/apex_logo.png";
import Twitter from "@/assets/images/twitter.png";
import Facebook from "@/assets/images/facebook.png";
import Pinterest from "@/assets/images/pinterest.png";

import footerContents from "@/components/footerContent";

const Footer = () => {
  const pathname = usePathname();

  // Get footer content based on current page URL
  const footerContent =
    footerContents[pathname] || "Apex Global Solutions is an expert web development company with over 2 decades of experience that focuses on both front-end and back-end development. Being a custom web development company, our web developers bring with themselves a wealth of experience, quality, innovation, creativity and also excel at providing SEO services, web design and development, customized mobile applications, content management systems, social media and other wide array of services. Our custom website development services and customized software products include cloud-based software products and SaaS based products that help in strengthening your online presence. Thus, if you are looking for these services in or around Los Angeles, Pasadena, Glendora, Irvine, Texas &all over the globe, Apex would love to serve you.";

  // Active-link helper
  const isLinkActive = (link) => pathname === link;

  const footerLinkClass = (link) =>
    `block ${
      isLinkActive(link) ? "text-[#f3763a] font-[700]" : "hover:text-[#f3763a]"
    }`;

  const locationLinkClass = (link) =>
    isLinkActive(link) ? "text-[#f3763a] font-[700]" : "";

  // Footer Menu
  return (
    <footer className="bg-white pt-12 pb-6 text-slate-700 text-sm">
      <div className="flex flex-wrap lg:flex-nowrap gap-4 lg:gap-10 px-6 MainContainer">
        {/* LOGO + DESCRIPTION */}
        <div className="mb-4 lg:mb-0 w-full lg:w-[30%]">
          <Link href="/" className="navbar-brand">
            <img
              className="mx-auto xl:mx-0 w-[250px]"
              src={Logo.src}
              alt="Apex Global Solutions"
            />
          </Link>

          <p className="mt-2 text-slate-500 xl:text-left text-center">
            <a
              href="https://www.apexglobalsolutions.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Los Angeles Web Development - AGS
            </a>
          </p>
        </div>

        {/* LINKS 1 */}
        <div className="w-[100%] sm:w-[22%] md:w-[26%] lg:w-[20%] FooterLinks">
          <Link
            href="/who-we-are"
            aria-current={isLinkActive("/who-we-are") ? "page" : undefined}
            className={footerLinkClass("/who-we-are")}
          >
            Who We Are
          </Link>

          <Link
            href="/our-process"
            aria-current={isLinkActive("/our-process") ? "page" : undefined}
            className={footerLinkClass("/our-process")}
          >
            Our Process
          </Link>

          <Link
            href="/web-hosting"
            aria-current={isLinkActive("/web-hosting") ? "page" : undefined}
            className={footerLinkClass("/web-hosting")}
          >
            Web Hosting
          </Link>

          <Link
            href="/partner-with-us"
            aria-current={
              isLinkActive("/partner-with-us") ? "page" : undefined
            }
            className={footerLinkClass("/partner-with-us")}
          >
            Partner With Us
          </Link>

          <Link
            href="/blog"
            aria-current={isLinkActive("/blog") ? "page" : undefined}
            className={footerLinkClass("/blog")}
          >
            Blog
          </Link>

          {/*<a
            href="https://apexglobalsolutionsblog.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            Blog
          </a>*/}
        </div>

        {/* LINKS 2 */}
        <div className="w-[100%] sm:w-[23%] md:w-[26%] lg:w-[20%] FooterLinks">
          <Link
            href="/site-map"
            aria-current={isLinkActive("/site-map") ? "page" : undefined}
            className={footerLinkClass("/site-map")}
          >
            Site Map
          </Link>

          <Link
            href="/legal-disclaimer"
            aria-current={
              isLinkActive("/legal-disclaimer") ? "page" : undefined
            }
            className={footerLinkClass("/legal-disclaimer")}
          >
            Legal Disclaimer
          </Link>

          <Link
            href="/privacy-policy"
            aria-current={
              isLinkActive("/privacy-policy") ? "page" : undefined
            }
            className={footerLinkClass("/privacy-policy")}
          >
            Privacy Policy
          </Link>

          <Link
            href="/contact-us"
            aria-current={isLinkActive("/contact-us") ? "page" : undefined}
            className={footerLinkClass("/contact-us")}
          >
            Contact Us
          </Link>
        </div>

        {/* CONTACT */}
        <div className="w-[100%] sm:w-[48%] md:w-[43%] lg:w-[20%] FooterAddress">
          <p className="leading-[1.7]">
            115 E. Foothill Blvd. STE 202
            <br />
            Glendora, CA 91741
          </p>

          <p className="font-semibold">
            <a href="tel:+12136242600">(213) 624-2600</a>
          </p>

          <p className="font-semibold">
            <a href="mailto:info@apexglobalsolutions.com">
              info@apexglobalsolutions.com
            </a>
          </p>
        </div>
      </div>

      {/* SOCIAL */}
      <div className="flex md:flex-row flex-col justify-center items-center gap-4 mt-10 text-center">
        <p className="mb-0 font-[500] text-[25px]">Follow Us On:</p>

        <div className="flex justify-center gap-4 text-white text-lg">
          <div className="flex justify-center items-center rounded-full w-9 h-9 hover:scale-110 transition">
            <a
              href="https://twitter.com/AGSSolutionsLA"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Twitter.src} alt="Twitter" />
            </a>
          </div>

          <div className="flex justify-center items-center rounded-full w-9 h-9 hover:scale-110 transition">
            <a
              href="https://www.facebook.com/apexglobalsolutions/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Facebook.src} alt="Facebook" />
            </a>
          </div>

          <div className="flex justify-center items-center rounded-full w-9 h-9 hover:scale-110 transition">
            <a
              href="https://www.pinterest.com/apexglobal/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Pinterest.src} alt="Pinterest" />
            </a>
          </div>
        </div>
      </div>

      {/* DESCRIPTION */}
      <div className="mt-8 mb-[10px] px-6 font-[300] text-[#666] text-[13px] 2xl:text-[13px] text-center leading-relaxed MainContainer">
        {footerContent}
      </div>

      {/* LOCATIONS */}
      <div className="mt-6 px-[15px] font-[500] text-[#333] text-[16px] text-slate-600 [&>*]:hover:text-[#f3763a] text-center">
        <Link
          href="/glendora-web-design-company"
          aria-current={
            isLinkActive("/glendora-web-design-company") ? "page" : undefined
          }
          className={locationLinkClass("/glendora-web-design-company")}
        >
          Glendora
        </Link>{" "}
        |{" "}
        <Link
          href="/irvine-web-design-company"
          aria-current={
            isLinkActive("/irvine-web-design-company") ? "page" : undefined
          }
          className={locationLinkClass("/irvine-web-design-company")}
        >
          Irvine
        </Link>{" "}
        |{" "}
        <Link
          href="/los-angeles-web-design-company"
          aria-current={
            isLinkActive("/los-angeles-web-design-company")
              ? "page"
              : undefined
          }
          className={locationLinkClass("/los-angeles-web-design-company")}
        >
          Los Angeles
        </Link>{" "}
        |{" "}
        <Link
          href="/pasadena-web-design-company"
          aria-current={
            isLinkActive("/pasadena-web-design-company") ? "page" : undefined
          }
          className={locationLinkClass("/pasadena-web-design-company")}
        >
          Pasadena
        </Link>{" "}
        |{" "}
        <Link
          href="/texas-web-design-company"
          aria-current={
            isLinkActive("/texas-web-design-company") ? "page" : undefined
          }
          className={locationLinkClass("/texas-web-design-company")}
        >
          Texas
        </Link>
      </div>

      {/* COPYRIGHT */}
      <div className="mt-7 font-[500] text-[#333] text-[16px] text-slate-500 text-center">
        
        <p className="text-[16px]">
          Copyright © 2003-2026{" "}
          <span className="font-bold text-slate-700">Apex Global Solutions</span>
        . All Rights Reserved.
        </p>
        <p className="text-[16px]">
          <a href="https://www.apexglobalsolutions.com/" className="font-[600] hover:text-[#f3763a] text-[#333333]" target="_blank">Los Angeles Web Development</a> - AGS
        </p>
        
      </div>
    </footer>
  );
};

export default Footer;
