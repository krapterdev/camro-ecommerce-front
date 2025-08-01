import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useCart } from "../../../context/CartContext";

const WebsiteHomeTriplyHammeredCookware = () => {
  const webURL = import.meta.env.VITE_WEBSITE_APP_API_BASE_URL;
  const imgUrl = import.meta.env.VITE_REACT_APP_STORAGE_URL;

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    axios
      .get(`${webURL}/triply-products`)
      .then((res) => {
        const data = res.data;
        setProducts(data);
      })
      .catch((err) => console.error("Error:", err.message))
      .finally(() => setLoading(false));
  }, []);

  const handleAddToCart = (product, attr) => {
    const cartPayload = {
      id: product.id,
      attr_id: attr.id,
      name: product.product_name,
      slug: product.product_slug,
      image: product.product_image1,
      size: attr.size,
      size_type: attr.size_type,
      weight: attr.weight,
      weight_type: attr.weight_type,
      price: attr.selling_price,
      hsncode: attr.hsncode,
    };

    addToCart(cartPayload, 1);
  };

  return (
    <>
      <section className="middele-content">
        <img src="src/assets/website/images/v-2.png" className="med" alt="" />
      </section>

      <section className="manage001 section section-padding">
        <div className="container-fluid">
          <div className="section-title212 text-center">
            <h2 className="title title-icon-both">Triply Hammered Cookware</h2>
            <p>
              Crafted with Generations of Tradition, Designed to Impress Every
              Modern Kitchen.
            </p>
          </div>

          <div className="row learts-mb-n30">
            <div className="col-lg-5 col-12">
              <div className="sale-banner11">
                <div className="inner">
                  <img src="src/assets/website/images/hammred-1.png" alt="" />
                  <div className="content">
                    <h3 className="title">Classic Hammered</h3>
                    <img
                      className="price "
                      src="src/assets/website/images/h-title.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-7 col-12">
              {loading ? (
                <div className="text-center my-4 fw-bold">
                  Loading products...
                </div>
              ) : products.length === 0 ? (
                <div className="text-center my-4 text-danger">
                  No products found.
                </div>
              ) : (
                <div className="products row row-cols-lg-3 row-cols-md-4 row-cols-sm-3 row-cols-2">
                  {products.slice(0, 6).map((item, index) => (
                    <div className="col" key={index}>
                      <div className="product">
                        <div className="product-thumb">
                          <Link to="#" className="image">
                            <img
                              loading="lazy"
                              src={`${imgUrl}/product/${item.product_image1}`}
                              alt="Product Image"
                            />
                            <img
                              loading="lazy"
                              className="image-hover"
                              src={`${imgUrl}/product/${item.product_image1}`}
                              alt="Product Hover"
                            />
                          </Link>
                        </div>
                        <div className="product-info">
                          <h6 className="title">
                            <Link to="#">{item.product_name}</Link>
                          </h6>
                          {item.product_attrs?.length > 0 ? (
                            <span className="price">
                              <span className="old">
                                ₹ {item.product_attrs[0].mrp_price}
                              </span>
                              <span className="new">
                                ₹ {item.product_attrs[0].selling_price}
                              </span>
                            </span>
                          ) : (
                            <span className="price">
                              <span className="new">Price Not Available</span>
                            </span>
                          )}
                          <div className="product-buttons">
                            {/* <Link
                              to="#quickViewModal"
                              data-bs-toggle="modal"
                              className="product-button hintT-top"
                              data-hint="Quick View"
                            >
                              <i className="fas fa-search"></i>
                            </Link> */}

                            <Link
                              className="product-button hintT-top"
                              data-hint="Add to Cart"
                              onClick={(e) => {
                                e.preventDefault();
                                const attr = item.product_attrs?.[0];
                                handleAddToCart(item, attr);
                              }}
                            >
                              <i className="fas fa-shopping-cart"></i>
                            </Link>

                            {/* <Link
                              to="#"
                              className="product-button hintT-top"
                              data-hint="Compare"
                            >
                              <i className="far fa-heart"></i>
                            </Link> */}
                          </div>
                        </div>
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

export default WebsiteHomeTriplyHammeredCookware;
