import React from "react";
import Link from "next/link";
import Image from "next/image";

import reDesign from "@/assets/images/redesign1.png";
import websiteRedesign from "@/assets/images/website-redesign.jpg";
import seperatorOne from "@/assets/images/page_seperator_cwd1.png";


export const metadata = {
  title: "Website Redesign Services and Web Design Company in Los Angeles",
  description:
    "Apex Global Solutions is a website redesign company in Los Angeles. We provide fully responsive websites that impact on the success of your business.",    
  alternates: { canonical: "/website-redesign-los-angeles" },
};

const WebsiteRedesign = () => {
  return (
    <>
      {/* Inner Page Banner: start */}
      <section className="bg-[#f9f9f9] py-[40px] lg:py-[60px]">
        <div className="space-y-24 mx-auto px-6 max-w-[1200px]">
          <div className="items-center">
            <div className="aos-init aos-animate" data-aos="fade-left">
              <h2 className="mb-10 font-playfairdisplay font-normal text-[36px] lg:text-[46px] 2xl:text-[46px] text-center leading-[1.2] lg:leading-[1.1] 2xl:leading-[1]">
                Align Your Brand and Look Good on the Outside
              </h2>
              <p className="mx-auto max-w-[1000] text-[#06283b] text-[18px] lg:text-[24px] text-center leading-[1.5]">
                When was the last time you cared for your online presence? You
                can’t recall, <br className="br-000" />
                but your customers can, with a glimpse at your website design.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Inner Page Banner:: end */}

      {/* ============================================== */}
      <Image
        src={seperatorOne.src}
        alt="Dotted Seperator"
        className="hidden xl:block mx-auto mt-[-50px] mb-[-60px] max-w-[400px] translate-x-[10%]"
        width={564}
        height={269}
      />
      
      
      
      
      
      
      <section className="py-[40px] lg:py-[60px]">
        <div className="space-y-24 px-6 MainContainer">
          <div className="items-center gap-[20px] md:gap-16 grid md:grid-cols-2">
            <Image
              className="aos-init aos-animate"
              alt="Website Redesign"
              data-aos="fade-left"
              src={websiteRedesign.src}
              width={750}
              height={409}
            />
            <div className="aos-init aos-animate" data-aos="fade-right">
              <h1 className="mb-10 font-playfairdisplay font-normal text-[36px] lg:text-[46px] 2xl:text-[46px] text-left leading-[1.2] lg:leading-[1.1] 2xl:leading-[1]">
                Website Redesign
              </h1>
              <p className="mb-4">
                Positioning yourself as a brand that stays up-to-date gives your
                business authority amongst others.
              </p>
              <p className="mb-4">
                But before we jump onto why you should invest in our website
                redesign services, let’s see whether you’re ready for a
                redesign. Go for a website redesign because you want-
              </p>
              <ul className="pl-[20px] list-outside list-image-none md:list-image-[url(/images/check.png)]">
                <li className="pl-[5px]">The right traffic on your website.</li>
                <li className="pl-[5px]">
                  To retain your visitors and drive conversions.
                </li>
                <li className="pl-[5px]">
                  To enhance your Business to Client relationship.
                </li>
                <li className="pl-[5px]">
                  To be in sync with technological upgrades.
                </li>
                <li className="pl-[5px]">To rebrand your business.</li>
                <li className="pl-[5px]">
                  To enhance your{" "}
                  <a
                    className="font-[600] text-[#f3763a] hover:text-[#333333]"
                    href="/search-engine-optimization"
                  >
                    Online Marketing
                  </a>{" "}
                  &amp; Brand Development.
                </li>
                <li className="pl-[5px]">
                  To generate higher revenues at the end of the day.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* ============================================== */}
      <section className="bg-[#f9f9f9] py-[40px] lg:py-[60px]">
        <div className="space-y-24 mb-10 px-6 MainContainer">
          <div className="items-center">
            <div className="aos-init aos-animate" data-aos="fade-left">
              <h2 className="mb-10 font-playfairdisplay font-normal text-[36px] lg:text-[46px] 2xl:text-[46px] text-center leading-[1.2] lg:leading-[1.1] 2xl:leading-[1]">
                Going for even one single goal above? Then it’s time you
                redesign your existing website.
              </h2>
            </div>
          </div>
        </div>
        <div className="space-y-24 px-6 MainContainer">
          <div className="items-start gap-[20px] md:gap-16 grid md:grid-cols-2">
            <div className="aos-init aos-animate" data-aos="fade-right">
              <p>
                If you’re still wondering what good will a website redesign do
                to your online business, let’s talk about some technical
                intricacies.
              </p>
            </div>
            <div className="aos-init aos-animate" data-aos="fade-right">
              <p>
                We make sure that your website not only looks sleeker but also
                your end-user never loses interest, and you don’t lose business.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ============================================== */}
      <section className="py-[40px] lg:py-[60px]">
        <div className="space-y-24 mb-[20px] px-6 MainContainer">
          <p>
            Our Website Redesign Services strengthens your online DNA and gives
            you a responsive and dynamic website with-
          </p>
        </div>
        <div className="space-y-24 px-6 MainContainer">
          <div className="items-start gap-[20px] md:gap-16 grid md:grid-cols-2">
            <div className="aos-init aos-animate" data-aos="fade-right">
              <ul className="mb-[20px] pl-[20px] list-outside list-image-none md:list-image-[url(/images/check.png)]">
                <li className="pl-[5px]">
                  Fast Loading Speed                  
                </li>
                
                <li className="pl-[5px]">
                  <a className="font-[600] text-[#f3763a] hover:text-[#333333]" href="/responsive-web-development/">
                    Responsive Web Design
                  </a>
                </li>
                
                <li className="pl-[5px]">Latest Search Engine Yardsticks</li>
                <li className="pl-[5px]">
                  Updated{" "}
                  <a className="font-[600] text-[#f3763a] hover:text-[#333333]" href="
                  
                  website-security/">
                    Website Security
                  </a>{" "}
                  Provisions
                </li>
              </ul>
            </div>
            <div className="aos-init aos-animate" data-aos="fade-right">
              <ul className="mb-[20px] pl-[20px] list-outside list-image-none md:list-image-[url(/images/check.png)]">
                <li className="pl-[5px]">Compatible Layout</li>
                <li className="pl-[5px]">Updated Internet Standards</li>
                <li className="pl-[5px]">Social Media Integrations</li>
                <li className="pl-[5px]">
                  Smooth Integration with E-Commerce and more
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="space-y-24 mb-[20px] px-6 MainContainer">
          <p>
            Apex Global Solutions builds a system that gives your customers the
            best-uninterrupted experience with your online platform. We have a
            team of professional and experienced Web Developers working for you
            because we do not take it for granted.
          </p>
        </div>
      </section>
      {/* ============================================== */}
      <section className="bg-[#f9f9f9] py-[40px] lg:py-[60px]">
        <div className="space-y-24 mx-auto px-6 max-w-7xl max-w-7xl">
          <div className="items-center">
            <div className="aos-init aos-animate" data-aos="fade-left">
              <h3 className="mb-10 font-playfairdisplay font-normal text-[36px] lg:text-[46px] 2xl:text-[46px] text-center leading-[1.2] lg:leading-[1.1] 2xl:leading-[1.1]">
                Ready to transform your business? <br />
                Let’s talk
              </h3>
              <div className="my-8 text-center">
                <Link
                  href="/contact-us/"
                  className="flex items-center bg-orange-500 hover:bg-black mx-auto rounded-full w-fit overflow-hidden font-semibold text-white transition"
                >
                  {/* Left Circle */}
                  <span className="flex justify-center items-center bg-gray-100 ml-1 rounded-full w-14 h-14">
                    <svg
                      className="w-5 h-5 text-orange-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 5l7 7-7 7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                      ></path>
                    </svg>
                  </span>
                  {/* Text */}
                  <span className="px-6 py-4 font-[700] text-[20px] tracking-wide">
                    CONTACT US
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WebsiteRedesign;
