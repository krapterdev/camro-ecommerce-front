import React from "react";
import Shape from "../../../assets/website/images/shape-1.png";
import Shape1 from "../../../assets/website/images/shape.png";
import shape2 from "../../../assets/website/images/vit.png";
import AboutUs from "../../../assets/website/images/decor-primary.svg";
import AboutUs2 from "../../../assets/website/images/decor-primary.svg";

const WebsiteHomeAboutUs = () => {
  return (
    <>
      <section className="about-us">
        <div className="shape">
          <img src={Shape} alt="" />
        </div>
        <div className="shape1">
          <img src={Shape1} alt="" />
        </div>
        <div className="shape2">
          <img src={shape2} alt="" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="eltdf-section-title-holder">
                <h2 className="eltdf-st-title">
                  <div className="insight-title--subtitle">
                    Mangat Ram Dal Mills Pvt. Ltd.
                  </div>
                </h2>
                <div className="d-flex align-items-center justify-content-center">
                  <img
                    src={AboutUs}
                    alt="about-us"
                    className="img-fluid d-none d-xl-block"
                  />
                  <h5 className="eltdf-st-text">
                    Mangat Ram Dal Mills Pvt. Ltd. is a renowned online Dal And
                    Pulses store in Delhi
                    <br /> that offers a wide range of the best quality
                    products. We deal in <br />
                    the manufacturing & processing pulses and rice of etc.
                  </h5>
                  <img
                    src={AboutUs2}
                    alt="about-us"
                    className="img-fluid d-none d-xl-block"
                  />
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
