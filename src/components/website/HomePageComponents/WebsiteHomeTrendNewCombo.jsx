import React, { useState } from "react";
import Shape from "../../../assets/website/images/shape-1.png";

const WebsiteHomeTrendNewCombo = () => {
  const [activeTab, setActiveTab] = useState("TrendingProducts");

  const productData = {
    TrendingProducts: [
      {
        id: 105,
        title: "USA KABULI CHICK PEAS-500G",
        images: [
          "https://mangatramonline.com/products/chanadalunpolished_26_04_25_10_50_32_101339.jpeg",
          "https://mangatramonline.com/products/productimage_26_04_25_10_42_26_100843.jpeg",
          "https://mangatramonline.com/products/chanadalunpolished_26_04_25_10_50_32_101339.jpeg",
        ],
        price: 153,
        oldPrice: 170,
        slug: "usa-kabuli-chick-peas500g",
        wishlistId: 153,
      },
      {
        id: 115,
        title: "DEHULLED USA KABULI CHICK PEAS(FOR HUMUS)-500G",
        images: [
          "https://mangatramonline.com/products/chanadalunpolished_26_04_25_10_50_32_101339.jpeg",
          "https://mangatramonline.com/products/productimage_26_04_25_10_42_26_100843.jpeg",
          "https://mangatramonline.com/products/chanadalunpolished_26_04_25_10_50_32_101339.jpeg",
        ],
        price: 112,
        oldPrice: 125,
        slug: "dehulled-usa-kabuli-chick-peasfor-humus500g",
        wishlistId: 169,
      },
    ],
    NewArrivals: [],
    ComboPacks: [],
  };

  const categories = Object.keys(productData);

  const handleTabChange = (category) => setActiveTab(category);

  return (
    <section className="flat-spacing-3">
      <div className="container">
        <div className="flat-animate-tab">
          <ul className="tab-product justify-content-sm-center" role="tablist">
            {categories.map((cat) => (
              <li key={cat} className="nav-tab-item" role="presentation">
                <a
                  href={`#${cat}`}
                  className={activeTab === cat ? "active" : ""}
                  onClick={(e) => {
                    e.preventDefault();
                    handleTabChange(cat);
                  }}
                >
                  {cat}
                </a>
              </li>
            ))}
          </ul>

          <div className="tab-content">
            <div
              className="tab-pane active show"
              id={activeTab}
              role="tabpanel"
            >
              <div className="tf-grid-layout tf-col-2 lg-col-3 xl-col-4">
                {productData[activeTab].map((product) => (
                  <div
                    key={product.id}
                    className="card-product wow fadeInUp"
                    data-wow-delay="0.1s"
                    id={`product-${product.id}`}
                  >
                    <div className="card-product-wrapper">
                      <a
                        href={`/frontend_assets/TrendingProducts/${product.slug}`}
                        className="product-img"
                      >
                        <img
                          className="img-product"
                          src={product.images[0]}
                          alt={product.title}
                        />
                      </a>
                      <div className="on-sale-wrap">
                        <span className="on-sale-item">-10%</span>
                      </div>
                      <div className="list-product-btn">
                        <button
                          onClick={() =>
                            console.log("Add to wishlist", product.wishlistId)
                          }
                          className="box-icon wishlist btn-icon-action"
                        >
                          <span className="icon icon-heart"></span>
                          <span className="tooltip">Wishlist</span>
                        </button>

                        <button
                          onClick={() => console.log("Quick view", product.id)}
                          className="box-icon quickview tf-btn-loading d-xl-none"
                        >
                          <span className="icon icon-gitDiff1">
                            {/* SVG can stay as-is */}
                          </span>
                          <span className="tooltip">Compare</span>
                        </button>

                        <button
                          onClick={() => console.log("Quick View", product.id)}
                          className="box-icon quickview1 tf-btn-loading"
                        >
                          <span className="icon icon-eye"></span>
                          <span className="tooltip">Quick View</span>
                        </button>
                      </div>
                    </div>

                    <div className="card-product-info">
                      <ul className="list-color-product">
                        {product.images.map((img, index) => (
                          <li
                            key={index}
                            className={`list-color-item color-swatch ${
                              index === 0 ? "active line" : ""
                            }`}
                          >
                            <img src={img} alt={product.title} />
                          </li>
                        ))}
                      </ul>
                      <a href="#" className="title link">
                        {product.title}
                      </a>
                      <span className="price">
                        <div className="price_block">
                          ₹ {product.price}
                          <span className="price-mt">
                            <del className="old-price">
                              ₹ {product.oldPrice}
                            </del>
                          </span>
                        </div>
                      </span>
                      <div className="d-flex align-items-stretch flex-wrap gap-12">
                        <button
                          onClick={() => console.log("Add to cart", product.id)}
                          type="button"
                          className="addcart mints"
                          title="Add to Cart"
                        >
                          Add to Cart
                        </button>
                        <button
                          className="addcart bg-white1 d-none d-xl-block"
                          onClick={() =>
                            console.log("Wishlist", product.wishlistId)
                          }
                          title="Add to Wishlist"
                        >
                          <span className="icon icon-heart"></span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}

                {productData[activeTab].length === 0 && (
                  <p className="text-center w-100">No products available.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebsiteHomeTrendNewCombo;
