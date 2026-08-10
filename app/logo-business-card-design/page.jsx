import Link from "next/link";
import Image from "next/image";

import separatorImage from "@/assets/images/page_seperator_cwd1.png";
import businessCardDesign from "@/assets/images/logo-business-card-design.jpg";

export default function LogoBusinessCard() {
  return (
    <>
      {/* Inner Page Banner */}
      <section className="bg-[#f9f9f9] py-[40px] lg:py-[60px]">
        <div className="space-y-24 mx-auto px-6 max-w-6xl">
          <div className="items-center">
            <div data-aos="fade-left">
              <h1 className="mb-10 font-playfairdisplay font-normal text-[36px] lg:text-[46px] 2xl:text-[70px] text-center leading-[1.2] lg:leading-[1.1] 2xl:leading-[1]">
                Identify Yourself Amongst Many
              </h1>

              <p className="mx-auto max-w-[900px] text-[#06283b] text-[18px] lg:text-[24px] text-center leading-[1.5]">
                Your audience wants to know why your business is different. Your
                Brand Logo will make that opening impact they expect from your
                company.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Separator */}
      <Image
        src={separatorImage}
        alt=""
        className="hidden xl:block mx-auto mt-[-60px] mb-[-80px] max-w-[400px] translate-x-[10%]"
      />

      {/* Logo / Business Card Design */}
      <section className="py-[40px] lg:py-[60px]">
        <div className="space-y-24 px-6 MainContainer">
          <div className="items-center gap-[20px] md:gap-16 grid md:grid-cols-2">
            <div data-aos="fade-right">
              <h2 className="mb-10 font-playfairdisplay font-normal text-[36px] lg:text-[46px] 2xl:text-[70px] text-left leading-[1.2] lg:leading-[1.1] 2xl:leading-[1]">
                Logo/Business Card Design
              </h2>

              <p className="mb-4">
                Do you want to shine unique from your competitors? Logo design
                is what should be your top priority then.
              </p>

              <p className="mb-4">
                A logo brings life to your business by making it recognizable to
                your customers. If you want people to remember your business for
                a long time, your brand logo will make that a reality.
              </p>

              <p className="mb-4">
                Apex Global Solutions is a top-notch custom Logo Design Company
                that gives your business a mark over others. We help you create
                an inspiring logo design that people can recall when the time is
                right.
              </p>
            </div>

            <Image
              src={businessCardDesign}
              alt="Logo and business card design"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Why Logo Design */}
      <section className="bg-[#f9f9f9] py-[40px] lg:py-[60px]">
        <div className="space-y-24 mx-auto mb-10 px-6 2xl:max-w-[1552px] max-w-7xl">
          <div className="items-center">
            <div data-aos="fade-left">
              <h2 className="mb-10 font-playfairdisplay font-normal text-[36px] lg:text-[46px] 2xl:text-[70px] text-center leading-[1.2] lg:leading-[1.1] 2xl:leading-[1]">
                Not Yet Convinced For a Logo Design?
              </h2>
            </div>
          </div>
        </div>

        <div className="space-y-24 px-6 MainContainer">
          <div className="items-start gap-[20px] md:gap-16 grid md:grid-cols-2">
            <div data-aos="fade-right">
              <p>
                Okay, being a customer yourself, would you like to spend your
                hard-earned money on a brand that isn’t professional enough to
                have a logo? Of course, not. Your customers judge you. Yes, they
                do. Your business needs to create that first mark to connect
                with them for a lifetime.
              </p>
            </div>

            <div data-aos="fade-right">
              <p>
                The logo we design for your business will grab their thoughts.
                It will depict what your company stands for. The best way to
                speak about your business values, interestingly, is through your
                logo. Don’t miss the opportunity to distinguish your business
                and build authority. We are a logo design company that provides
                the fittest logo your business deserves because we believe in
                understanding your company’s core values through listening.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Make Your Brand Memorable */}
      <section className="py-[40px] lg:py-[60px]">
        <div className="space-y-24 mx-auto mb-10 px-6 2xl:max-w-[1552px] max-w-7xl">
          <div className="items-center">
            <div data-aos="fade-left">
              <h2 className="mb-10 font-playfairdisplay font-normal text-[36px] lg:text-[46px] 2xl:text-[70px] text-center leading-[1.2] lg:leading-[1.1] 2xl:leading-[1]">
                Make Your Brand Memorable
              </h2>
            </div>
          </div>
        </div>

        <div className="space-y-24 px-6 MainContainer">
          <div className="items-start gap-[20px] md:gap-16 grid md:grid-cols-2">
            <div data-aos="fade-right">
              <p>
                We do not desert you with logo design but provide you a complete
                package so that customers can find your business. To spread the
                word about your business makeover, we help you with large-scale
                advertising through designing. We design for you clean and
                professional Business cards, Flyer designs, Catalog designs,{" "}
                <Link
                  className="font-semibold text-[#f3763a] hover:text-[#06283c]"
                  href="/web-banner-design"
                >
                  Website Banner designs
                </Link>
                , Brochures, and more.
              </p>
            </div>

            <div data-aos="fade-right">
              <p>
                When your business is ready to go live, we help you with online
                marketing &amp; brand development. Along with that, we provide{" "}
                <Link
                  className="font-[600] text-[#f3763a] hover:text-[#333333]"
                  href="/custom-web-development"
                >
                  custom website development
                </Link>{" "}
                to grab your customers’ attention at the aptest time. You know
                when it is time to put your skates on.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#f9f9f9] py-[40px] lg:py-[60px]">
        <div className="space-y-24 mx-auto px-6 max-w-7xl">
          <div className="items-center">
            <div data-aos="fade-left">
              <h2 className="mb-10 font-playfairdisplay font-normal text-[36px] lg:text-[46px] 2xl:text-[70px] text-center leading-[1.2] lg:leading-[1.1] 2xl:leading-[1]">
                Create Your Brand Perception. <br />
                Speak To Us Today
              </h2>

              <div className="my-8 text-center">
                <Link
                  href="/contact-us/"
                  className="flex w-fit items-center bg-orange-500 hover:bg-black mx-auto rounded-full overflow-hidden font-semibold text-white transition"
                >
                  <span className="flex justify-center items-center bg-gray-100 ml-1 rounded-full w-14 h-14">
                    <svg
                      className="w-5 h-5 text-orange-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        d="M9 5l7 7-7 7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                      />
                    </svg>
                  </span>

                  <span className="px-6 py-4 text-lg tracking-wide">
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
