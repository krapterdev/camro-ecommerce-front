import useAssetsCss from "../hooks/useAssetsCss";
import adminfavicon from "../assets/common/adminfavicon.ico";

const AdminAssetsCss = () => {
  useAssetsCss([
    "/src/assets/admin/css/vendor.min.css",
    "/src/assets/admin/css/icons.min.css",
    "/src/assets/admin/css/app.min.css",
    "/src/assets/admin/js/config.js",
  ]);

  return null;
};

export default AdminAssetsCss;