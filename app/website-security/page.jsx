import React from "react";
import Link from "next/link";
import seperatorImage from "@/assets/images/page_seperator_cwd1.png";
import webSecurity from "@/assets/images/website-security.jpg";

export const metadata = {
  title: "Website Security",
  description:
    "Protect your site from threats with proactive website security services from Apex Global Solutions.",
  alternates: { canonical: "/website-security" },
};

const WebsiteSecurity = () => {
  return (
    <>
      {/* Inner Page Banner: start */}
      <section className="bg-[#f9f9f9] py-[40px] lg:py-[60px]">
        <div className="space-y-24 mx-auto px-6 max-w-5xl">
          <div className="items-center">
            <div className="aos-init aos-animate" data-aos="fade-left">
              <h2 className="mb-10 font-playfairdisplay font-normal text-[36px] lg:text-[46px] 2xl:text-[70px] text-center leading-[1.2] lg:leading-[1.1] 2xl:leading-[1]">
                Don’t Let Security Gaps Wreck Your Name
              </h2>
              <p className="mx-auto max-w-3xl text-[#06283b] text-[18px] lg:text-[24px] text-center leading-[1.5]">
                It can take you years to build the reputation you stand on
                today, and a tiny crack in your website can ruin it in minutes.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Inner Page Banner:: end */}
      {/* ============================================================== */}
      <img
        src={seperatorImage.src}
        className="hidden xl:block mx-auto mt-[-70px] mb-[-80px] max-w-[400px] translate-x-[10%]"
      />
      <section className="py-[40px] lg:py-[60px]">
        <div className="space-y-24 px-6 MainContainer">
          <div className="items-center gap-[20px] md:gap-16 grid md:grid-cols-2">
            <img
              className="aos-init aos-animate"
              data-aos="fade-left"
              src={webSecurity.src}
            />
            <div className="aos-init aos-animate" data-aos="fade-right">
              <h2 className="mb-10 font-playfairdisplay font-normal text-[36px] lg:text-[46px] 2xl:text-[70px] text-left leading-[1.2] lg:leading-[1.1] 2xl:leading-[1]">
                Website Security
              </h2>
              <p className="mb-[20px]">
                Your website is your online badge in the business world. You
                cannot afford to demolish it with somebody arising and stealing
                your customer data, blowing away their privacy.
              </p>
              <p className="mb-[20px]">
                There can be an intruder anywhere on the internet, waiting to
                reveal your security position. Leaving the sensitive information
                of your customers in the wrong hands can spoil your brand image
                forever.
              </p>
              <p className="mb-[20px]">
                Do not worry. We will not let that happen to your business.
              </p>
              <p>
                The foremost priority of Apex Global Solutions is the security
                of the website design. To see your customers return more often,
                making your website secure, builds the trust and loyalty your
                business needs to grow.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-[20px] mt-[20px] px-6 MainContainer">
          <div className="items-start gap-[20px] grid md:grid-cols-1">
            <div className="aos-init aos-animate" data-aos="fade-right">
              <p>
                <strong>
                  We provide your business, website security from –
                </strong>
              </p>
            </div>
          </div>
          <div className="items-start gap-[0px] md:gap-[20px] grid md:grid-cols-3">
            <ul className="pl-[20px] list-outside list-image-[url(/images/check.png)]">
              <li className="pl-[5px]">DDoS Attacks</li>
              <li className="pl-[5px]">RFI Attacks</li>
              <li className="pl-[5px]">Prohibited Content</li>
            </ul>
            <ul className="pl-[20px] list-outside list-image-[url(/images/check.png)]">
              <li className="pl-[5px]">XSS Attacks</li>
              <li className="pl-[5px]">DFI Attacks</li>
              <li className="pl-[5px]">Phishing</li>
            </ul>
            <ul className="pl-[20px] list-outside list-image-[url(/images/check.png)]">
              <li className="pl-[5px]">SQL Attacks</li>
              <li className="pl-[5px]">Identity thefts</li>
              <li className="pl-[5px]">Botnets and more</li>
            </ul>
          </div>
          <div className="items-start gap-[20px] grid md:grid-cols-1">
            <div className="aos-init aos-animate" data-aos="fade-right">
              <p className="mb-[20px]">
                <strong>
                  How do we protect your website and its integrity?
                </strong>
              </p>
              <p>
                We understand that fetching sensitive information from customers
                calls for extra security and protection. Thus, our web
                developers work with the open-source community and detect
                vulnerabilities and software patches.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ================================================================================= */}
      <section className="bg-[#f9f9f9] py-[40px] lg:py-[60px]">
        <div className="space-y-24 px-6 MainContainer">
          <div className="items-start gap-[20px] md:gap-16 grid md:grid-cols-2">
            <div className="aos-init aos-animate" data-aos="fade-right">
              <p className="mb-[20px]">
                We protect the integrity of your website and your business by
                integrating SSL encryption between pages on your website design
                to establish secure connections.
              </p>
              <p>
                Being a{" "}
                <a
                  className="font-[600] text-[#f3763a] hover:text-[#333333]"
                  href="/agsnew/who-we-are"
                >
                  Web Development Company
                </a>
                , we are extra careful about your data. Whether you use our
                custom CMS or open-source CMS, we see that your uploaded content
                is only accessible by authorized individuals.
              </p>
            </div>
            <div className="aos-init aos-animate" data-aos="fade-right">
              <p className="mb-[20px]">
                We also help you identify if your customer’s data is authentic
                and make your website secured while maintaining your customer’s
                privacy and helping you emerge as a trustworthy brand.
              </p>
              <p>
                Today, when data is the new oil, safeguarding it from online
                misuse and making your business a reliable brand is the least
                you can do for your website security.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ============================================================================= */}
      <section className="py-[40px] lg:py-[60px]">
        <div className="space-y-24 mx-auto px-6 max-w-[761px]">
          <div className="items-start gap-[20px] md:gap-16 grid md:grid-cols-1">
            <div className="aos-init aos-animate" data-aos="fade-right">
              <p className="text-center">
                Our{" "}
                <a
                  className="font-semibold text-[#f3763a] hover:text-[#06283c]"
                  href="/agsnew/web-maintenance-services"
                >
                  Website Maintenance
                </a>{" "}
                Service provides a complete website analysis report that will
                help you know the strength of security on your current website
                and assist you to update to more suitable website security
                levels. What are your waiting for?
              </p>
            </div>
          </div>
        </div>
      </section>
      {/*==============================================================*/}
      <section className="bg-[#f9f9f9] py-[40px] lg:py-[60px]">
        <div className="space-y-24 mx-auto px-6 max-w-7xl max-w-7xl">
          <div className="items-center">
            <div className="aos-init aos-animate" data-aos="fade-left">
              <h2 className="mb-10 font-playfairdisplay font-normal text-[36px] lg:text-[46px] 2xl:text-[70px] text-center leading-[1.2] lg:leading-[1.1] 2xl:leading-[1]">
                It’s Never Too Late. Contact Us Today
              </h2>
              <div className="my-8 text-center">
                <Link
                  href="/agsnew/contact-us/"
                  className="flex w-fit items-center bg-orange-500 hover:bg-black mx-auto rounded-full overflow-hidden font-semibold text-white transition"
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
                  <span className="px-6 py-4 text-lg tracking-wide">
                    CONTACT US
                  </span>
                </Link>
              </div>
              {/* <div class="text-center">
                      <img class="mx-auto" src="images/cycle.png"/>
                  </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WebsiteSecurity;
