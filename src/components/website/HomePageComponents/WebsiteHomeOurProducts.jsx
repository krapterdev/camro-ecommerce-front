// File: WebsiteHomeOurProducts.jsx
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { CartContext } from "../../../context/cartContext"; 

const WebsiteHomeOurProducts = () => {
  const [productData, setProductData] = useState({});
  const [categories, setCategories] = useState([]);
  const [activeTab, setActiveTab] = useState("");
  const [loading, setLoading] = useState(true);
  const [activeImages, setActiveImages] = useState({});

  const { addToCart, removeFromCart, isInCart } = useContext(CartContext);

  const mainProimgBaseURL = "http://127.0.0.1:8000/storage/media/product/";
  const moreProimgBaseURL = "http://127.0.0.1:8000/storage/media/product/more/";

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/products").then((res) => {
      const data = res.data;
      const newProductData = {};
      const categoryList = [];

      data.forEach((category) => {
        const catName = category.category_name;
        const catUrl = category.category_slug;
        categoryList.push(catName);

        newProductData[catName] = category.products.map((product) => ({
          id: product.id,
          title: product.product_name,
          mainimg: product.product_image,
          categoryname: catUrl,
          slug:
            product.product_slug ||
            product.product_name.toLowerCase().replace(/\s+/g, "-"),
          price: product.attributes?.[0]?.net_price || 0,
          oldPrice: product.attributes?.[0]?.mrp_price || 0,
          moreimages: product.images.map((img) =>
            encodeURIComponent(img.img_name.trim())
          ),
        }));
      });

      setProductData(newProductData);
      setCategories(categoryList);
      setActiveTab(categoryList[0] || "");
      setLoading(false);
    });
  }, []);

  const handleTabChange = (category) => setActiveTab(category);
  const handleHover = (productId, img) =>
    setActiveImages((prev) => ({ ...prev, [`hover_${productId}`]: img }));
  const handleLeave = (productId) =>
    setActiveImages((prev) => {
      const updated = { ...prev };
      delete updated[`hover_${productId}`];
      return updated;
    });
  const handleClick = (productId, img) =>
    setActiveImages((prev) => ({ ...prev, [productId]: img }));

  return (
    <section className="flat-spacing-3">
      <div className="container">
        <div className="flat-animate-tab">
          <div className="text-center insight-title has-bg has-line text-uppercase font-primary font-40 ofw-900 ofs-normal">
            <h2 className="main-title">Our Products</h2>
            <div className="sub-title primary-color">Featured Products</div>
          </div>

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
            {loading ? (
              <div className="text-center my-5">
                <div className="spinner-border text-primary" role="status" />
                <p>Loading products...</p>
              </div>
            ) : (
              <div className="tab-pane active show" id={activeTab} role="tabpanel">
                <div className="tf-grid-layout tf-col-2 lg-col-3 xl-col-4">
                  {(productData[activeTab] || []).map((product) => {
                    const mainImageURL = `${mainProimgBaseURL}${encodeURIComponent(
                      product.mainimg.trim()
                    )}`;
                    const currentHover = activeImages[`hover_${product.id}`];
                    const currentSelected = activeImages[product.id];
                    const finalImage = currentHover
                      ? `${moreProimgBaseURL}${currentHover}`
                      : currentSelected
                      ? `${moreProimgBaseURL}${currentSelected}`
                      : mainImageURL;

                    return (
                      <div key={product.id} className="card-product wow fadeInUp">
                        <div className="card-product-wrapper">
                          <a
                            href={`/${product.categoryname}/${product.slug}`}
                            className="product-img"
                          >
                            <img
                              className="img-product"
                              src={finalImage}
                              alt={product.title}
                              onError={(e) => (e.target.src = "/placeholder.png")}
                            />
                          </a>
                          <div className="on-sale-wrap">
                            <span className="on-sale-item">-10%</span>
                          </div>
                        </div>

                        <div className="card-product-info">
                          <ul className="list-color-product">
                            <li
                              className="list-color-item color-swatch active line"
                              onMouseEnter={() => handleHover(product.id, null)}
                              onMouseLeave={() => handleLeave(product.id)}
                              onClick={() => handleClick(product.id, null)}
                            >
                              <img
                                src={mainImageURL}
                                alt="main"
                                onError={(e) => (e.target.src = "/placeholder.png")}
                              />
                            </li>
                            {product.moreimages.slice(0, 4).map((img, index) => (
                              <li
                                key={index}
                                className="list-color-item color-swatch"
                                onMouseEnter={() => handleHover(product.id, img)}
                                onMouseLeave={() => handleLeave(product.id)}
                                onClick={() => handleClick(product.id, img)}
                              >
                                <img
                                  src={`${moreProimgBaseURL}${img}`}
                                  alt={`alt-${index}`}
                                  onError={(e) => (e.target.src = "/placeholder.png")}
                                />
                              </li>
                            ))}
                          </ul>

                          <a
                            href={`/${product.categoryname}/${product.slug}`}
                            className="title link"
                          >
                            {product.title}
                          </a>

                          <span className="price">
                            <div className="price_block">
                              ₹ {product.price}
                              <span className="price-mt">
                                <del className="old-price">₹ {product.oldPrice}</del>
                              </span>
                            </div>
                          </span>

                          <div className="d-flex align-items-stretch flex-wrap gap-12">
                            {isInCart(product.id) ? (
                              <button
                                type="button"
                                className="addcart mints"
                                onClick={() => removeFromCart(product.id)}
                              >
                                Remove from Cart
                              </button>
                            ) : (
                              <button
                                type="button"
                                className="addcart mints"
                                onClick={() =>
                                  addToCart({
                                    id: product.id,
                                    title: product.title,
                                    mainimg: product.mainimg,
                                    slug: product.slug,
                                    categoryname: product.categoryname,
                                    price: product.price,
                                  })
                                }
                              >
                                Add to Cart
                              </button>
                            )}
                            <button className="addcart bg-white1 d-none d-xl-block">
                              <span className="icon icon-heart" />
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                  {(productData[activeTab] || []).length === 0 && (
                    <p className="text-center w-100">No products available.</p>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebsiteHomeOurProducts;