import Image from "next/image";
import Link from "next/link";
import seperatorImage from "@/assets/images/page_seperator_cwd1.png";

export const metadata = {
  title: "Irvine Web Development and Website Design Company",
  description: "Looking for the best website development and web design services in Irvine, CA? We specialized in custom website design, web development, SEO and PPC services.",
};

export default function IrvinePage() {
  return (
    <>
      {/* Inner Page Banner: start */}
      <section className="bg-[#f9f9f9] py-[40px] lg:py-[60px]">
        <div className="space-y-24 mx-auto px-6 max-w-6xl">
          <div className="items-center">
            <div className="aos-init aos-animate" data-aos="fade-left">
              <h2 className="mx-auto max-w-[900px] mb-10 font-playfairdisplay font-normal text-[36px] lg:text-[46px] 2xl:text-[46px] text-center leading-[1.2] lg:leading-[1.1] 2xl:leading-[1]">
                Your Future Customer is Online. Let’s Be There
              </h2>
            </div>
          </div>
        </div>
      </section>
      {/* Inner Page Banner:: end */}

      {/* SEC 1 start */}
      <Image
      	src={seperatorImage.src}
      	alt="Dotted page separator"
      	className="hidden xl:block mx-auto mt-[-70px] mb-[-40px] max-w-[400px] translate-x-[10%]"
      	width={390}
      	height={200}
      />

      <section className="py-[40px] lg:py-[60px]">
        <div className="spaspace-y-24 px-6 MainContainer">
          <div className="items-center gap-[20px] md:gap-16">
            <div className="aos-init aos-animate" data-aos="fade-right">
              <h1 className="mb-10 font-playfairdisplay font-normal text-[36px] lg:text-[46px] 2xl:text-[46px] text-center leading-[1.2] lg:leading-[1.1] 2xl:leading-[1]">
                Irvine
              </h1>

              <p className="mb-4">
                Irvine, a well-planned city in Orange County, California, is
                famous for its wide-open spaces, beautiful parks, UCI
                Institute, Boomer Canyon Trails, Convenient shopping, and
                dining. This southern Californian city is one of the safest
                cities in the United States.
              </p>

              <p className="mb-4">
                It has some unique off-road bike trails like San Diego
                Creek trail connecting to the beaches and back bay, and San
                Joaquin Marsh & Wildlife sanctuary for bird species, the
                Irvine Spectrum Center popular for shopping, dining, and
                entertainment, Tanaka Farms famous for its tractor rides
                and a lot more for travelers to explore.
              </p>

              <p className="mb-4">
                Irvine has open spaces, parks, and trails still preserved
                that bring visitors to relish nature and organic
                attractions at their best.
              </p>

              <p>
                It is the only Californian city to grab a place in the top
                10 fastest-growing cities in the US. It makes a thriving
                place for businesses and start ups because of the rapid
                expansion it is undergoing.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f9f9f9] py-[40px] lg:py-[60px]">
        <div className="spaspace-y-24 px-6 MainContainer">
          <div className="items-start gap-[20px] md:gap-16 grid md:grid-cols-2">
            <div className="aos-init aos-animate" data-aos="fade-right">
              <p className="mb-4">
                Apex Global Solutions is a top-notch digital marketing
                company that helps small, medium-sized, and large
                corporations make a mark online through the best strategy
                and solutions for online marketing & brand development in
                Irvine and many other places.
              </p>

              <p>
                We are a software development firm with years of
                experience in{" "}
                <Link
                  className="font-[600] text-[#f3763a] hover:text-[#333333]"
                  href="/responsive-web-development"
                >
                  responsive website design
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
                  href="/ecommerce-web-development"
                >
                  e-commerce web development
                </Link>{" "}
                (Shopify web programming, WordPress Programming, and
                Magento web development), custom shopping cart design,
                payment gateway integration,{" "}
                <Link
                  className="font-[600] text-[#f3763a] hover:text-[#333333]"
                  href="/website-maintenance"
                >
                  website maintenance
                </Link>
                , open source development, et al.
              </p>
            </div>

            <div className="aos-init aos-animate" data-aos="fade-right">
              <p className="mb-4">
                Our team of highly skilled web developers and digital
                marketers boosts your business to drive conversions from
                the vast customer base present online. If you are a
                business located in the flourishing city of Irvine, trying
                to sustain online, or if you don’t know where to start with
                your online journey, our experts in website development,
                graphic design, and Internet marketing will get you
                started from scratch.
              </p>

              <p className="mb-4">
                As a branding graphic design company, we fulfill the basic
                requirements of your online business. From logo design to
                give your business a unique voice, flyer design for your
                offline advertising, catalog design for your local
                customers, to website banner design for your internet
                marketing. AGS gives you an edge over other racing
                businesses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEC 2 start */}
      <section className="bg-[#ffffff] py-[40px] lg:py-[60px]">
        <div className="spaspace-y-24 px-6 MainContainer">
          <div className="items-start">
            <div className="aos-init aos-animate" data-aos="fade-right">
              <p className="mb-4">
                When we work with your firm for its online progress, your
                business not only stays on top in Irvine but also on the
                world wide web with the best planning and strategies we
                implement for your online campaigns.
              </p>

              <p className="mb-4">
                We are a digital marketing agency in Irvine specializing in
                SEO services for small business, including local SEO
                service,{" "}
                <Link
                  className="font-[600] text-[#f3763a] hover:text-[#333333]"
                  href="/social-media-marketing"
                >
                  social media marketing
                </Link>
                ,{" "}
                <Link
                  className="font-[600] text-[#f3763a] hover:text-[#333333]"
                  href="/pay-per-click-services"
                >
                  pay per click advertising
                </Link>
                ,{" "}
                <Link
                  className="font-[600] text-[#f3763a] hover:text-[#333333]"
                  href="/search-engine-optimization"
                >
                  search engine optimization
                </Link>
                ,{" "}
                <Link
                  className="font-[600] text-[#f3763a] hover:text-[#333333]"
                  href="/content-management-systems"
                >
                  content management system
                </Link>{" "}
                that helps you establish your niche and make your brand
                unique in the flourishing city of Irvine.
              </p>

              <p>
                Choose Apex Global Solutions as your be-all and end-all web
                design company & digital marketing agency and rise to the
                ladder of online influence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#f9f9f9] py-[40px] lg:py-[60px]">
        <div className="space-y-24 px-6 MainContainer">
          <div className="items-center">
            <div className="aos-init aos-animate" data-aos="fade-left">
              <h3 className="mb-10 font-playfairdisplay font-normal text-[36px] lg:text-[46px] 2xl:text-[46px] text-center leading-[1.2] lg:leading-[1.1] 2xl:leading-[1]">
                Time To Boost Your Business In Irvine.
                <br />
                Call Us Now
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
