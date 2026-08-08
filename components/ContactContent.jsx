"use client";

import { useRef, useState } from "react";
import { submitContactForm } from "@/api/contactApi";
import Recaptcha from "@/components/Recaptcha";

const initialFormData = {
  first_name: "",
  last_name: "",
  email: "",
  phone: "",
  service: "",
  subject: "",
  message: "",
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_PATTERN = /^[0-9+\-() ]{7,20}$/;

const Contact = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState(null);
  const [recaptchaToken, setRecaptchaToken] = useState("");
  const recaptchaRef = useRef(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.first_name.trim())
      newErrors.first_name = "First name is required.";
    if (!formData.last_name.trim())
      newErrors.last_name = "Last name is required.";

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required.";
    } else if (!PHONE_PATTERN.test(formData.phone.trim())) {
      newErrors.phone = "Enter a valid phone number.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!EMAIL_PATTERN.test(formData.email.trim())) {
      newErrors.email = "Enter a valid email address.";
    }

    if (!formData.service) newErrors.service = "Please select a service.";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required.";
    if (!formData.message.trim()) newErrors.message = "Message is required.";
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

    try {
      const response = await submitContactForm({
        first_name: formData.first_name.trim(),
        last_name: formData.last_name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        service: formData.service,
        subject: formData.subject.trim(),
        message: formData.message.trim(),
        recaptcha_token: recaptchaToken,
      });
      setStatus({
        type: "success",
        message:
          response.message ||
          "Thank you! Your message has been sent successfully.",
      });
      setFormData(initialFormData);
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
      setSubmitting(false);
      setRecaptchaToken("");
      recaptchaRef.current?.reset();
    }
  };

  return (
    <>
      <section className="bg-[#f9f9f9] py-[40px] lg:py-[60px]">
        <div className="space-y-24 mx-auto px-6 max-w-[1200px]">
          <div className="items-center">
            <div className="aos-init aos-animate" data-aos="fade-left">
              <h2 className="mb-10 font-playfairdisplay font-normal text-[36px] lg:text-[46px] 2xl:text-[70px] text-center leading-[1.2] lg:leading-[1.1] 2xl:leading-[1]">
                We are always available to answer your questions.{" "}
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section className="py-[40px] lg:py-[60px]">
        <div className="space-y-24 mx-auto px-6 2xl:max-w-[1552px] xl:max-w-[1188px] max-w-7xl">
          <div className="items-start gap-[20px] md:gap-16 grid md:grid-cols-2">
            <div
              className="mb-4 md:mb-0 aos-init aos-animate"
              data-aos="fade-right"
            >
              <h4 className="mb-3 font-[500] text-[#06283c] text-[24px]">
                Corporate Headquarters
              </h4>
              <p className="mb-3">
                115 E. Foothill Blvd. STE 202,
                <br />
                Glendora, CA 91741
              </p>
              <p className="mb-4">
                <span className="inline-block w-[70px]">Tel:</span>{" "}
                <a
                  className="font-[600] text-[#f3763a] hover:text-[#333333]"
                  href="tel: +16266103333"
                >
                  (626) 610-3333
                </a>
                <br />
                <span className="inline-block w-[70px]">Fax:</span>(213)
                624-2601
                <br />
                <span className="inline-block w-[70px]">Email:</span>{" "}
                <a
                  className="font-[600] text-[#f3763a] hover:text-[#333333]"
                  href="mailto:info@ApexGlobalSolutions.com"
                >
                  info@ApexGlobalSolutions.com
                </a>
              </p>
              <h4 className="mb-3 font-[500] text-[#06283c] text-[24px]">
                Downtown Los Angeles Office
              </h4>
              <p>
                By Appointment Only
                <br />
                Tel:{" "}
                <a
                  className="font-[600] text-[#f3763a] hover:text-[#333333]"
                  href="tel: +12136242600"
                >
                  (213) 624-2600
                </a>
              </p>
            </div>

            <div className="aos-init aos-animate" data-aos="fade-left">
              <div className="clear iframe_wrapp">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3302.3967334215195!2d-117.86692778478276!3d34.13619078058322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c326398ae88015%3A0x2b3e04bb91a95aa0!2s115%20E%20Foothill%20Blvd%20%23202%2C%20Glendora%2C%20CA%2091741%2C%20USA!5e0!3m2!1sen!2sin!4v1645598607597!5m2!1sen!2sin"
                  width="600"
                  height="450"
                  className="border-0 w-full pointer-events-none"
                  allowfullscreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f9f9f9] py-[40px] lg:py-[60px]">
        <div className="space-y-24 mx-auto mb-10 px-6 2xl:max-w-[1552px] xl:max-w-[1188px] max-w-7xl">
          <div className="items-center">
            <div className="aos-init aos-animate" data-aos="fade-left">
              <h2 className="mx-auto mb-10 max-w-[800px] font-playfairdisplay font-normal text-[36px] lg:text-[46px] 2xl:text-[70px] text-center leading-[1.2] lg:leading-[1.1] 2xl:leading-[1]">
                Send us mail
              </h2>
            </div>
          </div>
        </div>

        <section className="pb-0">
          <div className="mx-auto px-6 max-w-4xl">
            <form className="space-y-4" onSubmit={handleSubmit} noValidate>
              <div className="gap-4 grid md:grid-cols-2">
                <div>
                  <input
                    type="text"
                    placeholder="First Name*"
                    name="first_name"
                    value={formData.first_name}
                    onChange={handleChange}
                    className="bg-white px-4 border border-[#828483] w-full h-14"
                  />
                  {errors.first_name && (
                    <p className="mt-1 text-red-500 text-sm">
                      {errors.first_name}
                    </p>
                  )}
                </div>

                <div>
                  <input
                    type="text"
                    placeholder="Last Name*"
                    name="last_name"
                    value={formData.last_name}
                    onChange={handleChange}
                    className="bg-white px-4 border border-[#828483] w-full h-14"
                  />
                  {errors.last_name && (
                    <p className="mt-1 text-red-500 text-sm">
                      {errors.last_name}
                    </p>
                  )}
                </div>

                <div>
                  <input
                    type="text"
                    placeholder="Phone*"
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
                    type="email"
                    placeholder="Email*"
                    name="email"
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
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="bg-white p-[15px] px-4 border border-[#828483] w-full h-14"
                >
                  <option value="" disabled>
                    Services*
                  </option>
                  <option value="Web Development">Web Development</option>
                  <option value="Graphic Design">Graphic Design</option>
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

              <div>
                <input
                  type="text"
                  placeholder="Subject*"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="bg-white px-4 border border-[#828483] w-full h-14"
                />
                {errors.subject && (
                  <p className="mt-1 text-red-500 text-sm">{errors.subject}</p>
                )}
              </div>

              <div>
                <textarea
                  rows="5"
                  placeholder="Message*"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-white p-4 border border-[#828483] w-full h-[120px]"
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-red-500 text-sm">{errors.message}</p>
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
              </div>
            </form>
          </div>
        </section>
      </section>
    </>
  );
};
export default Contact;
