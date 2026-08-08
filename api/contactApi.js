import axios from "axios";

export const submitQuoteRequest = async (formData) => {
  const response = await axios.post("/api/quote-request", formData, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.data;
};

export const submitContactForm = async (formData) => {
  const response = await axios.post("/api/contact-request", formData, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.data;
};
