"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import seperatorImage from "@/assets/images/page_seperator_cwd1.png";
import partnerBannerImage from "@/assets/images/partner-with-us.jpg";
import { submitPartnerRequest } from "@/api/contactApi";
import Recaptcha from "@/components/Recaptcha";

// Where to send people after a successful submit
const THANK_YOU_URL = "/thank-you?mode=partner-with-us";

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
                    <option value="Aruba">Aruba</option>
                    <option value="Afghanistan">Afghanistan</option>
                    <option value="Angola">Angola</option>
                    <option value="Albania">Albania</option>
                    <option value="Andorra">Andorra</option>
                    <option value="United Arab Emirates">
                      United Arab Emirates
                    </option>
                    <option value="Argentina">Argentina</option>
                    <option value="Armenia">Armenia</option>
                    <option value="American Samoa">American Samoa</option>
                    <option value="Australia">Australia</option>
                    <option value="Austria">Austria</option>
                    <option value="Azerbaijan">Azerbaijan</option>
                    <option value="Burundi">Burundi</option>
                    <option value="Belgium">Belgium</option>
                    <option value="Benin">Benin</option>
                    <option value="Burkina Faso">Burkina Faso</option>
                    <option value="Bangladesh">Bangladesh</option>
                    <option value="Bulgaria">Bulgaria</option>
                    <option value="Bahrain">Bahrain</option>
                    <option value="Bahamas">Bahamas</option>
                    <option value="Bosnia and Herzegovina">
                      Bosnia and Herzegovina
                    </option>
                    <option value="Belarus">Belarus</option>
                    <option value="Belize">Belize</option>
                    <option value="Bermuda">Bermuda</option>
                    <option value="Bolivia, Plurinational State of">
                      Bolivia, Plurinational State of
                    </option>
                    <option value="Brazil">Brazil</option>
                    <option value="Barbados">Barbados</option>
                    <option value="Brunei Darussalam">Brunei Darussalam</option>
                    <option value="Bhutan">Bhutan</option>
                    <option value="Botswana">Botswana</option>
                    <option value="Central African Republic">
                      Central African Republic
                    </option>
                    <option value="Canada">Canada</option>
                    <option value="Switzerland">Switzerland</option>
                    <option value="Chile">Chile</option>
                    <option value="China">China</option>
                    <option value="Côte d’Ivoire">Côte d’Ivoire</option>
                    <option value="Cameroon">Cameroon</option>
                    <option value="Congo, the Democratic Republic of the">
                      Congo, the Democratic Republic of the
                    </option>
                    <option value="Congo">Congo</option>
                    <option value="Cook Islands">Cook Islands</option>
                    <option value="Colombia">Colombia</option>
                    <option value="Comoros">Comoros</option>
                    <option value="Cape Verde">Cape Verde</option>
                    <option value="Costa Rica">Costa Rica</option>
                    <option value="Cuba">Cuba</option>
                    <option value="Cayman Islands">Cayman Islands</option>
                    <option value="Cyprus">Cyprus</option>
                    <option value="Czech Republic">Czech Republic</option>
                    <option value="Germany">Germany</option>
                    <option value="Djibouti">Djibouti</option>
                    <option value="Dominica">Dominica</option>
                    <option value="Denmark">Denmark</option>
                    <option value="Dominican Republic">
                      Dominican Republic
                    </option>
                    <option value="Algeria">Algeria</option>
                    <option value="Ecuador">Ecuador</option>
                    <option value="Egypt">Egypt</option>
                    <option value="Eritrea">Eritrea</option>
                    <option value="Spain">Spain</option>
                    <option value="Estonia">Estonia</option>
                    <option value="Ethiopia">Ethiopia</option>
                    <option value="Finland">Finland</option>
                    <option value="Fiji">Fiji</option>
                    <option value="France">France</option>
                    <option value="Micronesia, Federated States of">
                      Micronesia, Federated States of
                    </option>
                    <option value="Gabon">Gabon</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="Georgia">Georgia</option>
                    <option value="Ghana">Ghana</option>
                    <option value="Guinea">Guinea</option>
                    <option value="Gambia">Gambia</option>
                    <option value="Guinea-Bissau">Guinea-Bissau</option>
                    <option value="Equatorial Guinea">Equatorial Guinea</option>
                    <option value="Greece">Greece</option>
                    <option value="Grenada">Grenada</option>
                    <option value="Guatemala">Guatemala</option>
                    <option value="Guam">Guam</option>
                    <option value="Guyana">Guyana</option>
                    <option value="Hong Kong">Hong Kong</option>
                    <option value="Honduras">Honduras</option>
                    <option value="Croatia">Croatia</option>
                    <option value="Haiti">Haiti</option>
                    <option value="Hungary">Hungary</option>
                    <option value="Indonesia">Indonesia</option>
                    <option value="India">India</option>
                    <option value="Ireland">Ireland</option>
                    <option value="Iran, Islamic Republic of">
                      Iran, Islamic Republic of
                    </option>
                    <option value="Iraq">Iraq</option>
                    <option value="Iceland">Iceland</option>
                    <option value="Israel">Israel</option>
                    <option value="Italy">Italy</option>
                    <option value="Jamaica">Jamaica</option>
                    <option value="Jordan">Jordan</option>
                    <option value="Japan">Japan</option>
                    <option value="Kazakhstan">Kazakhstan</option>
                    <option value="Kenya">Kenya</option>
                    <option value="Kyrgyzstan">Kyrgyzstan</option>
                    <option value="Cambodia">Cambodia</option>
                    <option value="Kiribati">Kiribati</option>
                    <option value="Saint Kitts and Nevis">
                      Saint Kitts and Nevis
                    </option>
                    <option value="Korea, Republic of">
                      Korea, Republic of
                    </option>
                    <option value="Kuwait">Kuwait</option>
                    <option value="Lao People’s Democratic Republic">
                      Lao People’s Democratic Republic
                    </option>
                    <option value="Lebanon">Lebanon</option>
                    <option value="Liberia">Liberia</option>
                    <option value="Libya">Libya</option>
                    <option value="Saint Lucia">Saint Lucia</option>
                    <option value="Liechtenstein">Liechtenstein</option>
                    <option value="Sri Lanka">Sri Lanka</option>
                    <option value="Lesotho">Lesotho</option>
                    <option value="Lithuania">Lithuania</option>
                    <option value="Luxembourg">Luxembourg</option>
                    <option value="Latvia">Latvia</option>
                    <option value="Morocco">Morocco</option>
                    <option value="Monaco">Monaco</option>
                    <option value="Moldova, Republic of">
                      Moldova, Republic of
                    </option>
                    <option value="Madagascar">Madagascar</option>
                    <option value="Maldives">Maldives</option>
                    <option value="Mexico">Mexico</option>
                    <option value="Marshall Islands">Marshall Islands</option>
                    <option value="Macedonia, the former Yugoslav Republic of">
                      Macedonia, the former Yugoslav Republic of
                    </option>
                    <option value="Mali">Mali</option>
                    <option value="Malta">Malta</option>
                    <option value="Myanmar">Myanmar</option>
                    <option value="Montenegro">Montenegro</option>
                    <option value="Mongolia">Mongolia</option>
                    <option value="Mozambique">Mozambique</option>
                    <option value="Mauritania">Mauritania</option>
                    <option value="Mauritius">Mauritius</option>
                    <option value="Malawi">Malawi</option>
                    <option value="Malaysia">Malaysia</option>
                    <option value="Namibia">Namibia</option>
                    <option value="Niger">Niger</option>
                    <option value="Nigeria">Nigeria</option>
                    <option value="Nicaragua">Nicaragua</option>
                    <option value="Netherlands">Netherlands</option>
                    <option value="Norway">Norway</option>
                    <option value="Nepal">Nepal</option>
                    <option value="Nauru">Nauru</option>
                    <option value="New Zealand">New Zealand</option>
                    <option value="Oman">Oman</option>
                    <option value="Pakistan">Pakistan</option>
                    <option value="Panama">Panama</option>
                    <option value="Peru">Peru</option>
                    <option value="Philippines">Philippines</option>
                    <option value="Palau">Palau</option>
                    <option value="Papua New Guinea">Papua New Guinea</option>
                    <option value="Poland">Poland</option>
                    <option value="Puerto Rico">Puerto Rico</option>
                    <option value="Korea, Democratic People’s Republic of">
                      Korea, Democratic People’s Republic of
                    </option>
                    <option value="Portugal">Portugal</option>
                    <option value="Paraguay">Paraguay</option>
                    <option value="Palestine, State of">
                      Palestine, State of
                    </option>
                    <option value="Qatar">Qatar</option>
                    <option value="Romania">Romania</option>
                    <option value="Russian Federation">
                      Russian Federation
                    </option>
                    <option value="Rwanda">Rwanda</option>
                    <option value="Saudi Arabia">Saudi Arabia</option>
                    <option value="Sudan">Sudan</option>
                    <option value="Senegal">Senegal</option>
                    <option value="Singapore">Singapore</option>
                    <option value="Solomon Islands">Solomon Islands</option>
                    <option value="Sierra Leone">Sierra Leone</option>
                    <option value="El Salvador">El Salvador</option>
                    <option value="San Marino">San Marino</option>
                    <option value="Somalia">Somalia</option>
                    <option value="Serbia">Serbia</option>
                    <option value="Sao Tome and Principe">
                      Sao Tome and Principe
                    </option>
                    <option value="Suriname">Suriname</option>
                    <option value="Slovakia">Slovakia</option>
                    <option value="Slovenia">Slovenia</option>
                    <option value="Sweden">Sweden</option>
                    <option value="Swaziland">Swaziland</option>
                    <option value="Seychelles">Seychelles</option>
                    <option value="Syrian Arab Republic">
                      Syrian Arab Republic
                    </option>
                    <option value="Chad">Chad</option>
                    <option value="Togo">Togo</option>
                    <option value="Thailand">Thailand</option>
                    <option value="Tajikistan">Tajikistan</option>
                    <option value="Turkmenistan">Turkmenistan</option>
                    <option value="Timor-Leste">Timor-Leste</option>
                    <option value="Tonga">Tonga</option>
                    <option value="Trinidad and Tobago">
                      Trinidad and Tobago
                    </option>
                    <option value="Tunisia">Tunisia</option>
                    <option value="Turkey">Turkey</option>
                    <option value="Tuvalu">Tuvalu</option>
                    <option value="Taiwan, Province of China">
                      Taiwan, Province of China
                    </option>
                    <option value="Tanzania, United Republic of">
                      Tanzania, United Republic of
                    </option>
                    <option value="Uganda">Uganda</option>
                    <option value="Ukraine">Ukraine</option>
                    <option value="Uruguay">Uruguay</option>
                    <option value="United States">United States</option>
                    <option value="Uzbekistan">Uzbekistan</option>
                    <option value="Saint Vincent and the Grenadines">
                      Saint Vincent and the Grenadines
                    </option>
                    <option value="Venezuela, Bolivarian Republic of">
                      Venezuela, Bolivarian Republic of
                    </option>
                    <option value="Virgin Islands, U.S.">
                      Virgin Islands, U.S.
                    </option>
                    <option value="Viet Nam">Viet Nam</option>
                    <option value="Vanuatu">Vanuatu</option>
                    <option value="Samoa">Samoa</option>
                    <option value="Yemen">Yemen</option>
                    <option value="South Africa">South Africa</option>
                    <option value="Zambia">Zambia</option>
                    <option value="Zimbabwe">Zimbabwe</option>
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
