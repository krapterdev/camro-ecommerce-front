import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const webURL = import.meta.env.VITE_WEBSITE_APP_API_BASE_URL;
const imgUrl = import.meta.env.VITE_REACT_APP_STORAGE_URL;

const WebsiteHomeFeaturesCategory = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // ✅ error state

  useEffect(() => {
    axios
      .get(`${webURL}/categories`)
      .then((res) => {
        setCategories(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching categories:", err);
        setError("Server is down. Please try again later."); // ✅ error message
        setLoading(false);
      });
  }, []);

  return (
    <section className="shop-section overflow-hidden">
      <div className="container-fluid p-0">
        <div className="row">
          <div className="col-lg-9 left-box">
            <div className="swiper-shop">
              {loading ? (
                <div className="text-center py-5">
                  <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              ) : error ? (
                <div className="text-center py-5 text-danger">
                  <p>{error}</p>
                </div>
              ) : categories.filter((item) => item.status !== 0).length ===
                0 ? (
                <div className="text-center py-5 text-muted">
                  <p>No categories found.</p>
                </div>
              ) : (
                <Swiper
                  modules={[Navigation]}
                  spaceBetween={20}
                  slidesPerView={5}
                  loop={true}
                  navigation={{
                    nextEl: ".shop-button-next",
                    prevEl: ".shop-button-prev",
                  }}
                  className="swiper-wrapper"
                >
                  {categories
                    .filter((item) => item.status !== 0)
                    .map((item) => (
                      <SwiperSlide key={item.id}>
                        <div
                          className="shop-box style-1 wow fadeInUp"
                          data-wow-delay="0.2s"
                        >
                          <div className="dz-media">
                            <img
                              src={`${imgUrl}/category/${item.category_img}`}
                              alt={item.category_name}
                              className="img-fluid"
                              loading="lazy"
                            />
                          </div>
                          <h6 className="product-name mt-2">
                            <Link to={`/${item.category_slug}`}>{item.category_name}</Link>
                          </h6>
                        </div>
                      </SwiperSlide>
                    ))}
                </Swiper>
              )}
            </div>
          </div>

          <div className="col-lg-3 right-box">
            <div>
              <h3 className="title wow fadeInUp" data-wow-delay="1.2s">
                Featured Categories
              </h3>
              <p className="text wow fadeInUp" data-wow-delay="1.4s">
                Timeless Cookware, Modern Kitchen Ready.
              </p>

              <div className="shape">
                <img src="src/assets/website/images/cat.png" alt="Shape" />
              </div>

              <div
                className="pagination-align wow fadeInUp"
                data-wow-delay="1.6s"
              >
                <div className="shop-button-prev">
                  <svg width="35" height="35" viewBox="0 0 35 35">
                    <path
                      d="M32.2645 16.9503H4.08145L10.7508 10.4669C11.2604 9.97176 10.5046 9.1837 9.98813 9.68289L2.35193 17.1063C2.12911 17.3092 2.14686 17.6755 2.35196 17.8903L9.98815 25.3169C10.5021 25.81 11.2622 25.0367 10.7508 24.5328L4.07897 18.0441H32.2645C32.9634 18.0375 32.9994 16.9636 32.2645 16.9503Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="shop-button-next">
                  <svg width="35" height="35" viewBox="0 0 35 35">
                    <path
                      d="M2.73549 16.9503H30.9186L24.2492 10.4669C23.7396 9.97176 24.4954 9.1837 25.0119 9.68289L32.6481 17.1063C32.8709 17.3092 32.8531 17.6755 32.648 17.8903L25.0118 25.3169C24.4979 25.81 23.7378 25.0367 24.2492 24.5328L30.921 18.0441H2.73549C2.03663 18.0375 2.00064 16.9636 2.73549 16.9503Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebsiteHomeFeaturesCategory;
