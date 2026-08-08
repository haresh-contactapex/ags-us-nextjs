"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Aos from "aos";
import "aos/dist/aos.css";
import images from "@/assets/images/images";
import { submitQuoteRequest } from "@/api/contactApi";
import Recaptcha from "@/components/Recaptcha";

const initialFormData = {
  first_name: "",
  last_name: "",
  email: "",
  phone: "",
  service: "",
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_PATTERN = /^[0-9+\-() ]{7,20}$/;

export default function Home() {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState(null);
  const [recaptchaToken, setRecaptchaToken] = useState("");
  const recaptchaRef = useRef(null);

  useEffect(() => {
    Aos.init({
      duration: 800,
      once: true,
    });
  }, []);

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

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!EMAIL_PATTERN.test(formData.email.trim())) {
      newErrors.email = "Enter a valid email address.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required.";
    } else if (!PHONE_PATTERN.test(formData.phone.trim())) {
      newErrors.phone = "Enter a valid phone number.";
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
      {/* Hero Section */}
      <section className="bg-[#f9f9f9]">
        <div className="items-center gap-12 grid md:grid-cols-10 mx-auto px-6 py-10 MainContainer">
          <div
            className="col-span-1 md:col-span-5 md:text-left text-center"
            data-aos="fade-right"
          >
            <h2 className="heading2">
              A Digital Marketing and custom Web Development Company.
            </h2>

            <p className="text-[#333] text-[18px] lg:text-[24px]">
              Our expertise lies in making creative <strong>websites</strong>{" "}
              and building life-long <strong>brands</strong>
            </p>
          </div>

          <img
            alt="Banner"
            className="col-span-1 md:col-span-5 w-full hover:scale-105 transition duration-500"
            src={images.bannerImage.src}
          />
        </div>
      </section>
      {/* ================= WHAT WE DO ================= */}
      {/* <section className="mx-auto px-6 py-[40px] lg:py-[60px] 2xl:max-w-[1552px] max-w-7xl text-center"> */}
      <section className="px-6 py-[40px] lg:py-[60px] text-center MainContainer">
        <h2 className="heading1" data-aos="fade-up">
          What We Do
        </h2>
        <div className="gap-10 grid md:grid-cols-3 text-left">
          <div data-aos="fade-up" data-aos-delay="100">
            <p className="font-normal text-[#06283b] text-[20px] lg:text-[36px] xl:text-[36px] leading-[1.4]">
              We build{" "}
              <strong className="text-[#f3763a]">custom websites</strong> to
              better suit your needs and the needs of your customers.
            </p>
          </div>
          <div data-aos="fade-up" data-aos-delay="200">
            {/* =SVG START================== */}
            <div
              className="mx-auto max-w-[300px] wpb_raw_code wpb_content_element wpb_raw_html svg_code1 lqd-unit-animation-done"
              id="svg_code1"
            >
              <div className="wpb_wrapper">
                <svg
                  id="home_main_animation"
                  style={{ enableBackground: "new 0 0 652 668" }}
                  version="1.1"
                  viewBox="0 0 652 668"
                  x="0px"
                  xmlSpace="preserve"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  y="0px"
                >
                  <g id="left_bottom_dashed">
                    <rect height="17.2" width="6" x="161.7" y="412.9"></rect>
                    <rect height="17.2" width="6" x="161.7" y="446.9"></rect>
                    <rect height="17.2" width="6" x="161.7" y="480.9"></rect>
                    <rect height="17.8" width="6" x="161.7" y="513.9"></rect>
                    <path d="M161.7,548.7h6c0,0-0.2,8.1,2.7,15.8l-6.4,2C164,566.4,160.4,552.8,161.7,548.7z"></path>
                    <path d="M171.7,581.9l4.9-3.3l11.4,11.8l-4,4.8C184,595.2,174.6,586.9,171.7,581.9z"></path>
                    <path d="M201.5,598l-2.1,5.9c0,0,5.6,4,17.1,4.1l0.8-6.3C217.2,601.8,210.6,601.9,201.5,598z"></path>
                    <path d="M233.2,602v6c0,0,10.5,0.6,18,0v-6H233.2z"></path>
                    <rect height="6.2" width="17.3" x="267.5" y="602"></rect>
                    <rect height="6.2" width="16.8" x="301.7" y="602"></rect>
                    <polygon points="334.4,602 352.9,602 352.9,608.2 335.4,608.2    "></polygon>
                  </g>
                  <g id="right_top_dashed">
                    <rect height="17.7" width="6.3" x="543.4" y="393.6"></rect>
                    <rect height="17.5" width="6.3" x="543.4" y="360"></rect>
                    <rect height="17.4" width="6.3" x="543.4" y="326.1"></rect>
                    <rect height="17.2" width="6.3" x="543.4" y="292.4"></rect>
                    <path d="M539.6,260.1l5.8-2.7c0,0,3.8,6,4,18.3l-5.9,0.3C543.4,276,542.2,265.2,539.6,260.1z"></path>
                    <path d="M519.7,235.4l3.8-5.5c0,0,6,3.7,13.3,12.3l-4.8,4.3C531.9,246.6,522.5,236.3,519.7,235.4z"></path>
                    <path d="M489.6,219.9v6.2c0,0,12.4,0.6,16.5,2.4l1.9-6C507.9,222.5,495.4,218.5,489.6,219.9z"></path>
                    <rect height="6.5" width="17.4" x="455.9" y="219.6"></rect>
                    <rect height="6.5" width="17.1" x="422.1" y="219.6"></rect>
                    <rect height="6.2" width="17.1" x="388.1" y="219.6"></rect>
                    <rect height="6.2" width="17.1" x="354.5" y="219.6"></rect>
                  </g>
                  <path
                    className="bulb_light"
                    d="M132,316.5h65c0,0-0.6-40,3.3-56.8c8.5-28,48.3-37.1,48.8-90c0,0,0-41.9-28.3-65.1

    c-5-3.2-38.8-35.5-93.5-13.2c-17.8,11.5-44,28.7-47.3,77.2c3.4,45.6,27,60.8,35.3,69.8c0,0,7.3,4.6,12.5,20.4

    C133.8,276.9,130.5,288.5,132,316.5z"
                    id="bulb_light"
                  ></path>
                  <g id="bul_black_part">
                    <path
                      className="st1"
                      d="M208.1,345c0.2-0.8,0.2-2.6,0-3.4c-0.7-3.3-4-2.9-4-2.9v-12.2h-12.7h-66.1v12.2c0,0-3.8,0.3-4.1,2.8

        c0,0-0.2,1.3-0.2,1.8c0,0.6,0,1.8,0.2,2.4c0.4,1.2,1.5,2.8,4.4,2.3c0,0,0.9,16.9,16.6,27.8c10.2,4.9,18.5,11.8,42,1.7

        c17.1-10.1,19.8-27.3,19.4-29.4C203.7,347.9,207.3,348.4,208.1,345z"
                    ></path>
                    <path
                      className="st2"
                      d="M137.2,191.5h53c9.3,0,21.8-21,0-28.8c0,0-13.2-0.4-16.4,11.3c0,0,0,86.5,0,94.5c-0.1,6.1,1.5,6.9,3,10.5

        s0,36.8,0,36.8h-26.3v-34.5c0,0,1-4.5,2-5.9c1.3-1.6,2.7-4.5,2.9-9.1c0.3-8.5,0-84.1,0-84.1s1.8-19.9-15.4-19.5

        S121.9,186.3,137.2,191.5z"
                    ></path>
                    <path d="M157.2,269.5h14.5c1.7,3,3.9,9.1,4.1,12.8c0.2,4.7,0,32.2,0,32.2h-24.3V283C151.6,283,152.2,272.3,157.2,269.5z"></path>
                  </g>
                  <g className="rays" id="rays">
                    <rect height="6.3" width="54.6" x="268.9" y="162.4"></rect>
                    <polygon points="5.7,162.6 5.7,168.7 60.3,168.7 60.3,162.2  "></polygon>
                    <polygon points="49.5,55 53.7,50.8 92.5,89.5 88.7,94    "></polygon>
                    <rect height="54.6" width="6.6" x="161.2" y="7.3"></rect>
                    <polygon points="236.2,90 274.2,51 278.7,55.4 240.3,94.2    "></polygon>
                  </g>
                  <g id="head">
                    <path
                      className="st3"
                      d="M446,456c0,0-45,4-47.3,48.8c0,0-31,16-3.5,40c0,0-26.5,24.3,2.5,41.8c0,0,1.8,43.8,48.3,49.3

        c0,0,13.8,31.5,41.3,15.8c0,0,14.8,20.8,44.5,5.8c0,0,17.8,7.8,23.8-3.3c0,0,28.5,6.5,38.3-26c0,0,44.8,0.3,37.5-40.5

        c0,0,29.8-14.8,4-41.8c0,0,28-23-3.5-42c0,0,10.3-37.3-38.3-40.3c0,0-8-28.8-36.8-26c0,0-7.5-11-25.3-3c0,0-25.5-14.4-43.1,4.8

        C488.4,439.3,460.5,425.3,446,456z"
                    ></path>
                    <line
                      className="st4"
                      x1="394"
                      x2="453.5"
                      y1="546"
                      y2="546"
                    ></line>
                    <path
                      className="st4"
                      d="M486.4,438.4c0,0,6.8,1.4,9,15.6"
                    ></path>
                    <path
                      className="st4"
                      d="M556.7,437.5c0,0-17.9,5-19.4,25.5c0,0-24.7-3-30.5,27.8"
                    ></path>
                    <line
                      className="st3"
                      x1="617.3"
                      x2="634.7"
                      y1="546"
                      y2="546"
                    ></line>
                    <path
                      className="st3"
                      d="M506.7,600.3c0,0-0.8,25.3,31,29c0,0-2.8,12.8,17.8,24.8"
                    ></path>
                    <path
                      className="st3"
                      d="M495,637c0,0,1.5,9.3-7.8,14.5"
                    ></path>
                  </g>
                  <path
                    className="gear3"
                    d="M599.2,555.2l13-1l-0.9-13l-13.1,1c-2-12-12-21-12-21l9-11l-10-8l-9,10c-12-7-23.5-6.5-23.5-6.5

    c0-3.3-1-13-1-13l-13,1l1.5,13.5c-10,2-22,11-22,11l-11-8l-8,10l11,9c-7,9-7,23-7,23l-13,1l1,13l14-1c2,13,11,21,11,21l-8,11l10,8

    l8-10c15,7,23,6,23,6l2,14c3,0,13-1,13-1l-1-14c12-2,21-11,21-11l10,9l8-11l-9-9C600.2,565.2,599.2,555.2,599.2,555.2 M551.7,572.7

    c-10.5,0-19-8.5-19-19s8.5-19,19-19s19,8.5,19,19S562.2,572.7,551.7,572.7"
                    id="gear3"
                  ></path>
                  <path
                    className="gear2"
                    d="M484.7,581.6l6.9-1l-0.9-6.8l-6.9,1c-1.5-6.2-7.1-10.6-7.1-10.6l4.4-6.1l-5.6-3.9l-4.4,5.6

    c-6.6-3.3-12.7-2.6-12.7-2.6c-0.1-1.7-1-6.8-1-6.8l-6.9,1l1.3,7c-5.2,1.4-11.3,6.5-11.3,6.5l-6.1-3.8l-3.9,5.5l6.1,4.3

    c-3.4,5-2.9,12.3-2.9,12.3l-6.9,1l1,6.8l7.4-1c1.5,6.8,6.6,10.6,6.6,10.6l-3.9,6l5.6,3.9l3.9-5.5c8.2,3.2,12.4,2.4,12.4,2.4l1.5,7.3

    c1.6-0.1,6.9-1,6.9-1l-1-7.3c6.3-1.5,10.8-6.5,10.8-6.5l5.6,4.4l3.9-6l-5.1-4.4C485.6,586.8,484.7,581.6,484.7,581.6 M459.5,594.9

    c-6.5,0.4-12.2-4.5-12.6-10.9s4.5-12,11.1-12.4c6.5-0.4,12.2,4.5,12.6,10.9S466.1,594.4,459.5,594.9"
                    id="gear2"
                  ></path>
                  <path
                    className="gear1"
                    d="M502.7,503.7l0.2-8.6h-10.2c-1-5.6-6-13.4-6-13.4l6-7l-6-6l-7,7c-8-5-14-5-14-5l-0.7-10h-8.3v11

    c-7,0-13,6-13,6l-8-7l-6,7c5,4.1,4.9,3.9,8,7c-4.3,4.3-4.7,11-5,14h-10v9l10-0.4c1,7.6,6,13.4,6,13.4l-6,7l6,6l7-7c8,5,14,5,14,5v10

    h9v-11c9-1,13-6,13-6l8,7l6-7l-8-6c5-6,5.6-15,5.6-15H502.7z M463.7,513.7c-6.6,0-12-5.6-12-12.5s5.4-12.5,12-12.5s12,5.6,12,12.5

    S470.4,513.7,463.7,513.7"
                    id="gear1"
                  ></path>
                </svg>
              </div>
            </div>
            {/* =SVG END================== */}
          </div>
          <div data-aos="fade-up" data-aos-delay="200">
            <p className="font-normal text-[#06283b] text-[20px] lg:text-[36px] xl:text-[36px] leading-[1.4]">
              We Bring <strong className="text-[#f3763a]">Brands</strong> to
              Life with creative idea.
            </p>
          </div>
        </div>
      </section>
      {/* ============================================ */}
      <img
        src={images.homeSeperatorOne.src}
        className="hidden xl:block mx-auto mt-[-140px] mb-[-70px] max-w-[442px] translate-x-[30%]"
      />
      {/* ================BRANDING SECTION====================*/}
      <section className="bg-[#f9f9f9] py-[40px] lg:py-[60px]">
        <div className="space-y-24 mx-auto px-6 2xl:max-w-[1552px] max-w-7xl">
          <div className="items-center gap-[20px] md:gap-16 grid md:grid-cols-2">
            <img
              className="aos-init aos-animate"
              data-aos="fade-right"
              src={images.brandingImage.src}
            />
            <div className="aos-init aos-animate" data-aos="fade-left">
              <h2 className="md:text-left text-center heading1">Branding</h2>
              <p>
                We know the essentials of branding and how to make your brand
                stand out from others. We visualize seamless brand messaging
                through various strategies, storytelling and a great brand
                experience. Our disciplined approach connects the brand with the
                consumers and makes them remember it for a lifetime. Our
                strategic and practical techniques of branding will win the
                hearts of your core clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      <img
        src={images.homeSeperatorTwo.src}
        className="hidden xl:block mx-auto mt-[-100px] mb-[-100px] max-w-[460px] translate-x-[0]"
      />
      {/* =================WEBSITES SECTION================== */}
      <section className="py-[40px] lg:py-[60px]">
        <div className="space-y-24 mx-auto px-6 MainContainer">
          <div className="items-center gap-[20px] md:gap-16 grid md:grid-cols-2">
            <div className="aos-init aos-animate" data-aos="fade-right">
              <h2 className="md:text-left text-center heading1">Websites</h2>
              <p>
                In a world full of digital systems and marketing communications,
                our{" "}
                <a
                  className="font-semibold text-[#f3763a] hover:text-[#06283c]"
                  href="/agsnew/responsive-web-development"
                >
                  {" "}
                  website development service{" "}
                </a>{" "}
                is just what you need. A website is the face value for an
                organization and we build it in a manner that is bespoke and
                helps businesses surpass their competitors. Our expert designers
                and developers bring along extensive experience and work towards
                the success of your websites.
              </p>
            </div>
            <img
              className="aos-init aos-animate"
              data-aos="fade-left"
              src={images.websiteImage.src}
            />
          </div>
        </div>
      </section>

      {/* ============================================ */}
      <img
        src={images.homeSeperatorThree.src}
        className="hidden xl:block mx-auto mt-[-50px] mb-[-170px] max-w-[442px] translate-x-[0%]"
      />
      {/* ===================APPS SECTION==================== */}
      <section className="bg-[#f9f9f9] py-[40px] lg:py-[60px]">
        <div className="space-y-24 MainContainer">
          <div className="flex flex-col-reverse items-center gap-[20px] md:gap-16 md:grid md:grid-cols-2">
            <img
              className="aos-init aos-animate"
              data-aos="fade-right"
              src={images.appImage.src}
            />
            <div className="aos-init aos-animate" data-aos="fade-left">
              <h2 className="md:text-left text-center heading1">Apps</h2>
              <p>
                We are a successful app development company that caters to all
                your needs. Whether you are in the need of iOS Apps or Android
                Apps, our
                <a href="/agsnew/mobile-app-development">
                  mobile phone app development services
                </a>
                will transform your business in a manner unimagined. We
                amalgamate the latest technologies while bringing to you
                top-notch and customized products each time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      <img
        src={images.homeSeperatorFour.src}
        className="hidden xl:block mx-auto mt-[-100px] mb-[-70px] max-w-[442px] translate-x-[30%]"
      />
      {/* =================DIGITAL MARKETING=================== */}
      <section className="py-[40px] lg:py-[60px]">
        <div className="space-y-24 mx-auto px-6 MainContainer">
          <div className="items-center gap-[20px] md:gap-16 grid md:grid-cols-2">
            <div className="aos-init aos-animate" data-aos="fade-right">
              <h2 className="md:text-left text-center heading1">
                Digital Marketing
              </h2>
              <p>
                A wholesome and holistic solution for all your digital marketing
                needs, Apex Global Solutions provides services that make your
                business more visible on the internet. Our state-of-the-art
                digital technologies help you essentially in brand positioning,
                campaign management and implementing bespoke strategies that
                will ensure that your followers remain engaged at all times.
              </p>
            </div>
            <img
              className="aos-init aos-animate"
              data-aos="fade-left"
              src={images.digitalMarketingImage.src}
            />
          </div>
        </div>
      </section>

      {/* ==================OUR METHODOLOGY SECTION===================== */}
      <section className="bg-[#f9f9f9] py-[40px] lg:py-[60px]">
        <div className="space-y-24 mx-auto px-6 2xl:max-w-[1552px] max-w-7xl">
          <div className="items-center">
            <div className="aos-init aos-animate" data-aos="fade-left">
              <h2 className="text-center heading1">Our Methodology</h2>
              <p className="mx-auto max-w-3xl text-[#06283c] text-[28px] 4xl:text-[36px] text-center leading-[1.5]">
                We have developed a science to ensure our{" "}
                <strong>high standards</strong> are always met.
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-10 px-4 max-w-[1130px] 2xl:max-w-[1130px]">
          <div className="flex lg:flex-row flex-col justify-between items-center gap-3 lg:gap-10">
            {/* Step 1 */}
            <div className="relative flex flex-col items-center">
              <div className="flex justify-center items-center bg-white border-2 border-gray-800 border-dashed rounded-full w-[140px] xl:w-[197px] h-[140px] xl:h-[197px] rotate-90 origin-center animate-rotate">
                <img
                  className="rotate-90 origin-center animate-rotate-inverse"
                  src={images.ourMethodologyOne.src}
                />
              </div>
              <p className="mt-4 font-semibold text-gray-700">CONCEPT</p>
              {/* Arrow */}
              <img
                src={images.methodologyArrow.src}
                className="lg:top-[70px] xl:top-[103px] right-[-97px] static lg:absolute mt-[52px] lg:mt-[0px] text-yellow-500 text-2xl rotate-90 lg:rotate-0 -translate-y-1/"
              />
            </div>
            {/* Step 2 */}
            <div className="relative flex flex-col items-center">
              <div className="flex justify-center items-center bg-white border-2 border-gray-800 border-dashed rounded-full w-[140px] xl:w-[197px] h-[140px] xl:h-[197px] rotate-90 origin-center animate-rotate">
                <img
                  className="rotate-90 origin-center animate-rotate-inverse"
                  src={images.ourMethodologyTwo.src}
                />
              </div>
              <p className="mt-4 font-semibold text-gray-700">DESIGN</p>
              <img
                src={images.methodologyArrow.src}
                className="lg:top-[70px] xl:top-[103px] right-[-97px] static lg:absolute mt-[52px] lg:mt-[0px] text-yellow-500 text-2xl rotate-90 lg:rotate-0 -translate-y-1/2"
              />
            </div>
            {/* Step 3 */}
            <div className="relative flex flex-col items-center">
              <div className="flex justify-center items-center bg-white border-2 border-gray-800 border-dashed rounded-full w-[140px] xl:w-[197px] h-[140px] xl:h-[197px] rotate-90 origin-center animate-rotate">
                <img
                  className="rotate-90 origin-center animate-rotate-inverse"
                  src={images.ourMethodologyThree.src}
                />
              </div>
              <p className="mt-4 font-semibold text-gray-700">DEVELOPMENT</p>
              <img
                src={images.methodologyArrow.src}
                className="lg:top-[70px] xl:top-[103px] right-[-97px] static lg:absolute mt-[52px] lg:mt-[0px] text-yellow-500 text-2xl rotate-90 lg:rotate-0 -translate-y-1/2"
              />
            </div>
            {/* Step 4 */}
            <div className="flex flex-col items-center">
              <div className="flex justify-center items-center bg-white border-2 border-gray-800 border-dashed rounded-full w-[140px] xl:w-[197px] h-[140px] xl:h-[197px] rotate-90 origin-center animate-rotate">
                <img
                  className="rotate-90 origin-center animate-rotate-inverse"
                  src={images.ourMethodologyFour.src}
                />
              </div>
              <p className="mt-4 font-semibold text-gray-700">LAUNCH</p>
            </div>
          </div>
        </div>
      </section>
      {/* ============================================ */}
      <section className="py-[40px] lg:py-[60px]">
        <div className="space-y-24 mx-auto px-6 2xl:max-w-[1552px] max-w-7xl">
          <div className="items-center gap-4 grid grid-cols-1 md:grid-cols-2">
            <div
              className="flex md:flex-row flex-col justify-end min-h-[500px] align-middle aos-init aos-animate"
              data-aos="fade-left"
            >
              <img
                className="left-[0] md:absolute relative mx-auto mb-4 md:mb-0 w-[200px] md:w-[350px] aos-init aos-animate"
                data-aos="fade-right"
                src={images.requestQuoteImage.src}
              />

              <div className="flex flex-col justify-center align-middle">
                <h2 className="text-center heading3">Email Us</h2>
                <p className="font-[700] text-[#333333] text-[13px] md:text-[20px] hover:text-[#f3763a] text-center uppercase">
                  <a href="mailto:Info@ApexGlobalSolutions.com">
                    Info@ApexGlobalSolutions.com
                  </a>
                </p>
              </div>
            </div>

            <div className="aos-init aos-animate" data-aos="fade-left">
              {/* form start */}
              <div className="p-0 md:p-8 w-full md:max-w-4xl">
                {/* Title */}
                <h1 className="mb-10 font-serif text-[36px] text-slate-800 lg:text-[46px] 2xl:text-[70px] text-center leading-[1.2] lg:leading-[1.1] 2xl:leading-[1]">
                  Request a Quote
                </h1>
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
                        <p className="mt-1 text-red-500 text-sm">
                          {errors.email}
                        </p>
                      )}
                    </div>
                    <div>
                      <input
                        className="bg-transparent p-4 border border-gray-400 focus:border-gray-600 focus:outline-none w-full"
                        placeholder="Phone*"
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                      {errors.phone && (
                        <p className="mt-1 text-red-500 text-sm">
                          {errors.phone}
                        </p>
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
                      <option value="UI/UX Design">UI/UX Design</option>
                      <option value="SEO">SEO</option>
                    </select>
                    {errors.service && (
                      <p className="mt-1 text-red-500 text-sm">
                        {errors.service}
                      </p>
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
          </div>
        </div>
      </section>
      {/* ============================================ */}
      <section className="bg-[#f9f9f9] py-[40px] lg:py-[60px] clear-both">
        <div className="space-y-24 mx-auto px-6 2xl:max-w-[1552px] max-w-7xl">
          <div className="items-center">
            <div className="aos-init aos-animate" data-aos="fade-left">
              <h2 className="mb-[50px] text-center heading1">
                Let’s ride together to reach your Goal
              </h2>
              <div className="my-8 text-center">
                <Link
                  href="/contact-us/"
                  className="flex w-fit items-center bg-orange-500 hover:bg-black mx-auto rounded-full overflow-hidden font-semibold text-white transition"
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
                  <span className="px-6 py-4 text-lg tracking-wide">
                    CONTACT US
                  </span>
                </Link>
              </div>
              <div className="text-center">
                <img className="mx-auto" src={images.cycleImage.src} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
