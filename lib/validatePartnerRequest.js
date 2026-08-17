const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_PATTERN = /^[0-9+\-() ]{7,20}$/;
const URL_PATTERN = /^https?:\/\/[^\s]+\.[^\s]+$/i;

export function validatePartnerRequest(body) {
  const data = {
    name: String(body?.name ?? "").trim(),
    company_name: String(body?.company_name ?? "").trim(),
    phone: String(body?.phone ?? "").trim(),
    city: String(body?.city ?? "").trim(),
    country: String(body?.country ?? "").trim(),
    email: String(body?.email ?? "").trim(),
    website_url: String(body?.website_url ?? "").trim(),
    partnership_info: String(body?.partnership_info ?? "").trim(),
  };

  const errors = {};

  if (!data.name) errors.name = "Name is required.";
  if (!data.company_name) errors.company_name = "Company name is required.";

  if (!data.phone) {
    errors.phone = "Phone is required.";
  } else if (!PHONE_PATTERN.test(data.phone)) {
    errors.phone = "Enter a valid phone number.";
  }

  if (!data.city) errors.city = "City is required.";
  if (!data.country) errors.country = "Country is required.";

  if (!data.email) {
    errors.email = "Email is required.";
  } else if (!EMAIL_PATTERN.test(data.email)) {
    errors.email = "Enter a valid email address.";
  }

  if (!data.website_url) {
    errors.website_url = "Website URL is required.";
  } else if (!URL_PATTERN.test(data.website_url)) {
    errors.website_url = "Enter a valid URL (starting with http:// or https://).";
  }

  if (!data.partnership_info)
    errors.partnership_info = "Partnership information is required.";

  return { data, errors };
}
