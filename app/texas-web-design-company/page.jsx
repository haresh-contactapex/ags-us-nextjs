import Link from "next/link";
import Image from "next/image";
import seperatorImage from "@/assets/images/page_seperator_cwd1.png";

export const metadata = {
  title: "Texas Web Design & Digital Marketing | Apex Global Solutions",
  description:
    "Apex Global Solutions helps businesses across Texas grow online through web design, web development, and digital marketing services.",
};

export default function TexasPage() {
  return (
    <>
      {/* Inner Page Banner: start */}
      <section className="bg-[#f9f9f9] py-[40px] lg:py-[60px]">
        <div className="space-y-24 mx-auto px-6 max-w-6xl">
          <div className="items-center">
            <div data-aos="fade-left">
              <h2 className="mb-10 font-playfairdisplay font-normal text-[36px] lg:text-[46px] 2xl:text-[46px] text-center leading-[1.2] lg:leading-[1.1] 2xl:leading-[1]">
                The More Business The Better. Up and at’em.
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
    	className="hidden xl:block mx-auto mt-[-70px] mb-[-40px] max-w-[400px] translate-x-[10%]"
    	width={390}
    	height={200}
    />

      <section className="py-[40px] lg:py-[60px]">
        <div className="space-y-24 px-6 MainContainer">
          <div className="items-center gap-[20px] md:gap-16">
            <div data-aos="fade-right">
              <h1 className="mb-10 font-playfairdisplay font-normal text-[36px] lg:text-[46px] 2xl:text-[46px] text-center leading-[1.2] lg:leading-[1.1] 2xl:leading-[1]">
                Texas
              </h1>

              <p className="mb-4">
                Texas, the Lone Star State, is the second-largest in the
                United States in area and population. This South Central
                State is home to some vibrant cities of the United States
                like Houston, Dallas, Austin, El Paso, and San Antonio.
              </p>

              <p>
                It is famous for The Alamo, River Walk in San Antonio, Palo
                Duro Canyon, the NASA Space Center in Houston, The Texas
                State Capital in Austin. It has a rich history and cultural
                diversity to explore.
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
                Apex Global Solutions is a Software Development Firm &amp;
                Digital Marketing Company Providing it’s services all over
                Texas.
              </p>

              <p className="mb-4">
                We are a web design company that has a vast background in
                developing responsive website designs. Our{" "}
                <Link
                  className="font-[600] text-[#f3763a] hover:text-[#333333]"
                  href="/custom-web-development"
                >
                  custom website development
                </Link>{" "}
                services generate{" "}
                <Link
                  className="font-[600] text-[#f3763a] hover:text-[#333333]"
                  href="/website-redesign-los-angeles"
                >
                  web designs
                </Link>{" "}
                that suit your business needs.
              </p>

              <p className="mb-4">
                We have a decade of expertise in growing online businesses.
                We help our clients further their online marketing &amp;
                brand development with top planning and strategy. It brings
                them more traffic and leads while converting their visitors
                to loyal customers.
              </p>

              <p>
                An all-inclusive website development service combined with
                our website analysis report and{" "}
                <Link
                  className="font-[600] text-[#f3763a] hover:text-[#333333]"
                  href="/website-maintenance"
                >
                  web maintenance
                </Link>{" "}
                has produced significant returns for our clients in the
                past.
              </p>
            </div>

            <div data-aos="fade-right">
              <p className="mb-4">
                Your business can reach the same levels of digital success
                with our{" "}
                <Link
                  className="font-[600] text-[#f3763a] hover:text-[#333333]"
                  href="/website-redesign-los-angeles"
                >
                  website redesign services
                </Link>
                . And your e-marketplace can grow with our e-commerce
                development services that include a custom shopping cart
                and multiple payment gateway integration benefits that take
                your online store to the next level.
              </p>

              <p>
                With us, you never have to worry about the vital part of
                your business growth. We are a Digital Marketing Agency in
                Texas that takes care of your branding graphic designs.
                From flyer designs for your billboard advertisement to
                catalog designs for your local customers and tourists, or
                website banner designs for your internet marketing and SEM
                like pay per click advertising banners, we do it all.
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
                Mobile apps have been life-changing for businesses in recent
                times. Apex Global Solutions make sure that you do not stay
                behind your competitors. Our mobile app development team
                design &amp; develop mobile apps for your online business
                and fill the gaps in your tools and techniques.
              </p>

              <p>
                Our dedicated team of web developers and digital marketers
                tailor solutions for your social media marketing campaigns.
                With our local SEO services, you can target local buyers
                and travelers.
              </p>
            </div>

            <div data-aos="fade-right">
              <p className="mb-4">
                Proper search engine optimization for small business has
                become a must if you own a website. You can drive clean
                traffic to run your website smoothly while generating
                conversions with the help of our SEO consultants &amp; Web
                developers who have expertise in WordPress Programming,
                Shopify Web Programming, Magento web development, open
                source website development et al.
              </p>

              <p>
                AGS has a good deal of services to scale your business. As
                the leading Web Design &amp; Digital Marketing Company in
                Texas, we commit to bringing high-impact results.
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
              <h2 className="mb-10 font-playfairdisplay font-normal text-[36px] lg:text-[46px] 2xl:text-[46px] text-center leading-[1.2] lg:leading-[1.1] 2xl:leading-[1]">
                You Can Hang Your Hats On AGS. <br />
                Ring Us Up
              </h2>
              <div className="my-8 text-center">
                <Link
                  href="/contact-us"
                  className="flex items-center bg-orange-500 hover:bg-black mx-auto rounded-full overflow-hidden font-semibold text-white transition w-fit"
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
                        strokeWidth="3"
                      />
                    </svg>
                  </span>
                  {/* Text */}
                  <span className="py-4 lg:py-5 pr-6 pl-2 font-[700] text-[16px] lg:text-[20px] tracking-wide">
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
