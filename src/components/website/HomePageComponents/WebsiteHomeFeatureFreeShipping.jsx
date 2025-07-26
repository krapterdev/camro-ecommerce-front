import React from "react";
import { Link } from "react-router-dom";

const WebsiteHomeFeatureFreeShipping = () => {
  return (
    <>
      <section className="bottom-f">
        <div className="container-fluid">
          <div className="row learts-mb-n30">
            <div className="col-lg-3 col-sm-6 col-12 learts-mb-30">
              <div className="icon-box5">
                <div className="icon">
                  <img src="src/assets/website/images/1.gif" alt="" />
                </div>
                <div className="content">
                  <h4 className="title">Free shipping</h4>
                  <p>All orders over $59</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-12 learts-mb-30">
              <div className="icon-box5">
                <div className="icon">
                  <img src="src/assets/website/images/2.gif" alt="" />
                </div>
                <div className="content">
                  <h4 className="title">Free returns</h4>
                  <p>Free 7-day returns</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-12 learts-mb-30">
              <div className="icon-box5">
                <div className="icon">
                  <img src="src/assets/website/images/3.gif" alt="" />
                </div>
                <div className="content">
                  <h4 className="title">24/7 Support</h4>
                  <p>Dedicated support</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-12 learts-mb-30">
              <div className="icon-box5">
                <div className="icon">
                  <img src="src/assets/website/images/4.gif" alt="" />
                </div>
                <div className="content">
                  <h4 className="title">Gift cards</h4>
                  <p>Code promotion</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WebsiteHomeFeatureFreeShipping;
