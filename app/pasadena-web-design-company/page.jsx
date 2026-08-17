import Link from "next/link";
import Image from "next/image";
import seperatorImage from "@/assets/images/page_seperator_cwd1.png";


export const metadata = {
  title: "Pasadena Web Development and Website Design Company",
  description:
    "Looking for custom web design and website development services in Pasadena, CA? Apex Global Solutions offers best website design, web development, SEO and PPC services.",
};

export default function PasadenaPage() {
  return (
    <>
      {/* Inner Page Banner: start */}
      <section className="bg-[#f9f9f9] py-[40px] lg:py-[60px]">
        <div className="space-y-24 mx-auto px-6 max-w-6xl">
          <div className="items-center">
            <div data-aos="fade-left">
              <h2 className="mb-10 font-playfairdisplay font-normal text-[36px] lg:text-[46px] 2xl:text-[46px] text-center leading-[1.2] lg:leading-[1.1] 2xl:leading-[1]">
                A Day Without Pasadena Is Like A <br />
                Day Without Sunshine.
              </h2>
              {/* <p className="mx-auto max-w-3xl text-[#06283b] text-[18px] lg:text-[24px] text-center leading-[1.5]">
                Nobody looks beyond that first page of Google. Yes, you read that right.
              </p> */}
            </div>
          </div>
        </div>
      </section>
      {/* Inner Page Banner:: end */}

      {/* =========================== SEC 1 Start =========================== */}
      <Image
      	src={seperatorImage.src}
      	alt="Dotted page separator"
      	className="hidden xl:block mx-auto mt-[-50px] mb-[-60px] max-w-[400px] translate-x-[10%]"
      	width={390}
      	height={200}
      />

      <section className="py-[40px] lg:py-[60px]">
        <div className="space-y-24 px-6 MainContainer">
          <div className="items-center gap-[20px] md:gap-16">
            <div data-aos="fade-right">
              <h1 className="mb-10 font-playfairdisplay font-normal text-[36px] lg:text-[46px] 2xl:text-[46px] text-center leading-[1.2] lg:leading-[1.1] 2xl:leading-[1]">
                Pasadena
              </h1>

              <p className="mb-4">
                Pasadena, the city of roses, is one of the most populous
                cities located northeast of downtown Los Angeles,
                California. A city with 300 days of Sunshine, full of
                historic architecture and cultural diversity. Pasadena is
                famous for its Rose Bowl Football Game and Tournament of
                Roses Parade.
              </p>

              <p className="mb-4">
                It is home to the famous California Institute of Technology,
                NASA’s Jet Propulsion Laboratory, and many other scientific,
                educational institutions.
              </p>

              <p className="mb-4">
                Pasadena holds deep historical, cultural, and architectural
                roots with 16 historical districts that house incredible
                museums like Norton Simon Museum, Gamble House, USC Pacific
                Asia Museum.
              </p>

              <p>
                From education to entertainment, Pasadena captivates
                visitors from around the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f9f9f9] py-[40px] lg:py-[60px]">
        <div className="space-y-24 px-6 MainContainer">
          <div className="items-start gap-[20px] md:gap-16 grid md:grid-cols-2">
            <div data-aos="fade-right">
              <p className="mb-4">
                It makes Pasadena a suitable place to start a new business or
                grow an emerging one. With its low tax rates, affordable
                housing, excellent transportation, and an educated
                workforce, Pasadena have been an investment magnet for
                businesses.
              </p>

              <p className="mb-4">
                It is where Apex Global Solutions takes over the
                responsibility to help you expand your business in the
                online sphere from Pasadena.
              </p>

              <p>
                With a decade of experience in Internet Marketing and Web
                Development, our Web Design &amp; Digital Marketing Company
                in Pasadena helps you reach the top of the pyramid despite
                the size and industry.
              </p>
            </div>

            <div data-aos="fade-right">
              <p className="mb-4">
                Our in-house team of skilled web developers is proficient in
                building a{" "}
                <Link
                  className="font-[600] text-[#f3763a] hover:text-[#333333]"
                  href="/responsive-web-development"
                >
                  responsive website design
                </Link>{" "}
                for your traditional online business or an e-commerce
                business.
              </p>

              <p>
                Our Website Development team has experience in WordPress
                Programming, Shopify Web Programming, Magento Web
                Development, and Open source Website Development. They cater
                to your needs of a{" "}
                <Link
                  className="font-[600] text-[#f3763a] hover:text-[#333333]"
                  href="/custom-web-development"
                >
                  custom website design
                </Link>
                , custom shopping cart, or a payment gateway integration
                single-handedly and manage your{" "}
                <Link
                  className="font-[600] text-[#f3763a] hover:text-[#333333]"
                  href="/website-maintenance"
                >
                  web maintenance
                </Link>{" "}
                through regular website analysis reports.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================== SEC 2 Start =========================== */}
      <section className="bg-[#ffffff] py-[40px] lg:py-[60px]">
        <div className="space-y-24 px-6 MainContainer">
          <div className="items-start gap-[20px] md:gap-16 grid md:grid-cols-2">
            <div data-aos="fade-right">
              <p className="mb-4">
                Keeping up with the latest trends, our{" "}
                <Link
                  className="font-[600] text-[#f3763a] hover:text-[#333333]"
                  href="/mobile-app-development"
                >
                  mobile app development company
                </Link>{" "}
                helps you bring your business closer to your future
                customers through{" "}
                <Link
                  className="font-[600] text-[#f3763a] hover:text-[#333333]"
                  href="/mobile-app-development"
                >
                  mobile app development
                </Link>
                . Mobile Apps are the game changer for businesses online and
                have a higher retention rate.
              </p>

              <p className="mb-4">
                Social media influence consumers purchasing decisions today.
                As a Digital Marketing Company in Pasadena, AGS has helped
                its clients skyrocket their business on Social Media by
                altering their marketing campaigns and strategies.
              </p>

              <p>
                We help your business analyze the drawbacks by running a
                website marketing analysis that lets us design Internet
                Marketing campaigns, does your website search engine
                optimization, and run winning SEM and pay per click
                advertising for your online business.
              </p>
            </div>

            <div data-aos="fade-right">
              <p className="mb-4">
                We are one of the leading branding graphic design companies
                in Pasadena. We know what makes your graphic designs shine
                in offline advertising.
              </p>

              <p className="mb-4">
                Our catalog design, website banner design, flyer design
                services can capture the attention of your future buyers in
                an instant.
              </p>

              <p className="mb-4">
                Online Marketing &amp; Brand Development for your business
                becomes easy when you have a unique identity that helps your
                customers distinguish you from the crowd. As a logo design
                company in Pasadena, we have helped our clients build their
                brand value
              </p>

              <p>
                Through local SEO services, we have helped businesses in
                Pasadena target customers from in and around. We can do the
                same magic for your business as well.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================== CTA Section =========================== */}
      <section className="bg-[#f9f9f9] py-[40px] lg:py-[60px]">
        <div className="space-y-24 px-6 MainContainer">
          <div className="items-center">
            <div data-aos="fade-left">
              <h3 className="mb-10 font-playfairdisplay font-normal text-[36px] lg:text-[46px] 2xl:text-[46px] text-center leading-[1.2] lg:leading-[1.1] 2xl:leading-[1]">
                Let’s Catch Up With Online Audience.
                <br /> Contact Us Today
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
              {/* <div className="text-center">
                <img className="mx-auto" src="/images/cycle.png" alt="" />
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
