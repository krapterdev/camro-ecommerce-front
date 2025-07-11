import React from "react";
import { Link } from "react-router-dom";
// import Shape from "../../../assets/website/images/shape-1.png";
// import Shape1 from "../../../assets/website/images/shape.png";
// import shape2 from "../../../assets/website/images/vit.png";
// import AboutUs from "../../../assets/website/images/decor-primary.svg";
// import AboutUs2 from "../../../assets/website/images/decor-primary.svg";

const WebsiteHomeAboutUs = () => {
  return (
    <>
      <section className="content-inner001 overflow-hidden">
        <div className="shape-3">
          <img src="src/assets/website/images/star.png" alt="" />
        </div>
        <div className="shape-2">
          <img src="src/assets/website/images/star1.png" alt="" />
        </div>
        <div className="container-fluid">
          <div className="row align-items-center justify-content-center about-style1">
            <div className="col-xl-2 col-lg-2 col-md-12 col-sm-12">
              <div
                className="about-one-right wow fadeInRight animated"
                data-wow-duration="1500ms"
                data-wow-delay="200ms"
              >
                <div className="about-one-right-shape-1"></div>
                <div className="about-one-right-shape-2"></div>
                <div className="about-one-right-img">
                  <div className="tiles">
                    <div className="tile ">
                      <img src="src/assets/website/images/1.png" alt="image" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-8 justify-content-center">
              <div className="about-content ">
                <div
                  className="section-head style-1 wow fadeInUp"
                  data-wow-delay="0.4s"
                >
                  <div className="shape-1">
                    <img src="src/assets/website/images/ab-1.webp" alt="" />
                  </div>

                  <h6 className="text-center">Camro Stainless Steel</h6>
                  <h3 className="title text-center">
                    The Most Trusted Brand for Generations <br />
                    Crafting Cookware that Cooks with Care.
                  </h3>
                  <p className="text-center">
                    Thank you for your interest in CAMRO Products. As you know,
                    we are one of the <br />
                    fastest growing MANUFACTURE of Kitchenware, Hotelware, and
                    <br />
                    all range of cookware and Pressure Cooker.
                  </p>

                  <Link to="#" className="text-center">
                    Shop Collection
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-xl-2 col-lg-2 col-md-12 col-sm-12">
              <div
                className="about-one-right wow fadeInRight animated"
                data-wow-duration="1500ms"
                data-wow-delay="200ms"
              >
                <div className="about-one-right-shape-1"></div>
                <div className="about-one-right-shape-2"></div>
                <div className="about-one-right-img">
                  <div className="tiles">
                    <div className="tile">
                      <img src="src/assets/website/images/2.png" alt="image" />
                    </div>
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

export default WebsiteHomeAboutUs;
