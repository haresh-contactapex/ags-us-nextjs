"use client";

import { useState } from "react";
import Image from "next/image";
import seperatorImage from "@/assets/images/page_seperator_cwd1.png";
import partnerBannerImage from "@/assets/images/partner-with-us.jpg";

const initialFormState = {
  name: "",
  companyName: "",
  phone: "",
  city: "",
  country: "United States",
  email: "",
  websiteUrl: "",
  partnershipInfo: "",
};

export default function PartnerWithUsClient() {
  const [formData, setFormData] = useState(initialFormState);
  const [status, setStatus] = useState(null); // null | "submitting" | "success" | "error"

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleReset() {
    setFormData(initialFormState);
    setStatus(null);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");

    try {
      // Replace this with your actual submit endpoint / API route.
      const res = await fetch("/api/partner-with-us", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus("success");
      setFormData(initialFormState);
    } catch (err) {
      setStatus("error");
    }
  }

  const buttonStyle = {
    backgroundImage: "url(/images/btn_bg.png)",
    backgroundPosition: "3px 3px",
    backgroundSize: "auto calc(100% - 6px)",
    backgroundRepeat: "no-repeat",
  };

  return (
    <>
      {/* Inner Page Banner: start */}
      <section className="bg-[#f9f9f9] py-[40px] lg:py-[60px]">
        <div className="space-y-24 mx-auto px-6 max-w-[1000px]">
          <div className="items-center">
            <div className="aos-init aos-animate" data-aos="fade-left">
              <h2 className="mb-10 font-playfairdisplay font-normal text-[36px] lg:text-[46px] 2xl:text-[46px] text-center leading-[1.2] lg:leading-[1.1] 2xl:leading-[1]">
                Join our winning team
              </h2>

              <p className="mx-auto max-w-[900px] text-[#06283b] text-[18px] lg:text-[24px] text-center leading-[1.5]">
                We are an extremely eager group of graphic designers here at
                Apex Global Solutions.
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
              className="hidden xl:block mx-auto mt-[-50px] mb-[-80px] max-w-[400px] translate-x-[10%]"
     />

      <section className="py-[40px] lg:py-[60px]">
        <div className="space-y-24 mx-auto px-6 2xl:max-w-[1552px] xl:max-w-[1188px] max-w-7xl">
          <div className="items-center gap-[20px] md:gap-16 grid md:grid-cols-2">
            <div className="relative mx-auto w-full max-w-[600px] aspect-[4/3]">
              <Image
                src={partnerBannerImage}
                alt="Partner With Us"
                fill
                className="object-cover"
                data-aos="fade-right"
              />
            </div>

            <div className="aos-init aos-animate" data-aos="fade-left">
              <h1 className="mb-10 font-playfairdisplay font-normal text-[36px] lg:text-[46px] 2xl:text-[46px] md:text-left text-center leading-[1.2] lg:leading-[1.1] 2xl:leading-[1]">
                Partner With Us
              </h1>

              <p className="mb-4">
                We have been establishing ourselves for almost 10 years, and
                we’ve enjoyed our work and the clients we come across.
                Client satisfaction is our primary priority-we know no
                limits. If you share our ideals, consider joining our team.
              </p>

              <p className="mb-4">
                Our confidence is not without proof. Our customers have
                reported working with us a pleasurable experience. All
                partnerships are always met with great trust and work
                ethic.
              </p>

              <p className="mb-4">
                Be sure to learn more about us and about our project
                process. Then hop on the band wagon and let’s go!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEC 2 start — form */}
      <section className="bg-[#f9f9f9] py-[40px] lg:py-[60px]">
        <div className="space-y-24 mx-auto mb-10 px-6 2xl:max-w-[1552px] xl:max-w-[1188px] max-w-7xl">
          <div className="items-center">
            <div className="aos-init aos-animate" data-aos="fade-left">
              <h3 className="mx-auto mb-10 max-w-[800px] font-playfairdisplay font-normal text-[36px] lg:text-[46px] 2xl:text-[46px] text-center leading-[1.2] lg:leading-[1.1] 2xl:leading-[1]">
                Fill out the form below and we will get back to you within
                24 hours.
              </h3>
            </div>
          </div>
        </div>

        {/* Form */}
        <section className="pb-0">
          <div className="mx-auto px-6 max-w-3xl">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="gap-4 grid md:grid-cols-2">
                <input
                  type="text"
                  name="name"
                  placeholder="Name*"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-white px-4 border border-[#828483] w-full h-14"
                />

                <input
                  type="text"
                  name="companyName"
                  placeholder="Company Name*"
                  required
                  value={formData.companyName}
                  onChange={handleChange}
                  className="bg-white px-4 border border-[#828483] w-full h-14"
                />

                <input
                  type="text"
                  name="phone"
                  placeholder="Phone*"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="bg-white px-4 border border-[#828483] w-full h-14"
                />

                <input
                  type="text"
                  name="city"
                  placeholder="City*"
                  required
                  value={formData.city}
                  onChange={handleChange}
                  className="bg-white px-4 border border-[#828483] w-full h-14"
                />

                <select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="bg-white px-4 border border-[#828483] w-full h-14"
                >
                  <option>United States</option>
                </select>

                <input
                  type="email"
                  name="email"
                  placeholder="Email*"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-white px-4 border border-[#828483] w-full h-14"
                />
              </div>

              <input
                type="url"
                name="websiteUrl"
                placeholder="Website URL*"
                required
                value={formData.websiteUrl}
                onChange={handleChange}
                className="bg-white px-4 border border-[#828483] w-full h-14"
              />

              <textarea
                name="partnershipInfo"
                rows={5}
                placeholder="Partnership Information*"
                required
                value={formData.partnershipInfo}
                onChange={handleChange}
                className="bg-white p-4 border border-[#828483] w-full"
              />

              <div className="pt-2">
                <div className="inline-block bg-white p-4 border border-gray-300">
                  {/* Replace with your actual reCAPTCHA widget, e.g. react-google-recaptcha */}
                  reCAPTCHA
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-4 pt-8">
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  style={buttonStyle}
                  className="bg-[#f3763a] hover:bg-[#032539] hover:opacity-90 disabled:opacity-60 py-4 pr-[32px] pl-[81px] rounded-full font-semibold text-white transition"
                >
                  {status === "submitting" ? "SENDING..." : "SEND"}
                </button>

                <button
                  type="button"
                  onClick={handleReset}
                  style={buttonStyle}
                  className="bg-[#f3763a] hover:bg-[#032539] hover:opacity-90 py-4 pr-[32px] pl-[81px] rounded-full font-semibold text-white transition"
                >
                  RESET
                </button>
              </div>

              {status === "success" && (
                <p className="pt-4 text-green-700 text-center">
                  Thanks! We’ll be in touch within 24 hours.
                </p>
              )}
              {status === "error" && (
                <p className="pt-4 text-red-600 text-center">
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          </div>
        </section>
      </section>
    </>
  );
}
