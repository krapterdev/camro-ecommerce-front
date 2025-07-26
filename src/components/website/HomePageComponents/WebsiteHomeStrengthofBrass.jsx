import React from "react";
import { Link } from "react-router-dom";

const WebsiteHomeStrengthofBrass = () => {
  return (
    <>
      <section className="end-of-season">
        <div className="row">
          <div className="col-md-6">
            <div className="brass-premuim">
              <h6 className="text-left">
                {" "}
                Strength of brass, purity of Kalai!
              </h6>
              <div className="d-flex align-items-center gap-3">
                <h3>
                  The king of the kitchen <br />
                  <b>Premium Brass Cookware</b>
                </h3>
                <div className="brass-foto">
                  <img src="src/assets/website/images/img-4.png" alt="" />
                </div>
              </div>

              <ul>
                <li>
                  <span>Premium Triply Construction</span>
                  <br />
                  Ensures even heat distribution and durability.
                </li>

                <li>
                  <span>Elegant Golden Handles</span>
                  <br />
                  Adds a touch of luxury to your kitchen.
                </li>

                <li>
                  <span>Faster & Even Cooking</span>
                  <br />
                  Reduces cooking time with uniform heating.
                </li>
                <li>
                  <span>Sturdy & Long-Lasting</span>
                  <br />
                  High-quality stainless steel for durability.
                </li>
              </ul>

              <div className="text-left">
                <Link
                  to="#"
                  className="btn btn-secondary btn-lg wow fadeInUp m-b30"
                  data-wow-delay="0.4s"
                >
                  SHOP NOW
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="image-brass">
              <img src="src/assets/website/images/brass-poster.png" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WebsiteHomeStrengthofBrass;
