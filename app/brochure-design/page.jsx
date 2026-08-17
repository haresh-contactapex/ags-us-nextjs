import Image from "next/image";
import Link from "next/link";
import seperatorImage from "@/assets/images/page_seperator_cwd1.png";
import brochureDesign from "@/assets/images/brochure-design.jpg";
import checkImage from "@/assets/images/check.png";

export const metadata = {
  title: "Brochure Design Company in Los Angeles, CA",
  description: "Apex Global Solutions is provides brochure design services in Los Angeles, CA. We design your company brochures and catalog designs in various sizes and folds.",
};

export default function BrochureDesignPage() {
  return (
    <>
      {/* Inner Page Banner: start */}
      <section className="bg-[#f9f9f9] py-[40px] lg:py-[60px]">
        <div className="space-y-24 mx-auto px-6 max-w-5xl">
          <div className="items-center">
            <div className="aos-init aos-animate" data-aos="fade-left">
              <h2 className="mb-10 font-playfairdisplay font-normal text-[36px] lg:text-[46px] 2xl:text-[46px] text-center leading-[1.2] lg:leading-[1.1] 2xl:leading-[1]">
                Drive People To Action By <br />
                Stunning Designs
              </h2>
              <p className="mx-auto max-w-3xl text-[#06283b] text-[18px] lg:text-[24px] text-center leading-[1.5]">
                Apt designs and layouts can make or break.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Inner Page Banner:: end */}
      {/*=====================================================================*/}
      <Image
        src={seperatorImage}
        alt=""
        className="hidden xl:block mx-auto mt-[-40px] mb-[-80px] max-w-[400px] translate-x-[10%]"
      />
      <section className="py-[40px] lg:py-[60px]">
        <div className="space-y-24 px-6 MainContainer">
          <div className="items-center gap-[20px] md:gap-16 grid md:grid-cols-2">
            <div className="aos-init aos-animate" data-aos="fade-right">
              <h2 className="mb-10 font-playfairdisplay font-normal text-[36px] lg:text-[46px] 2xl:text-[46px] md:text-left text-center leading-[1.2] lg:leading-[1.1] 2xl:leading-[1]">
                Brochure Design
              </h2>
              <p className="mb-[20px]">
                To target your localized market, Brochures, and Catalogs are the
                best eye-catchy printed material you can hand over to people and
                make your presence known.
              </p>
              <p className="mb-[20px]">
                It takes a deep understanding of the marketing techniques and a
                great set of{" "}
                <Link
                  className="font-[600] text-[#f3763a] hover:text-[#333333]"
                  href="logo-business-card-design"
                >
                  graphic design
                </Link>{" "}
                skills to bring out your business in the most creative style
                possible.
              </p>
              <p className="mb-[20px]">
                Apex Global Solutions with the help of its innovative graphic
                designers produce most high-grade brochures and catalog design
                (both printed and electronic) that showcase your services,
                products, share information or cross-sell in a higher way.
              </p>
              <p className="mb-[20px]">
                We create for your company customized brochures and catalog
                designs that captivate people’s attention and engage purchasers
                so you can sell more in and around your business horizons.
              </p>
              <p>
                We cater to any business line from corporate, healthcare,
                fashion, retail, real estate, dental to general consumer
                products.
              </p>
            </div>
            <Image
              className="aos-init aos-animate"
              data-aos="fade-left"
              src={brochureDesign}
              alt="Brochure Design"
            />
          </div>
        </div>
      </section>
      {/*=====================================================================*/}
      <section className="bg-[#f9f9f9] py-[40px] lg:py-[60px]">
        <div className="space-y-24 mx-auto mb-10 px-6 MainContainer">
          <div className="items-center">
            <div className="aos-init aos-animate" data-aos="fade-left">
              <p className="mx-auto font-[700]">
                We design for your company Brochures and Catalog Designs in
                various sizes and folds. To speak of, we design
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-24 px-6 MainContainer">
          <div className="items-start gap-0 md:gap-[20px] md:gap-16 grid md:grid-cols-2">
            <div className="aos-init aos-animate" data-aos="fade-right">
              <ul
                className="pl-[20px] list-outside"
                style={{ listStyleImage: `url(${checkImage.src})` }}
              >
                <li className="pl-[5px]">Leaflet/Single-Sided</li>
                <li className="pl-[5px]">Leaflet/Double-Sided</li>
                <li className="pl-[5px]">Twofold</li>
                <li className="pl-[5px]">Tri-Fold</li>
                <li className="pl-[5px]">Z Fold</li>
              </ul>
            </div>
            <div className="aos-init aos-animate" data-aos="fade-right">
              <ul
                className="pl-[20px] list-outside"
                style={{ listStyleImage: `url(${checkImage.src})` }}
              >
                <li className="pl-[5px]">Half-Half Fold</li>
                <li className="pl-[5px]">Roll Fold</li>
                <li className="pl-[5px]">Double Parallel Fold</li>
                <li className="pl-[5px]">4 and 8 Page Brochure</li>
                <li className="pl-[5px]">Closed Gate Fold and more</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/*=====================================================================*/}
      <section className="py-[40px] lg:py-[60px]">
        <div className="space-y-24 px-6 MainContainer">
          <div className="items-start gap-[20px] md:gap-16 grid md:grid-cols-1">
            <div className="aos-init aos-animate" data-aos="fade-right">
              <p className="text-center">
                Along with Brochures Creations and Catalog Designs, you can also
                avail yourself of our other services in Flyer design,{" "}
                <Link
                  className="font-[600] text-[#f3763a] hover:text-[#333333]"
                  href="/web-banner-design"
                >
                  Website banners design
                </Link>{" "}
                to generate leads and conversions for your business. We are also
                a{" "}
                <Link
                  className="font-[600] text-[#f3763a] hover:text-[#333333]"
                  href="/logo-business-card-design"
                >
                  logo design company
                </Link>{" "}
                that can give your company a logo makeover to connect better
                with your audience.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/*=====================================================================*/}
      <section className="bg-[#f9f9f9] py-[40px] lg:py-[60px]">
        <div className="space-y-24 px-6 MainContainer">
          <div className="items-center">
            <div className="aos-init aos-animate" data-aos="fade-left">
              <h2 className="mb-10 font-playfairdisplay font-normal text-[36px] lg:text-[46px] 2xl:text-[46px] text-center leading-[1.2] lg:leading-[1.1] 2xl:leading-[1]">
                Let’s Get Your Prints Right. <br />
                Get In Touch Today
              </h2>
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
