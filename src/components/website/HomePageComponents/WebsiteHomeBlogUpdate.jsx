import React from "react";
import { Link } from "react-router-dom";

const WebsiteHomeBlogUpdate = () => {
  return (
    <>
      <section className="section-padding000 pl-5">
        <div className="container-fluid">
          <div className="row learts-mb-n40">
            <div className="col-lg-4 learts-mb-40">
              <div className="section-title2 mb-5 ">
                <h2 className="title title-icon-right">Blog update</h2>
                <p>
                  Subscribe for latest news and blog updates from our editor.
                </p>
              </div>
              <ul className="widget-list">
                <li>
                  <i className="fas fa-long-arrow-alt-right"></i>
                  <Link to="#">Start a Kickass Online Blog</Link>
                </li>
                <li>
                  <i className="fas fa-long-arrow-alt-right"></i>
                  <Link to="#">Tile Tray with Brass Handles</Link>
                </li>
                <li>
                  <i className="fas fa-long-arrow-alt-right"></i>
                  <Link to="#">Dining Table Chairs Makeover</Link>
                </li>
                <li>
                  <i className="fas fa-long-arrow-alt-right"></i>
                  <Link to="#">Faux Map Drawer Dresser</Link>
                </li>
                <li>
                  <i className="fas fa-long-arrow-alt-right"></i>
                  <Link to="#">Printable Season Postcards 2019</Link>
                </li>
              </ul>
            </div>

            <div className="col-lg-8 learts-mb-40">
              <div className="row learts-mb-n40">
                <div className="col-md-6 col-12 learts-mb-40">
                  <div className="blog">
                    <div className="image">
                      <Link to="#">
                        <img
                          src="src/assets/website/images/b-1.png"
                          alt="Blog Image"
                        />
                      </Link>
                    </div>
                    <div className="content">
                      <ul className="meta">
                        <li>
                          <i className="far fa-calendar"></i>
                          <Link to="#">January 22, 2020</Link>
                        </li>
                        <li>
                          <i className="far fa-eye"></i> 95 views
                        </li>
                      </ul>
                      <h5 className="title">
                        <Link to="#">
                          Convenience of a Camro Cookware Pressure Cooker
                        </Link>
                      </h5>
                      <div className="desc">
                        <p>
                          Which kitchen tool do we reach for almost every single
                          day? What is the one thing our mom asks us...
                        </p>
                      </div>
                      <Link to="#" className="link">
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-12 learts-mb-40">
                  <div className="blog">
                    <div className="image">
                      <Link to="#">
                        <img
                          src="src/assets/website/images/b-2.png"
                          alt="Blog Image"
                        />
                      </Link>
                    </div>
                    <div className="content">
                      <h5 className="title">
                        <Link to="#">
                          Kid-Friendly Recipes for Summer Vacation
                        </Link>
                      </h5>
                      <div className="desc">
                        <p>
                          Ah, summer vacation! A delightful paradox, isn't it?
                          While the kids are ecstatic about their well-deserved
                          break from school, parents...
                        </p>
                      </div>
                      <Link to="#" className="link">
                        Read More
                      </Link>
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

export default WebsiteHomeBlogUpdate;
