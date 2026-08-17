import Image from "next/image";
import Link from "next/link";
import seperatorImage from "@/assets/images/page_seperator_cwd1.png";
import nativeAndroidAppsImage from "@/assets/images/native-android-apps2.jpg";

export const metadata = {
  title: "Native Android App Development in Los Angeles, CA",
  description:
    "Apex Global Solutions is the top native android app development company in Los Angeles. Our expertise in creating customized android apps and solutions for your business.",
};

export default function NativeAndroidAppsPage() {
  return (
    <>
      {/* Inner Page Banner: start */}
      <section className="bg-[#f9f9f9] py-[40px] lg:py-[60px]">
        <div className="space-y-24 mx-auto px-6 max-w-6xl">
          <div className="items-center">
            <div className="aos-init aos-animate" data-aos="fade-left">
              <h2 className="mb-10 font-playfairdisplay font-normal text-[36px] lg:text-[46px] 2xl:text-[46px] text-center leading-[1.2] lg:leading-[1.1] 2xl:leading-[1]">
                Cutting-edge applications and solutions for your business
              </h2>
              <p className="mx-auto max-w-3xl text-[#06283b] text-[18px] lg:text-[24px] text-center leading-[1.5]">
                The prevalence of android platform has been increasing with each
                passing day. The number of users having access to the android
                platform has also been seeing an upward trend.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Inner Page Banner:: end */}
      {/*====================================================*/}
      <Image
        src={seperatorImage}
        alt=""
        className="hidden xl:block mx-auto mt-[-50px] mb-[-80px] max-w-[400px] translate-x-[10%]"
      />
      <section className="py-[40px] lg:py-[60px]">
        <div className="space-y-24 px-6 MainContainer">
          <div className="items-center gap-[20px] md:gap-16 grid md:grid-cols-2">
            <Image
              className="aos-init aos-animate"
              data-aos="fade-left"
              src={nativeAndroidAppsImage}
              alt="Native Android Apps"
            />
            <div className="aos-init aos-animate" data-aos="fade-right">
              <h1 className="mb-10 font-playfairdisplay font-normal text-[36px] lg:text-[46px] 2xl:text-[46px] md:text-left text-center leading-[1.2] lg:leading-[1.1] 2xl:leading-[1]">
                Native Android Apps
              </h1>
              <p className="mb-[20px]">
                There is a booming demand for android application development
                across the globe. Businesses want to mark their presence on the
                android platform in order to reach out to millions of users of
                the android applications.
              </p>
              <p>
                If you are looking for the best quality android development, our
                well-experienced team at Apex Global Solutions will be happy to
                assist you in all manners. Our android{" "}
                <Link
                  className="font-semibold text-[#f3763a] hover:text-[#06283c]"
                  href="/mobile-app-development"
                >
                  app development services
                </Link>{" "}
                are used across various android gadgets and systems. Our
                reputation in the field of creating useful and expert
                applications makes us a trustworthy name in the custom android
                application making domain.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/*====================================================*/}
      <section className="bg-[#f9f9f9] py-[40px] lg:py-[60px]">
        <div className="space-y-24 px-6 MainContainer">
          <div className="items-start gap-[20px] md:gap-16 grid md:grid-cols-2">
            <div className="aos-init aos-animate" data-aos="fade-right">
              <p className="mb-[20px]">
                Our expertise in creating customized android apps helps us in
                creating custom native android applications, android web-based
                applications, android e-commerce applications, android
                multimedia applications, android utility apps, android UI/UX
                design, android testing and portability, android app upgrade.
              </p>
              <p className="mb-[20px]">
                With us by your side, you can get scalable and high-performing
                enterprise android apps that blend well with your business
                ecosystem as well as meet all your business requirements. We
                provide a complete range of industry-specific app development
                services and implement the most challenging requirements for
                developing the best in class Android mobile apps.
              </p>
              <p>
                Our expert team of android app developers will be able to serve
                you with feature-rich and high-performance custom native android
                apps. Moreover, our proficient team of experts use the latest
                app development technologies so that your project’s requirements
                are met easily. We undertake industry best practices to ensure
                that a fine output is delivered to our clients.
              </p>
            </div>
            <div className="aos-init aos-animate" data-aos="fade-right">
              <p className="mb-[20px]">
                Our cost-effective solutions in the field of native android
                development help our clients in generating higher traffic,
                getting higher conversions, desirable consumer reach and reduced
                marketing costs. We are an acclaimed Android app development
                company that delivers capable and high-end applications that
                will meet the business needs of our clients.
              </p>
              <p className="mb-[20px]">
                Additionally, we have rich experience working with clients from
                all verticals and sizes who acknowledge our work with great
                enthusiasm. Our expert services include planning,
                conceptualizing, designing, developing and delivering best
                android apps that will receive success on the Google Play Store.
                We also help in migrating seamlessly to the android platform and
                also provide regular maintenance and support services for
                android apps.
              </p>
              <p>
                We have done android native app development for the most simple
                and yet the most complex requirements of companies with the help
                of our technology-driven and enthusiastic team that can convert
                the simplest idea into a grand success. Our range includes
                end-to-end Android app development that leads to creation of the
                best apps worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/*====================================================*/}
      <section className="bg-[#ffffff] py-[40px] lg:py-[60px]">
        <div className="space-y-24 px-6 MainContainer">
          <div className="items-center">
            <div className="aos-init aos-animate" data-aos="fade-left">
              <h3 className="mb-10 font-playfairdisplay font-normal text-[36px] lg:text-[46px] 2xl:text-[46px] text-center leading-[1.2] lg:leading-[1.1] 2xl:leading-[1]">
                We build customized android apps for you for maximum agility and
                predictability
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
