import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const PublicRoute = () => {
  const { user, loading } = useContext(AuthContext);

  if (loading) return <div>Loading...</div>;
 
  if (user) {
    return <Navigate to="/user-dashboard" replace />;
  }
  return <Outlet />;
};

export default PublicRoute;
