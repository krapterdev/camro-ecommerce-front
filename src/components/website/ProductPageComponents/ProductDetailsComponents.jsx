import React, { useState, useContext } from "react";
import ProductQtyInput from "../ProductQtyInput";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import { useQuantity } from "../../../context/QuantityContext";
import { Swiper } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { useSize } from "../../../context/SizeContext";

const ProductDetailsComponents = ({ productData }) => {
  const webURL = import.meta.env.VITE_WEBSITE_APP_API_BASE_URL;
  const imgUrl = import.meta.env.VITE_REACT_APP_STORAGE_URL;

  const { addToCart } = useContext(CartContext);
  
  const { qty } = useQuantity();
  const [selectedAttrId, setSelectedAttrId] = useState(
    productData.product_attrs[0]?.id
  );
  const { sizeAttrId, setSizeAttrId } = useSize();
  const selectedAttr = productData.product_attrs.find(
    (attr) => attr.id === sizeAttrId
  );

  const handleAddToCart = () => {
    if (!selectedAttr) return;

    const cartPayload = {
      id: productData.id,
      attr_id: selectedAttr.id,
      name: productData.product_name,
      slug: productData.product_slug,
      image: productData.product_image1,
      size: selectedAttr.size,
      size_type: selectedAttr.size_type,
      weight: selectedAttr.weight,
      weight_type: selectedAttr.weight_type,
      price: selectedAttr.selling_price,
      hsncode: selectedAttr.hsncode,
    };

    addToCart(cartPayload, qty);
  };

  return (
    <>
      <section className="content-inner7">
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-md-5">
              <div className="dz-product-detail sticky-top">
                <div className="swiper-btn-center-lr">
                  <div className="swiper product-gallery-swiper2">
                    <div className="swiper-wrapper" id="lightgallery">
                      <div className="swiper-slide">
                        <div className="dz-media DZoomImage rounded">
                          <Link
                            className="mfp-link lg-item"
                            to={`${imgUrl}/product/${productData.product_image1}`}
                            data-src={`${imgUrl}/product/${productData.product_image1}`}
                          >
                            <i className="feather icon-maximize dz-maximize top-right"></i>
                          </Link>
                          <img
                            src={`${imgUrl}/product/${productData.product_image1}`}
                            alt={productData.product_name}
                          />
                        </div>
                      </div>

                      <div className="swiper-slide">
                        <div className="dz-media DZoomImage rounded">
                          <Link
                            className="mfp-link lg-item"
                            to={`${imgUrl}/product/${productData.product_image2}`}
                            data-src={`${imgUrl}/product/${productData.product_image2}`}
                          >
                            <i className="feather icon-maximize dz-maximize top-right"></i>
                          </Link>
                          <img
                            src={`${imgUrl}/product/${productData.product_image2}`}
                            alt={productData.product_name}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper product-gallery-swiper thumb-swiper-lg swiper-vertical">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <img
                          src={`${imgUrl}/product/${productData.product_image2}`}
                          alt={productData.product_name}
                        />
                      </div>
                      <div className="swiper-slide">
                        <img
                          src={`${imgUrl}/product/${productData.product_image2}`}
                          alt={productData.product_name}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-7 col-md-7">
              <div className="dz-product-detail style-2">
                <div className="dz-content">
                  <div className="dz-content-footer">
                    <div className="dz-content-start">
                      <span className="badge bg-purple mb-2">
                        SALE{" "}
                        {Math.floor(parseFloat(selectedAttr?.discount || "0"))}%
                        Off
                      </span>
                      <h4 className="title mb-1">{productData.product_name}</h4>
                    </div>
                  </div>
                  <p
                    className="para-text"
                    dangerouslySetInnerHTML={{
                      __html: productData.product_desc,
                    }}
                  />

                  <div className="meta-content m-b20">
                    <span className="price-name">INR</span>
                    <span className="price2">
                      ₹ {selectedAttr?.selling_price}
                      <del>₹ {selectedAttr?.mrp_price}</del>
                    </span>
                  </div>
                  <div className="product-num gap-md-2 gap-xl-0">
                    <div className="btn-quantity1 light">
                      <label className="form-label">Quantity</label>

                      <div>
                        <ProductQtyInput attr_id={selectedAttr?.id} />
                      </div>
                    </div>
                    <div className="d-block">
                      <label className="form-label">Size</label>
                      <div className="btn-group product-size m-0">
                        {productData.product_attrs.map((attr) => (
                          <React.Fragment key={attr.id}>
                            <input
                              type="radio"
                              className="btn-check"
                              name="btnradio1"
                              id={`attr-${attr.id}`}
                              checked={sizeAttrId === attr.id}
                              onChange={() => setSizeAttrId(attr.id)}
                            />
                            <label className="btn" htmlFor={`attr-${attr.id}`}>
                               {attr.weight} {attr.weight_type}
                            </label>
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="btn-group cart-btn">
                    <Link
                      to="#"
                      className="btn btn-secondary bg-red2 text-uppercase"
                      onClick={handleAddToCart}
                    >
                      Buy Now
                    </Link>
                    <Link
                      to="#"
                      className="btn btn-outline-secondary bg-black2 btn-icon"
                      onClick={handleAddToCart}
                    >
                      <i className="icon feather icon-heart"></i>
                      Add To Cart
                    </Link>
                  </div>
                  <div className="dz-info">
                    <ul>
                      <li>
                        <strong>SKU:</strong>
                      </li>
                      <li>{selectedAttr?.hsncode}</li>
                    </ul>

                    <ul className="social-icon">
                      <li>
                        <strong>Share:</strong>
                      </li>
                      <li>
                        <Link
                          to="https://www.facebook.com/dexignzone"
                          target="_blank"
                        >
                          <i className="fa-brands fa-facebook-f"></i>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="https://www.linkedin.com/showcase/3686700/admin/"
                          target="_blank"
                        >
                          <i className="fa-brands fa-linkedin-in"></i>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="https://www.instagram.com/dexignzone/"
                          target="_blank"
                        >
                          <i className="fa-brands fa-instagram"></i>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="https://twitter.com/dexignzones"
                          target="_blank"
                        >
                          <i className="fa-brands fa-twitter"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <ul className="d-md-flex d-none align-items-center">
                    <li className="icon-bx-wraper style-3 me-xl-4 me-2">
                      <div className="icon-bx">
                        <i className="flaticon flaticon-ship"></i>
                      </div>
                      <div className="info-content">
                        <span>FREE</span>
                        <h6 className="dz-title mb-0">Shipping</h6>
                      </div>
                    </li>
                    <li className="icon-bx-wraper style-3">
                      <div className="icon-bx">
                        <i className="flaticon-fast-delivery-1"></i>
                      </div>
                      <div className="info-content">
                        <span>Fast</span>
                        <h6 className="dz-title mb-0"> Delivery</h6>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="banner-social-media">
                  <ul>
                    <li>
                      <Link to="https://www.instagram.com/dexignzone/">
                        Instagram
                      </Link>
                    </li>
                    <li>
                      <Link to="https://www.facebook.com/dexignzone">
                        Facebook
                      </Link>
                    </li>
                    <li>
                      <Link to="https://twitter.com/dexignzones">twitter</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetailsComponents;
