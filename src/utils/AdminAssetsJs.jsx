import useAssetsJs from "../hooks/useAssetsJs";

const AdminAssetsJs = () => {
  useAssetsJs([
    "/src/assets/admin/js/vendor.js",
    "/src/assets/admin/js/app.js",
    "/src/assets/admin/vendor/jsvectormap/jsvectormap.min.js",
    "/src/assets/admin/vendor/jsvectormap/maps/world-merc.js",
    "/src/assets/admin/vendor/jsvectormap/maps/world.js",
    // "/src/assets/admin/js/pages/dashboard.js",
  ]);

  return null;
};

export default AdminAssetsJs;
