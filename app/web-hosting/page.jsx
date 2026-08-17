import Image from "next/image";
import Link from "next/link";
import seperatorImage from "@/assets/images/page_seperator_cwd1.png";
import webBannerImage from "@/assets/images/web-hosting.jpg";

export const metadata = {
  title: "Web Hosting Service Provider in Los Angeles, CA",
  description: "Apex Global Solutions is provides top-rated and expertly tested web hosting services with affordable web hosting plans in Los Angeles, California.",
};


export default function WebHostingPage() {
  return (
    <>
      {/* Inner Page Banner: start */}
      <section className="bg-[#f9f9f9] py-[40px] lg:py-[60px]">
        <div className="space-y-24 mx-auto px-6 max-w-[1000px]">
          <div className="items-center">
            <div className="aos-init aos-animate" data-aos="fade-left">
              <h2 className="mb-10 font-playfairdisplay font-normal text-[36px] lg:text-[46px] 2xl:text-[46px] text-center leading-[1.2] lg:leading-[1.1] 2xl:leading-[1]">
                Explore the most top-rated and expertly tested web hosting
                services
              </h2>
              <p className="mx-auto max-w-[900px] text-[#06283b] text-[18px] lg:text-[24px] text-center leading-[1.5]">
                A Digital Marketing Agency focused on scaling your online
                business, Apex Global Solutions is a leading Web Development
                Company that helps you grow.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Inner Page Banner:: end */}

      {/* SEC 1 start */}
      <Image
              src={seperatorImage}
              alt=""
              className="hidden xl:block mx-auto mt-[-60px] mb-[-80px] max-w-[400px] translate-x-[10%]"
            />

      <section className="py-[40px] lg:py-[60px]">
        <div className="space-y-24 px-6 MainContainer">
          <div className="items-center gap-[20px] md:gap-16 grid md:grid-cols-2">
            <div className="relative mx-auto w-full max-w-[600px] aspect-[4/3]">
              <Image
                src={webBannerImage}
                alt="Web Hosting"
                fill
                className="object-cover"
                data-aos="fade-right"
              />
            </div>

            <div className="aos-init aos-animate" data-aos="fade-left">
              <h1 className="mb-10 font-playfairdisplay font-normal text-[36px] lg:text-[46px] 2xl:text-[46px] md:text-left text-center leading-[1.2] lg:leading-[1.1] 2xl:leading-[1]">
                Web Hosting
              </h1>

              <p className="mb-4">
                You drive high-level conversions with a great ROI when we
                help you with{" "}
                <Link
                  className="font-semibold text-[#f3763a] hover:text-[#06283c]"
                  href="/responsive-web-development"
                >
                  Web development
                </Link>{" "}
                and Internet marketing.
              </p>

              <p className="mb-4">
                Being top in our game, we do not leave you and your business
                with only{" "}
                <Link
                  className="font-semibold text-[#f3763a] hover:text-[#06283c]"
                  href="/responsive-web-development"
                >
                  website development
                </Link>
                ,{" "}
                <Link
                  className="font-semibold text-[#f3763a] hover:text-[#06283c]"
                  href="/social-media-marketing"
                >
                  social media marketing
                </Link>
                , or{" "}
                <Link
                  className="font-semibold text-[#f3763a] hover:text-[#06283c]"
                  href="/search-engine-optimization"
                >
                  search engine optimization
                </Link>
                . Taking a step ahead to make it easy for you, we also
                provide affordable and dedicated Web Hosting Solutions.
              </p>

              <p className="mb-4">
                Our Web Hosting Services will help you create stunning,
                high-quality{" "}
                <Link
                  className="font-semibold text-[#f3763a] hover:text-[#06283c]"
                  href="/custom-web-development"
                >
                  custom website designs
                </Link>{" "}
                and give you a smooth and uninterrupted online experience.
              </p>

              <p>
                We cater to everyone from small business owners with basic{" "}
                <Link
                  className="font-semibold text-[#f3763a] hover:text-[#06283c]"
                  href="/website-redesign-los-angeles"
                >
                  web design
                </Link>{" "}
                to large corporations—who need performance, speed, and high
                security.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEC 2 start */}
      <section className="bg-[#f9f9f9] py-[40px] lg:py-[60px]">
        <div className="space-y-24 px-6 MainContainer">
          <div className="items-center">
            <div className="aos-init aos-animate" data-aos="fade-left">
              <h2 className="mb-10 font-playfairdisplay font-normal text-[36px] lg:text-[46px] 2xl:text-[46px] text-center leading-[1.2] lg:leading-[1.1] 2xl:leading-[1]">
                Get your website on move with easy and affordable web
                hosting plans that include
              </h2>
            </div>
          </div>
        </div>

        <div className="space-y-24 px-6 MainContainer">
          <div className="items-start gap-[20px] md:gap-16 grid md:grid-cols-2">
            <div className="aos-init aos-animate" data-aos="fade-right">
              <ul
                className="pl-[20px] list-outside"
                style={{ listStyleImage: "url(/images/check.png)" }}
              >
                <li className="pl-[5px]">
                  Memorable domain name with domain theft protection
                </li>
                <li className="pl-[5px]">
                  Remarkable page speed with high-performance servers
                </li>
                <li className="pl-[5px]">
                  Website building tools & Scripts optimized for WordPress,
                  Joomla, Drupal
                </li>
                <li className="pl-[5px]">
                  Secured Email accounts for basic or professional needs
                </li>
              </ul>
            </div>

            <div className="aos-init aos-animate" data-aos="fade-right">
              <ul
                className="pl-[20px] list-outside"
                style={{ listStyleImage: "url(/images/check.png)" }}
              >
                <li className="pl-[5px]">
                  Easy-to-use Control Panel with maximum checks
                </li>
                <li className="pl-[5px]">
                  Unmetered Bandwidth & High-Speed SSD storage
                </li>
                <li className="pl-[5px]">
                  Highly trained technicians to assist in server setup,
                  migration, and more
                </li>
                <li className="pl-[5px]">
                  Round-the-clock advanced support for queries
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SEC 2 end */}
      <section className="py-[40px] lg:py-[60px]">
        <div className="space-y-24 px-6 MainContainer">
          <div className="items-start gap-[20px] md:gap-16 grid md:grid-cols-2">
            <div className="aos-init aos-animate" data-aos="fade-right">
              <p>
                Using Apex Global Solutions’ web hosting services, you can
                manage your online business with web hosting plans
                customized to meet your business objectives and website
                traffic. The one-click script installs compatible with
                WordPress, Joomla, Drupal, and hundreds of customizable
                templates to choose from and help you build your beautiful
                website fast, reliable, and secured.
              </p>
            </div>
            <div className="aos-init aos-animate" data-aos="fade-right">
              <p>
                Our web hosting company gets everything you need for online
                success, from attractive designs to unparalleled user
                experience. Get your{" "}
                <Link
                  className="font-[600] text-[#f3763a] hover:text-[#333333]"
                  href="/custom-web-development"
                >
                  custom website design
                </Link>{" "}
                or{" "}
                <Link
                  className="font-[600] text-[#f3763a] hover:text-[#333333]"
                  href="/ecommerce-web-development"
                >
                  ecommerce website
                </Link>{" "}
                up and running with the help of our professional in-house &
                freelance web developers who believe in leaving no stone
                unturned.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#f9f9f9] py-[40px] lg:py-[60px]">
        <div className="space-y-24 mx-auto px-6 max-w-[1000px]">
          <div className="items-center">
            <div className="aos-init aos-animate" data-aos="fade-left">
              <h3 className="mx-auto mb-10 max-w-[800px] font-playfairdisplay font-normal text-[36px] lg:text-[46px] 2xl:text-[46px] text-center leading-[1.2] lg:leading-[1.1] 2xl:leading-[1]">
                Invest in the best Web Hosting services with us! Call Us Now
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
