import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
// import ProductQtyInput from "../ProductQtyInput";

function ProductRelateProductComponents() {
  return (
    <>
    <section className="content-inner-1  overflow-hidden">
        <div className="container">
          <div className="section-head style-2 d-md-flex align-items-center justify-content-between mb-3">
            <div className="left-content">
              <h2 className="title mb-0">Related products</h2>
            </div>
            <a
              href="#"
              className="text-secondary font-14 d-flex align-items-center gap-1"
            >
              See all products
              <i className="icon feather icon-chevron-right font-18"></i>
            </a>
          </div>
          <div className="swiper-btn-center-lr">
            <Swiper
              modules={[Navigation]}
              spaceBetween={20}
              slidesPerView={4}
              loop={true}
              navigation={{
                nextEl: ".shop-button-next",
                prevEl: ".shop-button-prev",
              }}
              className="swiper-wrapper"
            >
              <SwiperSlide>
                <div className="shop-card">
                  <div className="dz-media">
                    <Link to="/product">
                      {" "}
                      <img
                        src="/src/assets/website/images/triply-artisian-cookware/1.png"
                        data-hover-src="/src/assets/website/images/triply-artisian-cookware/h-1.png"
                        alt="image"
                      />
                    </Link>

                    <div className="shop-meta">
                      <a
                        href="javascript:void(0);"
                        className="btn btn-secondary btn-md btn-rounded"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        <i className="fa-solid fa-eye d-md-none d-block"></i>
                        <span className="d-md-block d-none">Add to cart</span>
                      </a>
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
              </SwiperSlide>
              <SwiperSlide>
                <div className="shop-card">
                  <div className="dz-media">
                    <Link to="/product">
                      {" "}
                      <img
                        src="/src/assets/website/images/triply-artisian-cookware/1.png"
                        data-hover-src="/src/assets/website/images/triply-artisian-cookware/h-1.png"
                        alt="image"
                      />
                    </Link>

                    <div className="shop-meta">
                      <a
                        href="javascript:void(0);"
                        className="btn btn-secondary btn-md btn-rounded"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        <i className="fa-solid fa-eye d-md-none d-block"></i>
                        <span className="d-md-block d-none">Add to cart</span>
                      </a>
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
              </SwiperSlide>
              <SwiperSlide>
                <div className="shop-card">
                  <div className="dz-media">
                    <Link to="/product">
                      {" "}
                      <img
                        src="/src/assets/website/images/triply-artisian-cookware/1.png"
                        data-hover-src="/src/assets/website/images/triply-artisian-cookware/h-1.png"
                        alt="image"
                      />
                    </Link>

                    <div className="shop-meta">
                      <a
                        href="javascript:void(0);"
                        className="btn btn-secondary btn-md btn-rounded"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        <i className="fa-solid fa-eye d-md-none d-block"></i>
                        <span className="d-md-block d-none">Add to cart</span>
                      </a>
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
              </SwiperSlide>
              <SwiperSlide>
                <div className="shop-card">
                  <div className="dz-media">
                    <Link to="/product">
                      {" "}
                      <img
                        src="/src/assets/website/images/triply-artisian-cookware/1.png"
                        data-hover-src="/src/assets/website/images/triply-artisian-cookware/h-1.png"
                        alt="image"
                      />
                    </Link>

                    <div className="shop-meta">
                      <a
                        href="javascript:void(0);"
                        className="btn btn-secondary btn-md btn-rounded"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        <i className="fa-solid fa-eye d-md-none d-block"></i>
                        <span className="d-md-block d-none">Add to cart</span>
                      </a>
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
              </SwiperSlide>

              <SwiperSlide>
                <div className="shop-card">
                  <div className="dz-media">
                    <Link to="/product">
                      {" "}
                      <img
                        src="/src/assets/website/images/triply-artisian-cookware/1.png"
                        data-hover-src="/src/assets/website/images/triply-artisian-cookware/h-1.png"
                        alt="image"
                      />
                    </Link>

                    <div className="shop-meta">
                      <a
                        href="javascript:void(0);"
                        className="btn btn-secondary btn-md btn-rounded"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        <i className="fa-solid fa-eye d-md-none d-block"></i>
                        <span className="d-md-block d-none">Add to cart</span>
                      </a>
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
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  )
}

export default ProductRelateProductComponents