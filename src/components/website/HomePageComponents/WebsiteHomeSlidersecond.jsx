import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const WebsiteHomeSlidersecond = () => {
  return (
    <>
      <section className="section-slide">
        <div className="home8-slider">
          <Swiper
            modules={[EffectFade, Pagination, Navigation, Autoplay]}
            loop={true}
            speed={750}
            spaceBetween={30}
            effect="fade"
            autoplay={{ delay: 5000 }}
            pagination={{
              el: ".home8-slider-pagination",
              clickable: true,
            }}
            navigation={{
              nextEl: ".home8-slider-next",
              prevEl: ".home8-slider-prev",
            }}
            className="swiper-container"
          >
            {/* Slide 1 */}
            <SwiperSlide>
              <div className="home8-slide-item">
                <div className="home8-slide-image">
                  <img
                    src="src/assets/website/images/cooker-1.png"
                    alt="Slide Image"
                  />
                </div>
                <div className="home8-slide-content">
                  <span className="sub-title">Just for you</span>
                  <h2 className="title">
                    Your Perfect Cooker
                    <br />
                    One Click.
                  </h2>
                  <div className="link">
                    <Link to="#">Shop Now</Link>
                  </div>
                </div>
                <div className="home8-slide-pages">
                  <span className="current">0</span>
                  <span className="border"></span>
                  <span className="total">1</span>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 2 */}
            <SwiperSlide>
              <div className="home8-slide-item">
                <div className="home8-slide-image">
                  <img
                    src="src/assets/website/images/cooker-3.png"
                    alt="Slide Image"
                  />
                </div>
                <div className="home8-slide-content">
                  <span className="sub-title">Just for you</span>
                  <h2 className="title">
                    Quality Cookers.
                    <br />
                    Easy Online Shopping.
                  </h2>
                  <div className="link">
                    <Link to="#">Shop Now</Link>
                  </div>
                </div>
                <div className="home8-slide-pages">
                  <span className="current">1</span>
                  <span className="border"></span>
                  <span className="total">2</span>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 3 */}
            <SwiperSlide>
              <div className="home8-slide-item">
                <div className="home8-slide-image">
                  <img
                    src="src/assets/website/images/cooker-5.png"
                    alt="Slide Image"
                  />
                </div>
                <div className="home8-slide-content">
                  <span className="sub-title">Just for you</span>
                  <h2 className="title">
                    Your Kitchen <br />
                    Our Cooking Legacy.
                  </h2>
                  <div className="link">
                    <Link to="#">Shop Now</Link>
                  </div>
                </div>
                <div className="home8-slide-pages">
                  <span className="current">2</span>
                  <span className="border"></span>
                  <span className="total">3</span>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>

          <div className="home8-slider-pagination swiper-pagination"></div>
        </div>
      </section>
    </>
  );
};

export default WebsiteHomeSlidersecond;
