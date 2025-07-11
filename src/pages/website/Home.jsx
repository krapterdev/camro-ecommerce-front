// src/pages/Home.jsx

import WebsiteSlider from "../../components/website/HomePageComponents/WebsiteSlider";
import WebsiteHomeAboutUs from "../../components/website/HomePageComponents/WebsiteHomeAboutUs";
import WebsiteHomeFeaturesCategory from "../../components/website/HomePageComponents/WebsiteHomeFeaturesCategory";

const Home = () => {
  return (
    <>
      <WebsiteSlider />
      <WebsiteHomeAboutUs />
      <WebsiteHomeFeaturesCategory />
      {/* <WebsiteHomeOurProducts  /> */}
    </>
  );
};

export default Home;
