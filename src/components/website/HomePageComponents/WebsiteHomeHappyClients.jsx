import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const WebsiteHomeHappyClients = () => {
  return (
    <>
      <section className="content-inner-5">
        <div className="clients-container">
          <div
            className="section-head style-1 wow fadeInUp d-flex justify-content-center"
            data-wow-delay="0.2s"
          >
            <div className="left-content">
              <h2 className="title">Happy Clients</h2>
              <p className="text-center">
                A Legacy of Satisfied Clients Built on Trust.
              </p>
            </div>
          </div>
          <div className="swiper swiper-company">
            <Swiper
              modules={[Navigation]}
              spaceBetween={20}
              slidesPerView={4}
              loop={false}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              className="swiper-wrapper"
            >
              <SwiperSlide>
                <div className="d-flex  quote__slide quote__style_1 text-left ">
                  <div className="quote-wrap1">
                    <h5 className="mb-3 text-white">
                      Why Everyone’s Talking About Us
                    </h5>
                    <div className="text-body">
                      4.98 average
                      <br />
                      213 reviews
                    </div>
                    <div className="quote__slide__img">
                      <img
                        src="images/double-quotes-r.svg"
                        alt="Client Image"
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="quote-wrap">
                  <ul className="rating mb-2">
                    <li className="rated">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                    </li>
                    <li className="rated">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                    </li>
                    <li className="rated">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                    </li>
                    <li className="rated">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                    </li>
                    <li className="rated">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                    </li>
                  </ul>
                  <div className=" py-2 ">
                    <div className="txt-body">
                      The pressure cooker I bought is a game changer—cooks dal
                      in minutes and retains flavor so well. Will definitely
                      shop again!
                    </div>
                  </div>
                  <div className="d-flex align-items-center ">
                    <div className="text-left">
                      <div className="mt-2 h6 mb-0">
                        Rohan Mehta, Delhi
                        <span className="txt-body-60 capitalize small d-block font-family-2">
                          Happy Customer
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="quote-wrap">
                  <ul className="rating mb-2">
                    <li className="rated">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                    </li>
                    <li className="rated">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                    </li>
                    <li className="rated">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                    </li>
                    <li className="rated">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                    </li>
                    <li className="rated">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                    </li>
                  </ul>
                  <div className=" py-2 ">
                    <div className="txt-body">
                      I’ve used many brands, but this cookware set stands out
                      for its quality and finish. The handles stay cool, and the
                      pans are easy to clean.
                    </div>
                  </div>
                  <div className="d-flex align-items-center ">
                    <div className="text-left">
                      <div className="mt-2 h6 mb-0">
                        Anjali Sinha, Bangalore
                        <span className="txt-body-60 capitalize small d-block font-family-2">
                          Happy Customer
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                {" "}
                <div className="quote-wrap">
                  <ul className="rating mb-2">
                    <li className="rated">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                    </li>
                    <li className="rated">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                    </li>
                    <li className="rated">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                    </li>
                    <li className="rated">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                    </li>
                    <li className="rated">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                    </li>
                  </ul>
                  <div className=" py-2 ">
                    <div className="txt-body">
                      What impressed me most is the build quality and design. It
                      looks elegant, works perfectly on induction, and is easy
                      to maintain. 5 stars from me!
                    </div>
                  </div>
                  <div className="d-flex align-items-center ">
                    <div className="text-left">
                      <div className="mt-2 h6 mb-0">
                        Faisal Khan, Hyderabad
                        <span className="txt-body-60 capitalize small d-block font-family-2">
                          Happy Customer
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                {" "}
                <div className="quote-wrap">
                  <ul className="rating mb-2">
                    <li className="rated">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                    </li>
                    <li className="rated">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                    </li>
                    <li className="rated">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                    </li>
                    <li className="rated">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                    </li>
                    <li className="rated">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                    </li>
                  </ul>
                  <div className=" py-2 ">
                    <div className="txt-body">
                      The ceramic-coated pan is perfect for my daily cooking.
                      It’s toxin-free, super stylish, and nothing sticks. Highly
                      recommended!
                    </div>
                  </div>
                  <div className="d-flex align-items-center ">
                    <div className="text-left">
                      <div className="mt-2 h6 mb-0">
                        Rajeev Thakur, Pune
                        <span className="txt-body-60 capitalize small d-block font-family-2">
                          Happy Customer
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>

            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WebsiteHomeHappyClients;
