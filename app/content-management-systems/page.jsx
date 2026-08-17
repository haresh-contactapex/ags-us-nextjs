import Image from "next/image";
import Link from "next/link";
import seperatorImage from "@/assets/images/page_seperator_cwd1.png";
import cmsImage from "@/assets/images/content-management-systems-cms.jpg";
import checkImage from "@/assets/images/check.png";

export const metadata = {
  title: "Content Management Systems and Custom CMS Solutions in Los Angeles",
  description:
    "Apex Global Solutions Company is specializing in developing content management systems for your website. We focus on creating custom CMS in Los Angeles, CA.",
};

export default function ContentManagementSystemsPage() {
  return (
    <>
      {/* Inner Page Banner: start */}
      <section className="bg-[#f9f9f9] py-[40px] lg:py-[60px]">
        <div className="space-y-24 mx-auto px-6 max-w-6xl">
          <div className="items-center">
            <div className="aos-init aos-animate" data-aos="fade-left">
              <h2 className="mb-10 font-playfairdisplay font-normal text-[36px] lg:text-[46px] 2xl:text-[46px] text-center leading-[1.2] lg:leading-[1.1] 2xl:leading-[1]">
                Experience best of the content management <br />
                Systems with us
              </h2>
              <p className="mx-auto max-w-[900px] text-[#06283b] text-[18px] lg:text-[24px] text-center leading-[1.5]">
                A professional Content Management Systems (CMS) company, Apex
                Global Solutions offers the clients effective solutions so that
                clients do not face issues in managing content.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Inner Page Banner:: end */}
      {/* ============================================================= */}
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
              src={cmsImage}
              alt="Content Management Systems"
            />
            <div className="aos-init aos-animate" data-aos="fade-left">
              <h1 className="mb-10 font-playfairdisplay font-normal text-[36px] lg:text-[46px] 2xl:text-[46px] text-left leading-[1.2] lg:leading-[1.1] 2xl:leading-[1]">
                Content Management Systems
              </h1>
              <p className="mb-4">
                Over the years, we have developed in-depth expertise in creating
                customized CMS solutions that facilitate improved workflow,
                quick modifications and higher productivity.
              </p>
              <p className="mb-4">
                Our team of developers and professionals has expertise in
                various technologies like Sitefinity, WordPress, DNN, Drupal,
                Umbraco, Kentico, Orchard, Joomla, Sitecore and many others. We
                specialize in developing Enterprise Content management Systems
                so that an organization’s data, content, records, documents and
                details are all managed through an optimized workflow and
                ensuring a consistent data experience.
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-24 px-6 MainContainer">
          <div className="items-start gap-[20px] md:gap-16 grid md:grid-cols-2">
            <div className="aos-init aos-animate" data-aos="fade-right">
              <p className="mb-4">
                A CMS refers to a powerful software application that simplifies
                content creation, editing and maintenance of web pages.
              </p>
              <p className="mb-4">
                Our company can assist you in developing a CMS website right
                from scratch for you. We provide end-to-end solutions in the
                field of CMS to give you a hassle-free solution.
              </p>
            </div>
            <div className="aos-init aos-animate" data-aos="fade-right">
              <p>
                If you wish to reduce your{" "}
                <Link
                  className="font-[600] text-[#f3763a] hover:text-[#333333]"
                  href="/website-maintenance"
                >
                  website maintenance
                </Link>{" "}
                costs and increase the responsiveness of your websites and also
                wish to reduce the risks associated with misleading and outdated
                information on your website, CMS is the solution for you. CMS
                lets you add, edit, delete or change in any manner, the
                information on your website without any programming need. CMS is
                managed through pre-created templates which act as platforms for
                pages to the website.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ============================================================= */}
      <section className="bg-[#f9f9f9] py-[40px] lg:py-[60px]">
        <div className="space-y-24 px-6 MainContainer">
          <div className="items-center">
            <div className="aos-init aos-animate" data-aos="fade-left">
              <h2 className="mb-10 font-playfairdisplay font-normal text-[36px] lg:text-[46px] 2xl:text-[46px] text-center leading-[1.2] lg:leading-[1.1] 2xl:leading-[1]">
                We offer the following services related to CMS
              </h2>
            </div>
          </div>
        </div>
        <div className="space-y-24 px-6 MainContainer">
          <div className="items-start gap-[20px] md:gap-16 grid md:grid-cols-2">
            <div className="aos-init aos-animate" data-aos="fade-right">
              <ul
                className="mb-0 md:mb-4 pl-[28px] list-outside"
                style={{ listStyleImage: `url(${checkImage.src})` }}
              >
                <li className="pl-[5px]">Document Management</li>
                <li className="pl-[5px]">Enterprise Content Management</li>
                <li className="pl-[5px]">Digital Asset Management</li>
                <li className="pl-[5px]">
                  Website content management software
                </li>
                <li className="pl-[5px]">WordPress content management</li>
              </ul>
            </div>
            <div className="aos-init aos-animate" data-aos="fade-right">
              <ul
                className="mb-0 md:mb-4 pl-[28px] list-outside"
                style={{ listStyleImage: `url(${checkImage.src})` }}
              >
                <li className="pl-[5px]">Mobile content management system</li>
                <li className="pl-[5px]">
                  Cloud based content management system
                </li>
                <li className="pl-[5px]">Web content management solutions</li>
                <li className="pl-[5px]">Custom content management system</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* ============================================================= */}
      <section className="py-[40px] lg:py-[60px]">
        <div className="space-y-24 px-6 MainContainer">
          <div className="items-start gap-[20px] md:gap-16 grid md:grid-cols-2">
            <div className="aos-init aos-animate" data-aos="fade-right">
              <p>
                Our affordable and low-cost content management services and
                solutions fit client’s budgets easily and you get an
                uncomplicated and simple interface and architecture. We also
                ensure trouble-free implementation and easy to use workflow
                management so that you get the desirable results. Our CMS
                services are customizable and adaptive and you will not need any
                software to update your website content. Moreover, if one wishes
                to change or deactivate any page of the website, they can do so
                by merely following a few steps.
              </p>
            </div>
            <div className="aos-init aos-animate" data-aos="fade-right">
              <p className="mb-4">
                Also, you can schedule any content pages to be updated on
                specified dates automatically.
              </p>
              <p>
                With our custom content management system, you can absolutely
                change the manner in which you manage your online information
                and content from web copy to published articles, press releases,
                videos, audios, video files, brochures etc. without any
                technical knowledge of the same.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ============================================================= */}
      <section className="bg-[#f9f9f9] py-[40px] lg:py-[60px]">
        <div className="space-y-24 px-6 MainContainer">
          <div className="items-center">
            <div className="aos-init aos-animate" data-aos="fade-left">
              <h2 className="mb-10 font-playfairdisplay font-normal text-[36px] lg:text-[46px] 2xl:text-[46px] text-center leading-[1.2] lg:leading-[1.1] 2xl:leading-[1]">
                We deliver excellence in the field of Content <br />
                Management System that can be measured
              </h2>
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
