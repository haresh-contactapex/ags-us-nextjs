import Image from "next/image";
import seperatorImage from "@/assets/images/page_seperator_cwd1.png";

export const metadata = {
  title: "Privacy Policy - Apex Global Solutions",
  description:
    "If you have other questions or concerns about apex global solutions privacy policies, please send us an email at privacy@apexglobalsolutions.com.",
};


export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Inner Page Banner: start */}
      <section className="bg-[#f9f9f9] py-[40px] lg:py-[60px]">
        <div className="space-y-24 mx-auto px-6 max-w-[1000px]">
          <div className="items-center">
            <div className="aos-init aos-animate" data-aos="fade-left">
              <h1 className="mb-10 font-playfairdisplay font-normal text-[36px] lg:text-[46px] 2xl:text-[46px] text-center leading-[1.2] lg:leading-[1.1] 2xl:leading-[1]">
                Privacy Policy
              </h1>

              <p className="mx-auto max-w-[900px] text-[#06283b] text-[18px] lg:text-[24px] text-center leading-[1.5]">
                You make the choices about the way your information is
                collected and used
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Inner Page Banner:: end */}

      {/* SEC 1 start */}
      <Image
        src={seperatorImage}
        alt=""
        className="hidden xl:block mx-auto mt-[-70px] mb-[-50px] max-w-[400px] translate-x-[10%]"
     />

      <section className="py-[40px] lg:py-[60px]">
        <div className="space-y-24 px-6 MainContainer">
          <div className="items-center grid-cols-1">
            <div className="aos-init aos-animate" data-aos="fade-left">
              <h2 className="mb-10 font-playfairdisplay font-normal text-[28px] lg:text-[32px] 2xl:text-[40px] text-left leading-[1.2] lg:leading-[1.1] 2xl:leading-[1]">
                Our Commitment to Privacy
              </h2>

              <p className="mb-4">Your privacy is important to us.</p>

              <p>
                To better protect your privacy, we display this notice that
                explains our online appointments. Further, we have
                displayed this notice on our home page and at every point
                where personal information may be requested. We do not
                sell, rent, exchange or distribute your private information
                to any outside parties.
              </p>

              <h2 className="mt-6 mb-10 font-playfairdisplay font-normal text-[28px] lg:text-[32px] 2xl:text-[40px] text-left leading-[1.2] lg:leading-[1.1] 2xl:leading-[1]">
                The Information We Collect
              </h2>

              <p className="mb-4">
                This notice applies to all information collected or
                submitted on the{" "}
                <a
                  className="font-[600] text-[#f3763a] hover:text-[#333333]"
                  href="https://www.apexglobalsolutions.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.apexglobalsolutions.com
                </a>{" "}
                website. The extent of personal information collected at
                any of these pages are:
              </p>

              <ul
                className="pl-[20px] list-outside"
                style={{ listStyleImage: "url(/images/check.png)" }}
              >
                <li className="pl-[5px]">First Name</li>
                <li className="pl-[5px]">Last Name</li>
                <li className="pl-[5px]">Email address</li>
                <li className="pl-[5px]">Phone number</li>
                <li className="pl-[5px]">(etc.)</li>
              </ul>

              <h2 className="mt-6 mb-10 font-playfairdisplay font-normal text-[28px] lg:text-[32px] 2xl:text-[40px] text-left leading-[1.2] lg:leading-[1.1] 2xl:leading-[1]">
                How We Use Information
              </h2>

              <p className="mb-4">
                We use the information you provide about yourself when
                requesting an online appointment. We do not share this
                information with outside parties except to the extent
                necessary to complete your online appointment. We use
                return email addresses to answer the email we receive. Such
                addresses are not used for any other purpose and are not
                shared with outside parties.
              </p>

              <p>
                Finally, we never use or share the personally identifiable
                information provided to us online in ways unrelated to the
                ones described above without also providing you an
                opportunity to opt-out or otherwise prohibit such unrelated
                uses.
              </p>

              <h2 className="mt-6 mb-10 font-playfairdisplay font-normal text-[28px] lg:text-[32px] 2xl:text-[40px] text-left leading-[1.2] lg:leading-[1.1] 2xl:leading-[1]">
                Our Commitment to Data Security
              </h2>

              <p>
                To prevent unauthorized access, maintain data accuracy, and
                ensure the correct use of information, we have put in place
                appropriate physical, electronic, and managerial procedures
                to safeguard and secure the information we collect online.
              </p>

              <h2 className="mt-6 mb-10 font-playfairdisplay font-normal text-[28px] lg:text-[32px] 2xl:text-[40px] text-left leading-[1.2] lg:leading-[1.1] 2xl:leading-[1]">
                How to Contact Us
              </h2>

              <p>
                If you have other questions or concerns about these privacy
                policies, please send us an email at{" "}
                <a
                  className="font-[600] text-[#f3763a] hover:text-[#333333] break-all md:break-normal"
                  href="mailto:privacy@apexglobalsolutions.com"
                >
                  privacy@apexglobalsolutions.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
