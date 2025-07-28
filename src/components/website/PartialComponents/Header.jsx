import { Link, useNavigate, NavLink } from "react-router-dom";
import logo from "../../../assets/common/logo.png";
import React, { useEffect, useState, useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import axios from "axios";
import CartBoxComponent from "../CartBoxComponent";
import { AuthContext } from "../../../context/AuthContext";

const webURL = import.meta.env.VITE_WEBSITE_APP_API_BASE_URL;

const Header = () => {
  const { user, logout, loading } = useContext(AuthContext);

  const [isFixed, setIsFixed] = useState(false);
  const { totalCartitems } = useContext(CartContext);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [headerCategory, setHeaderCategory] = useState([]);
  const [groupedProducts, setGroupedProducts] = useState([]);
  const [categoryerror, setCategoryError] = useState("");
  const [categoryloading, setCategoryIsLoading] = useState(false);
  const [homeProductIsLoading, setHomeProductIsLoading] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [AllProducts, setAllProducts] = useState([]);
  const useridstorageKey = "userid";
  const usertypestorageKey = "usertype";
  const userid = localStorage.getItem(useridstorageKey);
  const usertype = localStorage.getItem(usertypestorageKey);

  useEffect(() => {
    const adduserid = Math.floor(Math.random() * 100000);
    const userkey = "userid";
    const defaultUserValue = adduserid;

    const usertypes = "usertype";
    const defaultUserType = "guestUser";

    const userid = localStorage.getItem(userkey);
    const usertype = localStorage.getItem(usertypes);

    if (userid === null && usertype === null) {
      localStorage.setItem(userkey, defaultUserValue);
      localStorage.setItem(usertypes, defaultUserType);
    }
  }, []);

  // ----------------------------------------------------

  const handleLogout = () => {
    logout();
  };

  // const navigate = useNavigate();
  // const user = JSON.parse(localStorage.getItem("auth_user"));

  // const handleLogout = () => {
  //   localStorage.removeItem("auth_user");
  //   // localStorage.removeItem("cart_items");
  //   navigate("/login");
  // };

  // const [count, setCount] = useState(0);

  // useEffect(() => {
  //   const updateCartCount = () => {
  //     const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  //     const total = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  //     setCount(total);
  //   };

  //   updateCartCount();

  //   // Listen for cart updates
  //   window.addEventListener("cartUpdated", updateCartCount);

  //   return () => {
  //     window.removeEventListener("cartUpdated", updateCartCount);
  //   };
  // }, [count, setCount]);

  // ---------------------------------------------

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get(`${webURL}/categories`);
        setHeaderCategory(res.data || []);
      } catch (err) {
        console.error("❌ Failed to load categories:", err.message);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(`${webURL}/allproduct`);
        const allProducts = res.data || [];
        const productByCategory = allProducts.reduce((acc, product) => {
          const categoryId = product.category_id;
          if (!categoryId) return acc;

          if (!acc[categoryId]) acc[categoryId] = [];
          acc[categoryId].push(product);
          return acc;
        }, {});

        setGroupedProducts(productByCategory);
      } catch (err) {
        console.error("❌ Failed to load products:", err.message);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <header className="site-header mo-left header style-1 header-transparent ">
        <div className="top-bar">
          <div className="container-fluid">
            <div className="dz-topbar-inner d-flex justify-content-between align-items-center">
              <div className="dz-topbar-left">
                <ul>
                  <li>
                    <Link to="/">My Account</Link>
                  </li>
                  <li>
                    <Link to="/">Order Tracking</Link>
                  </li>
                </ul>
              </div>
              <div className="dz-topbar-right">
                <ul>
                  <li>
                    <span>Help Desk :</span>
                  </li>
                  <li>
                    <Link to="tel:18008891401" target="_blank">
                      18008891401
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`sticky-header main-bar-wraper navbar-expand-lg ${
            isFixed ? "is-fixed" : ""
          }`}
        >
          <div className="main-bar clearfix">
            <div className="container-fluid clearfix d-lg-flex d-block">
              <div className="logo-header logo-dark me-md-5">
                <Link to={"/"}>
                  <img src={logo} alt="logo" />
                </Link>
              </div>
              <button
                className="navbar-toggler collapsed navicon justify-content-end"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
              <div
                className="header-nav w3menu navbar-collapse collapse justify-content-center"
                id="navbarNavDropdown"
              >
                <div className="logo-header logo-dark">
                  <Link to={"/"}>
                    <img src={`/src/assets/website/images/logo.png`} alt="" />
                  </Link>
                </div>
                <ul className="nav navbar-nav">
                  <li>
                    <NavLink
                      to="/"
                      className={({ isActive }) => (isActive ? "active" : "")}
                    >
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/about"
                      className={({ isActive }) => (isActive ? "active" : "")}
                    >
                      About Us
                    </NavLink>
                  </li>
                  {/* <li className="has-mega-menu sub-menu-down wide-width">
                    <Link to="#">
                      <span>Shop Now</span>
                      <i className="fas fa-chevron-down tabIndex"></i>
                    </Link>
                    <div className="mega-menu">
                      <ul>
                        {headerCategory
                          .filter(
                            (item) =>
                              item.status !== 0 && item.showontopmemu === "1"
                          )
                          .map((item, index) => (
                            <li key={index}>
                              <Link
                                to={`/${item.caturl}`}
                                className="menu-title"
                              >
                                {item.category_name}
                              </Link>
                              <ul>
                                {AllProducts.filter(
                                  (items) =>
                                    items.status !== 0 &&
                                    items.category_id === item.id
                                )
                                  .slice(0, 10)
                                  .map((items, idx) => (
                                    <li key={idx}>
                                      <Link
                                        to={`/${item.caturl}/${items.pro_url}`}
                                      >
                                        {items.product_name}
                                      </Link>
                                    </li>
                                  ))}
                                <li>
                                  <Link to={`/${item.caturl}`}>View All</Link>
                                </li>
                              </ul>
                            </li>
                          ))}
                      </ul>
                    </div>
                  </li> */}

                  <li className="has-mega-menu sub-menu-down wide-width">
                    <Link>
                      <span>Shop Now</span>
                      <i className="fas fa-chevron-down tabIndex"></i>
                    </Link>
                    <div className="mega-menu">
                      <ul>
                        {headerCategory
                          .filter((cat) => cat.status !== 0)
                          .map((cat) => (
                            <li key={cat.id}>
                              <Link
                                to={`/${cat.category_slug}`}
                                className="menu-title"
                              >
                                {cat.category_name}
                              </Link>
                              <ul>
                                {(groupedProducts[cat.id] || [])
                                  .filter((prod) => prod.status !== 0)
                                  .slice(0, 10)
                                  .map((prod) => (
                                    <li key={prod.id}>
                                      <Link
                                        to={`/${cat.category_slug}/${prod.product_slug}`}
                                      >
                                        {prod.product_name}
                                      </Link>
                                    </li>
                                  ))}
                                <li>
                                  <Link to={`/${cat.category_slug}`}>
                                    View All
                                  </Link>
                                </li>
                              </ul>
                            </li>
                          ))}
                      </ul>
                    </div>
                  </li>

                  <li>
                    <NavLink
                      to="/why-us"
                      className={({ isActive }) => (isActive ? "active" : "")}
                    >
                      Why Us
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/contact"
                      className={({ isActive }) => (isActive ? "active" : "")}
                    >
                      Contact Us
                    </NavLink>
                  </li>
                </ul>

                <div className="dz-social-icon">
                  <ul>
                    <li>
                      <Link
                        className="fab fa-facebook-f"
                        target="_blank"
                        to="https://www.facebook.com/CamroSteels/"
                      ></Link>
                    </li>
                    <li>
                      <Link
                        className="fab fa-twitter"
                        target="_blank"
                        to="https://x.com/CamroSteels"
                      ></Link>
                    </li>
                    <li>
                      <Link
                        className="fab fa-linkedin-in"
                        target="_blank"
                        to="https://www.linkedin.com/showcase/3686700/admin/"
                      ></Link>
                    </li>
                    <li>
                      <Link
                        className="fab fa-instagram"
                        target="_blank"
                        to="https://www.instagram.com/triplycookware/"
                      ></Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="extra-nav">
                <div className="extra-cell">
                  <ul className="header-right">
                    <li className="nav-item login-link">
                      {/* {user ? (
                        <span className="nav-link" onClick={handleLogout}>
                          Logout
                        </span>
                      ) : (
                        <Link className="nav-link" to="/login">
                          Login / Register
                        </Link>
                      )} */}
                      {loading ? (
                        <div
                          className="d-flex justify-content-center align-items-center"
                        >
                          <div
                            className="spinner-border text-secondary"
                            role="status"
                          >
                            <span className="visually-hidden">Loading...</span>
                          </div>
                        </div>
                      ) : user ? (
                        <Link className="nav-link" onClick={logout}>
                          Logout
                        </Link>
                      ) : (
                        <Link className="nav-link" to="/login">
                          Login / Register
                        </Link>
                      )}

                      {/* {user ? (
                        <Link className="nav-link" onClick={logout}>
                          Logout
                        </Link>
                      ) : (
                        <Link className="nav-link" to="/login">
                          Login / Register
                        </Link>
                      )} */}
                    </li>

                    <li className="nav-item search-link">
                      <Link
                        className="nav-link"
                        to="#"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasTop"
                        aria-controls="offcanvasTop"
                      >
                        <i className="iconly-Light-Search"></i>
                      </Link>
                    </li>
                    <li className="nav-item wishlist-link">
                      <Link
                        className="nav-link"
                        to="#"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasRight"
                        aria-controls="offcanvasRight"
                      >
                        <i className="iconly-Light-Heart2"></i>
                      </Link>
                    </li>
                    <li className="nav-item cart-link">
                      <Link
                        to="#"
                        className="nav-link cart-btn"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasRight"
                        aria-controls="offcanvasRight"
                      >
                        <i className="iconly-Broken-Buy"></i>
                        {totalCartitems() > 0 && (
                          <span className="badge badge-circle">
                            {totalCartitems()}
                          </span>
                        )}
                      </Link>
                    </li>
                    <li className="nav-item filte-link">
                      <Link
                        to="#"
                        className="nav-link filte-btn"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasLeft"
                        aria-controls="offcanvasLeft"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="30"
                          height="30"
                          viewBox="0 0 30 13"
                          fill="none"
                        >
                          <rect y="11" width="30" height="2" fill="black" />
                          <rect width="30" height="2" fill="black" />
                        </svg>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div
          className="dz-search-area dz-offcanvas offcanvas offcanvas-top"
          tabIndex="-1"
          id="offcanvasTop"
        >
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            &times;
          </button>
          <div className="container">
            <form className="header-item-search">
              <div className="input-group search-input">
                <input
                  type="search"
                  className="form-control"
                  placeholder="Search Product"
                />
                <button className="btn" type="button">
                  <i className="iconly-Light-Search"></i>
                </button>
              </div>
              <ul className="recent-tag">
                <li className="pe-0">
                  <span>Quick Search :</span>
                </li>
                {headerCategory
                  .filter((item) => item.status !== 0)
                  .map((item, index) => (
                    <li>
                      <Link to={`/${item.caturl}`}>{item.category_name}</Link>
                    </li>
                  ))}
              </ul>
            </form>
          </div>
        </div> */}

        <CartBoxComponent />

        {/* <div
          className="offcanvas dz-offcanvas offcanvas offcanvas-end "
          tabIndex="-1"
          id="offcanvasLeft"
        >
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            &times;
          </button>
          <div className="offcanvas-body">
            <div className="product-description spacing-manager">
              <div className="widget mb-4">
                <h6 className="widget-title">Filter</h6>
              </div>
              <div className="widget widget_search mb-0">
                <div className="form-group mb-0">
                  <div className="input-group">
                    <input
                      name="dzSearch"
                      required="required"
                      type="search"
                      className="form-control"
                      placeholder="Search Product"
                    />
                    <div className="input-group-addon">
                      <button
                        name="submit"
                        value="Submit"
                        type="submit"
                        className="btn"
                      >
                        <i className="icon feather icon-search"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="widget widget_categories mb-3">
                <h6 className="widget-title">Category</h6>
                <ul>
                  {headerCategory
                    .filter((item) => item.status !== 0)
                    .map((item, index) => (
                      <li className="cat-item cat-item-26">
                        <Link to={`/${item.caturl}`}>{item.category_name}</Link>
                        ({item.product_count})
                      </li>
                    ))}
                </ul>
              </div>

              <Link
                to="#"
                className="btn btn-sm font-14 bg-red2 text-white btn-sharp"
              >
                RESET FILTER
              </Link>
            </div>
          </div>
        </div> */}
      </header>
    </>
  );
};

export default Header;
