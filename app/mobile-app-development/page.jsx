import Image from "next/image";
import Link from "next/link";
import seperatorImage from "@/assets/images/page_seperator_cwd1.png";
import mobileAppDevelopmentImage from "@/assets/images/mobile-app-development.jpg";
import checkImage from "@/assets/images/check.png";

export const metadata = {
  title: "Mobile App Development in Los Angeles, CA",
  description:
    "Apex Global Solutions is a leading mobile app development company in Los Angeles, we providing customized Android & iPhone app development solutions.",
};

export default function MobileAppDevelopmentPage() {
  return (
    <>
      {/* Inner Page Banner: start */}
      <section className="bg-[#f9f9f9] py-[40px] lg:py-[60px]">
        <div className="space-y-24 mx-auto px-6 max-w-6xl">
          <div className="items-center">
            <div className="aos-init aos-animate" data-aos="fade-left">
              <h2 className="mb-10 font-playfairdisplay font-normal text-[36px] lg:text-[46px] 2xl:text-[46px] text-center leading-[1.2] lg:leading-[1.1] 2xl:leading-[1]">
                Don’t Be An Old-Time Business
              </h2>
              <p className="mx-auto max-w-[900px] text-[#06283b] text-[18px] lg:text-[24px] text-center leading-[1.5]">
                People have moved on from the desktop internet phase. Now is the
                era of Mobile Apps.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Inner Page Banner:: end */}
      {/*=====================================================*/}
      <Image
        src={seperatorImage}
        alt=""
        className="hidden xl:block mx-auto mt-[-60px] mb-[-80px] max-w-[400px] translate-x-[10%]"
      />
      <section className="py-[40px] lg:py-[60px]">
        <div className="space-y-24 px-6 MainContainer">
          <div className="items-center gap-[20px] md:gap-16 grid md:grid-cols-2">
            <Image
              className="mx-auto 2xl:max-w-[600px] aos-init aos-animate"
              data-aos="fade-right"
              src={mobileAppDevelopmentImage}
              alt="Mobile App Development"
            />
            <div className="aos-init aos-animate" data-aos="fade-left">
              <h1 className="mb-10 font-playfairdisplay font-normal text-[36px] lg:text-[46px] 2xl:text-[46px] text-left leading-[1.2] lg:leading-[1.1] 2xl:leading-[1]">
                Mobile App Development
              </h1>
              <p className="mb-4">
                The new-age technology has remodelled the business world. You
                can access any company on your 7-inch screen by a one-click
                mobile application. Now, people prefer using mobile apps rather
                than visiting a website and logging in time and again.
              </p>
              <p className="mb-4">
                Mobile apps are easy to reach, and the customer retention rate
                for businesses has increased because of them. Your business can
                also join the league of brands that have their mobile
                application.
              </p>
              <p>
                Show your customers that you care about them and their comfort.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/*=====================================================*/}
      <section className="bg-[#f9f9f9] py-[40px] lg:py-[60px]">
        <div className="space-y-24 px-6 MainContainer">
          <div className="items-center">
            <div className="aos-init aos-animate" data-aos="fade-left">
              <h2 className="mb-10 font-playfairdisplay font-normal text-[36px] lg:text-[46px] 2xl:text-[46px] text-center leading-[1.2] lg:leading-[1.1] 2xl:leading-[1]">
                Why go for Mobile Apps today?
              </h2>
            </div>
          </div>
        </div>
        <div className="space-y-24 px-6 MainContainer">
          <div className="items-start gap-[20px] md:gap-16 grid md:grid-cols-2">
            <div className="aos-init aos-animate" data-aos="fade-right">
              <p className="mb-4">
                With half of the traffic on the websites coming from mobile,
                businesses are maintaining their large customer base through
                mobile apps.
              </p>
              <p>
                Everyone carries a mobile phone for easy access to services and
                products of the brands they love. They want to remove the
                trouble of logging in every time they buy anything from that
                brand.
              </p>
            </div>
            <div className="aos-init aos-animate" data-aos="fade-right">
              <p className="mb-4">
                Apps make it easy for people to put items into a cart or look at
                the progress they’ve made in an online course.
              </p>
              <p>
                You sure want to scale your business and give your customers the
                pleasantest experience. Mobile apps are the way to go.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/*=====================================================*/}
      <section className="py-[40px] lg:py-[60px]">
        <div className="space-y-24 mb-10 px-6 MainContainer">
          <div className="items-center">
            <div className="aos-init aos-animate" data-aos="fade-left">
              <h2 className="mb-10 font-playfairdisplay font-normal text-[36px] lg:text-[46px] 2xl:text-[46px] text-center leading-[1.2] lg:leading-[1.1] 2xl:leading-[1]">
                How can we help create stunning apps for your business?
              </h2>
            </div>
          </div>
        </div>
        <div className="space-y-24 px-6 MainContainer">
          <div className="items-start gap-[20px] md:gap-16 grid md:grid-cols-2">
            <div className="aos-init aos-animate" data-aos="fade-right">
              <p className="mb-4">
                We are a{" "}
                <Link
                  className="font-semibold text-[#f3763a] hover:text-[#06283c]"
                  href="/saas-application-development"
                >
                  software development firm
                </Link>{" "}
                that keeps up with the trend in the online world. Our clients
                are our priority.
              </p>
              <p className="mb-4">
                After your website marketing analysis, we help you with your
                mobile app development and keeps your customers close to your
                business.
              </p>
              <p className="mb-4">
                Mobile apps will help you keep your business at the fingertips
                of your customers.
              </p>
              <p>
                We help you give your customers a personalized experience that
                builds a lasting relationship with your brand.
              </p>
            </div>
            <div className="aos-init aos-animate" data-aos="fade-right">
              <p className="mb-4">
                We can help you make Delivery Apps, Social Apps, Chatting Apps,
                Booking Apps, Appointment Apps, and many many more. The mobile
                apps we create for your business are:
              </p>
              <ul
                className="mb-4 pl-[28px] list-outside"
                style={{ listStyleImage: `url(${checkImage.src})` }}
              >
                <li>With High-Quality Softwares</li>
                <li>With Attractive Interface</li>
                <li>With Latest Integrations</li>
                <li>Payment Gateways (E-Commerce)</li>
                <li>Safe &amp; Secured</li>
                <li>Fully- Customized and more</li>
              </ul>
              <p>
                Apex Global Solutions, a mobile app development company, ensures
                that your customers become your loyal followers. And you can
                scale your business many folds.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/*=====================================================*/}
      <section className="bg-[#f9f9f9] py-[40px] lg:py-[60px]">
        <div className="space-y-24 px-6 MainContainer">
          <div className="items-center">
            <div className="aos-init aos-animate" data-aos="fade-left">
              <h3 className="mb-10 font-playfairdisplay font-normal text-[36px] lg:text-[46px] 2xl:text-[46px] text-center leading-[1.2] lg:leading-[1.1] 2xl:leading-[1]">
                To Create Your Success Milestone. <br /> Get in touch
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
