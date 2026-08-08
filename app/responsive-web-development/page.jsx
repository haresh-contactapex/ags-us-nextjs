import React from "react";
import Link from "next/link";
import bannerImage from "@/assets/images/responsive-web-development.jpg";
import seperatorOne from "@/assets/images/page_seperator_cwd1.png";

export const metadata = {
  title: "Responsive Web Development",
  description:
    "Websites that look and work great on every device — responsive web development services from Apex Global Solutions.",
  alternates: { canonical: "/responsive-web-development" },
};

const ResponsiveWebDevelopment = () => {
  return (
    <>
      {/* Inner Page Banner: start */}
      <section className="bg-[#f9f9f9] py-[40px] lg:py-[60px]">
        <div className="space-y-24 mx-auto px-6 max-w-5xl">
          <div className="items-center">
            <div className="aos-init aos-animate" data-aos="fade-left">
              <h2 className="text-center heading1">
                Make Suitability Your Website Essence
              </h2>
              <p className="mx-auto max-w-3xl text-[#06283b] text-[18px] lg:text-[24px] text-center leading-[1.5]">
                The number of smartphone users in North America is projected to
                reach&nbsp;
                <a
                  className="linkClass"
                  href="https://www.statista.com/forecasts/1144251/smartphone-users-in-north-america"
                  target="_blank"
                  rel="nofollow noopener"
                >
                  442.73 million by 2025.
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Inner Page Banner:: end */}
      {/* ===========SEC 1 STart================== */}
      <img
        src={seperatorOne.src}
        className="hidden xl:block mx-auto mt-[-70px] mb-[-80px] max-w-[400px] translate-x-[10%]"
      />
      <section className="py-[40px] lg:py-[60px]">
        <div className="space-y-24 px-6 MainContainer">
          <div className="items-center gap-[20px] md:gap-16 grid md:grid-cols-2">
            <img
              className="aos-init aos-animate"
              data-aos="fade-left"
              src={bannerImage.src}
            />
            <div className="aos-init aos-animate" data-aos="fade-right">
              <h2 className="heading2">Responsive Web Development</h2>
              <p className="mb-4">
                The possibility of future customer using anything from a
                Computer, Laptop, Tablet or Mobile Phone is high and in such
                cases, you cannot be sluggish and not have a responsive web
                design.
              </p>
              <p className="mb-4">
                A responsive website design will automatically adjust to the
                screen size your customer is using and gives them the best
                possible experience with your online business.
              </p>
              <p className="mb-4">
                <strong>Why do you need Responsive Website Development?</strong>
              </p>
              <p>
                Your first impression may not be the last, but it certainly
                should not be the bad one either. Your online marketing &amp;
                brand development must align with what you present to your
                customers on the front.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ===========SEC 2 STart================== */}
      <section className="bg-[#f9f9f9] py-[40px] lg:py-[60px]">
        <div className="space-y-24 mb-10 px-6 MainContainer">
          <div className="items-center">
            <div className="aos-init aos-animate" data-aos="fade-left">
              <h2 className="text-center heading2">
                Do you know how long it takes for someone to form an opinion on
                your website?
              </h2>
              <p className="mx-auto max-w-7xl text-center">
                It takes about&nbsp;
                <a
                  className="font-semibold text-[#f3763a] hover:text-[#06283c]"
                  href="https://www.sweor.com/firstimpressions"
                  target="_blank"
                  rel="noopener nofollow"
                >
                  50 milliseconds
                </a>
                . So what do you think will make them stay with you the longest?
                A responsive web design that is compatible with their device and
                feels good to their eyes.
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-24 px-6 MainContainer">
          <div className="items-start gap-[20px] md:gap-16 grid md:grid-cols-2">
            <div className="aos-init aos-animate" data-aos="fade-right">
              <ul className="pl-[20px] list-outside list-image-none md:list-image-[url(/images/check.png)]">
                <li className="pl-[5px]">
                  Our web developers build responsive website design that keeps
                  your website cross-browser compatible on all devices, always
                  giving your visitors a polished look of your business.
                </li>
              </ul>
            </div>
            <div className="aos-init aos-animate" data-aos="fade-right">
              <ul className="pl-[20px] list-outside list-image-none md:list-image-[url(/images/check.png)]">
                <li className="pl-[5px]">
                  Our{" "}
                  <a
                    className="font-semibold text-[#f3763a] hover:text-[#06283c]"
                    href="/agsnew/website-redesign-los-angeles/"
                  >
                    Website Redesign Services
                  </a>{" "}
                  and{" "}
                  <a
                    className="font-semibold text-[#f3763a] hover:text-[#06283c]"
                    href="/agsnew/web-maintenance-services/"
                  >
                    Website Maintenance Services
                  </a>{" "}
                  help your business keep up with the changes in the Internet
                  World. You gain conversions for your business and grow it
                  faster than before.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="py-[40px] lg:py-[60px]">
        <div className="space-y-24 mx-auto px-6 2xl:max-w-[1552px] max-w-7xl">
          <div className="items-start gap-[20px] md:gap-16 grid md:grid-cols-2">
            <div className="aos-init aos-animate" data-aos="fade-right">
              <p>
                We are also a{" "}
                <a
                  className="font-semibold text-[#f3763a] hover:text-[#06283c]"
                  href="/agsnew/mobile-app-development/"
                >
                  Mobile App Development Company
                </a>{" "}
                that helps clients readjust to mobile apps as more and more
                people shift to smartphones. It gives their business a makeover
                and helps them win visitors. We can help you revamp your
                business so that you see happy face customers more often.
              </p>
            </div>
            <div className="aos-init aos-animate" data-aos="fade-right">
              <p>
                Apex Global Solutions has a team of professional and experienced
                web developers who make your website design fit into every
                screen view perfectly that suit your potential customers.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ===========SEC 3 STart================== */}
      <section className="bg-[#f9f9f9] py-[40px] lg:py-[60px]">
        <div className="space-y-24 mx-auto px-6 max-w-7xl max-w-7xl">
          <div className="items-center">
            <div className="aos-init aos-animate" data-aos="fade-left">
              <h2 className="text-center heading1">
                Need A Dynamic Website? <br />
                We’re Always Available
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

export default ResponsiveWebDevelopment;
