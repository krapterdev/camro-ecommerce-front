import WebsiteUserVerifyPage from "../../components/website/LogInPageComponents/WebsiteUserVerifyPage";
import useSEO from "../../hooks/useSEO";

const UserVerify = () => {
  useSEO({
    title: "Website User Verify Page - Camro",
    description: "Learn more about Camro and our mission.",
    keywords: "about, Camro, company",
  });

  return (
    <>
      <WebsiteUserVerifyPage />
    </>
  );
};

export default UserVerify;
