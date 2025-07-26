import React from "react";
import { Link } from "react-router-dom";

const WebsiteHomeWhyChooseUs = () => {
  return (
    <>
      <section className="why-us">
        <div className="container container-xxl">
          <div className="mb-md-13 mb-11">
            <div className="text-center" data-animate="fadeInUp">
              <h6 className="text-center">Cookware That Cares</h6>
              <h2 className="mb-6">Why Choose CAMRO?</h2>
            </div>
          </div>
          <div className="row gx-30px gy-30px">
            <div className="col-lg-4" data-animate="fadeInUp">
              <div className="">
                <div className="d-flex justify-content-center">
                  <img
                    className="lazy-image123  img-fluid"
                    src="src/assets/website/images/why-1.png"
                    width="140"
                    height="140"
                    alt=""
                  />
                </div>
                <div className="card-body text-center pt-7 mt-3">
                  <h3 className="fs-4 mb-6">Premium Quality You Can Trust</h3>
                  <p className="mb-0 px-lg-6">
                    We use premium materials like stainless steel and non-stick
                    coatings, tested for lasting performance and quality.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4" data-animate="fadeInUp">
              <div className="">
                <div className="d-flex justify-content-center">
                  <img
                    className="lazy-image123 img-fluid"
                    src="src/assets/website/images/why-2.png"
                    width="140"
                    height="140"
                    alt=""
                  />
                </div>
                <div className="card-body text-center pt-7 mt-3">
                  <h3 className="fs-4 mb-6">Designed for Every Kitchen</h3>
                  <p className="mb-0 px-lg-6">
                    All Grace formulations adhere to strict purity standards and
                    will never contain harsh or toxic ingredients
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4" data-animate="fadeInUp">
              <div className="">
                <div className="d-flex justify-content-center">
                  <img
                    className="lazy-image123 img-fluid"
                    src="src/assets/website/images/why-3.png"
                    width="140"
                    height="140"
                    alt=""
                  />
                </div>
                <div className="card-body text-center pt-7 mt-3">
                  <h3 className="fs-4 mb-6">Safe, Healthy Cooking</h3>
                  <p className="mb-0 px-lg-6">
                    All our products are 100% food-safe and free from harmful
                    chemicals like PFOA, lead, and cadmium. Cook confidently
                    knowing your health is protected.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WebsiteHomeWhyChooseUs;
