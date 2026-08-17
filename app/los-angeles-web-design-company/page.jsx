import Image from "next/image";
import Link from "next/link";
import seperatorImage from "@/assets/images/page_seperator_cwd1.png";

export const metadata = {
  title: "Los Angeles Website Design and Web Development Company",
  description: "Apex Global Solutions is a top Los Angeles web development and website design company specialize in custom web development, mobile apps, SEO, PPC services and lots more..",
};



export default function LosAngelesPage() {
  return (
    <>
      {/* Inner Page Banner: start */}
      <section className="bg-[#f9f9f9] py-[40px] lg:py-[60px]">
        <div className="space-y-24 mx-auto px-6 max-w-6xl">
          <div className="items-center">
            <div className="aos-init aos-animate" data-aos="fade-left">
              <h2 className="mb-10 font-playfairdisplay font-normal text-[36px] lg:text-[46px] 2xl:text-[46px] text-center leading-[1.2] lg:leading-[1.1] 2xl:leading-[1]">
                In Los Angeles, everyone is a star.
                <br />
                It’s time for you to shine.
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
    	className="hidden xl:block mx-auto mt-[-60px] mb-[-60px] max-w-[400px] translate-x-[10%]"
    	width={390}
    	height={200}
      />

      <section className="py-[40px] lg:py-[60px]">
        <div className="space-y-24 px-6 MainContainer">
          <div className="items-center gap-[20px] md:gap-16">
            <div className="aos-init aos-animate" data-aos="fade-right">
              <h1 className="mb-10 font-playfairdisplay font-normal text-[36px] lg:text-[46px] 2xl:text-[46px] text-center leading-[1.2] lg:leading-[1.1] 2xl:leading-[1]">
                Los Angeles
              </h1>

              <p className="mb-4">
                Los Angeles is the largest city in California with around 4
                million people and is a hub for the film and television
                industry with its famous Hollywood studios. It has various
                famous attractions, popular among tourists like the Los
                Angeles Area, Malibu, Santa Monica Pier, Venice Beach,
                Beverly Hills, Hollywood walk of fame, The Valley, Long
                Beach, Disneyland, and Downtown with its high-rising
                buildings.
              </p>

              <p className="mb-4">
                With attractions spread out just like the city is, this
                makes it the most attractive place for businesses to
                flourish.
              </p>

              <p>
                Los Angeles has businesses from small to medium-sized
                enterprises and large corporations that give its ethnic and
                cultural diversity of consumers a top-notch buying
                experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f9f9f9] py-[40px] lg:py-[60px]">
        <div className="space-y-24 px-6 MainContainer">
          <div className="items-start gap-[20px] md:gap-16 grid md:grid-cols-2">
            <div className="aos-init aos-animate" data-aos="fade-right">
              <p>
                Businesses are always looking for ways to grow and expand
                themselves offline and online in the thriving city of Los
                Angeles. And if you are a blooming business of Los Angeles,
                then Apex Global Solutions can be your go-to Internet
                Marketing & Web Design Company that helps you build a
                presence in the modern technology world through its online
                marketing & brand development.
              </p>
            </div>

            <div className="aos-init aos-animate" data-aos="fade-right">
              <p>
                We are an inclusive{" "}
                <Link
                  className="font-[600] text-[#f3763a] hover:text-[#333333]"
                  href="/responsive-web-development">
                  Web development
                </Link>{" "}&{" "}
                <Link
                  className="font-[600] text-[#f3763a] hover:text-[#333333]"
                  href="/mobile-app-development"                  
                  rel="noopener noreferrer"
                >
                  Mobile App development company
                </Link>
                . Our team of proficient web developers assists your
                business at every level through comprehensive solutions for{" "}
                <Link
                  className="font-[600] text-[#f3763a] hover:text-[#333333]"
                  href="/responsive-web-development"
                >
                  responsive website development
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
                  href="/wordpress-web-development"
                >
                  WordPress Programming
                </Link>
                ,{" "}
                <Link
                  className="font-[600] text-[#f3763a] hover:text-[#333333]"
                  href="/ecommerce-web-development"
                >
                  e-commerce website design
                </Link>
                , Open source website development, Shopify web programming,
                Magento Website development,{" "}
                <Link
                  className="font-[600] text-[#f3763a] hover:text-[#333333]"
                  href="/custom-web-development"
                >
                  custom web development
                </Link>
                ,{" "}
                <Link
                  className="font-[600] text-[#f3763a] hover:text-[#333333]"
                  href="/website-maintenance"
                >
                  website maintenance
                </Link>{" "}
                et al.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#ffffff] py-[40px] lg:py-[60px]">
        <div className="space-y-24 px-6 MainContainer">
          <div className="items-start gap-[20px] md:gap-16 grid md:grid-cols-2">
            <div className="aos-init aos-animate" data-aos="fade-right">
              <p>
                Besides being the foremost{" "}
                <Link
                  className="font-[600] text-[#f3763a] hover:text-[#333333]"
                  href="/custom-web-development"
                >
                  web development company
                </Link>{" "}
                in Los Angeles, an ideal city for businesses, we are also a{" "}
                <Link
                  className="font-[600] text-[#f3763a] hover:text-[#333333]"
                  href="/rebranding-services"
                >
                  branding graphic design
                </Link>{" "}
                &{" "}
                <Link
                  className="font-[600] text-[#f3763a] hover:text-[#333333]"
                  href="/logo-business-card-design"
                >
                  logo design
                </Link>{" "}
                company. We provide our clients with impressive{" "}
                <Link
                  className="font-[600] text-[#f3763a] hover:text-[#333333]"
                  href="/logo-business-card-design"
                >
                  graphic design services
                </Link>{" "}
                like catalog design, flyer design,{" "}
                <Link
                  className="font-[600] text-[#f3763a] hover:text-[#333333]"
                  href="/web-banner-design"
                >
                  website banner design
                </Link>{" "}
                for your business to provide an exceptional customer
                experience online.
              </p>
            </div>

            <div className="aos-init aos-animate" data-aos="fade-right">
              <p>
                Apex Global Solutions believe in making your business stand
                out amongst your competitors in Los Angeles. Our Digital
                Marketing Agency helps you with everything from colors to
                logo,{" "}
                <Link
                  className="font-[600] text-[#f3763a] hover:text-[#333333]"
                  href="/social-media-marketing"
                >
                  social media marketing
                </Link>
                , SEM services like{" "}
                <Link
                  className="font-[600] text-[#f3763a] hover:text-[#333333]"
                  href="/pay-per-click-services"
                >
                  pay per click advertising
                </Link>
                , SEO consultant,{" "}
                <Link
                  className="font-[600] text-[#f3763a] hover:text-[#333333]"
                  href="/search-engine-optimization"
                >
                  search engine optimization
                </Link>
                , local SEO services, and more. With our extensive website
                marketing analysis, we help you create the best strategy
                for your business to generate traffic, leads, and sales in
                the city of Los Angeles that has a lot to offer to your
                business, just like Apex Global Solutions.
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
                Let’s Reach The Global Market In LA.
                <br />
                Ring Us Up Today
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
