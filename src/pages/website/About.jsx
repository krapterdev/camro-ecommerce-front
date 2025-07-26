import WebsiteAboutUs from "../../components/website/AboutPageComponents/WebsiteAboutUs";
import BreadCrumb from "../../components/website/PartialComponents/BreadCrumb";
import useSEO from "../../hooks/useSEO";

const AboutPage = () => {
  useSEO({
    title: "About Us - Camro",
    description: "Learn more about Camro and our mission.",
    keywords: "about, Camro, company",
  });

  return (
    <>
      <BreadCrumb
        title="About Us"
        items={[{ label: "Home", href: "/" }, { label: "About Us" }]}
      />

      <WebsiteAboutUs />
    </>
  );
};

export default AboutPage;
