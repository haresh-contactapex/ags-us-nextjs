import Link from "next/link";
import Image from "next/image";
import seperatorImage from "@/assets/images/page_seperator_cwd1.png";

export const metadata = {
  title: "Thank You!",
  description:
    "Apex Global Solutions helps businesses across Texas grow online through web design, web development, and digital marketing services.",
};

export default function TexasPage() {
  return (
    <>
      {/* Inner Page Banner: start */}
      <section className="bg-[#f9f9f9] py-[40px] lg:py-[60px]">
        <div className="space-y-24 mx-auto px-6 max-w-6xl">
          <div className="items-center">
            <div data-aos="fade-left">
              <p className="text-center text-[80px] font-[800] text-[#4BB543]">
                <i class="fa-solid fa-check"></i>{" "}
              </p>
              <h1 className="mb-10 font-playfairdisplay font-normal text-[36px] lg:text-[46px] 2xl:text-[46px] text-center leading-[1.2] lg:leading-[1.1] 2xl:leading-[1]">
                Thank You
              </h1>
              <p className="mx-auto max-w-[900px] text-[#06283b] text-[18px] lg:text-[24px] text-center leading-[1.5]">
                Thank you for reaching out to us. We will get back to you soon.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Inner Page Banner:: end */}
    </>
  );
}
