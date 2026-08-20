"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import seperatorImage from "@/assets/images/page_seperator_cwd1.png";
import partnerBannerImage from "@/assets/images/partner-with-us.jpg";
import { submitPartnerRequest } from "@/api/contactApi";
import Recaptcha from "@/components/Recaptcha";

// Where to send people after a successful submit
const THANK_YOU_URL = "/thank-you";

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

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//const PHONE_PATTERN = /^[0-9+\-() ]{7,20}$/;
const URL_PATTERN = /^https?:\/\/[^\s]+\.[^\s]+$/i;

// Matches (XXX) XXX-XXXX where the area code and exchange can't start with 0 or 1 (NANP rules)
const PHONE_PATTERN = /^\([2-9]\d{2}\) [2-9]\d{2}-\d{4}$/;

// Turns whatever the user types/pastes into "(626) 610-3333" as they go
const formatUSPhone = (value) => {
  let digits = String(value).replace(/\D/g, "");

  // Drop a leading country code, e.g. "1 626 610 3333" or "+1..."
  if (digits.length > 10 && digits.startsWith("1")) digits = digits.slice(1);
  digits = digits.slice(0, 10);

  if (digits.length === 0) return "";
  if (digits.length < 4) return `(${digits}`;
  if (digits.length < 7) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
};

