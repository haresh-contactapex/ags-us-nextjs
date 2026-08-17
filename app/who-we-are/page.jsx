import Image from "next/image";
import Link from "next/link";

import seperatorImage from "@/assets/images/page_seperator_cwd1.png";
import bannerPosterImage from "@/assets/images/who-we-are.jpg";

export const metadata = {
  title: "About Web Development Company Los Angeles, California",
  description: "Apex Global Solutions is providing full range of web development, website design, software development and digital marketing services to our clients.",
};

export default function AboutPage() {
  return (
    <>
      {/* ===============================================================
      ================= Header End Here ================= */}
      {/* Inner Page Banner:start */}
      <section className="bg-[#f9f9f9] py-[40px] lg:py-[60px]">
        <div className="space-y-24 px-6 MainContainer">
          <div className="aos-init aos-animate" data-aos="fade-left">
            <h2 className="mb-10 font-playfairdisplay font-normal text-[36px] lg:text-[46px] 2xl:text-[46px] text-center leading-[1.2] lg:leading-[1.1] 2xl:leading-[1]">
              Bespoke web solutions that work in the favor of your business
            </h2>
            <p className="mx-auto max-w-[900px] text-[#06283b] text-[18px] lg:text-[24px] text-center leading-[1.5]">
              We are a Software development firm & a digital marketing agency
              that offers a full range of services to our clients for
              comprehensive growth in the online world.
            </p>
          </div>
        </div>
      </section>
      {/* Inner Page Banner::end */}

      {/* ===============================================================================
      ==SEC 1 STart============================================================================ */}
      <Image
              src={seperatorImage}
              alt=""
              className="hidden xl:block mx-auto mt-[-50px] mb-[-60px] max-w-[400px] translate-x-[10%]"
      />
      <section className="py-[40px] lg:py-[60px]">
        <div className="space-y-24 px-6 MainContainer">
          <div className="items-center gap-[20px] md:gap-16 grid md:grid-cols-2">
            <Image
              className="mx-auto 2xl:max-w-[600px] aos-init aos-animate"
              data-aos="fade-left"
              src={bannerPosterImage}
              alt="Who We Are"
            />
            <div className="aos-init aos-animate" data-aos="fade-right">
              <h1 className="mb-10 font-playfairdisplay font-normal text-[36px] lg:text-[46px] 2xl:text-[46px] text-left leading-[1.2] lg:leading-[1.1] 2xl:leading-[1]">
                Who We Are
              </h1>
              <p>
                We have been in the business of Web development and Internet
                marketing for over a decade. Our Web design company works
                with highly skilled in-house and freelance web developers
                that provide services like{" "}
                <Link
                  className="font-[600] text-[#f3763a] hover:text-[#333333]"
                  href="/custom-web-development"
                >
                  custom website development
                </Link>
                ,{" "}
                <Link
                  className="font-[600] text-[#f3763a] hover:text-[#333333]"
                  href="/website-redesign-los-angeles"
                >
                  website redesign services
                </Link>
                ,{" "}
                <Link
                  className="font-[600] text-[#f3763a] hover:text-[#333333]"
                  href="/mobile-app-development"
                >
                  mobile app development
                </Link>
                ,{" "}
                <Link
                  className="font-[600] text-[#f3763a] hover:text-[#333333]"
                  href="/website-maintenance"
                >
                  web maintenance
                </Link>
                ,{" "}
                <Link
                  className="font-[600] text-[#f3763a] hover:text-[#333333]"
                  href="/ecommerce-web-development"
                >
                  Ecommerce web development
                </Link>{" "}
                (including Shopify website development, Magento web
                development, WordPress programming) et al.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===============================================================================
      ==SEC 2  start============================================================================ */}
      <section className="bg-[#f9f9f9] py-[40px] lg:py-[60px]">
        <div className="space-y-24 px-6 MainContainer">
          <div className="items-start gap-[20px] md:gap-16 grid md:grid-cols-2">
            <div className="aos-init aos-animate" data-aos="fade-right">
              <p>
                As a Digital Marketing company, we offer solutions to our
                clients to make their brand discoverable by the search engine
                and their prospective customers. Our all-inclusive{" "}
                <Link
                  className="font-[600] text-[#f3763a] hover:text-[#333333]"
                  href="/logo-business-card-design"
                >
                  graphic design services
                </Link>{" "}
                like catalog design, flyer design, website banner design,
                logo design services search engine optimization (including{" "}
                <Link
                  className="font-[600] text-[#f3763a] hover:text-[#333333]"
                  href="/search-engine-optimization"
                >
                  local SEO services
                </Link>
                , SEO consultant), internet marketing like social media
                marketing, pay per click advertising (SEM), and many more
                will present your brand professionally to your online
                audience.
              </p>
            </div>
            <div className="aos-init aos-animate" data-aos="fade-right">
              <p>
                Over the years, we have converted our client’s money into a
                revenue-generating machine by enhancing their online
                marketing & brand development through our far-reaching
                website marketing analysis & website analysis reports. We
                know what works best for your customers because we believe
                in listening to your requirements and taking action for a
                maximum ROI. We do not subscribe to the “one-size-fits-all”
                approach as we recognize that the values and goals differ
                from a small business to a big enterprise.
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-start mx-auto mt-5 pt-0 max-w-[760px]">
          <div className="aos-init aos-animate" data-aos="fade-right">
            <p className="text-center">
              When you work with Apex Global Solutions, you don’t just work
              with a Web development company without any human touch but a
              hand you can rely upon 24*7 for your growth and success.
            </p>
          </div>
        </div>
      </section>
      {/* ===============================================================================
      ==SEC 2 End============================================================================ */}

      <section className="py-[40px] lg:py-[60px]">
        <div className="space-y-24 px-6 MainContainer">
          <div className="items-center">
            <div className="aos-init aos-animate" data-aos="fade-left">
              <h2 className="mb-10 font-playfairdisplay font-normal text-[36px] lg:text-[46px] 2xl:text-[46px] text-center leading-[1.2] lg:leading-[1.1] 2xl:leading-[1]">
                Why Work With Us?
              </h2>
            </div>
          </div>
        </div>
        <div className="space-y-24 mx-auto px-6 max-w-[860px]">
          <div className="items-start gap-[20px] md:gap-16 grid md:grid-cols-2">
            <div className="aos-init aos-animate" data-aos="fade-right">
              <ul className="mb-0 md:mb-4 pl-[28px] list-outside check-list">
                <li className="pl-[5px]">Result-oriented approach</li>
                <li className="pl-[5px]">Customer-centric solutions</li>
                <li className="pl-[5px]">Deliver on time</li>
                <li className="pl-[5px]">Updated Tools & Technology</li>
              </ul>
            </div>
            <div className="aos-init aos-animate" data-aos="fade-right">
              <ul className="mb-0 md:mb-4 pl-[28px] list-outside check-list">
                <li className="pl-[5px]">Scientific Methodology</li>
                <li className="pl-[5px]">Enthusiastic & Skilled Team</li>
                <li className="pl-[5px]">Work with Values</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================================================================================== */}
      <section className="bg-[#f9f9f9] py-[40px] lg:py-[60px]">
        <div className="space-y-24 px-6 MainContainer">
          <div className="items-center">
            <div className="aos-init aos-animate" data-aos="fade-left">
              <h3 className="mb-10 font-playfairdisplay font-normal text-[36px] lg:text-[46px] 2xl:text-[46px] text-center leading-[1.2] lg:leading-[1.1] 2xl:leading-[1]">
                See something that resonates with you?<br/>
Call us today!

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
}
