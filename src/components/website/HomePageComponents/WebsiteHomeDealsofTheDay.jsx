import React from "react";
import { Link } from "react-router-dom";

const WebsiteHomeDealsofTheDay = () => {
  return (
    <>
      <section className="section132">
        <div className="row g-0">
          <div className="col-lg-6 col-12">
            <div className="sale-banner9 bg-light12">
              <div className="inner">
                <div className="content">
                  <h3 className="title">Deals of the day</h3>
                  <span className="cuppon">
                    EVERYTHING WITH CODE: <span className="code">NEW 30</span>
                  </span>
                  <span className="offer">30% OFF</span>
                  <Link to="#" className="btn btn-dark btn-hover-primary">
                    shop now
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-12">
            <div className="sale-banner9-image">
              <img src="src/assets/website/images/deals.png" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WebsiteHomeDealsofTheDay;
