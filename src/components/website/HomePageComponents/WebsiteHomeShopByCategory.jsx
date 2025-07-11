import React, { useEffect, useState } from "react";

const WebsiteHomeShopByCategory = () => {
  const [categories, setCategories] = useState([]);

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

  return (
    <>
      <section className="flat-spacing-2 pb_0 d-none d-xl-block">
        <div className="container">
          <div
            className="heading-section-2 wow fadeInUp"
            style={{ visibility: "visible", animationName: "fadeInUp" }}
          >
            <h3>
              Shop by <span>Category</span>
            </h3>
            <a
              href="https://mangatramonline.com/our-categories"
              className="btn-line d-none d-xl-block"
            >
              View All Category
            </a>
          </div>

          <div
            className="flat-collection-circle wow fadeInUp"
            data-wow-delay="0.1s"
            style={{
              visibility: "visible",
              animationDelay: "0.1s",
              animationName: "fadeInUp",
            }}
          >
            <div
              dir="ltr"
              className="swiper tf-sw-collection swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden"
              data-preview="4"
              data-tablet="3"
              data-mobile="2"
              data-space-lg="20"
              data-space-md="20"
              data-space="15"
              data-pagination="1"
              data-pagination-md="1"
              data-pagination-lg="1"
            >
              <div
                className="swiper-wrapper"
                style={{ transform: "translate3d(0px, 0px, 0px)" }}
              >
                {categories.slice(0, 4).map((category) => (
                  <div
                    key={category.id}
                    className="swiper-slide"
                    style={{
                      backgroundColor: category.category_hexcolor || "#f0f8ff", // agar color nahi ho to default
                      width: "288.5px",
                      marginRight: "20px",
                    }}
                  >
                    <div className="collection-circle hover-img mts">
                      <a href={category.category_slug} className="img-style">
                        <img
                          className="lazyload"
                          src={category.category_image}
                          alt={category.category_name}
                        />
                      </a>
                      <div className="collection-content text-center">
                        <div>
                          <a
                            href={category.category_slug}
                            className="cls-title"
                          >
                            <h6 className="text">{category.category_name}</h6>
                            <i className="icon icon-arrowUpRight"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Card 1 */}
                {/* <div
                  className="swiper-slide swiper-slide-active"
                  style={{ backgroundColor: "#f0f8ff", width: "288.5px", marginRight: "20px" }}
                >
                  <div className="collection-circle hover-img mts">
                    <a href="https://mangatramonline.com/pulses" className="img-style">
                      <img
                        className="lazyload"
                        src="https://mangatramonline.com/products/pulses_24_04_25_10_51_08_120722.png"
                        alt="Mangatram"
                      />
                    </a>
                    <div className="collection-content text-center">
                      <div>
                        <a href="https://mangatramonline.com/pulses" className="cls-title">
                          <h6 className="text">Pulses</h6>
                          <i className="icon icon-arrowUpRight"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div> */}

                {/* Card 2 */}
                {/* <div
                  className="swiper-slide swiper-slide-next"
                  style={{ backgroundColor: "#f4e3eb", width: "288.5px", marginRight: "20px" }}
                >
                  <div className="collection-circle hover-img mts">
                    <a href="https://mangatramonline.com/rice" className="img-style">
                      <img
                        className="lazyload"
                        src="https://mangatramonline.com/products/riceflakes_08_02_25_16_41_50_99594.png"
                        alt="Mangatram"
                      />
                    </a>
                    <div className="collection-content text-center">
                      <div>
                        <a href="https://mangatramonline.com/rice" className="cls-title">
                          <h6 className="text">Rice</h6>
                          <i className="icon icon-arrowUpRight"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div> */}

                {/* Card 3 */}
                {/* <div
                  className="swiper-slide"
                  style={{ backgroundColor: "#c7dbb1", width: "288.5px", marginRight: "20px" }}
                >
                  <div className="collection-circle hover-img mts">
                    <a href="https://mangatramonline.com/poha" className="img-style">
                      <img
                        className="lazyload"
                        src="https://mangatramonline.com/products/poha_08_02_25_16_43_28_104682.png"
                        alt="Mangatram"
                      />
                    </a>
                    <div className="collection-content text-center">
                      <div>
                        <a href="https://mangatramonline.com/poha" className="cls-title">
                          <h6 className="text">Poha</h6>
                          <i className="icon icon-arrowUpRight"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div> */}

                {/* Card 4 */}
                {/* <div
                  className="swiper-slide"
                  style={{ backgroundColor: "#f4ece3", width: "288.5px", marginRight: "20px" }}
                >
                  <div className="collection-circle hover-img mts">
                    <a href="https://mangatramonline.com/besan" className="img-style">
                      <img
                        className="lazyload"
                        src="https://mangatramonline.com/products/besan_08_02_25_16_43_49_100355.png"
                        alt="Mangatram"
                      />
                    </a>
                    <div className="collection-content text-center">
                      <div>
                        <a href="https://mangatramonline.com/besan" className="cls-title">
                          <h6 className="text">Besan</h6>
                          <i className="icon icon-arrowUpRight"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>

              <span
                className="swiper-notification"
                aria-live="assertive"
                aria-atomic="true"
              ></span>
            </div>

            <div
              className="nav-prev-collection d-none d-lg-flex nav-sw style-line nav-sw-left swiper-button-disabled swiper-button-lock"
              aria-disabled="true"
            >
              <i className="icon icon-arrLeft"></i>
            </div>
            <div
              className="nav-next-collection d-none d-lg-flex nav-sw style-line nav-sw-right swiper-button-disabled swiper-button-lock"
              aria-disabled="true"
            >
              <i className="icon icon-arrRight"></i>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WebsiteHomeShopByCategory;
