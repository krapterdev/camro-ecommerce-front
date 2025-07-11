import WebsiteAssetsCss from "../utils/WebsiteAssetsCss";
// import ScrollTopButton from "../components/website/PartialComponents/ScrollTopButton";
import WebsiteHeader from "../components/website/PartialComponents/Header";
import { Outlet } from "react-router-dom";
import WebsiteFooter from "../components/website/PartialComponents/Footer";
// import MobileHomeModals from "../components/website/HomePageComponents/MobileHomeModals";
import WebsiteAssetsJs from "../utils/WebsiteAssetsJs";

const WebsiteLayout = () => (
  <>
    <WebsiteAssetsCss />
    {/* <ScrollTopButton /> */}

    <WebsiteHeader />
    <div className="page-wraper">
      <Outlet />
    </div>
    <WebsiteFooter />

    {/* <MobileHomeModals /> */}
    <WebsiteAssetsJs />
  </>
);

export default WebsiteLayout;
