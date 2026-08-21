const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_PATTERN = /^[0-9+\-() ]{7,20}$/;
const ALLOWED_SERVICES = [
  "Web Development",
  "Graphics Design",
  "App Development",
  "Digital Marketing",
  "Software Development",
];

export function validateQuoteRequest(body) {
  const data = {
    first_name: String(body?.first_name ?? "").trim(),
    last_name: String(body?.last_name ?? "").trim(),
    email: String(body?.email ?? "").trim(),
    phone: String(body?.phone ?? "").trim(),
    service: String(body?.service ?? "").trim(),
  };

  const errors = {};

  if (!data.first_name) errors.first_name = "First name is required.";
  if (!data.last_name) errors.last_name = "Last name is required.";

  if (!data.email) {
    errors.email = "Email is required.";
  } else if (!EMAIL_PATTERN.test(data.email)) {
    errors.email = "Enter a valid email address.";
  }

  if (!data.phone) {
    errors.phone = "Phone is required.";
  } else if (!PHONE_PATTERN.test(data.phone)) {
    errors.phone = "Enter a valid phone number.";
  }

  if (!data.service || !ALLOWED_SERVICES.includes(data.service)) {
    errors.service = "Please select a valid service.";
  }

  return { data, errors };
}
