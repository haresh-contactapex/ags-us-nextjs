import Image from "next/image";
import Link from "next/link";
import separatorImage from "@/assets/images/page_seperator_cwd1.png";

export const metadata = {
  title: "Glendora Web Development and Website Design Company",
  description: "Looking for the best website design and web development in Glendora? Apex Global Solutions is provide full-service of web design, website development and SEO in affordable rates.",
};


export default function GlendoraPage() {
  return (
    <>
      {/* Inner Page Banner: start */}
      <section className="bg-[#f9f9f9] py-[40px] lg:py-[60px]">
        <div className="space-y-24 mx-auto px-6 max-w-5xl">
          <div className="items-center">
            <div className="aos-init aos-animate" data-aos="fade-left">
              <h2 className="mb-10 font-playfairdisplay font-normal text-[36px] lg:text-[46px] 2xl:text-[46px] text-center leading-[1.2] lg:leading-[1.1] 2xl:leading-[1]">
                Time To Bring Your Business In Glendora To Life
              </h2>
            </div>
          </div>
        </div>
      </section>
      {/* Inner Page Banner:: end */}

      {/* SEC 1 start */}
      <Image
              src={separatorImage}
              alt="Dotted Line Seperator"
              className="hidden xl:block mx-auto mt-[-60px] mb-[-80px] max-w-[400px] translate-x-[10%]"
              width={800}
              height={610}
            />

      <section className="py-[40px] lg:py-[60px]">
        <div className="space-y-24 px-6 MainContainer">
          <div className="items-center gap-[20px] md:gap-16">
            <div className="aos-init aos-animate" data-aos="fade-right">
              <h1 className="mb-10 font-playfairdisplay font-normal text-[36px] lg:text-[46px] 2xl:text-[46px] text-center leading-[1.2] lg:leading-[1.1] 2xl:leading-[1]">
                Glendora
              </h1>

              <p className="mb-4">
                In the foothills of the San Gabriel Mountains lies the city
                of Glendora in Los Angeles County, California. Known as the
                Pride of the Foothills, it is home to many cultural venues,
                hiking trails, cafes, restaurants, boutiques, and shopping
                centers.
              </p>

              <p>
                Glendora is full of amazing parks like Glaster Wilderness
                Park, Finkbiner Park, Arcadia Wilderness Park, and more such
                stunning sceneries. It is famous amongst visitors for its
                festivals and events like The Earth Festival, Gumby
                Festival, and the Heritage Festival. There is so much more
                to explore in Glendora.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f9f9f9] py-[40px] lg:py-[60px]">
        <div className="space-y-24 px-6 MainContainer">
          <div className="items-start gap-[20px] md:gap-16 grid md:grid-cols-2">
            <div className="aos-init aos-animate" data-aos="fade-right">
              <p className="mb-4">
                Business is thriving in Glendora in Los Angeles County. Its
                high-quality life, availability of freeways, metropolitan
                areas, and potential clientele makes it preferable for
                business.
              </p>

              <p className="mb-4">
                Apex Global Solutions work with businesses in Glendora and
                help them establish their brand in the competitive online
                landscape with the right marketing strategies.
              </p>

              <p>
                We are a Software development firm in Glendora with
                experience of more than a decade in{" "}
                <Link
                  className="font-[600] text-[#f3763a] hover:text-[#333333]"
                  href="/responsive-web-development"
                >
                  web development
                </Link>{" "}
                and{" "}
                <Link
                  className="font-[600] text-[#f3763a] hover:text-[#333333]"
                  href="/mobile-app-development"
                >
                  mobile app development
                </Link>
                .
              </p>
            </div>

            <div className="aos-init aos-animate" data-aos="fade-right">
              <p className="mb-4">
                We have helped small, moderate size businesses to large
                corporations develop{" "}
                <Link
                  className="font-[600] text-[#f3763a] hover:text-[#333333]"
                  href="/responsive-web-development"
                >
                  responsive website designs
                </Link>
                .
              </p>

              <p>
                Our{" "}
                <Link
                  className="font-[600] text-[#f3763a] hover:text-[#333333]"
                  href="/custom-web-development"
                >
                  custom web development services
                </Link>{" "}
                handle all your needs, from{" "}
                <Link
                  className="font-[600] text-[#f3763a] hover:text-[#333333]"
                  href="/website-redesign-los-angeles"
                >
                  website redesign services
                </Link>
                , open source website development to{" "}
                <Link
                  className="font-[600] text-[#f3763a] hover:text-[#333333]"
                  href="/website-maintenance"
                >
                  web maintenance
                </Link>
                . Our in-house web developers focus on increasing your
                online engagement. With mobile app development, we make
                your online business accessible to your customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEC 2 start */}
      <section className="bg-[#ffffff] py-[40px] lg:py-[60px]">
        <div className="space-y-24 px-6 MainContainer">
          <div className="items-start gap-[20px] md:gap-16 grid md:grid-cols-2">
            <div className="aos-init aos-animate" data-aos="fade-right">
              <p className="mb-4">
                As an{" "}
                <Link
                  className="font-[600] text-[#f3763a] hover:text-[#333333]"
                  href="/ecommerce-web-development"
                >
                  e-commerce development company
                </Link>{" "}
                in Glendora, we provide{" "}
                <Link
                  className="font-[600] text-[#f3763a] hover:text-[#333333]"
                  href="/ecommerce-web-development"
                >
                  e-commerce development services
                </Link>{" "}
                that include{" "}
                <Link
                  className="font-[600] text-[#f3763a] hover:text-[#333333]"
                  href="/ecommerce-web-development"
                >
                  Ecommerce web development
                </Link>{" "}
                with a custom shopping cart and many payment gateway
                integrations to give your future buyers the best
                experience.
              </p>

              <p>
                We ensure that your brand identity resonates at all levels
                of your marketing. Our website marketing analysis align
                your online marketing & brand development with your
                business goals and values.
              </p>
            </div>

            <div className="aos-init aos-animate" data-aos="fade-right">
              <p className="mb-4">
                As a Digital Marketing Company in Glendora, our specialists
                commit to giving your business a makeover with proper{" "}
                <Link
                  className="font-[600] text-[#f3763a] hover:text-[#333333]"
                  href="/search-engine-optimization"
                >
                  search engine optimization
                </Link>
                .
              </p>

              <p>
                We help you target your audience through SEM methods like{" "}
                <Link
                  className="font-[600] text-[#f3763a] hover:text-[#333333]"
                  href="/pay-per-click-services"
                >
                  pay per click advertising
                </Link>
                ,{" "}
                <Link
                  className="font-[600] text-[#f3763a] hover:text-[#333333]"
                  href="/social-media-marketing"
                >
                  social media marketing
                </Link>
                , local SEO services, and SEO consultant to give your
                business a competitive advantage by connecting it with the
                right online users.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* SEC 2 End */}

      <section className="bg-[#f9f9f9] py-[40px] lg:py-[60px]">
        <div className="space-y-24 px-6 MainContainer">
          <div className="items-start gap-[20px] md:gap-16 grid md:grid-cols-2">
            <div className="aos-init aos-animate" data-aos="fade-right">
              <p>
                AGS makes sure that your brand value is shining online, and
                your offline advertising leaves an impression on your local
                customers. Our graphic design services help you create a
                unique brand identity that people recall next time they
                wish to buy anything.
              </p>
            </div>

            <div className="aos-init aos-animate" data-aos="fade-right">
              <p>
                We are also a logo design company and help you in catalog
                design and flyer design that showcase your products and
                services in the best way possible to the local visitors and
                buyers.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#ffffff] py-[40px] lg:py-[60px]">
        <div className="space-y-24 mx-auto px-6 max-w-7xl">
          <div className="items-center">
            <div className="aos-init aos-animate" data-aos="fade-left">
              <p className="mx-auto max-w-[760px] text-center">
                We help you build your online presence left, right, and
                center. When you work with us, you can focus on growing
                your business. We will take care of the rest.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#f9f9f9] py-[40px] lg:py-[60px]">
        <div className="space-y-24 mx-auto px-6 max-w-7xl">
          <div className="items-center">
            <div className="aos-init aos-animate" data-aos="fade-left">
              <h3 className="mb-10 font-playfairdisplay font-normal text-[36px] lg:text-[46px] 2xl:text-[46px] text-center leading-[1.2] lg:leading-[1.1] 2xl:leading-[1]">
                What Would You Do For Your
                <br />
                Next High Climb? Call Us
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
