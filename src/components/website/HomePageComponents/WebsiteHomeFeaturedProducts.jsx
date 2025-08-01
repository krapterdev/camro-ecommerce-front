import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useCart } from "../../../context/CartContext";

const WebsiteHomeFeaturedProducts = () => {
  const webURL = import.meta.env.VITE_WEBSITE_APP_API_BASE_URL;
  const imgUrl = import.meta.env.VITE_REACT_APP_STORAGE_URL;
  const { addToCart } = useCart();

  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedCatId, setSelectedCatId] = useState(null);

  const handleMouseEnter = ({ currentTarget: img }) => {
    const hoverSrc = img.dataset.hoverSrc;
    if (hoverSrc) {
      img.dataset.originalSrc = img.src;
      img.src = hoverSrc;
    }
  };

  const handleAddToCart = (product, attr) => {
    if (!product || !attr) return;

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

  const handleMouseLeave = ({ currentTarget: img }) => {
    img.src = img.dataset.originalSrc || img.src;
  };

  useEffect(() => {
    axios.get(`${webURL}/categories`).then((res) => {
      setCategories(res.data);
      if (res.data.length) setSelectedCatId(res.data[0].id);
    });

    axios.get(`${webURL}/allproduct`).then((res) => {
      setProducts(res.data);
    });
  }, []);

  const filteredProducts = products.filter(
    (product) => product.category_id === selectedCatId
  );

  return (
    <>
      <section className="content-inner">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div
                className="section-head style-1 m-b30 wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <div className="left-content">
                  <h6 className="text-center">Featured Products</h6>
                  <h2 className="title">
                    Shop All<b> Products</b>
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-md-between align-items-start">
            <div className="col-md-8">
              <div
                className="site-filters clearfix style-1 align-items-center wow fadeInUp"
                data-wow-delay="0.4s"
              >
                <ul
                  className="site-filters clearfix style-1 align-items-center wow fadeInUp"
                  id="pills-tab"
                  role="tablist"
                >
                  {categories.slice(0, 5).map((cat) => (
                    <li className="btn" key={cat.id} role="presentation">
                      <Link
                        className={selectedCatId === cat.id ? "active" : ""}
                        onClick={() => setSelectedCatId(cat.id)}
                        id="pills-home-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-home"
                        type="button"
                        role="tab"
                        aria-controls="pills-home"
                        aria-selected="true"
                      >
                        {cat.category_name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="col-md-4">
              <div className="btn-19">
                <Link to="#">VIEW ALL COLLECTION</Link>
              </div>
            </div>
          </div>
          <div className="clearfix">
            <div className="row g-xl-4 g-3">
              <div className="tab-content" id="pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id={`cat-${selectedCatId}`}
                  role="tabpanel"
                  aria-labelledby="pills-home-tab"
                >
                  <div className="row g-xl-4 g-3">
                    {filteredProducts.map((product) => {
                      const attr = product.product_attrs?.[0];
                      if (!attr) return null;

                      return (
                        <div
                          className="card-container col-6 col-xl-3 col-lg-3 col-md-4 col-sm-6 wow fadeInUp"
                          key={`${product.id}-${attr.id}`}
                          data-wow-delay="0.6s"
                        >
                          <div className="shop-card">
                            <div className="dz-media">
                              <Link to={`/${categories[0].category_slug}/${product.product_slug}`}>
                                <img
                                  src={`${imgUrl}/product/${product.product_image1}`}
                                  data-hover-src={
                                    product.product_hover_image
                                      ? `${imgUrl}/product/${product.product_hover_image}`
                                      : ""
                                  }
                                  alt={product.product_name}
                                  onMouseEnter={handleMouseEnter}
                                  onMouseLeave={handleMouseLeave}
                                />
                              </Link>
                              <div className="shop-meta">
                                <Link
                                  onClick={() => handleAddToCart(product, attr)}
                                  className="btn btn-secondary btn-md btn-rounded"
                                >
                                  <i className="fa-solid fa-eye d-md-none d-block"></i>
                                  <span className="d-md-block d-none">
                                    Add to cart
                                  </span>
                                </Link>

                                <div className="btn btn-primary meta-icon dz-wishicon">
                                  <i className="icon feather icon-heart dz-heart"></i>
                                  <i className="icon feather icon-heart-on dz-heart-fill"></i>
                                </div>
                                <div className="btn btn-primary meta-icon dz-carticon">
                                  <i className="flaticon flaticon-basket"></i>
                                  <i className="flaticon flaticon-basket-on dz-heart-fill"></i>
                                </div>
                              </div>
                            </div>

                            <div className="dz-content">
                              <h5 className="title">
                                <Link to={`/${categories[0].category_slug}/${product.product_slug}`}>
                                  {product.product_name}
                                </Link>
                              </h5>
                              <span className="price">
                                <span className="old">₹{attr.mrp_price}</span>
                                <span className="new">
                                  ₹{attr.selling_price}
                                </span>
                              </span>
                            </div>

                            <div className="product-tag">
                              <span className="badge">20% Off</span>
                              <span className="badge1">NEW</span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
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

export default WebsiteHomeFeaturedProducts;
