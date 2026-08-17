import Image from "next/image";
import seperatorImage from "@/assets/images/page_seperator_cwd1.png";

export const metadata = {
  title: "Legal Disclaimer - Apex Global Solutions",
  description:
    "As per Legal Disclaimer Apex Global Solutions reserves the right, at any time, without notice, to impose terms and conditions regarding use and privacy of information submitted to, or gathered from, our web site.",
};

export default function LegalDisclaimerPage() {
  return (
    <>
      {/* Inner Page Banner: start */}
      <section className="bg-[#f9f9f9] py-[40px] lg:py-[60px]">
        <div className="space-y-24 mx-auto px-6 max-w-[1000px]">
          <div className="items-center">
            <div className="aos-init aos-animate" data-aos="fade-left">
              
 <h1 className="mb-10 font-playfairdisplay font-normal text-[36px] lg:text-[46px] 2xl:text-[46px] text-center leading-[1.2] lg:leading-[1.1] 2xl:leading-[1]">
                Legal Disclaimer
              </h1>
              {/* <h2 className="mb-10 font-playfairdisplay font-normal text-[36px] lg:text-[46px] 2xl:text-[46px] text-center leading-[1.2] lg:leading-[1.1] 2xl:leading-[1]">
                The information contained in this web site is subject to
                change without notice and should not be construed as a
                commitment by Apex Global Solutions (AGS).
              </h2> */}
            </div>
          </div>
        </div>
      </section>
      {/* Inner Page Banner:: end */}

      {/* SEC 1 start */}
      <div className="hidden xl:block relative mx-auto mt-[-100px] mb-[50px] max-w-[300px] h-[100px] translate-x-[-10%]">
        <Image
            src={seperatorImage.src}
            className="hidden xl:block mx-auto mt-[-50px] mb-[-50px] max-w-[400px] translate-x-[0%]"
            alt="E-commerce Website Development"
            width={750}
            height={339}    
          />
      </div>

      <section className="py-[40px] lg:py-[60px]">
        <div className="space-y-24 px-6 MainContainer">
          <div className="items-center grid-cols-1">
            <div className="aos-init aos-animate mx-auto" data-aos="fade-left">
             
              <p className="mb-4">The information contained in this web site is subject to change without notice and should not be construed as a commitment by Apex Global Solutions (AGS). While every effort has been made to ensure the accuracy and
                completeness of the information contained herein, Apex
                Global Solutions assumes no legal liability for the
                completeness or usefulness of any information disclosed.
              </p>

              <p>
                Apex Global Solutions reserves the right, at any time,
                without notice, to impose terms and conditions regarding
                use and privacy of information submitted to, or gathered
                from, our web site. Apex Global Solutions is not
                responsible for the contents of any off-site pages
                referenced or used herein as links to other sources.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
