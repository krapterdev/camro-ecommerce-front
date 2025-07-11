import { Link, useNavigate, NavLink } from "react-router-dom";
import logo from "../../../assets/common/logo.png";
import React, { useEffect, useState, useContext } from "react";
import { CartContext } from "../../../context/cartContext";
// import QtyInput from "../components/QtyInput";
const Header = () => {
  const [isFixed, setIsFixed] = useState(false);

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

  const handleheaderCategories = async () => {
    setCategoryIsLoading(true);
    setCategoryError("");
    try {
      const response = await fetch(API_URL + "allCategories", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          domain_name: BASE_URL,
        }),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      setHeaderCategory(result.data);
    } catch (err) {
      setCategoryError("Failed to update status.");
      console.error("Error updating status:", err);
    } finally {
      setCategoryIsLoading(false);
    }
  };

  useEffect(() => {
    handleheaderCategories();
  }, []);

  const allProducts = async () => {
    setHomeProductIsLoading(true);
    try {
      const response = await fetch(API_URL + "allProducts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          domain_name: BASE_URL,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      if (result.data !== "0") {
        setAllProducts(result.data);
      } else {
        setAllProducts([]);
      }
    } catch (err) {
      setError("Failed to update status.");
      console.error("Error updating status:", err);
    } finally {
      setHomeProductIsLoading(false);
    }
  };

  useEffect(() => {
    allProducts();
  }, []);

  // ----------------------------------------------------

  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("auth_user"));

  const handleLogout = () => {
    localStorage.removeItem("auth_user");
    // localStorage.removeItem("cart_items");
    navigate("/login");
  };

  const [categories, setCategories] = useState([]);
  const { getCartCount } = useContext(CartContext);

  // const { cartItems, getCartCount } = useContext(CartContext);
  // const modalId = cartItems.length > 0 ? "shoppingCartfull" : "shoppingCart";

  useEffect(() => {
    fetch("http://localhost:8000/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((err) => {
        console.error("Error fetching categories:", err);
      });
  }, []);

  const [count, setCount] = useState(0);

  useEffect(() => {
    const updateCartCount = () => {
      const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
      const total = cartItems.reduce((sum, item) => sum + item.quantity, 0);
      setCount(total);
    };

    updateCartCount();

    // Listen for cart updates
    window.addEventListener("cartUpdated", updateCartCount);

    return () => {
      window.removeEventListener("cartUpdated", updateCartCount);
    };
  }, [count, setCount]);

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
                    <img src={`/images/logo.png`} alt="" />
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
                  <li className="has-mega-menu sub-menu-down wide-width">
                    <a href="javascript:void(0);">
                      <span>Shop Now</span>
                      <i className="fas fa-chevron-down tabIndex"></i>
                    </a>
                    <div className="mega-menu">
                      <ul>
                        {headerCategory
                          .filter(
                            (item) =>
                              item.status !== 0 && item.showontopmemu === "1"
                          )
                          .map((item, index) => (
                            <li key={index}>
                              <a
                                href={`/${item.caturl}`}
                                className="menu-title"
                              >
                                {item.category_name}
                              </a>
                              <ul>
                                {AllProducts.filter(
                                  (items) =>
                                    items.status !== 0 &&
                                    items.category_id === item.id
                                )
                                  .slice(0, 10)
                                  .map((items, idx) => (
                                    <li key={idx}>
                                      <a
                                        href={`/${item.caturl}/${items.pro_url}`}
                                      >
                                        {items.product_name}
                                      </a>
                                    </li>
                                  ))}
                                <li>
                                  <a href={`/${item.caturl}`}>View All</a>
                                </li>
                              </ul>
                            </li>
                          ))}
                      </ul>
                    </div>
                  </li>
                  <li>
                    <NavLink
                      to="/whyUs"
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
                      <Link className="nav-link" to="/login">
                        {" "}
                        Login / Register{" "}
                      </Link>
                    </li>
                    <li className="nav-item search-link">
                      <Link
                        className="nav-link"
                        to="javascript:void(0);"
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
                        to="javascript:void(0);"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasRight"
                        aria-controls="offcanvasRight"
                      >
                        <i className="iconly-Light-Heart2"></i>
                      </Link>
                    </li>
                    <li className="nav-item cart-link">
                      <Link
                        to="javascript:void(0);"
                        className="nav-link cart-btn"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasRight"
                        aria-controls="offcanvasRight"
                      >
                        {" "}
                        <i className="iconly-Broken-Buy"></i>
                        <span className="badge badge-circle">{cartCount}</span>
                      </Link>
                    </li>
                    <li className="nav-item filte-link">
                      <Link
                        to="javascript:void(0);"
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

        <div
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
        </div>

        <div
          className="offcanvas dz-offcanvas offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasRight"
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
            <div className="product-description">
              <div className="dz-tabs">
                <ul className="nav nav-tabs center" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="shopping-cart"
                      data-bs-toggle="tab"
                      data-bs-target="#shopping-cart-pane"
                      type="button"
                      role="tab"
                      aria-controls="shopping-cart-pane"
                      aria-selected="true"
                    >
                      Shopping Cart
                      <span className="badge badge-light">2</span>
                    </button>
                  </li>

                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="wishlist"
                      data-bs-toggle="tab"
                      data-bs-target="#wishlist-pane"
                      type="button"
                      role="tab"
                      aria-controls="wishlist-pane"
                      aria-selected="false"
                    >
                      Wishlist
                      <span className="badge badge-light">3</span>
                    </button>
                  </li>
                </ul>

                <div className="tab-content" id="dz-shopcart-sidebar">
                  <div
                    className="tab-pane fade show active"
                    id="shopping-cart-pane"
                    role="tabpanel"
                    aria-labelledby="shopping-cart"
                    tabIndex="0"
                  >
                    <div className="shop-sidebar-cart">
                      <ul className="sidebar-cart-list">
                        <li>
                          <div className="cart-widget">
                            <div className="dz-media me-3">
                              <img
                                src="/images/triply-artisian-cookware/2.png"
                                alt=""
                              />
                            </div>
                            <div className="cart-content">
                              <h6 className="title">
                                <Link to="product-thumbnail.html">
                                  {" "}
                                  Triply Steller Inner Lid Pressure Cooker 1.5 L
                                </Link>
                              </h6>
                              <div className="d-flex align-items-center">
                                <div className="btn-quantity light quantity-sm me-3">
                                  {/* <QtyInput value={1} min={0} max={5} /> */}
                                </div>
                                <h6 className="dz-price mb-0">₹50.00</h6>
                              </div>
                            </div>
                            <Link to="javascript:void(0);" className="dz-close">
                              <div className="ti-close">x</div>
                            </Link>
                          </div>
                        </li>
                      </ul>

                      <div className="cart-total">
                        <h5 className="mb-0">Subtotal:</h5>
                        <h5 className="mb-0">300.00₹</h5>
                      </div>
                      <div className="mt-auto">
                        <div className="shipping-time">
                          <div className="dz-icon">
                            <i className="flaticon flaticon-ship"></i>
                          </div>
                          <div className="shipping-content">
                            <h6 className="title pe-4">
                              {" "}
                              Congratulations, you've got free shipping!
                            </h6>
                            <div className="progress">
                              <div
                                className="progress-bar progress-animated border-0"
                                style={{ width: "75%" }}
                                role="progressbar"
                              >
                                <span className="sr-only">75% Complete</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <Link
                          to="shop-checkout.html"
                          className="btn btn-outline-secondary btn-block m-b20"
                        >
                          Checkout
                        </Link>
                        <Link
                          to="/viewcart"
                          className="btn btn-secondary btn-block"
                        >
                          View Cart
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div
                    className="tab-pane fade"
                    id="wishlist-pane"
                    role="tabpanel"
                    aria-labelledby="wishlist"
                    tabIndex="0"
                  >
                    <div className="shop-sidebar-cart">
                      <ul className="sidebar-cart-list">
                        <li>
                          <div className="cart-widget">
                            <div className="dz-media me-3">
                              <img
                                src="/images/triply-artisian-cookware/2.png"
                                alt=""
                              />
                            </div>
                            <div className="cart-content">
                              <h6 className="title">
                                <Link to="product-thumbnail.html">
                                  Sophisticated Swagger Suit
                                </Link>
                              </h6>
                              <div className="d-flex align-items-center">
                                <h6 className="dz-price  mb-0">₹50.00</h6>
                              </div>
                            </div>
                            <Link to="javascript:void(0);" className="dz-close">
                              <div className="ti-close">x</div>
                            </Link>
                          </div>
                        </li>
                        <li>
                          <div className="cart-widget">
                            <div className="dz-media me-3">
                              <img
                                src="/images/triply-artisian-cookware/1.png"
                                alt=""
                              />
                            </div>
                            <div className="cart-content">
                              <h6 className="title">
                                <Link to="product-thumbnail.html">
                                  Cozy Knit Cardigan Sweater
                                </Link>
                              </h6>
                              <div className="d-flex align-items-center">
                                <h6 className="dz-price  mb-0">₹40.00</h6>
                              </div>
                            </div>
                            <Link to="javascript:void(0);" className="dz-close">
                              <div className="ti-close">x</div>
                            </Link>
                          </div>
                        </li>
                        <li>
                          <div className="cart-widget">
                            <div className="dz-media me-3">
                              <img
                                src="/images/triply-artisian-cookware/3.png"
                                alt=""
                              />
                            </div>
                            <div className="cart-content">
                              <h6 className="title">
                                <Link to="product-thumbnail.html">
                                  Athletic Mesh Sports Leggings
                                </Link>
                              </h6>
                              <div className="d-flex align-items-center">
                                <h6 className="dz-price  mb-0">₹65.00</h6>
                              </div>
                            </div>
                            <Link to="javascript:void(0);" className="dz-close">
                              <div className="ti-close">x</div>
                            </Link>
                          </div>
                        </li>
                      </ul>
                      <div className="mt-auto">
                        <Link
                          to="shop-wishlist.html"
                          className="btn btn-secondary btn-block"
                        >
                          Check Your Favourite
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
          </div>
        </div>

        <div
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
                to="javascript:void(0);"
                className="btn btn-sm font-14 bg-red2 text-white btn-sharp"
              >
                RESET FILTER
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
