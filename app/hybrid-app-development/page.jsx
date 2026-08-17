import Image from "next/image";
import Link from "next/link";
import seperatorImage from "@/assets/images/page_seperator_cwd1.png";
import hybridAppDevlopment from "@/assets/images/hybrid-app-development.jpg";

export const metadata = {
  title: "Hybrid App Development Company in Los Angeles, CA",
  description:
    "Apex Global Solutions is a renowned hybrid app development company in Los Angeles, We specializing in creating hybrid apps with cutting-edge technologies.",
};

export default function HybridAppDevelopmentPage() {
  return (
    <>
      {/* Inner Page Banner: start */}
      <section className="bg-[#f9f9f9] py-[40px] lg:py-[60px]">
        <div className="space-y-24 mx-auto px-6 max-w-6xl">
          <div className="items-center">
            <div className="aos-init aos-animate" data-aos="fade-left">
              <h2 className="mb-10 font-playfairdisplay font-normal text-[36px] lg:text-[46px] 2xl:text-[46px] text-center leading-[1.2] lg:leading-[1.1] 2xl:leading-[1]">
                Hybrid App services for the best customer experience
              </h2>
              <p className="mx-auto max-w-[900px] text-[#06283b] text-[18px] lg:text-[24px] text-center leading-[1.5]">
                A leading hybrid app development company, Apex Global Solutions
                helps you make the optimum usage of your product.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Inner Page Banner:: end */}
      {/*=================================================================*/}
      <Image
        src={seperatorImage}
        alt=""
        className="hidden xl:block mx-auto mt-[-60px] mb-[-60px] max-w-[400px] translate-x-[10%]"
      />
      <section className="py-[40px] lg:py-[60px]">
        <div className="space-y-24 px-6 MainContainer">
          <div className="items-center gap-[20px] md:gap-16 grid md:grid-cols-2">
            <div className="aos-init aos-animate" data-aos="fade-right">
              <h1 className="mb-10 font-playfairdisplay font-normal text-[36px] lg:text-[46px] 2xl:text-[46px] text-left leading-[1.2] lg:leading-[1.1] 2xl:leading-[1]">
                Hybrid App Development
              </h1>
              <p className="mb-4">
                Our experts understand your company needs and accordingly
                develop a solution that provides a great customer experience.
              </p>
              <p className="mb-4">
                At Apex Global Solutions, we specialize in creating hybrid app
                designs for all devices, all platforms and all ecosystems-
                Android or iOS. Our team comprises of proficient experts who
                conduct a rigorous testing of all our applications. We also
                provide the implied benefits like code re-usability that reduces
                overall development time, support of cross-platform apps and
                maximum efficiency.
              </p>
              <p>
                We believe in providing quality hybrid app development services
                and our diligent and skillful team acts as a means to this end.
                We work on a plethora of platforms and are well-versed with
                state-of-the-art technology and languages.
              </p>
            </div>
            <Image
              className="aos-init aos-animate"
              data-aos="fade-left"
              src={hybridAppDevlopment}
              alt="Hybrid App Development"
            />
          </div>
        </div>
      </section>
      {/*=================================================================*/}
      <section className="bg-[#f9f9f9] py-[40px] lg:py-[60px]">
        <div className="space-y-24 px-6 MainContainer">
          <div className="items-start gap-[20px] md:gap-16 grid md:grid-cols-2">
            <div className="aos-init aos-animate" data-aos="fade-right">
              <p className="mb-4">
                Our hands on technologies and frameworks like Xamarin, React
                Native, PhoneGap, Appcelerator’s Titanium etc. give us an added
                advantage. We essentially play a huge role in conceptualizing
                the application strategy, information architecture, design
                mock-ups, coding development, quality assurance and enable
                seamless launch and optimization.
              </p>
              <p className="mb-4">
                Clients all over the world are satisfied with our hybrid mobile
                development and this makes us a globally recognized company. We
                also provide customized services in the hybrid mobile app
                development segment and provide services that are exactly
                suitable to your needs. Our services are suitable for Android,
                iOS, Artificial Intelligence, Augmented &amp; Virtual Reality.
              </p>
              <p>
                We at Apex Global Solutions are the choicest option when it
                comes to hybrid app development frameworks and web and mobile
                hybrid app development. We believe in going the extra mile for
                our clients so that ultimate customer satisfaction is achieved
                and user experience is also satisfactory. With us, you can
                experience excellence in all kinds of services.
              </p>
            </div>
            <div className="aos-init aos-animate" data-aos="fade-right">
              <p className="mb-4">
                Building hybrid mobile apps is one of our fortes and our
                technical expertise is phenomenal. We serve various industries
                and build quality apps for them. We have our hands at the best
                technology and thus we are experts at providing hybrid{" "}
                <Link
                  className="font-semibold text-[#f3763a] hover:text-[#06283c]"
                  href="/mobile-app-development"
                >
                  mobile app development services
                </Link>
                . Our skilled development team believes in delivering nothing
                but the best to you.
              </p>
              <p className="mb-4">
                We provide services ranging from conceptualization to deployment
                at the most cost-effective rates. We perform our services with a
                dynamic approach and hence, help you in generating a higher ROI.
              </p>
              <p>
                We are one of the top customized hybrid mobile app development
                companies that believe in creating mobile applications that are
                made using next-gen technologies that are compatible for devices
                with different operating systems. Our developers develop apps
                with intuitive UI/UX for the perfect combination of design and
                technology that users admire.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/*=================================================================*/}
      <section className="bg-[#ffffff] py-[40px] lg:py-[60px]">
        <div className="space-y-24 px-6 MainContainer">
          <div className="items-center">
            <div className="aos-init aos-animate" data-aos="fade-left">
              <h3 className="mb-10 font-playfairdisplay font-normal text-[36px] lg:text-[46px] 2xl:text-[46px] text-center leading-[1.2] lg:leading-[1.1] 2xl:leading-[1]">
                We excel in providing the most reliable and scalable hybrid
                applications
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
