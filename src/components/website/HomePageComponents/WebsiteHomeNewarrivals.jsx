import React from "react";
import { Link } from "react-router-dom";

const WebsiteHomeNewarrivals = () => {
  return (
    <>
      <section className="trending-section">
        <div className="container">
          <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1 learts-mb-n30">
            <div className="col learts-mb-30">
              <div className="block-title">
                <h3 className="title">New arrivals</h3>
              </div>

              <div className="product-list-slider">
                <div className="list-product">
                  <div className="thumbnail">
                    <Link to="#">
                      <img
                        src="https://www.parulhomeproducts.in/adminmaster/Image/productImage/BHP_0051.jpg"
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="content">
                    <h6 className="title">
                      <Link to="#"> Aluminium Prime Pressure Cooker</Link>
                    </h6>
                    <span className="price">
                      <span className="old">$45.00</span>
                      <span className="new">$39.00</span>
                    </span>
                  </div>
                </div>

                <div className="list-product">
                  <div className="thumbnail">
                    <Link to="#">
                      <img src="https://www.parulhomeproducts.in/adminmaster/Image/productImage/BHP_0051.jpg" />
                    </Link>
                  </div>
                  <div className="content">
                    <h6 className="title">
                      <Link to="#"> Tri-ply Stainless Steel Kadhai </Link>
                    </h6>
                    <span className="price">
                      <span className="old">$15.00</span>
                      <span className="new">$12.00</span>
                    </span>
                  </div>
                </div>

                <div className="list-product">
                  <div className="thumbnail">
                    <Link to="#">
                      <img
                        src="https://www.parulhomeproducts.in/adminmaster/Image/productImage/BHP_0070.jpg"
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="content">
                    <h6 className="title">
                      <Link to="#"> Tri-ply Stainless Steel Saucepan</Link>
                    </h6>
                    <span className="price">
                      <span className="old">$30.00</span>
                      <span className="new">$22.00</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col learts-mb-30">
              <div className="block-title">
                <h3 className="title">Best Sellers</h3>
              </div>

              <div className="product-list-slider">
                <div className="list-product">
                  <div className="thumbnail">
                    <Link to="#">
                      <img
                        src="https://www.parulhomeproducts.in/adminmaster/Image/productImage/BHP_0051.jpg"
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="content">
                    <h6 className="title">
                      <Link to="#"> Aluminium Prime Pressure Cooker</Link>
                    </h6>
                    <span className="price">
                      <span className="old">$45.00</span>
                      <span className="new">$39.00</span>
                    </span>
                  </div>
                </div>

                <div className="list-product">
                  <div className="thumbnail">
                    <Link to="#">
                      <img src="https://www.parulhomeproducts.in/adminmaster/Image/productImage/BHP_0051.jpg" />
                    </Link>
                  </div>
                  <div className="content">
                    <h6 className="title">
                      <Link to="#"> Tri-ply Stainless Steel Kadhai </Link>
                    </h6>
                    <span className="price">
                      <span className="old">$15.00</span>
                      <span className="new">$12.00</span>
                    </span>
                  </div>
                </div>

                <div className="list-product">
                  <div className="thumbnail">
                    <Link to="#">
                      <img
                        src="https://www.parulhomeproducts.in/adminmaster/Image/productImage/BHP_0070.jpg"
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="content">
                    <h6 className="title">
                      <Link to="#"> Tri-ply Stainless Steel Saucepan</Link>
                    </h6>
                    <span className="price">
                      <span className="old">$30.00</span>
                      <span className="new">$22.00</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col learts-mb-30">
              <div className="block-title">
                <h3 className="title">Trending Products</h3>
              </div>

              <div className="product-list-slider">
                <div className="list-product">
                  <div className="thumbnail">
                    <Link to="#">
                      <img
                        src="https://www.parulhomeproducts.in/adminmaster/Image/productImage/BHP_0051.jpg"
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="content">
                    <h6 className="title">
                      <Link to="#"> Aluminium Prime Pressure Cooker</Link>
                    </h6>
                    <span className="price">
                      <span className="old">$45.00</span>
                      <span className="new">$39.00</span>
                    </span>
                  </div>
                </div>

                <div className="list-product">
                  <div className="thumbnail">
                    <Link to="#">
                      <img src="https://www.parulhomeproducts.in/adminmaster/Image/productImage/BHP_0051.jpg" />
                    </Link>
                  </div>
                  <div className="content">
                    <h6 className="title">
                      <Link to="#"> Tri-ply Stainless Steel Kadhai </Link>
                    </h6>
                    <span className="price">
                      <span className="old">$15.00</span>
                      <span className="new">$12.00</span>
                    </span>
                  </div>
                </div>

                <div className="list-product">
                  <div className="thumbnail">
                    <Link to="#">
                      <img
                        src="https://www.parulhomeproducts.in/adminmaster/Image/productImage/BHP_0070.jpg"
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="content">
                    <h6 className="title">
                      <Link to="#"> Tri-ply Stainless Steel Saucepan</Link>
                    </h6>
                    <span className="price">
                      <span className="old">$30.00</span>
                      <span className="new">$22.00</span>
                    </span>
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

export default WebsiteHomeNewarrivals;
