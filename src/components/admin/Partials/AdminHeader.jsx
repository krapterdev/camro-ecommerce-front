import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useState } from "react";
import AdminLogo from "../../../assets/common/logo.png";
import { menuItems } from "./MenuItems";

function AdminHeader() {
  const [openMenu, setOpenMenu] = useState("");

  const toggleMenu = (title) => {
    setOpenMenu(openMenu === title ? "" : title);
  };

  return (
    <div className="main-nav">
      {/* Sidebar Logo */}
      <div className="logo-box">
        <Link to="/dashboards" className="logo-dark">
          <img src={AdminLogo} className="logo-sm" alt="logo sm" />
          <img src={AdminLogo} className="logo-lg" alt="logo dark" />
        </Link>

        <Link to="/dashboards" className="logo-light">
          <img src={AdminLogo} className="logo-sm" alt="logo sm" />
          <img
            src={AdminLogo}
            className="logo-lg"
            alt="logo light"
            style={{ height: "85px" }}
          />
        </Link>
      </div>

      {/* Sidebar Toggle Button */}
      <button
        type="button"
        className="button-sm-hover"
        aria-label="Show Full Sidebar"
      >
        <Icon
          icon="solar:double-alt-arrow-right-bold-duotone"
          className="button-sm-hover-icon"
        />
      </button>

      {/* Sidebar Menu with Scrollbar */}
      <div className="scrollbar iv-slider" data-simplebar>
        <ul className="navbar-nav" id="navbar-nav">
          {menuItems.map((item) => (
            <li className="nav-item" key={item.title}>
              {item.children ? (
                <>
                  <button
                    className="nav-link menu-arrow"
                    onClick={() => toggleMenu(item.title)}
                    aria-expanded={openMenu === item.title}
                  >
                    <span className="nav-icon">
                      <Icon icon={item.icon} />
                    </span>
                    <span className="nav-text">{item.title}</span>
                  </button>

                  <div
                    className={`collapse${
                      openMenu === item.title ? " show" : ""
                    }`}
                  >
                    <ul className="nav sub-navbar-nav">
                      {item.children.map((subItem) => (
                        <li className="sub-nav-item" key={subItem.title}>
                          <Link className="sub-nav-link" to={subItem.path}>
                            {subItem.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              ) : (
                <Link className="nav-link" to={item.path}>
                  <span className="nav-icon">
                    <Icon icon={item.icon} />
                  </span>
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

export default AdminHeader;
