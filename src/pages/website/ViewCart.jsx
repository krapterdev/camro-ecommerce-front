
import BreadCrumb from "../../components/website/PartialComponents/BreadCrumb";
import WebsiteContactUsForm from "../../components/website/ContactUsComponents/WebsiteContactUsForm";
import useSEO from "../../hooks/useSEO";
import WebsiteViewCartComponent from "../../components/website/WebsiteViewCartForm/WebsiteViewCartComponent";

const ViewCart = () => {
   useSEO({
    title: "Shop Cart - camro",
    description: "Learn more about camro and our mission.",
    keywords: "about, camro, company",
  });


  return (
    <>
     <BreadCrumb
        title="Shop Cart"
        items={[{ label: "Home", href: "/" }, { label: "Shop Cart" }]}
      />
      <WebsiteViewCartComponent />
    </>
  )
}

export default ViewCart