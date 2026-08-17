import Image from "next/image";
import Link from "next/link";
import seperatorImage from "@/assets/images/page_seperator_cwd1.png";
import saasImage from "@/assets/images/saas-application-development.jpg";
import checkImage from "@/assets/images/check.png";

export const metadata = {
  title: "SaaS Application Development Services in Los Angeles, CA",
  description:
    "Apex Global Solutions is a leading SaaS application development company specializing in SaaS software design and development solutions in Los Angeles, CA.",
};

export default function SaaSApplicationDevelopmentPage() {
  return (
    <>
      {/* Inner Page Banner: start */}
      <section className="bg-[#f9f9f9] py-[40px] lg:py-[60px]">
        <div className="space-y-24 mx-auto px-6 max-w-6xl">
          <div className="items-center">
            <div className="aos-init aos-animate" data-aos="fade-left">
              <h2 className="mb-10 font-playfairdisplay font-normal text-[36px] lg:text-[46px] 2xl:text-[46px] text-center leading-[1.2] lg:leading-[1.1] 2xl:leading-[1]">
                We help you become the modern
                <br />
                age SaaS leaders
              </h2>
              <p className="mx-auto max-w-[900px] text-[#06283b] text-[18px] lg:text-[24px] text-center leading-[1.5]">
                An abbreviation for ‘Software-as-a-service’, SaaS Application
                Development is becoming increasingly popular with each passing
                day. SaaS is the latest business solution delivery model
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Inner Page Banner:: end */}
      {/*=============================================================*/}
      <Image
        src={seperatorImage}
        alt=""
        className="hidden xl:block mx-auto mt-[-60px] mb-[-80px] max-w-[400px] translate-x-[10%]"
      />
      <section className="py-[40px] lg:py-[60px]">
        <div className="space-y-24 px-6 MainContainer">
          <div className="flex-col-reverse items-center gap-[20px] md:gap-16 grid md:grid-cols-2">
            <div className="aos-init aos-animate" data-aos="fade-right">
              <h1 className="mb-10 font-playfairdisplay font-normal text-[36px] lg:text-[46px] 2xl:text-[46px] md:text-left text-center leading-[1.2] lg:leading-[1.1] 2xl:leading-[1]">
                SaaS application development services
              </h1>
              <p className="mb-4">
                Apex Global Solutions is a leading provider of SaaS application
                development services and includes the process from building the
                product to enhancing its UI/UX and scaling its architecture and
                hosting on the cloud. Our proficient SaaS software developers
                are experts in programming languages like MEAN, LAMP stack,
                Python, Java, .NET, MERN among others. Moreover, our experts are
                also trained in new technologies like AI, ML, etc., to build
                dynamic &amp; future-ready SaaS applications.
              </p>
              <p>
                We, at Apex Global Solution provide Enhanced Cloud Development
                Services. Whether you give us a public or a private cloud
                platform, we deploy or migrate your existing SaaS product in the
                cloud very seamlessly and absolutely as desirable. Our range of
                services is vast including but not limited to SaaS consulting,
                SaaS Product Development, Third-Party Integrations and a lot
                more.
              </p>
            </div>
            <Image
              className="aos-init aos-animate"
              data-aos="fade-left"
              src={saasImage}
              alt="SaaS Application Development"
            />
          </div>
        </div>
      </section>
      {/*=============================================================*/}
      <section className="bg-[#f9f9f9] py-[40px] lg:py-[60px]">
        <div className="space-y-24 px-6 MainContainer">
          <div className="items-start gap-[20px] md:gap-16 grid md:grid-cols-2">
            <div className="aos-init aos-animate" data-aos="fade-right">
              <p className="mb-4">
                our expertise lies in building new SaaS products right from
                scratch and we can also re-engineer your existing application to
                help your business achieve the desired business goals and
                growing business needs. With our top-notch solutions, you can
                implement various enhancements like enhanced architecture
                design, API integration, technical product management etc. so as
                to gain more users.
              </p>
              <p>
                Our enhanced, multi-tenant, secure, scalable, flexible and
                feature-rich SaaS applications can be delivered to end-users for
                best experience. Our SaaS solutions are able to communicate with
                other solutions, services and data sources. We follow modern
                software development practices to deliver SaaS products while
                maintaining quality and security.
              </p>
            </div>
            <div className="aos-init aos-animate" data-aos="fade-right">
              <p className="mb-4">
                Our end-to-end SaaS software{" "}
                <Link className="font-[600] text-[#f3763a] hover:text-[#333333]" href="/">
                  design and development solutions
                </Link>{" "}
                can transform your innovative idea into an agile and robust app
                solution that is very user-friendly. We also have immense
                expertise in AI, IoT, Blockchain, mobile, web and cloud that
                helps us in migrating your existing SaaS development to emerging
                technologies.
              </p>
              <p>
                Partnering with us will enable you to receive multi-tenant
                architecture, rich functionality and proven technology,
                intuitive data visualization, smooth third-party integration and
                a lot more. Our focus is customer delight and delivering
                measurable value to our client base. We help you become SaaS
                leaders, draft your enhancement strategy and even prioritize
                features for effective SaaS application development.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/*=============================================================*/}
      <section className="py-[40px] lg:py-[60px]">
        <div className="space-y-24 px-6 MainContainer">
          <div className="items-center">
            <div className="aos-init aos-animate" data-aos="fade-left">
              <h2 className="mb-10 font-playfairdisplay font-normal text-[36px] lg:text-[46px] 2xl:text-[46px] text-center leading-[1.2] lg:leading-[1.1] 2xl:leading-[1]">
                Here is a list of our SaaS development services
              </h2>
            </div>
          </div>
        </div>
        <div className="space-y-24 px-6 MainContainer">
          <div className="items-start gap-[0] md:gap-16 grid md:grid-cols-2">
            <div className="aos-init aos-animate" data-aos="fade-right">
              <ul
                className="mb-0 md:mb-4 pl-[28px] list-outside"
                style={{ listStyleImage: `url(${checkImage.src})` }}
              >
                <li className="pl-[5px]">Custom SaaS Development</li>
                <li className="pl-[5px]">SaaS Application Consulting</li>
                <li className="pl-[5px]">SaaS Web App Development</li>
                <li className="pl-[5px]">SaaS Based Product Development</li>
                <li className="pl-[5px]">SaaS Product Development</li>
                <li className="pl-[5px]">Cloud SaaS Solutions</li>
                <li className="pl-[5px]">SaaS Mobile App Development</li>
                <li className="pl-[5px]">SaaS App Development</li>
              </ul>
            </div>
            <div className="aos-init aos-animate" data-aos="fade-right">
              <ul
                className="mb-0 md:mb-4 pl-[28px] list-outside"
                style={{ listStyleImage: `url(${checkImage.src})` }}
              >
                <li className="pl-[5px]">Third-party API Integration</li>
                <li className="pl-[5px]">Software Re-design</li>
                <li className="pl-[5px]">SaaS Micro services Architecture</li>
                <li className="pl-[5px]">SaaS Onboarding Solutions</li>
                <li className="pl-[5px]">Managing Tenant and Subscription</li>
                <li className="pl-[5px]">Service Level Management</li>
                <li className="pl-[5px]">SaaS Software Development</li>
                <li className="pl-[5px]">Multi-Tenant SaaS Architecture</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/*=============================================================*/}
      <section className="bg-[#f9f9f9] py-[40px] lg:py-[60px]">
        <div className="space-y-24 px-6 MainContainer">
          <div className="items-center">
            <div className="aos-init aos-animate" data-aos="fade-left">
              <h3 className="mb-10 font-playfairdisplay font-normal text-[36px] lg:text-[46px] 2xl:text-[46px] text-center leading-[1.2] lg:leading-[1.1] 2xl:leading-[1]">
                Reach out to us for top-notch and scalable SaaS development
                services
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
