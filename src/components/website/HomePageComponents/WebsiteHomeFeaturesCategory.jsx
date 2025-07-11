import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const WebsiteHomeFeaturesCategory = () => {
  // const [categories, setCategories] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:8000/categories")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setCategories(data);
  //     })
  //     .catch((err) => {
  //       console.error("Error fetching categories:", err);
  //     });
  // }, []);

  return (
    <>
      <section className="shop-section overflow-hidden">
        <div className="container-fluid p-0">
          <div className="row">
            <div className="col-lg-9 left-box">
              <div className="swiper-shop">
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
                  {/* {homeCategory
                      .filter((item) => item.status !== 0)
                      .map((item, index) => ( */}
                  <SwiperSlide>
                    <div
                      className="shop-box style-1 wow fadeInUp"
                      data-wow-delay="0.2s"
                    >
                      <div className="dz-media">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          id="Cookware"
                          viewBox="0 0 113.85 78.98"
                        >
                          <path d="M47,64.31c-12.09,0-23.4-1.8-32.11-5.13C5.39,55.56.12,50.55,0,45.06S4.94,34.34,14.23,30.31s21.42-6.3,34.5-6.59c27.1-.57,49.35,8,49.59,19.22.12,5.49-4.93,10.73-14.23,14.75S62.67,64,49.6,64.28Zm4.39-39.76-2.61,0c-13,.28-25.1,2.6-34.17,6.52S.74,39.92.85,45,6,54.9,15.15,58.38s21.47,5.33,34.43,5,25.1-2.6,34.17-6.52S97.58,48.08,97.47,43C97.25,32.6,76.79,24.55,51.35,24.55Z"></path>
                          <path d="M4.43,52.78a.43.43,0,0,1-.24-.08.42.42,0,0,1-.1-.59C10.08,43.61,27.65,38,50,37.55c19.45-.41,37.2,3.92,45.2,11.05a.42.42,0,1,1-.56.63C86.74,42.24,69.23,38,50,38.4c-21.69.47-39.43,6-45.18,14.2A.41.41,0,0,1,4.43,52.78Z"></path>
                          <path d="M47.37,79C30.48,79,17.74,74.78,9.48,66.54A32.44,32.44,0,0,1,0,45a.42.42,0,0,1,.44-.42.43.43,0,0,1,.41.44A31.6,31.6,0,0,0,10.09,66c8.45,8.42,21.74,12.51,39.5,12.13a.4.4,0,0,1,.43.41.43.43,0,0,1-.41.44Z"></path>
                          <path d="M48.75,79l-2.81,0a.44.44,0,0,1-.42-.44A.4.4,0,0,1,46,78.1c20.17.47,34.79-4,43.44-13.3a30.38,30.38,0,0,0,8.08-21.65.43.43,0,0,1,.39-.47.43.43,0,0,1,.46.39A31.29,31.29,0,0,1,90,65.36C81.62,74.4,67.74,79,48.75,79Z"></path>
                          <path
                            className="cls-1"
                            d="M79.35,22.36a1.42,1.42,0,0,1-.73-2.64L111.71.2a1.42,1.42,0,0,1,1.44,2.44L80.06,22.16A1.41,1.41,0,0,1,79.35,22.36Z"
                          ></path>
                          <path d="M80.68,28.28a.43.43,0,0,1-.41-.3l-2-6.52-3.08,5.15a.43.43,0,1,1-.73-.44l3.57-6a.44.44,0,0,1,.42-.21.42.42,0,0,1,.35.3l2.28,7.43a.42.42,0,0,1-.28.53A.25.25,0,0,1,80.68,28.28Z"></path>
                        </svg>
                      </div>
                      <h6 className="product-name">
                        {/* <Link to={`${WEBURL}${item.caturl}`}>
                                {item.category_name}
                              </Link> */}
                        <Link to="/">cat1</Link>
                      </h6>
                    </div>
                  </SwiperSlide>
                  {/* ))} */}
                </Swiper>
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
                  <img src="src/assets/website/images/cat.png" alt="" />
                </div>

                <div
                  className="pagination-align wow fadeInUp"
                  data-wow-delay="1.6s"
                >
                  <div className="shop-button-prev">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="35"
                      height="35"
                      viewBox="0 0 35 35"
                      fill="none"
                    >
                      <path
                        d="M32.2645 16.9503H4.08145L10.7508 10.4669C11.2604 9.97176 10.5046 9.1837 9.98813 9.68289C9.98815 9.68286 2.35193 17.1063 2.35193 17.1063C2.12911 17.3092 2.14686 17.6755 2.35196 17.8903C2.35193 17.8903 9.98815 25.3169 9.98815 25.3169C10.5021 25.81 11.2622 25.0367 10.7508 24.5328C10.7508 24.5329 4.07897 18.0441 4.07897 18.0441H32.2645C32.9634 18.0375 32.9994 16.9636 32.2645 16.9503Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <div className="shop-button-next">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="35"
                      height="35"
                      viewBox="0 0 35 35"
                      fill="none"
                    >
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
    </>
  );
};

export default WebsiteHomeFeaturesCategory;
