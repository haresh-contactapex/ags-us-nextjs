import React from "react";
import seperatorImage from "@/assets/images/page_seperator_cwd1.png";
import checkImage from "@/assets/images/check.png";
import check2Image from "@/assets/images/check2.png";

export const metadata = {
  title: "Site Map",
  description: "Browse all pages on the Apex Global Solutions website.",
  alternates: { canonical: "/site-map" },
};

const SiteMap = () => {
  return (
    <>
      {/* Inner Page Banner: start */}
      <section className="bg-[#f9f9f9] py-[40px] lg:py-[60px]">
        <div className="space-y-24 mx-auto px-6 max-w-[1000px]">
          <div className="items-center">
            <div className="aos-init aos-animate" data-aos="fade-left">
              <h2 className="mb-10 font-playfairdisplay font-normal text-[36px] lg:text-[46px] 2xl:text-[70px] text-center leading-[1.2] lg:leading-[1.1] 2xl:leading-[1]">
                Site Map
              </h2>
              <p className="mx-auto max-w-[900px] text-[#06283b] text-[18px] lg:text-[24px] text-center leading-[1.5]">
                Browse Categories on the site with ease and convenience
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Inner Page Banner:: end */}
      {/* ===============================================================================
==SEC 1 STart============================================================================ */}
      <img
        src={seperatorImage.src}
        className="hidden xl:block mx-auto mt-[-60px] mb-[-80px] max-w-[400px] translate-x-[10%]"
      />
      {/* xxxxxxxxxxx */}
      <section className="py-[40px] lg:py-[60px]">
        <div className="space-y-24 px-6 MainContainer">
          <div className="items-start gap-[0px] md:gap-16 grid md:grid-cols-3">
            <div className="aos-init aos-animate" data-aos="fade-left">
              <ul
                className="pl-[20px] [&>*]:font-[600] [&>*:hover]:text-[#f3763a] [&>*]:text-[#333333] [&>*]:text-[20px]"
                style={{ listStyleImage: `url(${checkImage.src})` }}
              >
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/responsive-web-development">
                    Web Development
                  </a>
                  <ul
                    className="mb-3 pl-[20px] [&>*]:font-[600] [&>*:hover]:text-[#f3763a] [&>*]:text-[#333333] [&>*]:text-[20px]"
                    style={{ listStyleImage: `url(${check2Image.src})` }}
                  >
                    <li>
                      <a href="/responsive-web-development">
                        Responsive Web Development
                      </a>
                    </li>
                    <li>
                      <a href="/ecommerce-web-development">
                        E-commerce Website Development
                      </a>
                    </li>
                    <li>
                      <a href="/custom-web-development">
                        Custom Web Development
                      </a>
                    </li>
                    <li>
                      <a href="/wordpress-web-development">
                        WordPress Development
                      </a>
                    </li>
                    <li>
                      <a href="/website-redesign-los-angeles">Website Redesign</a>
                    </li>
                    <li>
                      <a href="/website-maintenance">
                        Website Maintenance
                      </a>
                    </li>
                    <li>
                      <a href="/website-security">Website Security</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="/logo-business-card-design">
                    Graphics Design
                  </a>
                  <ul
                    className="mb-3 pl-[20px] [&>*]:font-[600] [&>*:hover]:text-[#f3763a] [&>*]:text-[#333333] [&>*]:text-[20px] list-outside"
                    style={{ listStyleImage: `url(${check2Image.src})` }}
                  >
                    <li>
                      <a href="/logo-business-card-design">
                        Logo/Business Card Design
                      </a>
                    </li>
                    <li>
                      <a href="/rebranding-services">
                        Rebranding Services
                      </a>
                    </li>
                    <li>
                      <a href="/brochure-design">Brochure Design</a>
                    </li>
                    <li>
                      <a href="/banners-posters-design">
                        Banners &amp; Posters Design
                      </a>
                    </li>
                    <li>
                      <a href="/web-banner-design">Web Banner Design</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="aos-init aos-animate" data-aos="fade-left">
              <ul
                className="pl-[20px] [&>*]:font-[600] [&>*:hover]:text-[#f3763a] [&>*]:text-[#333333] [&>*]:text-[20px] list-outside"
                style={{ listStyleImage: `url(${checkImage.src})` }}
              >
                <li>
                  <a href="/mobile-app-development">App Development</a>
                  <ul
                    className="mb-3 pl-[20px] [&>*]:font-[600] [&>*:hover]:text-[#f3763a] [&>*]:text-[#333333] [&>*]:text-[20px] list-outside"
                    style={{ listStyleImage: `url(${check2Image.src})` }}
                  >
                    <li>
                      <a href="/mobile-app-development">
                        Mobile App Development
                      </a>
                    </li>
                    <li>
                      <a href="/native-ios-apps">Native iOS Apps</a>
                    </li>
                    <li>
                      <a href="/native-android-apps">
                        Native Android Apps
                      </a>
                    </li>
                    <li>
                      <a href="/hybrid-app-development">
                        Hybrid App Development
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="/search-engine-optimization">
                    Digital Marketing{" "}
                  </a>
                  <ul
                    className="mb-3 pl-[20px] [&>*]:font-[600] [&>*:hover]:text-[#f3763a] [&>*]:text-[#333333] [&>*]:text-[20px] list-outside"
                    style={{ listStyleImage: `url(${check2Image.src})` }}
                  >
                    <li>
                      <a href="/search-engine-optimization">
                        Search Engine Optimization
                      </a>
                    </li>
                    <li>
                      <a href="/pay-per-click-services">
                        Pay Per Click (PPC Campaigns)
                      </a>
                    </li>
                    <li>
                      <a href="/social-media-marketing">
                        Social Media Marketing
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="/saas-application-development">
                    Software Development
                  </a>
                  <ul
                    className="mb-3 pl-[20px] [&>*]:font-[600] [&>*:hover]:text-[#f3763a] [&>*]:text-[#333333] [&>*]:text-[20px] list-outside"
                    style={{ listStyleImage: `url(${check2Image.src})` }}
                  >
                    <li>
                      <a href="/saas-application-development">
                        SaaS Application Development
                      </a>
                    </li>
                    <li>
                      <a href="/content-management-systems">
                        Content Management Systems ( CMS )
                      </a>
                    </li>
                    <li>
                      <a href="/desktop-software">Desktop Software</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="aos-init aos-animate" data-aos="fade-left">
              <ul
                className="pl-[20px] [&>*]:font-[600] [&>*:hover]:text-[#f3763a] [&>*]:text-[#333333] [&>*]:text-[20px] list-outside"
                style={{ listStyleImage: `url(${checkImage.src})` }}
              >
                <li>
                  <a href="/who-we-are">Who We Are</a>
                </li>
                <li>
                  <a href="/our-process">Our Process</a>
                </li>
                <li>
                  <a href="/web-hosting">Web Hosting</a>
                </li>
                <li>
                  <a href="/partner-with-us">Partner With Us</a>
                </li>
                <li>
                  <a href="/legal-disclaimer">Legal Disclaimer</a>
                </li>
                <li>
                  <a href="/privacy-policy">Privacy Policy</a>
                </li>
                <li>
                  <a href="/contact-us">Contact Us</a>
                </li>
                <li>
                  <a href="/contact-us">Request a Quote</a>
                </li>
                <li>
                  <a href="/glendora">Glendora</a>
                </li>
                <li>
                  <a href="/irvine">Irvine</a>
                </li>
                <li>
                  <a href="/los-angeles">Los Angeles</a>
                </li>
                <li>
                  <a href="/pasadena">Pasadena</a>
                </li>
                <li>
                  <a href="/texas">Texas</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SiteMap;
