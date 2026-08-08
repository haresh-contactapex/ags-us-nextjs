import React from "react";
import Link from "next/link";
import seperatorImage from "@/assets/images/page_seperator_cwd1.png";
import webMaintenance from "@/assets/images/website-maintenance.jpg";

export const metadata = {
  title: "Website Maintenance",
  description:
    "Keep your site fast, secure, and up to date with ongoing website maintenance services from Apex Global Solutions.",
  alternates: { canonical: "/website-maintenance" },
};

const WebsiteMaintenance = () => {
  return (
    <>
      {/* Inner Page Banner: start */}
      <section className="bg-[#f9f9f9] py-[40px] lg:py-[60px]">
        <div className="space-y-24 mx-auto px-6 max-w-6xl">
          <div className="items-center">
            <div className="aos-init aos-animate" data-aos="fade-left">
              <h2 className="mb-10 font-playfairdisplay font-normal text-[36px] lg:text-[46px] 2xl:text-[70px] text-center leading-[1.2] lg:leading-[1.1] 2xl:leading-[1]">
                Stay on the top by constant maintenance
              </h2>
              <p className="mx-auto max-w-3xl text-[18px] lg:text-[24px] text-center leading-[1.5]">
                There’s your business, There’s your customer, and in between,
                there’s maintenance.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Inner Page Banner:: end */}
      {/* =================SEC 1 STart========================== */}
      <img
        src={seperatorImage.src}
        className="hidden xl:block mx-auto mt-[-70px] mb-[-80px] max-w-[400px] translate-x-[10%]"
      />
      <section className="py-[40px] lg:py-[60px]">
        <div className="space-y-24 px-6 MainContainer">
          <div className="items-center gap-[20px] md:gap-16 grid md:grid-cols-2">
            <div className="aos-init aos-animate" data-aos="fade-right">
              <h2 className="mb-10 font-playfairdisplay font-normal text-[36px] lg:text-[46px] 2xl:text-[70px] text-left leading-[1.2] lg:leading-[1.1] 2xl:leading-[1]">
                Website Maintenance
              </h2>
              <p className="mb-4">
                Internet goes through sudden, unpredictable changes. Running a
                business online can be time-consuming for you to keep up with
                those changes, let alone implementing them.
              </p>
              <p>
                Apex Global Solutions is a{" "}
                <a
                  className="font-[600] text-[#f3763a] hover:text-[#333333]"
                  href="/agsnew/"
                >
                  Web Development Company
                </a>{" "}
                that does not leave your hand after website development. We make
                sure that you never have to worry about your website maintenance
                ever.
              </p>
            </div>
            <div className="aos-init aos-animate">
              <img
                className="aos-init aos-animate"
                data-aos="fade-left"
                src={webMaintenance.src}
              />
            </div>
          </div>
        </div>
      </section>
      {/* ====================SEC 3 start===================== */}
      <section className="bg-[#f9f9f9] py-[40px] lg:py-[60px]">
        <div className="space-y-24 px-6 MainContainer">
          <p className="mb-[20px]">
            As your business grows so, does your Website’s Maintenance and
            up-gradation. But why do you even need website maintenance in the
            first place?
          </p>
        </div>
        <div className="space-y-24 mb-[20px] px-6 MainContainer">
          <div className="items-start gap-[0px] md:gap-[20px] md:gap-16 grid md:grid-cols-2">
            <div className="aos-init aos-animate" data-aos="fade-right">
              <ul className="pl-[20px] list-outside list-image-[url(/images/check.png)]">
                <li className="pl-[5px]">
                  To increase the performance of your website design
                </li>
                <li className="pl-[5px]">
                  To keep it up-to-date with the Internet Standards
                </li>
                <li className="pl-[5px]">To grow your discoverability</li>
                <li className="pl-[5px]">
                  To align your marketing with your online presence
                </li>
              </ul>
            </div>
            <div className="aos-init aos-animate" data-aos="fade-right">
              <ul className="pl-[20px] list-outside list-image-[url(/images/check.png)]">
                <li className="pl-[5px]">To keep your website Secured</li>
                <li className="pl-[5px]">
                  To meet the search engine parameters
                </li>
                <li className="pl-[5px]">
                  To upgrade to the newest tools and integrations
                </li>
                <li className="pl-[5px]">
                  To fix issues like broken links, poor SEO and more
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="space-y-24 px-6 MainContainer">
          <p>
            For a{" "}
            <a
              className="font-[600] text-[#f3763a] hover:text-[#333333]"
              href="/agsnew/responsive-web-development"
            >
              responsive web design
            </a>
            , website maintenance is vital for your business to evolve.
            Discoverability on the search engines demands regular content
            updates, blogs uploads, and calendars on the upcoming events to
            continue reminding your customers about your business. Our custom
            CMS help you keep your content crisp and brisk with the handy tools
            we provide.
          </p>
        </div>
      </section>
      {/* ==========SEC 2 End========================= */}
      <section className="py-[40px] lg:py-[60px]">
        <div className="space-y-24 px-6 MainContainer">
          <div className="items-start gap-[20px] md:gap-16 grid md:grid-cols-2">
            <div className="aos-init aos-animate" data-aos="fade-right">
              <p className="mb-[20px]">
                Protecting your customers from fraudulent activities and keeping
                your website secured through the latest internet security fixes
                will assist you to maintain your brand reputation. Through
                regular website analysis reports, we cut all the threats present
                and update your website security.
              </p>
              <p>
                Building a mobile app for your business is the new normal today.
                To give your customers an effortless experience, get traffic on
                your website and your business, we render{" "}
                <a
                  href="/agsnew/mobile-app-development/"
                  className="font-[600] text-[#f3763a] hover:text-[#333333]"
                >
                  mobile app development services
                </a>{" "}
                while feeling the need during website maintenance.
              </p>
            </div>
            <div className="aos-init aos-animate" data-aos="fade-right">
              <p className="mb-[20px]">
                Our website maintenance adds a Website Marketing Analysis to
                keep your business expenses optimized. We drop the content,
                tools and technology that is irrelevant and help you make the
                best use of your resources to grow your business at a flashing
                speed.
              </p>
              <p className="mb-[20px]">
                Apex Global Solutions keeps a tab on all the latest changes in
                the world of the Internet. We make sure everything is safe and
                is working in order. Our professional web developers, through
                their expertise, help you grow your business and make it
                discoverable, accessible and secure for your customers.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/*========================================================*/}
      <section className="bg-[#f9f9f9] py-[40px] lg:py-[60px]">
        <div className="space-y-24 px-6 MainContainer">
          <div className="items-center">
            <div className="aos-init aos-animate" data-aos="fade-left">
              <h2 className="mb-10 font-playfairdisplay font-normal text-[36px] lg:text-[46px] 2xl:text-[70px] text-center leading-[1.2] lg:leading-[1.1] 2xl:leading-[1]">
                We can repair anything on your website. <br />
                Talk to us today
              </h2>
              <div className="my-8 text-center">
                <Link
                  href="/contact-us/"
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

export default WebsiteMaintenance;
