// src/components/admin/sidebar/Sidebar.jsx
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Icon } from "@iconify/react";
import sideMenuItems from "./sideMenuItems";
import AdminLogo from "../../../assets/common/logo.png";

function Sidebar() {
  const [activeMenus, setActiveMenus] = useState({});
  const location = useLocation();

  const toggleMenu = (index) => {
    setActiveMenus((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="main-nav">
      {/* Logo */}
      <div className="logo-box">
        <Link to="/admin/dashboard" className="logo-dark">
          <img src={AdminLogo} className="logo-sm" alt="logo sm" />
          <img src={AdminLogo} className="logo-lg" alt="logo dark" />
        </Link>
        <Link to="/admin/dashboard" className="logo-light text-center">
          <img src={AdminLogo} className="logo-sm" alt="logo sm" />
          <img src={AdminLogo} className="logo-lg" alt="logo light" style={{ width: "70%", height: "100%" }} />
        </Link>
      </div>

      {/* Toggle Button */}
      <button type="button" className="button-sm-hover" aria-label="Show Full Sidebar">
        <Icon icon="solar:double-alt-arrow-right-bold-duotone" className="button-sm-hover-icon" />
      </button>

      {/* Sidebar Menu */}
      <div className="scrollbar iv-slider" data-simplebar>
        <ul className="navbar-nav" id="navbar-nav">
          <li className="menu-title">General</li>

          {sideMenuItems.map((item, index) => (
            <li className="nav-item" key={index}>
              {/* Item with Submenu */}
              {item.children ? (
                <div className="w-full">
                  <div
                    onClick={() => toggleMenu(index)}
                    className="nav-link flex justify-between items-center cursor-pointer"
                  >
                    <div className="flex items-center gap-2">
                      <Icon icon={item.icon} />
                      <span className="nav-text">{item.title}</span>
                    </div>
                    <Icon icon={activeMenus[index] ? "mdi:chevron-up" : "mdi:chevron-down"} />
                  </div>

                  {activeMenus[index] && (
                    <ul className="nav sub-navbar-nav ml-6 mt-1">
                      {item.children.map((subItem, subIndex) => (
                        <li className="sub-nav-item" key={subIndex}>
                          <Link
                            className={`sub-nav-link ${location.pathname === subItem.path ? "active" : ""}`}
                            to={subItem.path}
                          >
                            {subItem.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                // Item without submenu
                <Link className={`nav-link flex items-center gap-2 ${location.pathname === item.path ? "active" : ""}`} to={item.path}>
                  <Icon icon={item.icon} />
                  <span className="nav-text">{item.title}</span>
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
