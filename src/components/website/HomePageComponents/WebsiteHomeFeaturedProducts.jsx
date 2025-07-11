// File: WebsiteHomeFeaturedProducts.jsx
import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
// import axios from "axios";
// import { CartContext } from "../../../context/cartContext";

const WebsiteHomeFeaturedProducts = () => {
  const handleMouseEnter = ({ currentTarget: img }) => {
    const hoverSrc = img.dataset.hoverSrc;
    if (hoverSrc) {
      img.dataset.originalSrc = img.src;
      img.src = hoverSrc;
    }
  };

  const handleMouseLeave = ({ currentTarget: img }) => {
    img.src = img.dataset.originalSrc || img.src;
  };

  // const [productData, setProductData] = useState({});
  // const [categories, setCategories] = useState([]);
  // const [activeTab, setActiveTab] = useState("");
  // const [loading, setLoading] = useState(true);
  // const [activeImages, setActiveImages] = useState({});

  // const { addToCart, removeFromCart, isInCart } = useContext(CartContext);

  // const mainProimgBaseURL = "http://127.0.0.1:8000/storage/media/product/";
  // const moreProimgBaseURL = "http://127.0.0.1:8000/storage/media/product/more/";

  // useEffect(() => {
  //   axios.get("http://127.0.0.1:8000/products").then((res) => {
  //     const data = res.data;
  //     const newProductData = {};
  //     const categoryList = [];

  //     data.forEach((category) => {
  //       const catName = category.category_name;
  //       const catUrl = category.category_slug;
  //       categoryList.push(catName);

  //       newProductData[catName] = category.products.map((product) => ({
  //         id: product.id,
  //         title: product.product_name,
  //         mainimg: product.product_image,
  //         categoryname: catUrl,
  //         slug:
  //           product.product_slug ||
  //           product.product_name.toLowerCase().replace(/\s+/g, "-"),
  //         price: product.attributes?.[0]?.net_price || 0,
  //         oldPrice: product.attributes?.[0]?.mrp_price || 0,
  //         moreimages: product.images.map((img) =>
  //           encodeURIComponent(img.img_name.trim())
  //         ),
  //       }));
  //     });

  //     setProductData(newProductData);
  //     setCategories(categoryList);
  //     setActiveTab(categoryList[0] || "");
  //     setLoading(false);
  //   });
  // }, []);

  // const handleTabChange = (category) => setActiveTab(category);
  // const handleHover = (productId, img) =>
  //   setActiveImages((prev) => ({ ...prev, [`hover_${productId}`]: img }));
  // const handleLeave = (productId) =>
  //   setActiveImages((prev) => {
  //     const updated = { ...prev };
  //     delete updated[`hover_${productId}`];
  //     return updated;
  //   });
  // const handleClick = (productId, img) =>
  //   setActiveImages((prev) => ({ ...prev, [productId]: img }));

  return (
    <>
      <section className="content-inner">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div
                className="section-head style-1 m-b30 wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <div className="left-content">
                  <h6 className="text-center">Featured Products</h6>
                  <h2 className="title">
                    Shop All<b> Products</b>
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-md-between align-items-start">
            <div className="col-md-8">
              <div
                className="site-filters clearfix style-1 align-items-center wow fadeInUp"
                data-wow-delay="0.4s"
              >
                <ul
                  className="site-filters clearfix style-1 align-items-center wow fadeInUp"
                  id="pills-tab"
                  role="tablist"
                >
                  <li className="btn" role="presentation">
                    <Link
                      className="active"
                      id="pills-home-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-home"
                      type="button"
                      role="tab"
                      aria-controls="pills-home"
                      aria-selected="true"
                    >
                      Triply Artisian
                    </Link>
                  </li>
                  <li className="btn" role="presentation">
                    <Link
                      id="pills-profile-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-profile"
                      type="button"
                      role="tab"
                      aria-controls="pills-profile"
                      aria-selected="false"
                    >
                      {" "}
                      Triply Artisian Golden
                    </Link>
                  </li>
                  <li className="btn" role="presentation">
                    <Link
                      id="pills-contact-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-contact"
                      type="button"
                      role="tab"
                      aria-controls="pills-contact"
                      aria-selected="false"
                    >
                      Triply Honeycomb
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-4">
              <div className="btn-19">
                <Link to="#">VIEW ALL COLLECTION</Link>
              </div>
            </div>
          </div>
          <div className="clearfix">
            <div className="row g-xl-4 g-3">
              <div className="tab-content" id="pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="pills-home"
                  role="tabpanel"
                  aria-labelledby="pills-home-tab"
                >
                  <div className="row g-xl-4 g-3">
                    <div
                      className="card-container col-6 col-xl-3 col-lg-3 col-md-4 col-sm-6 wow fadeInUp"
                      data-wow-delay="0.6s"
                    >
                      <div className="shop-card">
                        <div className="dz-media">
                          <Link to="/product">
                            <img
                              src="src/assets/website/images/triply-artisian-cookware/1.png"
                              data-hover-src="src/assets/website/images/triply-artisian-cookware/h-1.png"
                              alt="image"
                              onMouseEnter={handleMouseEnter}
                              onMouseLeave={handleMouseLeave}
                            />
                          </Link>
                          <div className="shop-meta">
                            <Link
                              to="javascript:void(0);"
                              className="btn btn-secondary btn-md btn-rounded"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal"
                            >
                              <i className="fa-solid fa-eye d-md-none d-block"></i>
                              <span className="d-md-block d-none">
                                Add to cart
                              </span>
                            </Link>
                            <div className="btn btn-primary meta-icon dz-wishicon">
                              <i className="icon feather icon-heart dz-heart"></i>
                              <i className="icon feather icon-heart-on dz-heart-fill"></i>
                            </div>
                            <div className="btn btn-primary meta-icon dz-carticon">
                              <i className="flaticon flaticon-basket"></i>
                              <i className="flaticon flaticon-basket-on dz-heart-fill"></i>
                            </div>
                          </div>
                        </div>

                        <div className="dz-content">
                          <h5 className="title">
                            <Link to="/product">
                              Triply Steller Inner Lid Pressure Cooker 1.5 L
                            </Link>
                          </h5>
                          <span className="price">
                            <span className="old">₹3,100</span>
                            <span className="new">₹4,100</span>
                          </span>
                        </div>

                        <div className="product-tag">
                          <span className="badge">20% Off</span>
                          <span className="badge1">NEW</span>
                        </div>
                      </div>
                    </div>

                    <div
                      className="card-container col-6 col-xl-3 col-lg-3 col-md-4 col-sm-6 wow fadeInUp"
                      data-wow-delay="0.6s"
                    >
                      <div className="shop-card">
                        <div className="dz-media">
                          <Link to="/product">
                            <img
                              src="src/assets/website/images/triply-artisian-cookware/2.png"
                              data-hover-src="src/assets/website/images/triply-artisian-cookware/h-2.png"
                              alt="image"
                              onMouseEnter={handleMouseEnter}
                              onMouseLeave={handleMouseLeave}
                            />
                          </Link>
                          <div className="shop-meta">
                            <Link
                              to="javascript:void(0);"
                              className="btn btn-secondary btn-md btn-rounded"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal"
                            >
                              <i className="fa-solid fa-eye d-md-none d-block"></i>
                              <span className="d-md-block d-none">
                                Add to cart
                              </span>
                            </Link>
                            <div className="btn btn-primary meta-icon dz-wishicon">
                              <i className="icon feather icon-heart dz-heart"></i>
                              <i className="icon feather icon-heart-on dz-heart-fill"></i>
                            </div>
                            <div className="btn btn-primary meta-icon dz-carticon">
                              <i className="flaticon flaticon-basket"></i>
                              <i className="flaticon flaticon-basket-on dz-heart-fill"></i>
                            </div>
                          </div>
                        </div>

                        <div className="dz-content">
                          <h5 className="title">
                            <Link to="/product">
                              Triply Steller Inner Lid Pressure Cooker 1.5 L
                            </Link>
                          </h5>
                          <span className="price">
                            <span className="old">₹3,100</span>
                            <span className="new">₹4,100</span>
                          </span>
                        </div>

                        <div className="product-tag">
                          <span className="badge">20% Off</span>
                          <span className="badge1">NEW</span>
                        </div>
                      </div>
                    </div>
                    <div
                      className="card-container col-6 col-xl-3 col-lg-3 col-md-4 col-sm-6 wow fadeInUp"
                      data-wow-delay="0.6s"
                    >
                      <div className="shop-card">
                        <div className="dz-media">
                          <Link to="/product">
                            <img
                              src="src/assets/website/images/triply-artisian-cookware/3.png"
                              data-hover-src="src/assets/website/images/triply-artisian-cookware/h-3.png"
                              alt="image"
                              onMouseEnter={handleMouseEnter}
                              onMouseLeave={handleMouseLeave}
                            />
                          </Link>
                          <div className="shop-meta">
                            <Link
                              to="javascript:void(0);"
                              className="btn btn-secondary btn-md btn-rounded"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal"
                            >
                              <i className="fa-solid fa-eye d-md-none d-block"></i>
                              <span className="d-md-block d-none">
                                Add to cart
                              </span>
                            </Link>
                            <div className="btn btn-primary meta-icon dz-wishicon">
                              <i className="icon feather icon-heart dz-heart"></i>
                              <i className="icon feather icon-heart-on dz-heart-fill"></i>
                            </div>
                            <div className="btn btn-primary meta-icon dz-carticon">
                              <i className="flaticon flaticon-basket"></i>
                              <i className="flaticon flaticon-basket-on dz-heart-fill"></i>
                            </div>
                          </div>
                        </div>

                        <div className="dz-content">
                          <h5 className="title">
                            <Link to="/product">
                              Triply Steller Inner Lid Pressure Cooker 1.5 L
                            </Link>
                          </h5>
                          <span className="price">
                            <span className="old">₹3,100</span>
                            <span className="new">₹4,100</span>
                          </span>
                        </div>

                        <div className="product-tag">
                          <span className="badge">20% Off</span>
                          <span className="badge1">NEW</span>
                        </div>
                      </div>
                    </div>
                    <div
                      className="card-container col-6 col-xl-3 col-lg-3 col-md-4 col-sm-6 wow fadeInUp"
                      data-wow-delay="0.6s"
                    >
                      <div className="shop-card">
                        <div className="dz-media">
                          <Link to="/product">
                            <img
                              src="src/assets/website/images/triply-artisian-cookware/4.png"
                              data-hover-src="src/assets/website/images/triply-artisian-cookware/h-4.png"
                              alt="image"
                              onMouseEnter={handleMouseEnter}
                              onMouseLeave={handleMouseLeave}
                            />
                          </Link>
                          <div className="shop-meta">
                            <Link
                              to="javascript:void(0);"
                              className="btn btn-secondary btn-md btn-rounded"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal"
                            >
                              <i className="fa-solid fa-eye d-md-none d-block"></i>
                              <span className="d-md-block d-none">
                                Add to cart
                              </span>
                            </Link>
                            <div className="btn btn-primary meta-icon dz-wishicon">
                              <i className="icon feather icon-heart dz-heart"></i>
                              <i className="icon feather icon-heart-on dz-heart-fill"></i>
                            </div>
                            <div className="btn btn-primary meta-icon dz-carticon">
                              <i className="flaticon flaticon-basket"></i>
                              <i className="flaticon flaticon-basket-on dz-heart-fill"></i>
                            </div>
                          </div>
                        </div>

                        <div className="dz-content">
                          <h5 className="title">
                            <Link to="/product">
                              Triply Steller Inner Lid Pressure Cooker 1.5 L
                            </Link>
                          </h5>
                          <span className="price">
                            <span className="old">₹3,100</span>
                            <span className="new">₹4,100</span>
                          </span>
                        </div>

                        <div className="product-tag">
                          <span className="badge">20% Off</span>
                          <span className="badge1">NEW</span>
                        </div>
                      </div>
                    </div>
                    <div
                      className="card-container col-6 col-xl-3 col-lg-3 col-md-4 col-sm-6 wow fadeInUp"
                      data-wow-delay="0.6s"
                    >
                      <div className="shop-card">
                        <div className="dz-media">
                          <Link to="/product">
                            <img
                              src="src/assets/website/images/triply-artisian-cookware/5.png"
                              data-hover-src="src/assets/website/images/triply-artisian-cookware/h-5.png"
                              alt="image"
                              onMouseEnter={handleMouseEnter}
                              onMouseLeave={handleMouseLeave}
                            />
                          </Link>
                          <div className="shop-meta">
                            <Link
                              to="javascript:void(0);"
                              className="btn btn-secondary btn-md btn-rounded"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal"
                            >
                              <i className="fa-solid fa-eye d-md-none d-block"></i>
                              <span className="d-md-block d-none">
                                Add to cart
                              </span>
                            </Link>
                            <div className="btn btn-primary meta-icon dz-wishicon">
                              <i className="icon feather icon-heart dz-heart"></i>
                              <i className="icon feather icon-heart-on dz-heart-fill"></i>
                            </div>
                            <div className="btn btn-primary meta-icon dz-carticon">
                              <i className="flaticon flaticon-basket"></i>
                              <i className="flaticon flaticon-basket-on dz-heart-fill"></i>
                            </div>
                          </div>
                        </div>

                        <div className="dz-content">
                          <h5 className="title">
                            <Link to="/product">
                              Triply Steller Inner Lid Pressure Cooker 1.5 L
                            </Link>
                          </h5>
                          <span className="price">
                            <span className="old">₹3,100</span>
                            <span className="new">₹4,100</span>
                          </span>
                        </div>

                        <div className="product-tag">
                          <span className="badge">20% Off</span>
                          <span className="badge1">NEW</span>
                        </div>
                      </div>
                    </div>
                    <div
                      className="card-container col-6 col-xl-3 col-lg-3 col-md-4 col-sm-6 wow fadeInUp"
                      data-wow-delay="0.6s"
                    >
                      <div className="shop-card">
                        <div className="dz-media">
                          <Link to="/product">
                            <img
                              src="src/assets/website/images/triply-artisian-cookware/6.png"
                              data-hover-src="src/assets/website/images/triply-artisian-cookware/h-6.png"
                              alt="image"
                              onMouseEnter={handleMouseEnter}
                              onMouseLeave={handleMouseLeave}
                            />
                          </Link>
                          <div className="shop-meta">
                            <Link
                              to="javascript:void(0);"
                              className="btn btn-secondary btn-md btn-rounded"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal"
                            >
                              <i className="fa-solid fa-eye d-md-none d-block"></i>
                              <span className="d-md-block d-none">
                                Add to cart
                              </span>
                            </Link>
                            <div className="btn btn-primary meta-icon dz-wishicon">
                              <i className="icon feather icon-heart dz-heart"></i>
                              <i className="icon feather icon-heart-on dz-heart-fill"></i>
                            </div>
                            <div className="btn btn-primary meta-icon dz-carticon">
                              <i className="flaticon flaticon-basket"></i>
                              <i className="flaticon flaticon-basket-on dz-heart-fill"></i>
                            </div>
                          </div>
                        </div>

                        <div className="dz-content">
                          <h5 className="title">
                            <Link to="/product">
                              Triply Steller Inner Lid Pressure Cooker 1.5 L
                            </Link>
                          </h5>
                          <span className="price">
                            <span className="old">₹3,100</span>
                            <span className="new">₹4,100</span>
                          </span>
                        </div>

                        <div className="product-tag">
                          <span className="badge">20% Off</span>
                          <span className="badge1">NEW</span>
                        </div>
                      </div>
                    </div>
                    <div
                      className="card-container col-6 col-xl-3 col-lg-3 col-md-4 col-sm-6 wow fadeInUp"
                      data-wow-delay="0.6s"
                    >
                      <div className="shop-card">
                        <div className="dz-media">
                          <Link to="/product">
                            <img
                              src="src/assets/website/images/triply-artisian-cookware/7.png"
                              data-hover-src="src/assets/website/images/triply-artisian-cookware/h-7.png"
                              alt="image"
                              onMouseEnter={handleMouseEnter}
                              onMouseLeave={handleMouseLeave}
                            />
                          </Link>
                          <div className="shop-meta">
                            <Link
                              to="javascript:void(0);"
                              className="btn btn-secondary btn-md btn-rounded"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal"
                            >
                              <i className="fa-solid fa-eye d-md-none d-block"></i>
                              <span className="d-md-block d-none">
                                Add to cart
                              </span>
                            </Link>
                            <div className="btn btn-primary meta-icon dz-wishicon">
                              <i className="icon feather icon-heart dz-heart"></i>
                              <i className="icon feather icon-heart-on dz-heart-fill"></i>
                            </div>
                            <div className="btn btn-primary meta-icon dz-carticon">
                              <i className="flaticon flaticon-basket"></i>
                              <i className="flaticon flaticon-basket-on dz-heart-fill"></i>
                            </div>
                          </div>
                        </div>

                        <div className="dz-content">
                          <h5 className="title">
                            <Link to="/product">
                              Triply Steller Inner Lid Pressure Cooker 1.5 L
                            </Link>
                          </h5>
                          <span className="price">
                            <span className="old">₹3,100</span>
                            <span className="new">₹4,100</span>
                          </span>
                        </div>

                        <div className="product-tag">
                          <span className="badge">20% Off</span>
                          <span className="badge1">NEW</span>
                        </div>
                      </div>
                    </div>
                    <div
                      className="card-container col-6 col-xl-3 col-lg-3 col-md-4 col-sm-6 wow fadeInUp"
                      data-wow-delay="0.6s"
                    >
                      <div className="shop-card">
                        <div className="dz-media">
                          <Link to="/product">
                            <img
                              src="src/assets/website/images/triply-artisian-cookware/8.png"
                              data-hover-src="src/assets/website/images/triply-artisian-cookware/h-8.png"
                              alt="image"
                              onMouseEnter={handleMouseEnter}
                              onMouseLeave={handleMouseLeave}
                            />
                          </Link>
                          <div className="shop-meta">
                            <Link
                              to="javascript:void(0);"
                              className="btn btn-secondary btn-md btn-rounded"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal"
                            >
                              <i className="fa-solid fa-eye d-md-none d-block"></i>
                              <span className="d-md-block d-none">
                                Add to cart
                              </span>
                            </Link>
                            <div className="btn btn-primary meta-icon dz-wishicon">
                              <i className="icon feather icon-heart dz-heart"></i>
                              <i className="icon feather icon-heart-on dz-heart-fill"></i>
                            </div>
                            <div className="btn btn-primary meta-icon dz-carticon">
                              <i className="flaticon flaticon-basket"></i>
                              <i className="flaticon flaticon-basket-on dz-heart-fill"></i>
                            </div>
                          </div>
                        </div>

                        <div className="dz-content">
                          <h5 className="title">
                            <Link to="/product">
                              Triply Steller Inner Lid Pressure Cooker 1.5 L
                            </Link>
                          </h5>
                          <span className="price">
                            <span className="old">₹3,100</span>
                            <span className="new">₹4,100</span>
                          </span>
                        </div>

                        <div className="product-tag">
                          <span className="badge">20% Off</span>
                          <span className="badge1">NEW</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-profile"
                  role="tabpanel"
                  aria-labelledby="pills-profile-tab"
                >
                  <div className="row g-xl-4 g-3">
                    <div
                      className="card-container col-6 col-xl-3 col-lg-3 col-md-4 col-sm-6 wow fadeInUp"
                      data-wow-delay="0.6s"
                    >
                      <div className="shop-card">
                        <div className="dz-media">
                          <Link to="/product">
                            <img
                              src="src/assets/website/images/triply-artisian-cookware/1.png"
                              data-hover-src="src/assets/website/images/triply-artisian-cookware/h-1.png"
                              alt="image"
                              onMouseEnter={handleMouseEnter}
                              onMouseLeave={handleMouseLeave}
                            />
                          </Link>
                          <div className="shop-meta">
                            <Link
                              to="javascript:void(0);"
                              className="btn btn-secondary btn-md btn-rounded"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal"
                            >
                              <i className="fa-solid fa-eye d-md-none d-block"></i>
                              <span className="d-md-block d-none">
                                Add to cart
                              </span>
                            </Link>
                            <div className="btn btn-primary meta-icon dz-wishicon">
                              <i className="icon feather icon-heart dz-heart"></i>
                              <i className="icon feather icon-heart-on dz-heart-fill"></i>
                            </div>
                            <div className="btn btn-primary meta-icon dz-carticon">
                              <i className="flaticon flaticon-basket"></i>
                              <i className="flaticon flaticon-basket-on dz-heart-fill"></i>
                            </div>
                          </div>
                        </div>

                        <div className="dz-content">
                          <h5 className="title">
                            <Link to="/product">
                              Triply Steller Inner Lid Pressure Cooker 1.5 L
                            </Link>
                          </h5>
                          <span className="price">
                            <span className="old">₹3,100</span>
                            <span className="new">₹4,100</span>
                          </span>
                        </div>

                        <div className="product-tag">
                          <span className="badge">20% Off</span>
                          <span className="badge1">NEW</span>
                        </div>
                      </div>
                    </div>

                    <div
                      className="card-container col-6 col-xl-3 col-lg-3 col-md-4 col-sm-6 wow fadeInUp"
                      data-wow-delay="0.6s"
                    >
                      <div className="shop-card">
                        <div className="dz-media">
                          <Link to="/product">
                            <img
                              src="src/assets/website/images/triply-artisian-cookware/2.png"
                              data-hover-src="src/assets/website/images/triply-artisian-cookware/h-2.png"
                              alt="image"
                              onMouseEnter={handleMouseEnter}
                              onMouseLeave={handleMouseLeave}
                            />
                          </Link>
                          <div className="shop-meta">
                            <Link
                              to="javascript:void(0);"
                              className="btn btn-secondary btn-md btn-rounded"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal"
                            >
                              <i className="fa-solid fa-eye d-md-none d-block"></i>
                              <span className="d-md-block d-none">
                                Add to cart
                              </span>
                            </Link>
                            <div className="btn btn-primary meta-icon dz-wishicon">
                              <i className="icon feather icon-heart dz-heart"></i>
                              <i className="icon feather icon-heart-on dz-heart-fill"></i>
                            </div>
                            <div className="btn btn-primary meta-icon dz-carticon">
                              <i className="flaticon flaticon-basket"></i>
                              <i className="flaticon flaticon-basket-on dz-heart-fill"></i>
                            </div>
                          </div>
                        </div>

                        <div className="dz-content">
                          <h5 className="title">
                            <Link to="/product">
                              Triply Steller Inner Lid Pressure Cooker 1.5 L
                            </Link>
                          </h5>
                          <span className="price">
                            <span className="old">₹3,100</span>
                            <span className="new">₹4,100</span>
                          </span>
                        </div>

                        <div className="product-tag">
                          <span className="badge">20% Off</span>
                          <span className="badge1">NEW</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-contact"
                  role="tabpanel"
                  aria-labelledby="pills-contact-tab"
                >
                  {/* start */}
                  <div className="row g-xl-4 g-3">
                    <div
                      className="card-container col-6 col-xl-3 col-lg-3 col-md-4 col-sm-6 wow fadeInUp"
                      data-wow-delay="0.6s"
                    >
                      <div className="shop-card">
                        <div className="dz-media">
                          <Link to="/product">
                            <img
                              src="src/assets/website/images/triply-artisian-cookware/1.png"
                              data-hover-src="src/assets/website/images/triply-artisian-cookware/h-1.png"
                              alt="image"
                              onMouseEnter={handleMouseEnter}
                              onMouseLeave={handleMouseLeave}
                            />
                          </Link>
                          <div className="shop-meta">
                            <Link
                              to="javascript:void(0);"
                              className="btn btn-secondary btn-md btn-rounded"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal"
                            >
                              <i className="fa-solid fa-eye d-md-none d-block"></i>
                              <span className="d-md-block d-none">
                                Add to cart
                              </span>
                            </Link>
                            <div className="btn btn-primary meta-icon dz-wishicon">
                              <i className="icon feather icon-heart dz-heart"></i>
                              <i className="icon feather icon-heart-on dz-heart-fill"></i>
                            </div>
                            <div className="btn btn-primary meta-icon dz-carticon">
                              <i className="flaticon flaticon-basket"></i>
                              <i className="flaticon flaticon-basket-on dz-heart-fill"></i>
                            </div>
                          </div>
                        </div>

                        <div className="dz-content">
                          <h5 className="title">
                            <Link to="/product">
                              Triply Steller Inner Lid Pressure Cooker 1.5 L
                            </Link>
                          </h5>
                          <span className="price">
                            <span className="old">₹3,100</span>
                            <span className="new">₹4,100</span>
                          </span>
                        </div>

                        <div className="product-tag">
                          <span className="badge">20% Off</span>
                          <span className="badge1">NEW</span>
                        </div>
                      </div>
                    </div>

                    <div
                      className="card-container col-6 col-xl-3 col-lg-3 col-md-4 col-sm-6 wow fadeInUp"
                      data-wow-delay="0.6s"
                    >
                      <div className="shop-card">
                        <div className="dz-media">
                          <Link to="/product">
                            <img
                              src="src/assets/website/images/triply-artisian-cookware/2.png"
                              data-hover-src="src/assets/website/images/triply-artisian-cookware/h-2.png"
                              alt="image"
                              onMouseEnter={handleMouseEnter}
                              onMouseLeave={handleMouseLeave}
                            />
                          </Link>
                          <div className="shop-meta">
                            <Link
                              to="javascript:void(0);"
                              className="btn btn-secondary btn-md btn-rounded"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal"
                            >
                              <i className="fa-solid fa-eye d-md-none d-block"></i>
                              <span className="d-md-block d-none">
                                Add to cart
                              </span>
                            </Link>
                            <div className="btn btn-primary meta-icon dz-wishicon">
                              <i className="icon feather icon-heart dz-heart"></i>
                              <i className="icon feather icon-heart-on dz-heart-fill"></i>
                            </div>
                            <div className="btn btn-primary meta-icon dz-carticon">
                              <i className="flaticon flaticon-basket"></i>
                              <i className="flaticon flaticon-basket-on dz-heart-fill"></i>
                            </div>
                          </div>
                        </div>

                        <div className="dz-content">
                          <h5 className="title">
                            <Link to="/product">
                              Triply Steller Inner Lid Pressure Cooker 1.5 L
                            </Link>
                          </h5>
                          <span className="price">
                            <span className="old">₹3,100</span>
                            <span className="new">₹4,100</span>
                          </span>
                        </div>

                        <div className="product-tag">
                          <span className="badge">20% Off</span>
                          <span className="badge1">NEW</span>
                        </div>
                      </div>
                    </div>
                    <div
                      className="card-container col-6 col-xl-3 col-lg-3 col-md-4 col-sm-6 wow fadeInUp"
                      data-wow-delay="0.6s"
                    >
                      <div className="shop-card">
                        <div className="dz-media">
                          <Link to="/product">
                            <img
                              src="src/assets/website/images/triply-artisian-cookware/3.png"
                              data-hover-src="src/assets/website/images/triply-artisian-cookware/h-3.png"
                              alt="image"
                              onMouseEnter={handleMouseEnter}
                              onMouseLeave={handleMouseLeave}
                            />
                          </Link>
                          <div className="shop-meta">
                            <Link
                              to="javascript:void(0);"
                              className="btn btn-secondary btn-md btn-rounded"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal"
                            >
                              <i className="fa-solid fa-eye d-md-none d-block"></i>
                              <span className="d-md-block d-none">
                                Add to cart
                              </span>
                            </Link>
                            <div className="btn btn-primary meta-icon dz-wishicon">
                              <i className="icon feather icon-heart dz-heart"></i>
                              <i className="icon feather icon-heart-on dz-heart-fill"></i>
                            </div>
                            <div className="btn btn-primary meta-icon dz-carticon">
                              <i className="flaticon flaticon-basket"></i>
                              <i className="flaticon flaticon-basket-on dz-heart-fill"></i>
                            </div>
                          </div>
                        </div>

                        <div className="dz-content">
                          <h5 className="title">
                            <Link to="/product">
                              Triply Steller Inner Lid Pressure Cooker 1.5 L
                            </Link>
                          </h5>
                          <span className="price">
                            <span className="old">₹3,100</span>
                            <span className="new">₹4,100</span>
                          </span>
                        </div>

                        <div className="product-tag">
                          <span className="badge">20% Off</span>
                          <span className="badge1">NEW</span>
                        </div>
                      </div>
                    </div>
                    <div
                      className="card-container col-6 col-xl-3 col-lg-3 col-md-4 col-sm-6 wow fadeInUp"
                      data-wow-delay="0.6s"
                    >
                      <div className="shop-card">
                        <div className="dz-media">
                          <Link to="/product">
                            <img
                              src="src/assets/website/images/triply-artisian-cookware/4.png"
                              data-hover-src="src/assets/website/images/triply-artisian-cookware/h-4.png"
                              alt="image"
                              onMouseEnter={handleMouseEnter}
                              onMouseLeave={handleMouseLeave}
                            />
                          </Link>
                          <div className="shop-meta">
                            <Link
                              to="javascript:void(0);"
                              className="btn btn-secondary btn-md btn-rounded"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal"
                            >
                              <i className="fa-solid fa-eye d-md-none d-block"></i>
                              <span className="d-md-block d-none">
                                Add to cart
                              </span>
                            </Link>
                            <div className="btn btn-primary meta-icon dz-wishicon">
                              <i className="icon feather icon-heart dz-heart"></i>
                              <i className="icon feather icon-heart-on dz-heart-fill"></i>
                            </div>
                            <div className="btn btn-primary meta-icon dz-carticon">
                              <i className="flaticon flaticon-basket"></i>
                              <i className="flaticon flaticon-basket-on dz-heart-fill"></i>
                            </div>
                          </div>
                        </div>

                        <div className="dz-content">
                          <h5 className="title">
                            <Link to="/product">
                              Triply Steller Inner Lid Pressure Cooker 1.5 L
                            </Link>
                          </h5>
                          <span className="price">
                            <span className="old">₹3,100</span>
                            <span className="new">₹4,100</span>
                          </span>
                        </div>

                        <div className="product-tag">
                          <span className="badge">20% Off</span>
                          <span className="badge1">NEW</span>
                        </div>
                      </div>
                    </div>
                    <div
                      className="card-container col-6 col-xl-3 col-lg-3 col-md-4 col-sm-6 wow fadeInUp"
                      data-wow-delay="0.6s"
                    >
                      <div className="shop-card">
                        <div className="dz-media">
                          <Link to="/product">
                            <img
                              src="src/assets/website/images/triply-artisian-cookware/5.png"
                              data-hover-src="src/assets/website/images/triply-artisian-cookware/h-5.png"
                              alt="image"
                              onMouseEnter={handleMouseEnter}
                              onMouseLeave={handleMouseLeave}
                            />
                          </Link>
                          <div className="shop-meta">
                            <Link
                              to="javascript:void(0);"
                              className="btn btn-secondary btn-md btn-rounded"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal"
                            >
                              <i className="fa-solid fa-eye d-md-none d-block"></i>
                              <span className="d-md-block d-none">
                                Add to cart
                              </span>
                            </Link>
                            <div className="btn btn-primary meta-icon dz-wishicon">
                              <i className="icon feather icon-heart dz-heart"></i>
                              <i className="icon feather icon-heart-on dz-heart-fill"></i>
                            </div>
                            <div className="btn btn-primary meta-icon dz-carticon">
                              <i className="flaticon flaticon-basket"></i>
                              <i className="flaticon flaticon-basket-on dz-heart-fill"></i>
                            </div>
                          </div>
                        </div>

                        <div className="dz-content">
                          <h5 className="title">
                            <Link to="/product">
                              Triply Steller Inner Lid Pressure Cooker 1.5 L
                            </Link>
                          </h5>
                          <span className="price">
                            <span className="old">₹3,100</span>
                            <span className="new">₹4,100</span>
                          </span>
                        </div>

                        <div className="product-tag">
                          <span className="badge">20% Off</span>
                          <span className="badge1">NEW</span>
                        </div>
                      </div>
                    </div>
                    <div
                      className="card-container col-6 col-xl-3 col-lg-3 col-md-4 col-sm-6 wow fadeInUp"
                      data-wow-delay="0.6s"
                    >
                      <div className="shop-card">
                        <div className="dz-media">
                          <Link to="/product">
                            <img
                              src="src/assets/website/images/triply-artisian-cookware/6.png"
                              data-hover-src="src/assets/website/images/triply-artisian-cookware/h-6.png"
                              alt="image"
                              onMouseEnter={handleMouseEnter}
                              onMouseLeave={handleMouseLeave}
                            />
                          </Link>
                          <div className="shop-meta">
                            <Link
                              to="javascript:void(0);"
                              className="btn btn-secondary btn-md btn-rounded"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal"
                            >
                              <i className="fa-solid fa-eye d-md-none d-block"></i>
                              <span className="d-md-block d-none">
                                Add to cart
                              </span>
                            </Link>
                            <div className="btn btn-primary meta-icon dz-wishicon">
                              <i className="icon feather icon-heart dz-heart"></i>
                              <i className="icon feather icon-heart-on dz-heart-fill"></i>
                            </div>
                            <div className="btn btn-primary meta-icon dz-carticon">
                              <i className="flaticon flaticon-basket"></i>
                              <i className="flaticon flaticon-basket-on dz-heart-fill"></i>
                            </div>
                          </div>
                        </div>

                        <div className="dz-content">
                          <h5 className="title">
                            <Link to="/product">
                              Triply Steller Inner Lid Pressure Cooker 1.5 L
                            </Link>
                          </h5>
                          <span className="price">
                            <span className="old">₹3,100</span>
                            <span className="new">₹4,100</span>
                          </span>
                        </div>

                        <div className="product-tag">
                          <span className="badge">20% Off</span>
                          <span className="badge1">NEW</span>
                        </div>
                      </div>
                    </div>
                    <div
                      className="card-container col-6 col-xl-3 col-lg-3 col-md-4 col-sm-6 wow fadeInUp"
                      data-wow-delay="0.6s"
                    >
                      <div className="shop-card">
                        <div className="dz-media">
                          <Link to="/product">
                            <img
                              src="src/assets/website/images/triply-artisian-cookware/7.png"
                              data-hover-src="src/assets/website/images/triply-artisian-cookware/h-7.png"
                              alt="image"
                              onMouseEnter={handleMouseEnter}
                              onMouseLeave={handleMouseLeave}
                            />
                          </Link>
                          <div className="shop-meta">
                            <Link
                              to="javascript:void(0);"
                              className="btn btn-secondary btn-md btn-rounded"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal"
                            >
                              <i className="fa-solid fa-eye d-md-none d-block"></i>
                              <span className="d-md-block d-none">
                                Add to cart
                              </span>
                            </Link>
                            <div className="btn btn-primary meta-icon dz-wishicon">
                              <i className="icon feather icon-heart dz-heart"></i>
                              <i className="icon feather icon-heart-on dz-heart-fill"></i>
                            </div>
                            <div className="btn btn-primary meta-icon dz-carticon">
                              <i className="flaticon flaticon-basket"></i>
                              <i className="flaticon flaticon-basket-on dz-heart-fill"></i>
                            </div>
                          </div>
                        </div>

                        <div className="dz-content">
                          <h5 className="title">
                            <Link to="/product">
                              Triply Steller Inner Lid Pressure Cooker 1.5 L
                            </Link>
                          </h5>
                          <span className="price">
                            <span className="old">₹3,100</span>
                            <span className="new">₹4,100</span>
                          </span>
                        </div>

                        <div className="product-tag">
                          <span className="badge">20% Off</span>
                          <span className="badge1">NEW</span>
                        </div>
                      </div>
                    </div>
                    <div
                      className="card-container col-6 col-xl-3 col-lg-3 col-md-4 col-sm-6 wow fadeInUp"
                      data-wow-delay="0.6s"
                    >
                      <div className="shop-card">
                        <div className="dz-media">
                          <Link to="/product">
                            <img
                              src="src/assets/website/images/triply-artisian-cookware/8.png"
                              data-hover-src="src/assets/website/images/triply-artisian-cookware/h-8.png"
                              alt="image"
                              onMouseEnter={handleMouseEnter}
                              onMouseLeave={handleMouseLeave}
                            />
                          </Link>
                          <div className="shop-meta">
                            <Link
                              to="javascript:void(0);"
                              className="btn btn-secondary btn-md btn-rounded"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal"
                            >
                              <i className="fa-solid fa-eye d-md-none d-block"></i>
                              <span className="d-md-block d-none">
                                Add to cart
                              </span>
                            </Link>
                            <div className="btn btn-primary meta-icon dz-wishicon">
                              <i className="icon feather icon-heart dz-heart"></i>
                              <i className="icon feather icon-heart-on dz-heart-fill"></i>
                            </div>
                            <div className="btn btn-primary meta-icon dz-carticon">
                              <i className="flaticon flaticon-basket"></i>
                              <i className="flaticon flaticon-basket-on dz-heart-fill"></i>
                            </div>
                          </div>
                        </div>

                        <div className="dz-content">
                          <h5 className="title">
                            <Link to="/product">
                              Triply Steller Inner Lid Pressure Cooker 1.5 L
                            </Link>
                          </h5>
                          <span className="price">
                            <span className="old">₹3,100</span>
                            <span className="new">₹4,100</span>
                          </span>
                        </div>

                        <div className="product-tag">
                          <span className="badge">20% Off</span>
                          <span className="badge1">NEW</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* end */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WebsiteHomeFeaturedProducts;
