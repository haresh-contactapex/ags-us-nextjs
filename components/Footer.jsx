import Link from "next/link";
import Logo from "@/assets/images/apex_logo.png";
import Twitter from "@/assets/images/twitter.png";
import Facebook from "@/assets/images/facebook.png";
import Pinterest from "@/assets/images/pinterest.png";

const Footer = () => {
  // Footer Menu
  return (
    <footer className="bg-white pt-12 pb-6 border-t text-slate-700 text-sm">
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
        {/* <div className="flex flex-col gap-4 space-y-2 w-full sm:w-[30%] lg:w-[20%] [&>*]:font-[500] lg:[&>*]:text-[20px] [&>*]:hover:text-[#f3763a] [&>*]:text-[#333333] [&>*]:text-[16px] sm:[&>*]:text-left [&>*]:text-center"> */}
        <div className="w-[100%] sm:w-[22%] md:w-[26%] lg:w-[20%] FooterLinks">
          <Link href="/who-we-are" className="block">
            Who We Are
          </Link>

          <Link href="/our-process" className="block">
            Our Process
          </Link>

          <Link href="/web-hosting" className="block">
            Web Hosting
          </Link>

          <Link href="/partner-with-us" className="block">
            Partner With Us
          </Link>

          <a
            href="https://apexglobalsolutionsblog.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            Blog
          </a>
        </div>

        {/* LINKS 2 */}
        <div className="w-[100%] sm:w-[23%] md:w-[26%] lg:w-[20%] FooterLinks">
          <Link href="/site-map" className="block">
            Site Map
          </Link>

          <Link href="/legal-disclaimer" className="block">
            Legal Disclaimer
          </Link>

          <Link href="/privacy-policy" className="block">
            Privacy Policy
          </Link>

          <Link href="/contact-us" className="block">
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
      <div className="mt-8 px-6 font-[300] text-[#666] text-[13px] 2xl:text-[16px] text-center leading-relaxed MainContainer">
        Apex Global Solutions is an expert web development company with over 2
        decades of experience that focuses on both front-end and back-end
        development. Being a custom web development company, our web developers
        bring with themselves a wealth of experience, quality, innovation,
        creativity and also excel at providing SEO services, web design and
        development, customized mobile applications, content management systems,
        social media and other wide array of services. Our custom website
        development services and customized software products include
        cloud-based software products and SaaS based products that help in
        strengthening your online presence. Thus, if you are looking for these
        services in or around Los Angeles, Pasadena, Glendora, Irvine, Texas &
        all over the globe, Apex would love to serve you.
      </div>

      {/* LOCATIONS */}
      <div className="mt-6 px-[15px] font-[500] text-[#333] text-[16px] text-slate-600 [&>*]:hover:text-[#f3763a] text-center">
        <Link href="/glendora">Glendora</Link> | <Link href="/irvine">Irvine</Link>{" "}
        | <Link href="/los-angeles">Los Angeles</Link> |{" "}
        <Link href="/pasadena">Pasadena</Link> | <Link href="/texas">Texas</Link>
      </div>

      {/* COPYRIGHT */}
      <div className="mt-7 font-[500] text-[#333] text-[15px] text-slate-500 text-center">
        Copyright © 2003-2026{" "}
        <span className="font-bold text-slate-700">Apex Global Solutions</span>.
        All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
