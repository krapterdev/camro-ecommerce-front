import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import AdminAvtarImg from "../../../assets/admin/images/users/avatar-1.jpg";
import titleData from "./titleData";

const AdminTopbar = () => {
  const location = useLocation();
  const title = titleData[location.pathname] || "Admin Panel";

  return (
    <header className="topbar">
      <div className="container-fluid">
        <div className="navbar-header">
          <div className="d-flex align-items-center">
            {/* Menu Toggle Button */}
            <div className="topbar-item">
              <button type="button" className="button-toggle-menu me-2">
                <iconify-icon
                  icon="solar:hamburger-menu-broken"
                  class="fs-24 align-middle"
                ></iconify-icon>
              </button>
            </div>

            {/* Title */}
            <div className="topbar-item">
              <h4 className="fw-bold topbar-button pe-none text-uppercase mb-0">
                {title}
              </h4>
            </div>
          </div>

          <div className="d-flex align-items-center gap-1">
            {/* Light/Dark Toggle */}
            <div className="topbar-item">
              <button
                type="button"
                className="topbar-button"
                id="light-dark-mode"
              >
                <iconify-icon
                  icon="solar:moon-bold-duotone"
                  class="fs-24 align-middle"
                ></iconify-icon>
              </button>
            </div>

            {/* Theme Settings */}
            <div className="topbar-item d-none d-md-flex">
              <button
                type="button"
                className="topbar-button"
                id="theme-settings-btn"
                data-bs-toggle="offcanvas"
                data-bs-target="#theme-settings-offcanvas"
                aria-controls="theme-settings-offcanvas"
              >
                <iconify-icon
                  icon="solar:settings-bold-duotone"
                  class="fs-24 align-middle"
                ></iconify-icon>
              </button>
            </div>

            {/* User Dropdown */}
            <div className="dropdown topbar-item">
              <a
                type="button"
                className="topbar-button"
                id="page-header-user-dropdown"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span className="d-flex align-items-center">
                  <img
                    className="rounded-circle"
                    width="32"
                    src={AdminAvtarImg}
                    alt="avatar"
                  />
                </span>
              </a>
              <div className="dropdown-menu dropdown-menu-end">
                <h6 className="dropdown-header">Welcome Krapter!</h6>
                <Link to="/admin/profile" className="dropdown-item">
                  <i className="bx bx-user-circle text-muted fs-18 align-middle me-1"></i>
                  <span className="align-middle">Profile</span>
                </Link>
                {/* Lock screen can be added here if needed */}
                <div className="dropdown-divider my-1"></div>
                <Link to="/admin/logout" className="dropdown-item text-danger">
                  <i className="bx bx-log-out fs-18 align-middle me-1"></i>
                  <span className="align-middle">Logout</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminTopbar;
