import Image from "next/image";
import Link from "next/link";
import seperatorImage from "@/assets/images/page_seperator_cwd1.png";
import bannerPosterImage from "@/assets/images/our-process.jpg";

export const metadata = {
  title: "Our Process - Web Development and Website Design in Los Angeles",
  description: "Apex Global Solutions team follow this web development and website design process and methodology such as planning, strategy, design, develop, testing and deliver.",
};


export default function OurProcessPage() {
  return (
    <>
      {/* Inner Page Banner: start */}
      <section className="bg-[#f9f9f9] py-[40px] lg:py-[60px]">
        <div className="space-y-24 px-6 MainContainer">
          <div className="items-center mx-auto max-w-[1000px]">
            <div className="aos-init aos-animate" data-aos="fade-left">
              <h2 className="mb-10 font-playfairdisplay font-normal text-[36px] lg:text-[46px] 2xl:text-[46px] text-center leading-[1.2] lg:leading-[1.1] 2xl:leading-[1]">
                Apex Global Solutions brings to you numerous robust features
                to create a world-class online destination
              </h2>
              <p className="text-[#06283b] text-[18px] lg:text-[24px] text-center leading-[1.5]">
                What makes Apex Global Solutions the best in what it does for your business?
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
            <div className="relative flex items-center mx-auto w-full max-w-[600px] aspect-[4/3]">
              <Image
                src={bannerPosterImage}
                alt="Our Process"                                
                data-aos="fade-right"
                width={800}
                height={381}
              />            
            </div>

            <div className="aos-init aos-animate" data-aos="fade-left">
              <h1 className="mb-10 font-playfairdisplay font-normal text-[36px] lg:text-[46px] 2xl:text-[46px] text-left leading-[1.2] lg:leading-[1.1] 2xl:leading-[1]">
                Our Process
              </h1>

              <p className="mb-4">
                It is our well-thought-out process polished over the years by
                a technology-driven team of experienced people.
              </p>

              <p>
                Apex Global Solutions is a Web Development Company & a
                Digital Marketing Agency that understands your business
                values and goals. Thereby we provide you with the best
                tactical solutions for online growth.
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
                We Deliver What Your Business Demands
              </h2>
            </div>
          </div>
        </div>

        <div className="space-y-24 px-6 MainContainer">
          <div className="items-start gap-[20px] md:gap-16 grid md:grid-cols-2">
            <div className="aos-init aos-animate" data-aos="fade-right">
              <p className="mb-4">
                Our Web design studio & Digital marketing company provides
                you with an extensive range of services your business
                requires for online success.
              </p>

              <p className="mb-4">
                Our in-house & freelance web developers have technical
                expertise in open source web development,{" "}
                <Link
                  className="font-semibold text-[#f3763a] hover:text-[#06283c]"
                  href="/custom-web-development"
                >
                  custom web development
                </Link>
                ,{" "}
                <Link
                  className="font-semibold text-[#f3763a] hover:text-[#06283c]"
                  href="/wordpress-web-development"
                >
                  WordPress programming
                </Link>{" "}
                and provide you a user-friendly{" "}
                <Link
                  className="font-semibold text-[#f3763a] hover:text-[#06283c]"
                  href="/website-redesign-los-angeles"
                >
                  web design
                </Link>{" "}
                that brings credibility to your digital venture.
              </p>

              <p>
                Let’s look at how we execute the process developed over
                decades and drive online success for your business.
              </p>
            </div>

            <div className="aos-init aos-animate" data-aos="fade-right">
              <p className="mb-4">
                From{" "}
                <Link
                  className="font-semibold text-[#f3763a] hover:text-[#06283c]"
                  href="/responsive-web-development"
                >
                  Website development
                </Link>{" "}
                to{" "}
                <Link
                  className="font-semibold text-[#f3763a] hover:text-[#06283c]"
                  href="/website-maintenance"
                >
                  website maintenance
                </Link>
                ,{" "}
                <Link
                  className="font-semibold text-[#f3763a] hover:text-[#06283c]"
                  href="/website-redesign-los-angeles"
                >
                  website redesign
                </Link>{" "}
                &{" "}
                <Link
                  className="font-semibold text-[#f3763a] hover:text-[#06283c]"
                  href="/mobile-app-development"
                >
                  mobile app development
                </Link>
                ,{" "}
                <Link
                  className="font-semibold text-[#f3763a] hover:text-[#06283c]"
                  href="/ecommerce-web-development"
                >
                  e-commerce development
                </Link>
                ,{" "}
                <Link
                  className="font-semibold text-[#f3763a] hover:text-[#06283c]"
                  href="/logo-business-card-design"
                >
                  graphic design services
                </Link>
                ,{" "}
                <Link
                  className="font-semibold text-[#f3763a] hover:text-[#06283c]"
                  href="/search-engine-optimization"
                >
                  internet marketing
                </Link>{" "}
                including{" "}
                <Link
                  className="font-semibold text-[#f3763a] hover:text-[#06283c]"
                  href="/search-engine-optimization"
                >
                  search engine optimization
                </Link>
                ,{" "}
                <Link
                  className="font-semibold text-[#f3763a] hover:text-[#06283c]"
                  href="/social-media-marketing"
                >
                  social media marketing
                </Link>
                ,{" "}
                <Link
                  className="font-semibold text-[#f3763a] hover:text-[#06283c]"
                  href="/rebranding-services"
                >
                  rebranding
                </Link>
                ,{" "}
                <Link
                  className="font-semibold text-[#f3763a] hover:text-[#06283c]"
                  href="/pay-per-click-services"
                >
                  pay per click advertising
                </Link>{" "}
                et al., we do everything for you.
              </p>

              <p className="mb-4">
                At Apex Global Solutions, you—the client, do all the talking
                for your business, and we listen. Keeping your goals in
                mind, our team brings into play the scientific methodology
                to generate ideas for your business triumph.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-[40px] lg:py-[60px]">
        <div className="space-y-24 px-6 MainContainer">
          <div className="items-center">
            <div className="aos-init aos-animate" data-aos="fade-left">
              <h3 className="mb-10 font-playfairdisplay font-normal text-[36px] lg:text-[46px] 2xl:text-[46px] text-center leading-[1.2] lg:leading-[1.1] 2xl:leading-[1]">
                Planning & Strategy
              </h3>
            </div>
          </div>
        </div>

        <div className="space-y-24 px-6 MainContainer">
          <div className="items-start gap-[20px] md:gap-16 grid md:grid-cols-2">
            <div className="aos-init aos-animate" data-aos="fade-right">
              <p>
                Immense Research, Maximum Transparency, Customer-Oriented
                approach makes it easy for us to strategize for the
                marketing techniques we put in place to bring you on top of
                the pyramid of{" "}
                <Link
                  className="font-semibold text-[#f3763a] hover:text-[#06283c]"
                  href="/social-media-marketing"
                >
                  social media marketing
                </Link>
                .
              </p>
            </div>
            <div className="aos-init aos-animate" data-aos="fade-right">
              <p>
                We can efficiently finalize templates to give your users a
                top-notch experience with your{" "}
                <Link
                  className="font-semibold text-[#f3763a] hover:text-[#06283c]"
                  href="/website-redesign-los-angeles"
                >
                  website design
                </Link>{" "}
                and decide on the technology while developing your{" "}
                <Link
                  className="font-semibold text-[#f3763a] hover:text-[#06283c]"
                  href="/ecommerce-web-development"
                >
                  ecommerce website
                </Link>
                . Planning & Strategizing for your online growth helps us
                communicate & deliver on time.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f9f9f9] py-[40px] lg:py-[60px]">
        <div className="space-y-24 px-6 MainContainer">
          <div className="items-center">
            <div className="aos-init aos-animate" data-aos="fade-left">
              <h2 className="mb-10 font-playfairdisplay font-normal text-[36px] lg:text-[46px] 2xl:text-[46px] text-center leading-[1.2] lg:leading-[1.1] 2xl:leading-[1]">
                Design & Develop
              </h2>
            </div>
          </div>
        </div>

        <div className="space-y-24 px-6 MainContainer">
          <div className="items-start gap-[20px] md:gap-16 grid md:grid-cols-2">
            <div className="aos-init aos-animate" data-aos="fade-right">
              <p>
                Qualified Technical Team, Quality Prioritized, Up-to-date
                technology is the next in our process that helps us install
                the latest technology for your website development, use the
                best open source CMS as per your business needs, create a
                one-of-a-kind campaign strategy for your online marketing &
                brand development.
              </p>
            </div>
            <div className="aos-init aos-animate" data-aos="fade-right">
              <p>
                The Design & Develop stage is where we act and perform our
                best to keep your business running smoothly by building
                updated websites and extremely intuitive apps.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-[40px] lg:py-[60px]">
        <div className="space-y-24 px-6 MainContainer">
          <div className="items-center">
            <div className="aos-init aos-animate" data-aos="fade-left">
              <h2 className="mb-10 font-playfairdisplay font-normal text-[36px] lg:text-[46px] 2xl:text-[46px] text-center leading-[1.2] lg:leading-[1.1] 2xl:leading-[1]">
                Test & Deliver
              </h2>
            </div>
          </div>
        </div>

        <div className="space-y-24 px-6 MainContainer">
          <div className="items-start gap-[20px] md:gap-16 grid md:grid-cols-2">
            <div className="aos-init aos-animate" data-aos="fade-right">
              <p>
                Tracking, Analyzing, and Reporting help you know what is
                working for your business and what is not. Our website
                analysis report and website marketing analysis, Testing,
                QnA team helps your business market itself with a
                professional web design and surpass your competition with
                the best Internet marketing approach that suits your
                business goals.
              </p>
            </div>
            <div className="aos-init aos-animate" data-aos="fade-right">
              <p>
                By looking beyond our services, we try to provide you with
                the best combination of services such as Compatibility
                Testing, API Testing, Performance Testing, Mobile Testing,
                Web Testing and excel in delivering a customized solution.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f9f9f9] py-[40px] lg:py-[60px]">
        <div className="space-y-24 px-6 MainContainer">
          <div className="items-center">
            <div className="aos-init aos-animate" data-aos="fade-left">
              <h3 className="mb-10 font-playfairdisplay font-normal text-[36px] lg:text-[46px] 2xl:text-[46px] text-center leading-[1.2] lg:leading-[1.1] 2xl:leading-[1]">
                Find tailored solutions and customized processes at Apex
                Global Solutions. Reach Us Today
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
