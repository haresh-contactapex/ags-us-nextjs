import React from "react";
import Link from "next/link";
import Image from "next/image";
import seperatorImage from "@/assets/images/page_seperator_cwd1.png";
import customWebDevImage from "@/assets/images/custom-web-development.jpg";
import checkImage from "@/assets/images/check.png";

export const metadata = {
  title: "Custom Web Design and Development Company in Los Angeles",
  description:
    "Apex Global Solutions offers custom web development and website design services in Los Angeles. Our expert team provides customized web solutions as per requirements.",
  alternates: { canonical: "/custom-web-development" },
};

const CustomWebDevelopment = () => {
  return (
    <>
      {/* Inner Page Banner: start */}
      <section className="bg-[#f9f9f9] py-[40px] lg:py-[60px]">
        <div className="space-y-24 mx-auto px-6 max-w-5xl">
          <div className="items-center">
            <div className="aos-init aos-animate" data-aos="fade-left">
              <h2 className="mb-10 font-playfairdisplay font-normal text-[36px] lg:text-[46px] 2xl:text-[46px] text-center leading-[1.2] lg:leading-[1.1] 2xl:leading-[1]">
                Let’s design your magical mark
              </h2>
              <p className="mx-auto max-w-[100%] text-[#06283b] text-[18px] lg:text-[24px] text-center leading-[1.5]">
                Apex Global Solutions is a leading{" "}
                <Link
                  className="font-[600] text-[#f3763a] hover:text-[#333333]"
                  href="/who-we-are"
                >
                  Web Design Company
                </Link>{" "}
                that helps you create relationships with your customers through a wonderful website.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Inner Page Banner:: end */}
      <Image
        src={seperatorImage.src}
        alt="Dotted page separator"
        className="hidden xl:block mx-auto mt-[-30px] mb-[-80px] max-w-[400px] translate-x-[10%]"
        width={390}
        height={200}
      />
      <section className="py-[40px] lg:py-[60px]">
        <div className="space-y-24 px-6 MainContainer">
          <div className="items-center gap-[20px] md:gap-16 grid md:grid-cols-2">
            <Image
              className="aos-init aos-animate"
              data-aos="fade-left"
              src={customWebDevImage.src}
              alt="Custom web development"
              width={539}
              height={256}
            />
            <div className="aos-init aos-animate" data-aos="fade-right">
              <h1 className="mb-10 font-playfairdisplay font-normal text-[36px] lg:text-[46px] 2xl:text-[46px] text-left leading-[1.2] lg:leading-[1.1] 2xl:leading-[1]">
                Custom Web Development
              </h1>
              <p className="mb-[20px]">
                Does your brand need a tailor-made{" "}
                <Link
                  className="font-[600] text-[#f3763a] hover:text-[#333333]"
                  href="/website-redesign-los-angeles"
                >
                  website design
                </Link>
                ? Do you want to give your targeted audience an experience that
                matches no other website out there? Don’t worry! We have got
                your back.
              </p>
              <p className="mb-[20px]">
                Our{" "}
                <Link
                  className="font-[600] text-[#f3763a] hover:text-[#333333]"
                  href="/custom-web-development"
                >
                  custom web development
                </Link>{" "}
                services will give your brand the unique identity it deserves.
                With a team of the top web and graphic designers, we create a{" "}
                <Link
                  className="font-[600] text-[#f3763a] hover:text-[#333333]"
                  href="/responsive-web-development"
                >
                  responsive web design
                </Link>
                -to give your clients-an impressive user experience. Along with
                enhancing your online{" "}
                <Link
                  className="font-[600] text-[#f3763a] hover:text-[#333333]"
                  href="/rebranding-services"
                >
                  brand development
                </Link>{" "}
                with the flexible{" "}
                <Link
                  className="font-[600] text-[#f3763a] hover:text-[#333333]"
                  href="/website-redesign-los-angeles"
                >
                  web design
                </Link>
                , fast loading, and low bounce rates, you will be completely
                satisfied by the level of internet security we provide.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* =============================================================== */}
      <section className="bg-[#f9f9f9] py-[40px] lg:py-[60px]">
        <div className="space-y-24 mx-auto mb-10 px-6 2xl:max-w-[1552px] max-w-7xl">
          <div className="items-center">
            <div className="aos-init aos-animate" data-aos="fade-left">
              <h2 className="mb-10 font-playfairdisplay font-normal text-[36px] lg:text-[46px] 2xl:text-[46px] text-center leading-[1.2] lg:leading-[1.1] 2xl:leading-[1]">
                Why do you need custom web development?
              </h2>
            </div>
          </div>
        </div>

        <div className="space-y-24 px-6 MainContainer">
          <div className="items-start gap-[20px] md:gap-16 grid md:grid-cols-2">
            <div className="aos-init aos-animate" data-aos="fade-right">
              <p className="mb-[20px]">
                Custom Website Development gives your website an advantage over
                other basic and flat websites you confront every day. Along with
                the freedom to experiment with the web design, we hand over to
                you the website that is
              </p>
              <ul
                className="pl-[20px] list-outside"
                style={{ listStyleImage: `url(${checkImage.src})` }}
              >
                <li className="pl-[5px]">Flexible and user-friendly</li>
                <li className="pl-[5px]">Responsive</li>
                <li className="pl-[5px]">Fast loaded</li>
                <li className="pl-[5px]">Integrate third-party APIs</li>
                <li className="pl-[5px]">Safe and Secure</li>
              </ul>
            </div>

            <div className="aos-init aos-animate" data-aos="fade-right">
              <p className="mb-[20px]">
                How do you benefit from our website maintenance?
              </p>
              <ul className="pl-[20px] list-outside list-image-[url(/images/check.png)]">
                <li className="pl-[5px]">
                  We ensure that all your information is up to date.
                </li>
                <li className="pl-[5px]">
                  We make sure there are no broken links
                </li>
                <li className="pl-[5px]">
                  We see that every page is accessible all time
                </li>
                <li className="pl-[5px]">
                  We sync your offline business events with your online platform
                  and more.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* =============================================================== */}
      <section className="py-[40px] lg:py-[60px]">
        <div className="space-y-24 px-6 MainContainer">
          <div className="items-start gap-[20px] md:gap-16 grid md:grid-cols-2">
            <div className="aos-init aos-animate" data-aos="fade-right">
              <p>
                Apex Global Solutions believes in your goals. For the same
                reasons, we also provide website development through WordPress
                Programming. Our experienced WordPress Developers make sure that
                you get a thriving, fully customized, and cost-effective
                website.
              </p>
            </div>
            <div className="aos-init aos-animate" data-aos="fade-right">
              <p>
                We leave no stone unturned. For the best experience for our
                clients, our{" "}
                <a
                  className="font-semibold text-[#f3763a] hover:text-[#06283c]"
                  href="/website-maintenance/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  web maintenance services
                </a>{" "}
                keep their website up and running with our latest web security
                fixes.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-24 mx-auto mt-[30px] px-6 max-w-[700px]">
          <p className="text-center">
            To sum it up, we take all your responsibility on our shoulders and
            make your business easy.
          </p>
        </div>
      </section>
      {/* =============================================================== */}
      <section className="bg-[#f9f9f9] py-[40px] lg:py-[60px]">
        <div className="space-y-24 mx-auto px-6 max-w-7xl max-w-7xl">
          <div className="items-center">
            <div className="aos-init aos-animate" data-aos="fade-left">
              <h3 className="mb-10 font-playfairdisplay font-normal text-[36px] lg:text-[46px] 2xl:text-[46px] text-center leading-[1.2] lg:leading-[1.1] 2xl:leading-[1.1]">
                What are you waiting for! <br />
                Let’s be in touch
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

export default CustomWebDevelopment;
