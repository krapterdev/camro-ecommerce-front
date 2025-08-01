import React, { useState } from "react";
import ProductQtyInput from "../ProductQtyInput";
import { Link } from "react-router-dom";
import { useCart } from "../../../context/CartContext"; // ✅ FIXED
import { useSize } from "../../../context/SizeContext";

const ProductDetailsComponents = ({ productData }) => {
  const imgUrl = import.meta.env.VITE_REACT_APP_STORAGE_URL;
  const { addToCart } = useCart(); // ✅ FIXED

  const [qty, setQty] = useState(1);
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
    <section className="content-inner7">
      <div className="container">
        <div className="row">
          {/* Product Images */}
          <div className="col-xl-5 col-md-5">
            <div className="dz-product-detail sticky-top">
              <div className="swiper product-gallery-swiper2">
                <div className="swiper-wrapper" id="lightgallery">
                  {[productData.product_image1, productData.product_image2].map((img, idx) => (
                    <div className="swiper-slide" key={idx}>
                      <div className="dz-media DZoomImage rounded">
                        <Link
                          className="mfp-link lg-item"
                          to={`${imgUrl}/product/${img}`}
                          data-src={`${imgUrl}/product/${img}`}
                        >
                          <i className="feather icon-maximize dz-maximize top-right"></i>
                        </Link>
                        <img src={`${imgUrl}/product/${img}`} alt={productData.product_name} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Thumbnails */}
              <div className="swiper thumb-swiper-lg swiper-vertical">
                <div className="swiper-wrapper">
                  {[productData.product_image1, productData.product_image2].map((img, idx) => (
                    <div className="swiper-slide" key={idx}>
                      <img src={`${imgUrl}/product/${img}`} alt={productData.product_name} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="col-xl-7 col-md-7">
            <div className="dz-product-detail style-2">
              <div className="dz-content">
                <div className="dz-content-footer">
                  <div className="dz-content-start">
                    <span className="badge bg-purple mb-2">
                      SALE {Math.floor(parseFloat(selectedAttr?.discount || "0"))}% Off
                    </span>
                    <h4 className="title mb-1">{productData.product_name}</h4>
                  </div>
                </div>

                <p
                  className="para-text"
                  dangerouslySetInnerHTML={{ __html: productData.product_desc }}
                />

                {/* Price */}
                <div className="meta-content m-b20">
                  <span className="price-name">INR</span>
                  <span className="price2">
                    ₹ {selectedAttr?.selling_price}
                    <del>₹ {selectedAttr?.mrp_price}</del>
                  </span>
                </div>

                {/* Quantity and Size */}
                <div className="product-num gap-md-2 gap-xl-0">
                  <div className="btn-quantity1 light">
                    <label className="form-label">Quantity</label>
                    <ProductQtyInput qty={qty} setQty={setQty} />
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

                {/* Buttons */}
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

                {/* SKU and Social */}
                <div className="dz-info">
                  <ul>
                    <li><strong>SKU:</strong></li>
                    <li>{selectedAttr?.hsncode}</li>
                  </ul>
                  <ul className="social-icon">
                    <li><strong>Share:</strong></li>
                    <li><Link to="https://www.facebook.com/dexignzone" target="_blank"><i className="fa-brands fa-facebook-f"></i></Link></li>
                    <li><Link to="https://www.linkedin.com/showcase/3686700/admin/" target="_blank"><i className="fa-brands fa-linkedin-in"></i></Link></li>
                    <li><Link to="https://www.instagram.com/dexignzone/" target="_blank"><i className="fa-brands fa-instagram"></i></Link></li>
                    <li><Link to="https://twitter.com/dexignzones" target="_blank"><i className="fa-brands fa-twitter"></i></Link></li>
                  </ul>
                </div>

                {/* Delivery Icons */}
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

              {/* Footer Social */}
              <div className="banner-social-media">
                <ul>
                  <li><Link to="https://www.instagram.com/dexignzone/">Instagram</Link></li>
                  <li><Link to="https://www.facebook.com/dexignzone">Facebook</Link></li>
                  <li><Link to="https://twitter.com/dexignzones">Twitter</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsComponents;
