import WebsiteLoginPage from "../../components/website/LogInPageComponents/WebsiteLoginPage";
import useSEO from "../../hooks/useSEO";

const LogIn = () => {
  useSEO({
    title: "Log In - Camro",
    description: "Learn more about Camro and our mission.",
    keywords: "about, Camro, company",
  });

  return (
    <>
      <WebsiteLoginPage />
    </>
  );
};

export default LogIn;
