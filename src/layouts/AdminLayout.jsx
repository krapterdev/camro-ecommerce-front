import AdminAssetsCss from "../utils/AdminAssetsCss";
import AdminTopbar from "../components/admin/Partials/AdminTopbar";
// import AdminAssetsJs from "../utils/AdminAssetsJs";
import { Outlet } from "react-router-dom";
import AdminFooter from "../components/admin/Partials/AdminFooter";
import AdminHeader from "../components/admin/Partials/AdminHeader";

const AdminLayout = () => (
  <>
    <AdminAssetsCss />
    <AdminHeader />
    <div className="wrapper">
      <AdminTopbar />
      <Outlet />
      <AdminFooter />
    </div>
    {/* <AdminAssetsJs /> */}
  </>
);

export default AdminLayout;
