import ContactContent from "@/components/ContactContent";

export const metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Apex Global Solutions to discuss your next web development, e-commerce, or digital marketing project.",
  alternates: {
    canonical: "/contact-us",
  },
};

export default function Page() {
  return <ContactContent />;
}
