import axios from "axios";

const API_BASE_URL = (
  process.env.NEXT_PUBLIC_API_BASE_URL ||
  "https://agswebsite.com/agsnew/nextjs/backend/api"
).replace(/\/+$/, "");

export const submitQuoteRequest = async (formData) => {
  const response = await axios.post(
    `${API_BASE_URL}/service-request.php`,
    formData,
    {
      headers: {
        "Content-Type": "application/json",
      },
    },
  );

  return response.data;
};

export const submitContactForm = async (formData) => {
  const response = await axios.post(`${API_BASE_URL}/contact.php`, formData, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.data;
};

export const submitPartnerRequest = async (formData) => {
  const response = await axios.post(
    `${API_BASE_URL}/partner-with-us.php`,
    formData,
    {
      headers: {
        "Content-Type": "application/json",
      },
    },
  );

  return response.data;
};
