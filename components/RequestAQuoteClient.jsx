"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import seperatorImage from "@/assets/images/page_seperator_cwd1.png";
import { submitQuoteRequest } from "@/api/contactApi";
import Recaptcha from "@/components/Recaptcha";

// Where to send people after a successful submit
const THANK_YOU_URL = "/thank-you";

const initialFormData = {
  first_name: "",
  last_name: "",
  email: "",
  phone: "",
  service: "",
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//const PHONE_PATTERN = /^[0-9+\-() ]{7,20}$/;

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

export default function RequestAQuoteClient() {
  const router = useRouter();
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState(null);
  const [recaptchaToken, setRecaptchaToken] = useState("");
  const recaptchaRef = useRef(null);

  //   useEffect(() => {
  //     Aos.init({
  //       duration: 800,
  //       once: true,
  //     });
  //   }, []);

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

  const validate = () => {
    const newErrors = {};

    if (!formData.first_name.trim())
      newErrors.first_name = "First name is required.";
    if (!formData.last_name.trim())
      newErrors.last_name = "Last name is required.";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!EMAIL_PATTERN.test(formData.email.trim())) {
      newErrors.email = "Enter a valid email address.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required.";
    } else if (!PHONE_PATTERN.test(formData.phone.trim())) {
      newErrors.phone = "Enter a valid US phone number, e.g. (626) 610-3333.";
    }

    if (!formData.service) newErrors.service = "Please select a service.";
    if (!recaptchaToken)
      newErrors.recaptcha = "Please verify you're not a robot.";

    return newErrors;
  };

  const handleSubmit = async (e) => {
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
      const response = await submitQuoteRequest({
        first_name: formData.first_name.trim(),
        last_name: formData.last_name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        service: formData.service,
        recaptcha_token: recaptchaToken,
      });
      setStatus({
        type: "success",
        message:
          response.message ||
          "Thank you! Your request has been submitted successfully.",
      });
      setFormData(initialFormData);
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
          "Something went wrong. Please try again later.",
      });
    } finally {
      if (!redirecting) {
        setSubmitting(false);
        setRecaptchaToken("");
        recaptchaRef.current?.reset();
      }
    }
  };

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
                Request a Quote
              </h2>

              <p className="mx-auto max-w-[900px] text-[#06283b] text-[18px] lg:text-[24px] text-center leading-[1.5]">
                Please fill in the form below with us. We will get back to you
                within 24 hours.
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
        className="hidden xl:block mx-auto mt-[-50px] mb-[-60px] max-w-[400px] translate-x-[10%]"
      />

      {/* SEC 2 start — form */}
      <section className="bg-[#ffffff] py-[40px] lg:py-[60px]">


        <div className="aos-init aos-animate items-center" data-aos="fade-left">
          {/* form start */}
          <div className="p-0 md:p-8 w-full md:max-w-4xl MainContainer mx-auto">
            {/* Title */}
            {/* <h3 className="mb-10 font-serif text-[36px] text-slate-800 lg:text-[48px] 2xl:text-[48px] text-center leading-[1.2] lg:leading-[1.1] 2xl:leading-[1]">
              Request a Quote
            </h3> */}
            {/* Form */}
            <form className="space-y-6" onSubmit={handleSubmit} noValidate>
              {/* Row 1 */}
              <div className="gap-6 grid md:grid-cols-2">
                <div>
                  <input
                    className="bg-transparent p-4 border border-gray-400 focus:border-gray-600 focus:outline-none w-full"
                    placeholder="First Name*"
                    name="first_name"
                    value={formData.first_name}
                    onChange={handleChange}
                    type="text"
                  />
                  {errors.first_name && (
                    <p className="mt-1 text-red-500 text-sm">
                      {errors.first_name}
                    </p>
                  )}
                </div>
                <div>
                  <input
                    className="bg-transparent p-4 border border-gray-400 focus:border-gray-600 focus:outline-none w-full"
                    placeholder="Last Name*"
                    type="text"
                    name="last_name"
                    value={formData.last_name}
                    onChange={handleChange}
                  />
                  {errors.last_name && (
                    <p className="mt-1 text-red-500 text-sm">
                      {errors.last_name}
                    </p>
                  )}
                </div>
              </div>
              {/* Row 2 */}
              <div className="gap-6 grid md:grid-cols-2">
                <div>
                  <input
                    className="bg-transparent p-4 border border-gray-400 focus:border-gray-600 focus:outline-none w-full"
                    placeholder="Email*"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <p className="mt-1 text-red-500 text-sm">{errors.email}</p>
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
              </div>
              {/* Services Dropdown */}
              <div>
                <select
                  className="bg-transparent p-4 border border-gray-400 focus:border-gray-600 focus:outline-none w-full"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    Services*
                  </option>
                  <option value="Web Development">Web Development</option>
                  <option value="Graphics Design">Graphics Design</option>
                  <option value="App Development">App Development</option>
                  <option value="Digital Marketing">Digital Marketing</option>
                  <option value="Software Development">
                    Software Development
                  </option>
                </select>
                {errors.service && (
                  <p className="mt-1 text-red-500 text-sm">{errors.service}</p>
                )}
              </div>
              {/* Google reCAPTCHA */}
              <div>
                <Recaptcha
                  ref={recaptchaRef}
                  onChange={(token) => {
                    setRecaptchaToken(token || "");
                    setErrors((prev) => ({
                      ...prev,
                      recaptcha: undefined,
                    }));
                  }}
                />
                {errors.recaptcha && (
                  <p className="mt-1 text-red-500 text-sm">
                    {errors.recaptcha}
                  </p>
                )}
              </div>
              {/* Status message */}
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
              {/* Buttons */}
              <div className="flex flex-wrap justify-center gap-5 pt-4">
                {/* Send Button */}

                <button
                  className="flex items-center bg-orange-500 hover:bg-black disabled:opacity-60 rounded-full overflow-hidden font-semibold text-white transition disabled:cursor-not-allowed"
                  type="submit"
                  disabled={submitting}
                >
                  <span className="flex justify-center items-center bg-gray-100 ml-1 rounded-full w-[35px] md:w-14 h-[35px] md:h-14">
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
                  <span className="md:px-6 py-2 md:py-4 pr-2 pl-1 text-[16px] md:text-[20px] tracking-wide">
                    {submitting ? "SENDING..." : "SEND"}
                  </span>
                </button>

                {/* Reset Button */}
              </div>
            </form>
          </div>
          {/* form end */}
        </div>
      </section>
    </>
  );
}
