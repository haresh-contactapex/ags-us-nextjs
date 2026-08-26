import React from "react";
import Link from "next/link";
import Image from "next/image";
import seperatorImage from "@/assets/images/page_seperator_cwd1.png";
import ecomWebImage from "@/assets/images/e-commerce-website.jpg";
import checkImage from "@/assets/images/check.png";

export const metadata = {
  title: "E-Commerce Website Design and Development in Los Angeles",
  description:
    "Apex Global Solutions is the best ecommerce website development company in Los Angeles. We specialize in creating user-friendly websites for ecommerce business.",
  alternates: { canonical: "/ecommerce-web-development" },
};

const ECommerceWebDevelopment = () => {
  return (
    <>
      {/* Inner Page Banner: start */}
      <section className="bg-[#f9f9f9] py-[40px] lg:py-[60px]">
        <div className="space-y-24 mx-auto px-6 max-w-6xl">
          <div className="items-center">
            <div className="aos-init aos-animate" data-aos="fade-left">
              <h2 className="mb-10 max-w-[1000px] font-playfairdisplay font-normal text-[36px] lg:text-[46px] 2xl:text-[46px] text-center leading-[1.2] lg:leading-[1.1] 2xl:leading-[1] max-auto">
                Custom E-commerce Solutions, well-suited to your business need
              </h2>
              <p className="mx-auto max-w-3xl text-[#06283b] text-[18px] lg:text-[24px] text-center leading-[1.5]">
                Are you looking to sell online? Fret not! Our world-class
                services will come to your help and provide you all the answers.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Inner Page Banner:: end */}
      {/* ========================================================= */}
      <Image
        src={seperatorImage.src}
        className="hidden xl:block mx-auto mt-[-50px] mb-[-50px] max-w-[400px] translate-x-[10%]"
        alt="E-commerce Website Development"
        width={750}
        height={339}
      />
      <section className="py-[40px] lg:py-[60px]">
        <div className="space-y-24 px-6 MainContainer">
          <div className="items-center gap-[20px] md:gap-16 grid md:grid-cols-2">
            <div className="aos-init aos-animate" data-aos="fade-right">
              <h1 className="mb-10 font-playfairdisplay font-normal text-[36px] lg:text-[46px] 2xl:text-[46px] text-left leading-[1.2] lg:leading-[1.1] 2xl:leading-[1]">
                E-commerce Website Development
              </h1>
              <p className="mb-4">
                In today’s time, selling online has become a necessity to keep
                your brand alive. E-commerce is the future of business for all
                organizations whether you are a small business, mid to large
                size corporation or a multi-national company. As a robust
                ecommerce website development company, we serve you with the
                best{" "}
                <a
                  href="/responsive-web-development"
                  className="font-semibold text-[#f3763a] hover:text-[#06283c]"
                >
                  {" "}
                  responsive website development solutions{" "}
                </a>{" "}
                that are visually appealing and leave a long-lasting impression.
              </p>
              <p className="mb-4">
                We tick all the boxes of your requirements and help you build a
                great online reputation. We emphasize on the need of creating a
                well-structured and responsive website for your company. As an
                ecommerce web development company, we have served hundreds of
                clients with custom e-commerce websites that help in building an
                online presence and generating higher sales.
              </p>
              
            </div>
            <div className="aos-init aos-animate">
              <Image
                className="mb-10 aos-init aos-animate"
                data-aos="fade-left"
                alt="E-commerce Website Development"
                width={750}
                height={339}
                src={ecomWebImage.src}
              />
              <p>
                We are committed to provide premium ecommerce website
                development services to help you build user-friendly, secured
                and end-to-end e-commerce platforms so that we can assist in a
                seamless transformation from physical business to e-business.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ========================================================= */}
      <section className="bg-[#f9f9f9] py-[40px] lg:py-[60px]">
        <div className="space-y-24 px-6 MainContainer">
          <div className="items-start gap-[20px] md:gap-16 grid md:grid-cols-2">
            <div className="aos-init aos-animate" data-aos="fade-right">
              <p>
                We are seasoned professionals who have mastered the art of
                building creative websites. This is what makes us a qualified
                and experienced ecommerce website design company. Our e-commerce
                website development services equip you with good sales, better
                ROI and a higher order average value. Our features like
                Integrated Marketing campaigns, Clarity &amp; Consistency,
                Shopping Cart Development, Responsive e-commerce web apps,
                Fraud-free website, secure payment gateways have helped our
                clients win various milestones.
              </p>
            </div>
            <div className="aos-init aos-animate" data-aos="fade-right">
              <p className="mb-[20px] font-[600]">
                Our comprehensive e-commerce solutions include-
              </p>
              <ul
                className="pl-[28px] list-outside md:list-outside"
                style={{ listStyleImage: `url(${checkImage.src})` }}
              >
                <li className="pl-[5px]">Dedicated Seller Panel</li>
                <li className="pl-[5px]">Separated Business Models</li>
                <li className="pl-[5px]">Dedicated Seller Panel</li>
                <li className="pl-[5px]">Multiple Shipping Options</li>
                <li className="pl-[5px]">Various Payment Options</li>
                <li className="pl-[5px]">Social Media Integration</li>
                <li className="pl-[5px]">Multi-Vendor E-commerce</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* ========================================================= */}
      <section className="py-[40px] lg:py-[60px]">
        <div className="space-y-24 px-6 MainContainer">
          <div className="items-start gap-[20px] md:gap-16 grid md:grid-cols-2">
            <div className="aos-init aos-animate" data-aos="fade-right">
              <p className="mb20px">
                Our expert ecommerce solutions, ecommerce website services,
                ecommerce website design services and ecommerce website
                development services provide you with multiple options that help
                you in scaling your business to the next level. Additionally,
                our bespoke solutions will enable the growth of your company’s
                revenue and reach its potential in highly competitive markets.
                If you are looking to upgrade or enhance your business,
                ecommerce website development will surely help your business.
              </p>
            </div>
            <div className="aos-init aos-animate" data-aos="fade-right">
              <p>
                Customization is our forte. If your business is all set for a
                new corporate innings vide e-commerce, we will give you the
                required leverage to optimize your revenue and get the desired
                revenue levels. With the best web applications, web tools and
                creative websites, we help small, medium and large enterprises
                achieve the best of the online world. We understand your
                industry and create a robust and secure website that can help
                you implement customized integrated systems for all your
                business needs.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ========================================================= */}
      <section className="bg-[#f9f9f9] py-[40px] lg:py-[60px]">
        <div className="space-y-24 px-6 MainContainer">
          <div className="items-center">
            <div className="aos-init aos-animate" data-aos="fade-left">
              <h3 className="mx-auto mb-10 max-w-[1000px] font-playfairdisplay font-normal text-[36px] lg:text-[46px] 2xl:text-[46px] text-center leading-[1.2] lg:leading-[1.1] 2xl:leading-[1]">
                E-commerce Websites are a powerful platform to bring you on the online map.
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

export default ECommerceWebDevelopment;
