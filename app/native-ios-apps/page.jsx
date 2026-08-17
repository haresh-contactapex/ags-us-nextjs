import Image from "next/image";
import Link from "next/link";
import seperatorImage from "@/assets/images/page_seperator_cwd1.png";
import nativeIOSAppsImage from "@/assets/images/native-ios-apps.jpg";

export const metadata = {
  title: "Native iOS App Development in Los Angeles, CA",
  description:
    "Apex Global Solutions is full-stack iOS app development company in Los Angeles that creates highly robust and functional native ios Apps and iPhone mobile applications.",
};

export default function NativeIOSAppsPage() {
  return (
    <>
      {/* Inner Page Banner: start */}
      <section className="bg-[#f9f9f9] py-[40px] lg:py-[60px]">
        <div className="space-y-24 mx-auto px-6 max-w-6xl">
          <div className="items-center">
            <div className="aos-init aos-animate" data-aos="fade-left">
              <h2 className="mb-10 font-playfairdisplay font-normal text-[36px] lg:text-[46px] 2xl:text-[46px] text-center leading-[1.2] lg:leading-[1.1] 2xl:leading-[1]">
                One-stop Solution for top Native iOS Apps
              </h2>
              <p className="mx-auto max-w-[900px] text-[#06283b] text-[18px] lg:text-[24px] text-center leading-[1.5]">
                The popularity of iPhone devices is increasing manifold. Thus,
                there is an increasing demand for iPhone app development, native
                iOS apps and native iOS development.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Inner Page Banner:: end */}
      {/*=========================================================*/}
      <Image
        src={seperatorImage}
        alt=""
        className="hidden xl:block mx-auto mt-[-60px] mb-[-80px] max-w-[400px] translate-x-[10%]"
      />
      <section className="py-[40px] lg:py-[60px]">
        <div className="space-y-24 px-6 MainContainer">
          <div className="items-center gap-[20px] md:gap-16 grid md:grid-cols-2">
            <div className="aos-init aos-animate" data-aos="fade-right">
              <h1 className="mb-10 font-playfairdisplay font-normal text-[36px] lg:text-[46px] 2xl:text-[46px] text-left leading-[1.2] lg:leading-[1.1] 2xl:leading-[1]">
                Native iOS Apps
              </h1>
              <p className="mb-4">
                If you are looking for the right partner to develop iOS apps for
                you in order to enrich your app with the best features and
                functionalities, we are ready to serve you.
              </p>
              <p className="mb-4">
                Apex Global Solutions creates highly robust and functional iOS
                mobile applications to match all your business demands. We are
                capable of creating cutting-edge iOS apps that will give your
                business a winning advantage over the long run. Our team of
                experienced developers and professionals has a vast experience
                in creating the most user-friendly apps that you will love.
              </p>
              <p>
                We are a full-stack iOS{" "}
                <Link
                  className="font-semibold text-[#f3763a] hover:text-[#06283c]"
                  href="/mobile-app-development"
                >
                  app development company
                </Link>{" "}
                that excels at providing various features of app development
                like scalability, safety, modernity and robustness. Our
                incredibly talented team of developers has created iOS
                applications that have seen a humungous success on App Store.
              </p>
            </div>
            <Image
              className="aos-init aos-animate"
              data-aos="fade-left"
              src={nativeIOSAppsImage}
              alt="Native iOS Apps"
            />
          </div>
        </div>
      </section>
      {/*=========================================================*/}
      <section className="bg-[#f9f9f9] py-[40px] lg:py-[60px]">
        <div className="space-y-24 px-6 MainContainer">
          <div className="items-start gap-[20px] md:gap-16 grid md:grid-cols-2">
            <div className="aos-init aos-animate" data-aos="fade-right">
              <p className="mb-4">
                Our experts bring along rich skills, performance expertise and
                best practices to develop apps that serve users and businesses
                in the best ways.
              </p>
              <p>
                Our developers have in-depth knowledge in the field of designing
                and hence, they successfully create applications with visually
                appealing interfaces and interactive experiences. If you want a
                custom app with specialized features that caters to the needs of
                your business, our team of developers will do so at you
                convenience and ease so that you have an application that serves
                your purposes.
              </p>
            </div>
            <div className="aos-init aos-animate" data-aos="fade-right">
              <p className="mb-4">
                We have rich experience in creating the most immersive
                application and gaming solutions with high engagement value and
                a sustainable business model. Empower your business with our
                custom-made native iOS apps that integrate seamlessly with the
                existing apps and systems in your ecosystem.
              </p>
              <p>
                We deliver flawless mobile applications that are tested
                thoroughly across all phases of development and we also provide
                dependable maintenance and support services that will keep your
                app up to date and running. We also monitor apps in real-time
                thereby reducing downtime and increasing availability.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/*=========================================================*/}
      <section className="py-[40px] lg:py-[60px]">
        <div className="space-y-24 px-6 MainContainer">
          <div className="items-start gap-[20px] md:gap-16 grid md:grid-cols-2">
            <div className="aos-init aos-animate" data-aos="fade-right">
              <p>
                Apex Global Solutions is the right destination for you to create
                and launch your iOS application and has been built with
                state-of-the-art technologies. We provide innovative and
                custom-built solutions for your business. We ensure to build
                feature-rich iOS applications for startups, mid and large size
                corporations by understanding the needs of the business and the
                users too.
              </p>
            </div>
            <div className="aos-init aos-animate" data-aos="fade-right">
              <p className="mb-4">
                We have catered to many industry verticals in order to meet
                their business needs.
              </p>
              <p>
                Our proficient developers create the best in class native iOS
                applications using the latest and best technologies to deliver
                the best applications to you.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/*=========================================================*/}
      <section className="bg-[#f9f9f9] py-[40px] lg:py-[60px]">
        <div className="space-y-24 px-6 MainContainer">
          <div className="items-center">
            <div className="aos-init aos-animate" data-aos="fade-left">
              <h3 className="mb-10 font-playfairdisplay font-normal text-[36px] lg:text-[46px] 2xl:text-[46px] text-center leading-[1.2] lg:leading-[1.1] 2xl:leading-[1]">
                Empower your business with the best native iOS applications
                {/* Create Your Brand Perception. <br/>Speak To Us Today */}
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