export default function PartnerWithUsClient() {
  const router = useRouter();
  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState(null);
  const [recaptchaToken, setRecaptchaToken] = useState("");
  const recaptchaRef = useRef(null);

  // function handleChange(e) {
  //   const { name, value } = e.target;
  //   setFormData((prev) => ({ ...prev, [name]: value }));
  //   setErrors((prev) => ({ ...prev, [name]: undefined }));
  // }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    let nextValue = type === "checkbox" ? checked : value;
    if (name === "phone") nextValue = formatUSPhone(value);

    setFormData((prev) => ({
      ...prev,
      [name]: nextValue,
    }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  function handleReset() {
    setFormData(initialFormState);
    setErrors({});
    setStatus(null);
    setRecaptchaToken("");
    recaptchaRef.current?.reset();
  }

  function validate() {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.companyName.trim())
      newErrors.companyName = "Company name is required.";

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required.";
    } else if (!PHONE_PATTERN.test(formData.phone.trim())) {
      newErrors.phone = "Enter a valid US phone number, e.g. (626) 610-3333.";
    }

    if (!formData.city.trim()) newErrors.city = "City is required.";
    if (!formData.country.trim()) newErrors.country = "Country is required.";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!EMAIL_PATTERN.test(formData.email.trim())) {
      newErrors.email = "Enter a valid email address.";
    }

    if (!formData.websiteUrl.trim()) {
      newErrors.websiteUrl = "Website URL is required.";
    } else if (!URL_PATTERN.test(formData.websiteUrl.trim())) {
      newErrors.websiteUrl =
        "Enter a valid URL (starting with http:// or https://).";
    }

    if (!formData.partnershipInfo.trim())
      newErrors.partnershipInfo = "Partnership information is required.";

    if (!recaptchaToken)
      newErrors.recaptcha = "Please verify you're not a robot.";

    return newErrors;
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setSubmitting(true);
    setStatus(null);

    // Stays true after a successful send so the button remains locked while
    // Next.js navigates away instead of flashing back to "SEND".
    let redirecting = false;

    try {
      const response = await submitPartnerRequest({
        name: formData.name.trim(),
        company_name: formData.companyName.trim(),
        phone: formData.phone.trim(),
        city: formData.city.trim(),
        country: formData.country.trim(),
        email: formData.email.trim(),
        website_url: formData.websiteUrl.trim(),
        partnership_info: formData.partnershipInfo.trim(),
        recaptcha_token: recaptchaToken,
      });
      setStatus({
        type: "success",
        message:
          response.message || "Thanks! We'll be in touch within 24 hours.",
      });
      setFormData(initialFormState);
      setErrors({});
      redirecting = true;
      router.push(THANK_YOU_URL);
    } catch (error) {
      const serverErrors = error?.response?.data?.data?.errors;
      if (serverErrors) setErrors((prev) => ({ ...prev, ...serverErrors }));
      setStatus({
        type: "error",
        message:
          error?.response?.data?.message ||
          "Something went wrong. Please try again.",
      });
    } finally {
      if (!redirecting) {
        setSubmitting(false);
        setRecaptchaToken("");
        recaptchaRef.current?.reset();
      }
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
                we’ve enjoyed our work and the clients we come across. Client
                satisfaction is our primary priority-we know no limits. If you
                share our ideals, consider joining our team.
              </p>

              <p className="mb-4">
                Our confidence is not without proof. Our customers have reported
                working with us a pleasurable experience. All partnerships are
                always met with great trust and work ethic.
              </p>

              <p className="mb-4">
                Be sure to learn more about us and about our project process.
                Then hop on the band wagon and let’s go!
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
                Fill out the form below and we will get back to you within 24
                hours.
              </h3>
            </div>
          </div>
        </div>

        {/* Form */}
        <section className="pb-0">
          <div className="mx-auto px-6 max-w-3xl">
            <form className="space-y-4" onSubmit={handleSubmit} noValidate>
              <div className="gap-4 grid md:grid-cols-2">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name*"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-white px-4 border border-[#828483] w-full h-14"
                  />
                  {errors.name && (
                    <p className="mt-1 text-red-500 text-sm">{errors.name}</p>
                  )}
                </div>

                <div>
                  <input
                    type="text"
                    name="companyName"
                    placeholder="Company Name*"
                    value={formData.companyName}
                    onChange={handleChange}
                    className="bg-white px-4 border border-[#828483] w-full h-14"
                  />
                  {errors.companyName && (
                    <p className="mt-1 text-red-500 text-sm">
                      {errors.companyName}
                    </p>
                  )}
                </div>

                <div>
                  <input
                    type="tel"
                    inputMode="numeric"
                    autoComplete="tel"
                    maxLength={14}
                    placeholder="Phone* (626) 610-3333"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-white px-4 border border-[#828483] w-full h-14"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-red-500 text-sm">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <input
                    type="text"
                    name="city"
                    placeholder="City*"
                    value={formData.city}
                    onChange={handleChange}
                    className="bg-white px-4 border border-[#828483] w-full h-14"
                  />
                  {errors.city && (
                    <p className="mt-1 text-red-500 text-sm">{errors.city}</p>
                  )}
                </div>

                <div>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="bg-white px-4 border border-[#828483] w-full h-14"
                  >
                    <option>United States</option>
                  </select>
                  {errors.country && (
                    <p className="mt-1 text-red-500 text-sm">
                      {errors.country}
                    </p>
                  )}
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email*"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-white px-4 border border-[#828483] w-full h-14"
                  />
                  {errors.email && (
                    <p className="mt-1 text-red-500 text-sm">{errors.email}</p>
                  )}
                </div>
              </div>

              <div>
                <input
                  type="url"
                  name="websiteUrl"
                  placeholder="Website URL*"
                  value={formData.websiteUrl}
                  onChange={handleChange}
                  className="bg-white px-4 border border-[#828483] w-full h-14"
                />
                {errors.websiteUrl && (
                  <p className="mt-1 text-red-500 text-sm">
                    {errors.websiteUrl}
                  </p>
                )}
              </div>

              <div>
                <textarea
                  name="partnershipInfo"
                  rows={5}
                  placeholder="Partnership Information*"
                  value={formData.partnershipInfo}
                  onChange={handleChange}
                  className="bg-white p-4 border border-[#828483] w-full"
                />
                {errors.partnershipInfo && (
                  <p className="mt-1 text-red-500 text-sm">
                    {errors.partnershipInfo}
                  </p>
                )}
              </div>

              <div className="pt-2">
                <Recaptcha
                  ref={recaptchaRef}
                  onChange={(token) => {
                    setRecaptchaToken(token || "");
                    setErrors((prev) => ({ ...prev, recaptcha: undefined }));
                  }}
                />
                {errors.recaptcha && (
                  <p className="mt-1 text-red-500 text-sm">
                    {errors.recaptcha}
                  </p>
                )}
              </div>

              {status && (
                <p
                  className={`text-center text-sm font-semibold ${
                    status.type === "success"
                      ? "text-green-600"
                      : "text-red-500"
                  }`}
                  role="status"
                >
                  {status.message}
                </p>
              )}

              <div className="flex flex-wrap justify-center gap-4 pt-8">
                <button
                  type="submit"
                  disabled={submitting}
                  style={buttonStyle}
                  className="bg-[#f3763a] hover:bg-[#032539] hover:opacity-90 disabled:opacity-60 py-4 pr-[32px] pl-[81px] rounded-full font-semibold text-white transition"
                >
                  {submitting ? "SENDING..." : "SEND"}
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
            </form>
          </div>
        </section>
      </section>
    </>
  );
}
