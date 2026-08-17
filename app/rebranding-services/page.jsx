import Image from "next/image";
import Link from "next/link";
import seperatorImage from "@/assets/images/page_seperator_cwd1.png";
import rebrandingServices from "@/assets/images/rebranding-services.jpg";

export const metadata = {
  title: "Rebranding Services in Los Angeles, CA",
  description: "Apex Global Solutions is a rebranding services provider company in Los Angeles, We focused on logo redesigning and brand identity design to grow your business.",
};

export default function RebrandingServicesPage() {
  return (
    <>
      {/* Inner Page Banner: start */}
      <section className="bg-[#f9f9f9] py-[40px] lg:py-[60px]">
        <div className="space-y-24 mx-auto px-6 max-w-6xl">
          <div className="items-center">
            <div className="aos-init aos-animate" data-aos="fade-left">
              <h2 className="mb-10 font-playfairdisplay font-normal text-[36px] lg:text-[46px] 2xl:text-[46px] text-center leading-[1.2] lg:leading-[1.1] 2xl:leading-[1]">
                Be The Quickest Modified Brand
              </h2>
              <p className="mx-auto max-w-[900px] text-[#06283b] text-[18px] lg:text-[24px] text-center leading-[1.5]">
                Speak to your audience in a brand new way.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Inner Page Banner:: end */}
      {/*===================================================*/}
      <Image
        src={seperatorImage}
        alt=""
        className="hidden xl:block mx-auto mt-[-40px] mb-[-70px] max-w-[400px] translate-x-[10%]"
      />
      <section className="py-[40px] lg:py-[60px]">
        <div className="space-y-24 px-6 MainContainer">
          <div className="items-center gap-[20px] md:gap-16 grid md:grid-cols-2">
            <Image
              className="aos-init aos-animate"
              data-aos="fade-left"
              src={rebrandingServices}
              alt="Rebranding Services"
            />
            <div className="aos-init aos-animate" data-aos="fade-right">
              <h1 className="mb-10 font-playfairdisplay font-normal text-[36px] lg:text-[46px] 2xl:text-[46px] text-left leading-[1.2] lg:leading-[1.1] 2xl:leading-[1]">
                Rebranding Services
              </h1>
              <p className="mb-4">
                If your brand identity has become outdated and archaic, it’s
                time for you to get a move on and become relevant again. To grow
                your business, you have to keep analyzing your brand uniqueness
                and bring in the required changes. It can be your logo
                redesigning or a complete marketing strategy shift.
              </p>
              <p className="mb-4">
                <strong>But why do you even need a rebranding?</strong>
              </p>
              <p>
                With your age-old website design or your asynchronous logo, your
                business has lost a connect—with your customers. Or you are
                growing quite well, and you want to make your business
                international. The rebranding will adjust your brand identity
                and speak the right way to the target audience outside.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/*===================================================*/}
      <section className="bg-[#f9f9f9] py-[40px] lg:py-[60px]">
        <div className="space-y-24 px-6 MainContainer">
          <div className="items-start gap-[20px] md:gap-16 grid md:grid-cols-2">
            <div className="aos-init aos-animate" data-aos="fade-right">
              <p className="mb-[20px]">
                Apex Global Solutions, one of the leading branding graphic
                design companies, cater to your needs by identifying your goals.
                We help your business stay ahead of your competitors.
              </p>
              <p className="mb-[20px]">
                Rebranding is one of the strategies we implement to
                differentiate your brand image in the modern world.
              </p>
              <p>
                We provide services like logo design, catalog design, flyer
                design, website banner design, branding graphic design, custom
                website design,{" "}
                <Link
                  className="font-[600] text-[#f3763a] hover:text-[#333333]"
                  href="/mobile-app-development"
                >
                  mobile app development
                </Link>
                , and more.
              </p>
            </div>
            <div className="aos-init aos-animate" data-aos="fade-right">
              <p className="mb-[20px]">
                To give a complete makeover to your brand, we create hype for
                your business through our{" "}
                <Link
                  className="font-[600] text-[#f3763a] hover:text-[#333333]"
                  href="/search-engine-optimization"
                >
                  SEO services
                </Link>{" "}
                and Social Media Marketing.
              </p>
              <p className="mb-[0px]">
                After your brand refashioning, unrolling the news becomes easy
                when you work with our team of professionals who will provide
                you the expertise to conceptualize your idea.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/*===================================================*/}
      <section className="py-[40px] lg:py-[60px]">
        <div className="space-y-24 px-6 MainContainer">
          <div className="items-center">
            <div className="aos-init aos-animate" data-aos="fade-left">
              <h2 className="mb-10 font-playfairdisplay font-normal text-[36px] lg:text-[46px] 2xl:text-[46px] text-center leading-[1.2] lg:leading-[1.1] 2xl:leading-[1]">
                Revamp &amp; Rebrand
              </h2>
            </div>
          </div>
        </div>
        <div className="space-y-24 px-6 MainContainer">
          <div className="items-start gap-[20px] md:gap-16 grid md:grid-cols-2">
            <div className="aos-init aos-animate" data-aos="fade-right">
              <p className="mb-[20px]">
                With the changing technology and marketing trends, keeping up
                becomes difficult without a holding hand. We can be your hand
                while you transform your brand identity.
              </p>
              <p>
                Our{" "}
                <Link
                  className="font-[600] text-[#f3763a] hover:text-[#333333]"
                  href="/website-redesign-los-angeles"
                >
                  website redesign services
                </Link>{" "}
                give your customers a fresh user experience of your online
                platform
              </p>
            </div>
            <div className="aos-init aos-animate" data-aos="fade-right">
              <p className="mb-[20px]">
                As more and more people move to smartphones, we help your
                business go easy—by developing mobile apps—for your business and
                give your customers personalized touch.
              </p>
              <p className="mb-[20px]">
                Adapt to a much more clean and clear brand style and deliver
                your customers an interactive experience. Push in that extra
                energy your brand requires.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/*===================================================*/}
      <section className="bg-[#f9f9f9] py-[40px] lg:py-[60px]">
        <div className="space-y-24 px-6 MainContainer">
          <div className="items-center">
            <div className="aos-init aos-animate" data-aos="fade-left">
              <h3 className="mb-10 font-playfairdisplay font-normal text-[36px] lg:text-[46px] 2xl:text-[46px] text-center leading-[1.2] lg:leading-[1.1] 2xl:leading-[1]">
                Be The Change. Connect With Us Now
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
