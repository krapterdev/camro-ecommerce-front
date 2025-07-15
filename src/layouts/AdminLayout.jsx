import AdminAssetsCss from "../utils/AdminAssetsCss";
import AdminTopbar from "../components/admin/Partials/AdminTopbar";
import AdminAssetsJs from "../utils/AdminAssetsJs";
import { Outlet } from "react-router-dom";
import AdminFooter from "../components/admin/Partials/AdminFooter";
import AdminHeader from "../components/admin/Partials/AdminHeader";
import Sidebar from "../components/admin/Partials/Sidebar";


const AdminLayout = () => (
  <>
    <AdminAssetsCss />
    {/* <AdminHeader /> */}
    <div className="wrapper">
      <AdminTopbar />
      <Sidebar />
      <div className="page-content">
        <Outlet />
      </div>
      <AdminFooter />
    </div>
    <AdminAssetsJs />
  </>
);

export default AdminLayout;
