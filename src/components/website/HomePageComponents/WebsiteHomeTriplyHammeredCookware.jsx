// File: WebsiteHomeTriplyHammeredCookware.jsx
import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { CartContext } from "../../../context/CartContext";

const WebsiteHomeTriplyHammeredCookware = () => {
  // const [productData, setProductData] = useState({});
  // const [categories, setCategories] = useState([]);
  // const [activeTab, setActiveTab] = useState("");
  // const [loading, setLoading] = useState(true);
  // const [activeImages, setActiveImages] = useState({});

  // const { addToCart, removeFromCart, isInCart } = useContext(CartContext);

  // const mainProimgBaseURL = "http://127.0.0.1:8000/storage/media/product/";
  // const moreProimgBaseURL = "http://127.0.0.1:8000/storage/media/product/more/";

  // useEffect(() => {
  //   axios.get("http://127.0.0.1:8000/products").then((res) => {
  //     const data = res.data;
  //     const newProductData = {};
  //     const categoryList = [];

  //     data.forEach((category) => {
  //       const catName = category.category_name;
  //       const catUrl = category.category_slug;
  //       categoryList.push(catName);

  //       newProductData[catName] = category.products.map((product) => ({
  //         id: product.id,
  //         title: product.product_name,
  //         mainimg: product.product_image,
  //         categoryname: catUrl,
  //         slug:
  //           product.product_slug ||
  //           product.product_name.toLowerCase().replace(/\s+/g, "-"),
  //         price: product.attributes?.[0]?.net_price || 0,
  //         oldPrice: product.attributes?.[0]?.mrp_price || 0,
  //         moreimages: product.images.map((img) =>
  //           encodeURIComponent(img.img_name.trim())
  //         ),
  //       }));
  //     });

  //     setProductData(newProductData);
  //     setCategories(categoryList);
  //     setActiveTab(categoryList[0] || "");
  //     setLoading(false);
  //   });
  // }, []);

  // const handleTabChange = (category) => setActiveTab(category);
  // const handleHover = (productId, img) =>
  //   setActiveImages((prev) => ({ ...prev, [`hover_${productId}`]: img }));
  // const handleLeave = (productId) =>
  //   setActiveImages((prev) => {
  //     const updated = { ...prev };
  //     delete updated[`hover_${productId}`];
  //     return updated;
  //   });
  // const handleClick = (productId, img) =>
  //   setActiveImages((prev) => ({ ...prev, [productId]: img }));

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
              <div className="products row row-cols-lg-3 row-cols-md-4 row-cols-sm-3 row-cols-2">
                <div className="col">
                  <div className="product">
                    <div className="product-thumb">
                      <Link to="#" className="image">
                        <img
                          src="src/assets/website/images/hammered-cookware/1.png"
                          alt="Product Image"
                        />
                        <img
                          className="image-hover "
                          src="src/assets/website/images/hammered-cookware/1.png"
                          alt="Product Image"
                        />
                      </Link>
                    </div>
                    <div className="product-info">
                      <h6 className="title">
                        <Link to="#">
                          Triply Steller Hammered Inner Lid Pressure Cooker 2L
                        </Link>
                      </h6>
                      <span className="price">
                        <span className="old">₹ 4,500</span>
                        <span className="new">₹ 3,700</span>
                      </span>
                      <div className="product-buttons">
                        <Link
                          to="#quickViewModal"
                          data-bs-toggle="modal"
                          className="product-button hintT-top"
                          data-hint="Add to cart"
                        >
                          <i className="fas fa-search"></i>
                        </Link>
                        <Link
                          to="#"
                          className="product-button hintT-top"
                          data-hint="Add to Cart"
                        >
                          <i className="fas fa-shopping-cart"></i>
                        </Link>
                        <Link
                          to="#"
                          className="product-button hintT-top"
                          data-hint="Compare"
                        >
                          <i className="far fa-heart"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col">
                  <div className="product">
                    <div className="product-thumb">
                      <Link to="#" className="image">
                        <span className="product-badges">
                          <span className="onsale">15%</span>
                        </span>
                        <img
                          src="src/assets/website/images/hammered-cookware/2.png"
                          alt="Product Image"
                        />
                        <img
                          className="image-hover"
                          src="src/assets/website/images/hammered-cookware/2.png"
                          alt="Product Image"
                        />
                      </Link>
                    </div>
                    <div className="product-info">
                      <h6 className="title">
                        <Link to="#">
                          Triply Globus Hammered Inner Lid Pressure Cooker 2L
                        </Link>
                      </h6>
                      <span className="price">
                        <span className="old">₹3,100</span>
                        <span className="new">₹4,100</span>
                      </span>
                      <div className="product-buttons">
                        <Link
                          to="#quickViewModal"
                          data-bs-toggle="modal"
                          className="product-button hintT-top"
                          data-hint="Add to cart"
                        >
                          <i className="fas fa-search"></i>
                        </Link>
                        <Link
                          to="#"
                          className="product-button hintT-top"
                          data-hint="Add to Cart"
                        >
                          <i className="fas fa-shopping-cart"></i>
                        </Link>
                        <Link
                          to="#"
                          className="product-button hintT-top"
                          data-hint="Compare"
                        >
                          <i className="far fa-heart"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col">
                  <div className="product">
                    <div className="product-thumb">
                      <span className="product-badges">
                        <span className="hot">hot</span>
                      </span>
                      <Link to="#" className="image">
                        <img
                          src="src/assets/website/images/hammered-cookware/3.png"
                          alt="Product Image"
                        />
                        <img
                          className="image-hover"
                          src="src/assets/website/images/hammered-cookware/3.png"
                          alt="Product Image"
                        />
                      </Link>
                    </div>
                    <div className="product-info">
                      <h6 className="title">
                        <Link to="#">
                          Triply Butterfly Hammered Outer Lid Pressure Cooker
                          2.5L
                        </Link>
                      </h6>
                      <span className="price"> ₹3,650 </span>
                      <div className="product-buttons">
                        <Link
                          to="#quickViewModal"
                          data-bs-toggle="modal"
                          className="product-button hintT-top"
                          data-hint="Add to cart"
                        >
                          <i className="fas fa-search"></i>
                        </Link>
                        <Link
                          to="#"
                          className="product-button hintT-top"
                          data-hint="Add to Cart"
                        >
                          <i className="fas fa-shopping-cart"></i>
                        </Link>
                        <Link
                          to="#"
                          className="product-button hintT-top"
                          data-hint="Compare"
                        >
                          <i className="far fa-heart"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col">
                  <div className="product">
                    <div className="product-thumb">
                      <Link to="#" className="image">
                        <img
                          src="src/assets/website/images/hammered-cookware/4.png"
                          alt="Product Image"
                        />
                        <img
                          className="image-hover"
                          src="src/assets/website/images/hammered-cookware/4.png"
                          alt="Product Image"
                        />
                      </Link>
                    </div>
                    <div className="product-info">
                      <h6 className="title">
                        <Link to="#">
                          Triply Hammered Kadai with Lid in Box Packing 3.1L
                        </Link>
                      </h6>
                      <span className="price">
                        <span className="old">₹1640</span>
                        <span className="new">₹2640</span>
                      </span>
                      <div className="product-buttons">
                        <Link
                          to="#quickViewModal"
                          data-bs-toggle="modal"
                          className="product-button hintT-top"
                          data-hint="Add to cart"
                        >
                          <i className="fas fa-search"></i>
                        </Link>
                        <Link
                          to="#"
                          className="product-button hintT-top"
                          data-hint="Add to Cart"
                        >
                          <i className="fas fa-shopping-cart"></i>
                        </Link>
                        <Link
                          to="#"
                          className="product-button hintT-top"
                          data-hint="Compare"
                        >
                          <i className="far fa-heart"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="product">
                    <div className="product-thumb">
                      <Link to="#" className="image">
                        <img
                          src="src/assets/website/images/hammered-cookware/5.png"
                          alt="Product Image"
                        />
                        <img
                          className="image-hover"
                          src="src/assets/website/images/hammered-cookware/5.png"
                          alt="Product Image"
                        />
                      </Link>
                    </div>
                    <div className="product-info">
                      <h6 className="title">
                        <Link to="#">
                          Triply Hammered Tope/Patila with Lid in Box Packing
                          2.7L
                        </Link>
                      </h6>
                      <span className="price">
                        <span className="old">₹1100</span>
                        <span className="new">₹2100</span>
                      </span>
                      <div className="product-buttons">
                        <Link
                          to="#quickViewModal"
                          data-bs-toggle="modal"
                          className="product-button hintT-top"
                          data-hint="Add to cart"
                        >
                          <i className="fas fa-search"></i>
                        </Link>
                        <Link
                          to="#"
                          className="product-button hintT-top"
                          data-hint="Add to Cart"
                        >
                          <i className="fas fa-shopping-cart"></i>
                        </Link>
                        <Link
                          to="#"
                          className="product-button hintT-top"
                          data-hint="Compare"
                        >
                          <i className="far fa-heart"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="product">
                    <div className="product-thumb">
                      <Link to="#" className="image">
                        <img
                          src="src/assets/website/images/hammered-cookware/6.png"
                          alt="Product Image"
                        />
                        <img
                          className="image-hover"
                          src="src/assets/website/images/hammered-cookware/6.png"
                          alt="Product Image"
                        />
                      </Link>
                    </div>
                    <div className="product-info">
                      <h6 className="title">
                        <Link to="#">
                          Triply Hammered Inner Lid Pressure Cooker 2L
                        </Link>
                      </h6>
                      <span className="price">
                        <span className="old">₹45.00</span>
                        <span className="new">₹39.00</span>
                      </span>
                      <div className="product-buttons">
                        <Link
                          to="#quickViewModal"
                          data-bs-toggle="modal"
                          className="product-button hintT-top"
                          data-hint="Add to cart"
                        >
                          <i className="fas fa-search"></i>
                        </Link>
                        <Link
                          to="#"
                          className="product-button hintT-top"
                          data-hint="Add to Cart"
                        >
                          <i className="fas fa-shopping-cart"></i>
                        </Link>
                        <Link
                          to="#"
                          className="product-button hintT-top"
                          data-hint="Compare"
                        >
                          <i className="far fa-heart"></i>
                        </Link>
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

export default WebsiteHomeTriplyHammeredCookware;
