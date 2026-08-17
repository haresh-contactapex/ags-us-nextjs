import Image from "next/image";
import Link from "next/link";
import seperatorImage from "@/assets/images/page_seperator_cwd1.png";
import webBannerImage from "@/assets/images/web-banner-design.jpg";

export const metadata = {
  title: "Web Banner Design Services in Los Angeles, CA",
  description:
    "Apex Global Solutions is creative website banner design and web ad banner design company for large and small size of businesses in Los Angeles, CA.",
};

export default function WebBannerDesignPage() {
  return (
    <>
      {/* Inner Page Banner: start */}
      <section className="bg-[#f9f9f9] py-[40px] lg:py-[60px]">
        <div className="space-y-24 mx-auto px-6 max-w-5xl">
          <div className="items-center">
            <div className="aos-init aos-animate" data-aos="fade-left">
              <h2 className="mb-10 font-playfairdisplay font-normal text-[36px] lg:text-[46px] 2xl:text-[46px] text-center leading-[1.2] lg:leading-[1.1] 2xl:leading-[1]">
                Let us make everyone online—your customer
              </h2>
              <p className="mx-auto text-[#06283b] text-[18px] lg:text-[24px] text-center leading-[1.5]">
                Humans presently have an attention span that is shorter than the
                goldfish.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Inner Page Banner:: end */}
      {/*==============================================================*/}
      <Image
        src={seperatorImage}
        alt=""
        className="hidden xl:block mx-auto mt-[-50px] mb-[-60px] max-w-[400px] translate-x-[10%]"
      />
      <section className="py-[40px] lg:py-[60px]">
        <div className="space-y-24 px-6 MainContainer">
          <div className="items-center gap-[20px] md:gap-16 grid md:grid-cols-2">
            <div className="aos-init aos-animate" data-aos="fade-right">
              <h1 className="mb-10 font-playfairdisplay font-normal text-[36px] lg:text-[46px] 2xl:text-[46px] md:text-left text-center leading-[1.2] lg:leading-[1.1] 2xl:leading-[1]">
                Web Banner Design
              </h1>
              <p className="mb-[20px]">
                Would you like to miss out on your prospective buyer because
                your website banner design was low quality, and you could not
                grasp people’s attention? Never.
              </p>
              <p className="mb-[20px]">
                With Internet marketing all over the place, everyone is your
                customer. Advertising on the internet through ads is the new
                natural. Website banner designs can create or crush everything
                for your business. Either you take an edge and bring high
                traffic to your website, or you lose the click.
              </p>
            </div>
            <Image
              className="aos-init aos-animate"
              data-aos="fade-left"
              src={webBannerImage}
              alt="Web Banner Design"
            />
          </div>
        </div>
      </section>
      {/*==============================================================*/}
      <section className="bg-[#f9f9f9] py-[40px] lg:py-[60px]">
        <div className="space-y-24 mb-[10px] px-6 MainContainer">
          <div className="items-center">
            <div className="aos-init aos-animate" data-aos="fade-left">
              <p className="mx-auto font-[700] text-center">
                The job does not end with putting up an advert. The tough part
                begins in the backend.
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-24 px-6 MainContainer">
          <div className="items-start gap-0 md:gap-[20px] md:gap-16 grid md:grid-cols-2">
            <div className="aos-init aos-animate" data-aos="fade-right">
              <p>
                With bounded space for your website banner design, you have to
                display the most crucial part of your business in the easiest
                and relevant style.
              </p>
            </div>
            <div className="aos-init aos-animate" data-aos="fade-right">
              <p>
                Show your products, services, offers, and discounts, in a design
                that does not put out fluff but looks aesthetically pleasing.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/*==============================================================*/}
      <section className="py-[40px] lg:py-[60px]">
        <div className="space-y-24 mx-auto mb-[20px] px-6 2xl:max-w-[1552px] max-w-7xl">
          <div className="items-start gap-[20px] md:gap-16 grid md:grid-cols-1">
            <div className="aos-init aos-animate" data-aos="fade-right">
              <p className="mx-auto font-[700] text-center">
                Let us help you get consistent traffic on your website.
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-24 px-6 MainContainer">
          <div className="items-start gap-0 md:gap-[20px] md:gap-16 grid md:grid-cols-2">
            <div className="aos-init aos-animate" data-aos="fade-right">
              <p className="mb-[20px]">
                Apex Global Solutions is one of the notable branding graphic
                design companies. We help you show your company in the most
                inspiring way with functional marketing strategies.
              </p>
              <p className="mb-[20px]">
                We create for your business<em>—</em>website banner designs
                <em>—</em>that prompt person to click on them and give your
                website a stay.
              </p>
              <p className="mb-[20px]">
                We are a web design company that knows how to please your
                customers with exceptional website banner designs because we
                display what they want to see of you.
              </p>
              <p className="mb-[0px]">
                Along with making website banner designs, we also provide SEO
                services for small business that help you optimize your website
                design so that your business can be discoverable on the google
                search page.
              </p>
            </div>
            <div className="aos-init aos-animate" data-aos="fade-right">
              <p className="mb-[20px]">
                To make your label on social media, we assist you with your
                social media marketing.
              </p>
              <p className="mb-[20px]">
                Besides providing{" "}
                <Link
                  className="font-[600] text-[#f3763a] hover:text-[#333333]"
                  href="/search-engine-optimization"
                >
                  local SEO services
                </Link>
                , as a digital marketing agency, we also render branding{" "}
                <Link
                  className="font-[600] text-[#f3763a] hover:text-[#333333]"
                  href="/logo-business-card-design"
                >
                  graphic design services
                </Link>
                , custom website design (Magento website development, Shopify
                website development, Open source website development, e-commerce
                web development), website maintenance,{" "}
                <Link
                  className="font-[600] text-[#f3763a] hover:text-[#333333]"
                  href="/mobile-app-development"
                >
                  mobile app development
                </Link>
                , and more.
              </p>
              <p className="mb-[0px]">
                We have expertise in website marketing analysis and can help you
                magnify your online marketing &amp; brand development strategy
                to gain more traffic and sales. Do not wait. Hurry up.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/*==============================================================*/}
      <section className="bg-[#f9f9f9] py-[40px] lg:py-[60px]">
        <div className="space-y-24 px-6 MainContainer">
          <div className="items-center">
            <div className="aos-init aos-animate" data-aos="fade-left">
              <h3 className="mb-10 font-playfairdisplay font-normal text-[36px] lg:text-[46px] 2xl:text-[46px] text-center leading-[1.2] lg:leading-[1.1] 2xl:leading-[1]">
                Grab that one Internet shot. <br />
                Get in touch with us.
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
