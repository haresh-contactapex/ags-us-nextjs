import Image from "next/image";
import Link from "next/link";
import seperatorImage from "@/assets/images/page_seperator_cwd1.png";
import smmImage from "@/assets/images/social-media-marketing.jpg";
import checkImage from "@/assets/images/check.png";

export const metadata = {
  title: "Social Media Marketing Company in Los Angeles, California",
  description:
    "Apex Global Solutions is the best social media marketing agency that helps to improve your brand reputation on social media for your business in Los Angeles, CA.",
};

export default function SocialMediaMarketingPage() {
  return (
    <>
      {/* Inner Page Banner: start */}
      <section className="bg-[#f9f9f9] py-[40px] lg:py-[60px]">
        <div className="space-y-24 mx-auto px-6 max-w-6xl">
          <div className="items-center">
            <div className="aos-init aos-animate" data-aos="fade-left">
              <h2 className="mb-10 font-playfairdisplay font-normal text-[36px] lg:text-[46px] 2xl:text-[46px] text-center leading-[1.2] lg:leading-[1.1] 2xl:leading-[1]">
                Let Us Create Some Social Media Fire
              </h2>
              <p className="mx-auto max-w-[900px] text-[#06283b] text-[18px] lg:text-[24px] text-center leading-[1.5]">
                Social Media once, known as an entertainment platform, is no
                longer limited to that.
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
        className="hidden xl:block mx-auto mt-[-60px] mb-[-80px] max-w-[400px] translate-x-[10%]"
      />
      <section className="py-[40px] lg:py-[60px]">
        <div className="space-y-24 px-6 MainContainer">
          <div className="items-center gap-[20px] md:gap-16 grid md:grid-cols-2">
            <Image
              className="aos-init aos-animate"
              data-aos="fade-right"
              src={smmImage}
              alt="Social Media Marketing"
            />
            <div className="aos-init aos-animate" data-aos="fade-left">
              <h1 className="mb-10 font-playfairdisplay font-normal text-[36px] lg:text-[46px] 2xl:text-[46px] md:text-left text-center leading-[1.2] lg:leading-[1.1] 2xl:leading-[1]">
                Social Media Marketing
              </h1>
              <p className="mb-4">
                Social Media has become a powerful marketing tool for small
                businesses. According to Statista, United States is one of the
                largest social media marketing markets in the world.
              </p>
              <p className="mb-4">
                For your small business growth, and its online presence &amp;
                brand development, a social media profile can appeal to your
                audience who would love to follow and share about you with their
                friends and followers. Social Media lets’ your followers talk
                about your brand and market it. It is like desserts in both
                hands.
              </p>
              <p className="mb-4">Who would not want that?</p>
              <p className="mb-0">
                Apex Global Solutions, a social media marketing agency with its
                team of experts, helps you create your online success by staying
                up with the trends and giving the time it requires—on your
                account.
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
              <h2 className="mb-10 font-playfairdisplay font-normal text-[36px] lg:text-[46px] 2xl:text-[46px] text-center leading-[1.2] lg:leading-[1.1] 2xl:leading-[1]">
                What does Social Media Marketing demand?
              </h2>
            </div>
          </div>
        </div>
        <div className="space-y-24 px-6 MainContainer">
          <div className="items-start gap-[0] md:gap-16 grid md:grid-cols-2">
            <div className="aos-init aos-animate" data-aos="fade-right">
              <p className="mb-4">
                Social Media is a platform that gives your brand the visibility
                and audience to connect. But it sure is not as easy as it
                sounds. When we say social media marketing, it involves:
              </p>
              <ul
                className="mb-0 md:mb-4 pl-[28px] list-outside"
                style={{ listStyleImage: `url(${checkImage.src})` }}
              >
                <li className="pl-[5px]">Strategizing</li>
                <li className="pl-[5px]">Content Development</li>
                <li className="pl-[5px]">Targeting through campaigns</li>
                <li className="pl-[5px]">Connecting with your audience</li>
              </ul>
            </div>
            <div className="aos-init aos-animate" data-aos="fade-right">
              <ul
                className="mb-4 pl-[28px] list-outside"
                style={{ listStyleImage: `url(${checkImage.src})` }}
              >
                <li className="pl-[5px]">Collaborating with Influencers</li>
                <li className="pl-[5px]">Adapting to changing trends</li>
                <li className="pl-[5px]">Brand Reputation Management</li>
                <li className="pl-[5px]">Running Paid Adverts, and more</li>
              </ul>
              <p>
                From setting up your social media profile to maintaining and
                running it throughout, Apex Global Solutions handles it all for
                you. We promote your business and target your followers to
                become your loyal customers.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/*======================================================*/}
      <section className="py-[40px] lg:py-[60px]">
        <div className="space-y-24 mx-auto mb-10 px-6 MainContainer">
          <div className="items-center">
            <div className="aos-init aos-animate" data-aos="fade-left">
              <h2 className="mb-10 font-playfairdisplay font-normal text-[36px] lg:text-[46px] 2xl:text-[46px] text-center leading-[1.2] lg:leading-[1.1] 2xl:leading-[1]">
                Social Media Marketing For Businesses
              </h2>
            </div>
          </div>
        </div>
        <div className="space-y-24 px-6 MainContainer">
          <div className="items-start gap-[20px] md:gap-16 grid md:grid-cols-2">
            <div className="aos-init aos-animate" data-aos="fade-right">
              <p className="mb-4">
                Social Media Marketing is a part of digital marketing that
                leverages social media platforms like Facebook, Instagram,
                Twitter, Pinterest, LinkedIn and helps your brand capture a
                diverse and broader audience.
              </p>
              <p className="mb-4">
                Reaching out to the correct audience and showcasing your
                services and products while giving them value can form a
                stronger connection and secure them as your brand advocates.
              </p>
              <p>
                Social Media Marketing adds to your{" "}
                <Link
                  className="font-[600] text-[#f3763a] hover:text-[#333333]"
                  href="/search-engine-optimization"
                >
                  Search Engine Optimization
                </Link>{" "}
                and Digital Marketing goals by building your brand authority,
                thus generating more leads and conversions for your business.
              </p>
            </div>
            <div className="aos-init aos-animate" data-aos="fade-right">
              <p className="mb-4">
                We are an established{" "}
                <Link className="font-[600] text-[#f3763a] hover:text-[#333333]" href="/">
                  Web Development
                </Link>{" "}
                &amp; Digital Marketing agency that helps you with your social
                media management and social media advertising with our dedicated
                team of Social Media Experts who strategize to achieve your
                business goals. We help you overcome the fear of constantly
                changing social media algorithms and trends.
              </p>
              <p className="mb-4">
                Our team of experts will put in place the top techniques and
                marketing tactics for your social media platforms to present
                your brand in the best possible way.
              </p>
              <p className="mb-4">
                Promote your business by targeting and re-targeting and shift
                traffic to your website with our social media marketing
                services.
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
                Grow Like Never Before. Connect With Us.
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
