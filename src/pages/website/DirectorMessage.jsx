import AboutDirectorMessageBreadCrumb from "../../components/website/AboutDirectorMessage/AboutDirectorMessageBreadCrumb";
import AboutDirectorMessageDirectorMsg from "../../components/website/AboutDirectorMessage/AboutDirectorMessageDirectorMsg";

import useSEO from "../../hooks/useSEO";

const DirectorMessage = () => {
  useSEO({
    title: "Director Message - Mangatram",
    description: "Learn more about Mangatram and our mission.",
    keywords: "about, mangatram, company",
  });
  return (
    <>
      <AboutDirectorMessageBreadCrumb />
      <AboutDirectorMessageDirectorMsg />
    </>
  );
};

export default DirectorMessage;
