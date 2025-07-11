import ContactUsBreadCrumb from "../../components/website/ContactUsComponents/ContactUsBreadCrumb";
 import ContactUsForm from "../../components/website/ContactUsComponents/ContactUsForm";
 import useSEO from "../../hooks/useSEO";

const ContactUs = () => {
  useSEO({
    title: "Contact Us - Mangatram",
    description: "Learn more about Mangatram and our mission.",
    keywords: "about, mangatram, company",
  });

  return (
    <>
      <ContactUsBreadCrumb />
      <ContactUsForm />
      </>
  );
};

export default ContactUs;
