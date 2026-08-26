import Image from "next/image";
import Link from "next/link";
import seperatorImage from "@/assets/images/page_seperator_cwd1.png";
import desktopSoftwareImage from "@/assets/images/desktop-software.jpg";

export const metadata = {
  title: "Desktop Software Development Company in Los Angeles, CA",
  description:
    "Apex Global Solutions Company is expert in making best software for desktop application development in Los Angeles, California.",
}; 

export default function DesktopSoftwarePage() {
  return (
    <>
      {/* Inner Page Banner: start */}
      <section className="bg-[#f9f9f9] py-[40px] lg:py-[60px]">
        <div className="space-y-24 mx-auto px-6 max-w-6xl">
          <div className="items-center">
            <div className="aos-init aos-animate" data-aos="fade-left">
              <h2 className="mb-10 font-playfairdisplay font-normal text-[36px] lg:text-[46px] 2xl:text-[46px] text-center leading-[1.2] lg:leading-[1.1] 2xl:leading-[1]">
                Genuine desktop software services at your disposal
              </h2>

              <p className="mx-auto max-w-[900px] text-[#06283b] text-[18px] lg:text-[24px] text-center leading-[1.5]">
                At Apex Global Solutions, we excel at providing best desktop
                application development software services for your business
                needs.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Inner Page Banner:: end */}

      {/* ===============================================================================
      ==SEC 1 STart============================================================================ */}

      <Image
        src={seperatorImage}
        alt=""
        className="hidden xl:block mx-auto mt-[-50px] mb-[-60px] max-w-[400px] translate-x-[10%]"
      />

      <section className="py-[40px] lg:py-[60px]">
        <div className="space-y-24 px-6 MainContainer">
          <div className="items-center gap-[20px] md:gap-16 grid md:grid-cols-2">
            <div className="pb-[20px] aos-init aos-animate" data-aos="fade-right">
              <h1 className="mb-10 font-playfairdisplay font-normal text-[36px] lg:text-[46px] 2xl:text-[46px] text-left leading-[1.2] lg:leading-[1.1] 2xl:leading-[1]">
                Desktop software
              </h1>

              <p className="mb-4">
                We are a desktop software development company that can
                conveniently make best software for desktop application
                development using various technologies like C# development,
                JAVA, Adobe Air, JSON, Swing, Visual Basic, ASP.NET, VB.NET,
                etc.
              </p>

              <p>
                We can develop high-quality software by leveraging the best of
                technologies and develop rich, user-friendly and effective
                desktop software that work offline and online. Also, our
                desktop software facilitate synchronization, quick file system
                access, management of content that is downloadable even when
                offline.
              </p>
            </div>

            <Image
              className="mx-auto 2xl:max-w-[600px] aos-init aos-animate"
              data-aos="fade-left"
              src={desktopSoftwareImage}
              alt="Desktop Software"
            />
          </div>
        </div>

        <div className="space-y-24 px-6 MainContainer">
          <div className="items-start gap-[0] md:gap-16 grid md:grid-cols-2">
            <div className="aos-init aos-animate" data-aos="fade-right">
              <p className="mb-4">
                We use our technical and industry expertise to deliver
                software using the best desktop software development tools
                and deploying the latest technology. We have gained immense
                acknowledgment as a renowned desktop application development
                company over the years. We aim to make customized solutions
                suitable to your business needs. Our specialized skills have
                started getting major recognition from clients.
              </p>
            </div>
            <div className="aos-init aos-animate" data-aos="fade-right">
              <p>
                Our experienced developers can help you develop software for
                desktop allocation at any stage of the project and can also
                help in application testing, creating platform-specific
                versions and development of software add-ins. From developing
                full-stack applications to enhancing the existing ones, we
                have gained respect as a top desktop{" "}
                <Link
                  className="font-[600] text-[#f3763a] hover:text-[#333333]"
                  href="/saas-application-development"
                >
                  software development company
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===============================================================================
      ==SEC 2  start============================================================================ */}

      <section className="bg-[#f9f9f9] py-[40px] lg:py-[60px]">
        <div className="space-y-24 px-6 MainContainer">
          <div className="items-center">
            <div className="aos-init aos-animate" data-aos="fade-left">
              <h2 className="mb-10 font-playfairdisplay font-normal text-[36px] lg:text-[46px] 2xl:text-[46px] text-center leading-[1.2] lg:leading-[1.1] 2xl:leading-[1]">
                Our process in building desktop software for various clients
                include:
              </h2>
            </div>
          </div>
        </div>

        <div className="space-y-24 px-6 MainContainer">
          <div className="items-start gap-[20px] md:gap-16 grid md:grid-cols-2">
            <div className="aos-init aos-animate" data-aos="fade-right">
              <ol className="pl-5 list-decimal">
                <li>Understanding the Client requirements</li>
                <li>Developing the Software Design</li>
                <li>Building the Team</li>
                <li>QA and Testing Rounds</li>
                <li>Project Delivery</li>
              </ol>
            </div>

            <div className="aos-init aos-animate" data-aos="fade-right">
              <p>
                We pride ourselves in the way we provide our services to our
                esteemed clientele while enhancing their business goals,
                productivity and overall performance. Apex Global Solutions
                has played a vital role for many clients in bringing
                transformational changes while ensuring more adaptability. We
                are committed to ensuring compliance and creating a unique
                architecture so that we can build bespoke desktop software for
                you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===============================================================================
      ==SEC 2 End============================================================================ */}
      <section className="py-[40px] lg:py-[60px]">
        <div className="space-y-24 px-6 MainContainer">
          <div className="items-start gap-[20px] md:gap-16 grid md:grid-cols-2">
            <div className="aos-init aos-animate" data-aos="fade-right">
              <p>
                Our in-house proficient team of developers and professionals
                ensure delivery of effective, client-centric, tested and
                cost-effective desktop software. We understand your business
                module and create a unique architecture for you so that all
                your needs are fulfilled thoroughly. Our desktop software
                services have helped businesses to generate more business,
                derive business insights and diversify their business by
                leaps and bounds.
              </p>
            </div>
            <div className="aos-init aos-animate" data-aos="fade-right">
              <p className="mb-4">
                Our range of services include end-to-end customized
                solutions, automation driven delivery, SEO implementation,
                automated application compatibility analysis and knowledge
                repository.
              </p>

              <p>
                To know more about our desktop application development
                services, contact us right away.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/*==============================================================================================================================
      =============================================================================================================================*/}
      <section className="bg-[#f9f9f9] py-[40px] lg:py-[60px]">
        <div className="space-y-24 px-6 MainContainer">
          <div className="items-center">
            <div className="aos-init aos-animate" data-aos="fade-left">
              <h3 className="mx-auto mb-10 max-w-[1000px] font-playfairdisplay font-normal text-[36px] lg:text-[46px] 2xl:text-[46px] text-center leading-[1.2] lg:leading-[1.1] 2xl:leading-[1]">
                Convenient, secure and stable desktop software for all your
                needs{" "}
              </h3>
              <div className="my-8 text-center">
                <Link
                  href="/contact-us/"
                  className="flex items-center bg-orange-500 hover:bg-black mx-auto rounded-full w-fit overflow-hidden font-semibold text-white transition"
                >
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

                  <span className="py-4 lg:py-5 pr-6 pl-2 font-[700] text-[16px] lg:text-[20px] tracking-wide">
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
