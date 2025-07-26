import React from "react";
import { Link } from "react-router-dom";

const WebsiteHomePressureMaster = () => {
  return (
    <>
      <section className="poster-section">
        <div className="container-fluid">
          <div className="clearfix">
            <div className="row">
              <div className="card-container col-md-5">
                <div className="portfolio-box style-2">
                  <div className="dz-media">
                    <Link to="#">
                      <img src="src/assets/website/images/p-1.png" alt="" />
                    </Link>
                  </div>
                  <div className="cmsbanner-details">
                    <div className="cmsbanner-detail-inner">
                      <span className="cmsbanner-offer-text">Cooker</span>
                      <span className="cmsbanner-title">Pressure Master</span>
                      <Link to="#" className="bannercms-btn">
                        shop now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-7">
                <div className="row">
                  <div className="card-container col-md-6 m-b30">
                    <div className="portfolio-box style-2">
                      <div className="dz-media">
                        <Link to="#">
                          <img src="src/assets/website/images/p-2.png" alt="" />
                        </Link>
                      </div>
                      <div className="dz-content">
                        <div className="product-tag">
                          <Link to="#">
                            <span className="badge">New</span>
                          </Link>
                        </div>
                      </div>

                      <div className="cmsbanner-details">
                        <div className="cmsbanner-detail-inner">
                          <span className="cmsbanner-offer-text">
                            Mapple plan{" "}
                          </span>
                          <span className="cmsbanner-title">cookware</span>
                          <Link to="#" className="bannercms-btn">
                            shop now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-container col-md-6 m-b30">
                    <div className="portfolio-box style-2">
                      <div className="dz-media">
                        <Link to="#">
                          <img src="src/assets/website/images/p-3.png" alt="" />
                        </Link>
                      </div>

                      <div className="cmsbanner-details">
                        <div className="cmsbanner-detail-inner">
                          <span className="cmsbanner-offer-text">S.S </span>
                          <span className="cmsbanner-title">Cookware</span>
                          <Link to="#" className="bannercms-btn">
                            shop now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="card-container col-md-12">
                    <div className="portfolio-box style-2">
                      <div className="dz-media">
                        <Link to="#">
                          <img src="src/assets/website/images/p-4.png" alt="" />
                        </Link>
                      </div>

                      <div className="cmsbanner-details">
                        <div className="cmsbanner-detail-inner">
                          <span className="cmsbanner-offer-text">
                            Cast Iron
                          </span>
                          <span className="cmsbanner-title">Cookware</span>
                          <Link to="#" className="bannercms-btn">
                            shop now
                          </Link>
                        </div>
                      </div>
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

export default WebsiteHomePressureMaster;
