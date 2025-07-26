import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const WebsiteHomeNewarrivals = () => {
  const webURL = import.meta.env.VITE_WEBSITE_APP_API_BASE_URL;
  const imgUrl = import.meta.env.VITE_REACT_APP_STORAGE_URL;

  const [productNewarrivals, setProductNewarrivals] = useState([]);
  const [productBestSellers, setProductBestSellers] = useState([]);
  const [productTrending, setProductTrending] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${webURL}/new-arrivals-products`)
      .then((res) => {
        const dataNewarrivals = res.data;
        setProductNewarrivals(dataNewarrivals);
      })
      .catch((err) => console.error("Error:", err.message))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    axios
      .get(`${webURL}/best-sellers-products`)
      .then((res) => {
        const dataBestSellers = res.data;
        setProductBestSellers(dataBestSellers);
      })
      .catch((err) => console.error("Error:", err.message))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    axios
      .get(`${webURL}/trending-products-products`)
      .then((res) => {
        const dataTrending = res.data;
        setProductTrending(dataTrending);
      })
      .catch((err) => console.error("Error:", err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <section className="trending-section">
        <div className="container">
          <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1 learts-mb-n30">
            <div className="col learts-mb-30">
              <div className="block-title">
                <h3 className="title">New arrivals</h3>
              </div>
              {loading ? (
                <div className="text-center my-4 fw-bold">
                  Loading products...
                </div>
              ) : productNewarrivals.length === 0 ? (
                <div className="text-center my-4 text-danger">
                  No products found.
                </div>
              ) : (
                <div className="product-list-slider">
                  {productNewarrivals.slice(0, 3).map((newarrival, index) => (
                    <div className="list-product " key={index}>
                      <div className="thumbnail">
                        <Link to="#">
                          <img
                            loading="lazy"
                            src={`${imgUrl}/product/${newarrival.product_image1}`}
                            alt=""
                          />
                        </Link>
                      </div>
                      <div className="content">
                        <h6 className="title">
                          <Link to="#"> {newarrival.product_name}</Link>
                        </h6>
                        {newarrival.product_attrs?.length > 0 ? (
                          <span className="price">
                            <span className="old">
                              ₹ {newarrival.product_attrs[0].mrp_price}
                            </span>
                            <span className="new">
                              ₹ {newarrival.product_attrs[0].selling_price}
                            </span>
                          </span>
                        ) : (
                          <span className="price">
                            <span className="new">Price Not Available</span>
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="col learts-mb-30">
              <div className="block-title">
                <h3 className="title">Best Sellers</h3>
              </div>

              {loading ? (
                <div className="text-center my-4 fw-bold">
                  Loading products...
                </div>
              ) : productBestSellers.length === 0 ? (
                <div className="text-center my-4 text-danger">
                  No products found.
                </div>
              ) : (
                <div className="product-list-slider">
                  {productBestSellers.slice(0, 3).map((bestseller, index) => (
                    <div className="list-product " key={index}>
                      <div className="thumbnail">
                        <Link to="#">
                          <img
                            loading="lazy"
                            src={`${imgUrl}/product/${bestseller.product_image1}`}
                            alt=""
                          />
                        </Link>
                      </div>
                      <div className="content">
                        <h6 className="title">
                          <Link to="#"> {bestseller.product_name}</Link>
                        </h6>
                        {bestseller.product_attrs?.length > 0 ? (
                          <span className="price">
                            <span className="old">
                              ₹ {bestseller.product_attrs[0].mrp_price}
                            </span>
                            <span className="new">
                              ₹ {bestseller.product_attrs[0].selling_price}
                            </span>
                          </span>
                        ) : (
                          <span className="price">
                            <span className="new">Price Not Available</span>
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="col learts-mb-30">
              <div className="block-title">
                <h3 className="title">Trending Products</h3>
              </div>

              {loading ? (
                <div className="text-center my-4 fw-bold">
                  Loading products...
                </div>
              ) : productTrending.length === 0 ? (
                <div className="text-center my-4 text-danger">
                  No products found.
                </div>
              ) : (
                <div className="product-list-slider">
                  {productTrending.slice(0, 3).map((trending, index) => (
                    <div className="list-product " key={index}>
                      <div className="thumbnail">
                        <Link to="#">
                          <img
                            loading="lazy"
                            src={`${imgUrl}/product/${trending.product_image1}`}
                            alt=""
                          />
                        </Link>
                      </div>
                      <div className="content">
                        <h6 className="title">
                          <Link to="#"> {trending.product_name}</Link>
                        </h6>
                        {trending.product_attrs?.length > 0 ? (
                          <span className="price">
                            <span className="old">
                              ₹ {trending.product_attrs[0].mrp_price}
                            </span>
                            <span className="new">
                              ₹ {trending.product_attrs[0].selling_price}
                            </span>
                          </span>
                        ) : (
                          <span className="price">
                            <span className="new">Price Not Available</span>
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WebsiteHomeNewarrivals;
