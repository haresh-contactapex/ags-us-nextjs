import Image from "next/image";
import Link from "next/link";
import seperatorImage from "@/assets/images/page_seperator_cwd1.png";
import bannerPosterImage from "@/assets/images/banners-posters-design.jpg";

export const metadata = {
  title: "Banners and Posters Design Company in Los Angeles, CA",
  description: "Apex Global Solutions is provides high quality banner and poster design services in Los Angeles. We design custom banners, posters, and flyers for your business.",
};

export default function BannersPostersDesignPage() {
  return (
    <>
      {/* Inner Page Banner: start */}
      <section className="bg-[#f9f9f9] py-[40px] lg:py-[60px]">
        <div className="space-y-24 mx-auto px-6 max-w-6xl">
          <div className="items-center">
            <div className="aos-init aos-animate" data-aos="fade-left">
              <h2 className="mb-10 font-playfairdisplay font-normal text-[36px] lg:text-[46px] 2xl:text-[46px] text-center leading-[1.2] lg:leading-[1.1] 2xl:leading-[1]">
                Get Ahead Of Your Competition
              </h2>
              <p className="mx-auto max-w-3xl text-[#06283b] text-[18px] lg:text-[24px] text-center leading-[1.5]">
                Cost-effectively advertise your business now.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Inner Page Banner:: end */}
      {/*======================================================*/}
      <Image
        src={seperatorImage}
        alt=""
        className="hidden xl:block mx-auto mt-[-50px] mb-[-60px] max-w-[400px] translate-x-[10%]"
      />
      <section className="py-[40px] lg:py-[60px]">
        <div className="space-y-24 px-6 MainContainer">
          <div className="items-center gap-[20px] md:gap-16 grid md:grid-cols-2">
            <Image
              className="aos-init aos-animate"
              data-aos="fade-left"
              src={bannerPosterImage}
              alt="Banners & Posters Design"
            />
            <div className="aos-init aos-animate" data-aos="fade-right">
              <h1 className="mb-10 font-playfairdisplay font-normal text-[36px] lg:text-[46px] 2xl:text-[46px] md:text-left text-center leading-[1.2] lg:leading-[1.1] 2xl:leading-[1]">
                Banners &amp; Posters Design
              </h1>
              <p className="mb-[20px]">
                Being in a business, drawing local customers can be very crucial
                to grow your income. Pulling customers from in and around your
                business settings gets easy when you advertise through flyer
                designs and banners.
              </p>
              <p>
                From upcoming events like sales, special offers to discounts,
                banners, posters and flyer designs, help create a sense of
                urgency in people to buy from you.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/*======================================================*/}
      <section className="bg-[#f9f9f9] py-[40px] lg:py-[60px]">
        <div className="space-y-24 px-6 MainContainer">
          <div className="items-start gap-[20px] md:gap-16 grid md:grid-cols-2">
            <div className="aos-init aos-animate" data-aos="fade-right">
              <p className="mb-[20px]">
                Banners, flyers and poster designs bring in targeted customers
                and save you bucks, eliminating expenses on people who are not
                your audience.
              </p>
              <p>
                Apex Global Solutions provides first-rate flyer design services.
                We create for your business out-of-the-box custom banners and
                flyer designs.
              </p>
            </div>
            <div className="aos-init aos-animate" data-aos="fade-right">
              <p className="mb-[20px]">
                If you want to sell to travelers on a highway, nothing can beat
                a banner design on a billboard calling out your business name in
                giant letters and a captivating design. Or you want to catch
                attention for sale in a festive season, why not get a
                magnificent poster design?
              </p>
              <p>
                Increase your chances of reaching out to a large customer base
                with our poster and flyer design services. We work with a team
                of learned graphic designers who have a knack for marketing
                ways.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/*======================================================*/}
      <section className="py-[40px] lg:py-[60px]">
        <div className="space-y-24 mx-auto mb-[20px] md:mb-[35px] px-6 MainContainer">
          <div className="items-center">
            <div className="aos-init aos-animate" data-aos="fade-left">
              <p className="mx-auto max-w-7xl font-[700] text-center">
                The banners, poster and flyer designs we make will fascinate
                people to explore your business.
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-24 mx-auto mt-[-10px] md:mb-[35px] px-6 MainContainer">
          <div className="items-start gap-[20px] md:gap-16 grid md:grid-cols-2">
            <div className="aos-init aos-animate" data-aos="fade-right">
              <p className="mb-[20px]" style={{}}>
                The more your customers see your banners and get your posters
                and flyers, the chances of availing of your products and
                services increase every time.
              </p>
              <p>
                Along with our banner and flyer design services, we being one of
                the foremost branding graphic design companies, provide catalog
                design,{" "}
                <Link
                  className="font-semibold text-[#f3763a] hover:text-[#06283c]"
                  href="/rebranding-services"
                >
                  branding graphic design services
                </Link>
                , website banner design services. We are also a{" "}
                <Link
                  className="font-semibold text-[#f3763a] hover:text-[#06283c]"
                  href="/logo-business-card-design"
                >
                  logo design company
                </Link>{" "}
                that can help you make your brand well-known.
              </p>
            </div>
            <div className="aos-init aos-animate" data-aos="fade-right">
              <p className="mb-[20px]">
                Don’t miss the chance to be a memorable brand. Make it easy for
                people to reach out to you.
              </p>
              <p>
                We also cater to custom website development and mobile app
                development needs along with{" "}
                <Link
                  className="font-semibold text-[#f3763a] hover:text-[#06283c]"
                  href="/social-media-marketing"
                >
                  social media marketing
                </Link>
                . We can help you create a prominent social media presence for
                your business as well.
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-24 px-6 MainContainer">
          <div className="items-center">
            <div className="aos-init aos-animate" data-aos="fade-left">
              <p className="mx-auto max-w-7xl font-[700] text-center">
                With Apex Global Solutions, you can shop everything under one
                roof for all of your advertising and marketing needs.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/*======================================================*/}
      <section className="bg-[#f9f9f9] py-[40px] lg:py-[60px]">
        <div className="space-y-24 px-6 MainContainer">
          <div className="items-center">
            <div className="aos-init aos-animate" data-aos="fade-left">
              <h3 className="mb-10 font-playfairdisplay font-normal text-[36px] lg:text-[46px] 2xl:text-[46px] text-center leading-[1.2] lg:leading-[1.1] 2xl:leading-[1]">
                Let’s Showcase Your Best Version. <br />
                Reach Us Now
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
