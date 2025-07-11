import BreadCrumb from "../../components/website/PartialComponents/BreadCrumb";
import WebsiteContactUsForm from "../../components/website/ContactUsComponents/WebsiteContactUsForm";
import useSEO from "../../hooks/useSEO";

const ContactUs = () => {
  useSEO({
    title: "Contact Us - Mangatram",
    description: "Learn more about Mangatram and our mission.",
    keywords: "about, mangatram, company",
  });

  return (
    <>
      <BreadCrumb
        title="Contact Us"
        items={[{ label: "Home", href: "/" }, { label: "Contact Us" }]}
      />
      <WebsiteContactUsForm />
    </>
  );
};

export default ContactUs;
