import React, { useEffect, useState, useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import axios from "axios";
import MainPoster7 from "../../../assets/website/images/main-poster-7.png";
import { CartContext } from "../../../context/cartContext";

const SavorTheDifferenceSlider = () => {
  const [products, setProducts] = useState([]);
  const [activeImages, setActiveImages] = useState({});
  const { addToCart, removeFromCart, isInCart } = useContext(CartContext);

  const mainProimgBaseURL = "http://127.0.0.1:8000/storage/media/product/";
  const moreProimgBaseURL = "http://127.0.0.1:8000/storage/media/product/more/";

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/productsissavor").then((res) => {
      const allProducts = [];

      res.data.forEach((category) => {
        category.products.forEach((product) => {
          allProducts.push({
            id: product.id,
            title: product.product_name,
            slug: product.product_slug,
            wishlistId: product.id,
            price: parseFloat(product.attributes?.[0]?.net_price || 0),
            oldPrice: parseFloat(product.attributes?.[0]?.mrp_price || 0),
            images: [
              product.product_image?.trim() || "",
              ...product.images.map((img) => img.img_name?.trim() || ""),
            ],
            categoryname: category.category_slug,
            mainimg: product.product_image?.trim() || "",
          });
        });
      });

      setProducts(allProducts);
    });
  }, []);

  const handleHover = (productId, imgName) => {
    setActiveImages((prev) => ({ ...prev, [`hover_${productId}`]: imgName }));
  };

  const handleLeave = (productId) => {
    setActiveImages((prev) => {
      const updated = { ...prev };
      delete updated[`hover_${productId}`];
      return updated;
    });
  };

  const handleClick = (productId, imgName) => {
    setActiveImages((prev) => ({ ...prev, [productId]: imgName }));
  };

  return (
    <section className="mjb">
      <div className="container">
        <div className="row flat-img-with-text-v3">
          <div className="col-lg-6 col-md-7">
            <div className="banner-right">
              <div className="box-title position-relative">
                <span className="sub-head">Mangat Ram Pulses</span>
                <h3 className="title wow fadeInUp enster">Savor the Difference</h3>
                <div className="set">
                  <p className="desc text-secondary wow fadeInUp">
                    Discover the finest pulses with unique flavors and exceptional quality to elevate your meals.
                  </p>
                </div>
              </div>

              {products.length > 0 ? (
                <Swiper modules={[Navigation, Pagination]} spaceBetween={30} slidesPerView={2} className="tf-product-header">
                  {products.map((item, index) => {
                    const currentHover = activeImages[`hover_${item.id}`];
                    const currentSelected = activeImages[item.id];
                    const finalImageName = currentHover || currentSelected || item.images[0];
                    const isMainImage = finalImageName === item.images[0];
                    const finalImageURL = `${isMainImage ? mainProimgBaseURL : moreProimgBaseURL}${finalImageName}`;

                    return (
                      <SwiperSlide key={index}>
                        <div className="card-product wow fadeInUp">
                          <div className="card-product-wrapper">
                            <a href={`https://mangatramonline.com/pulses/${item.slug}`} className="product-img">
                              <img
                                className="img-product lazyloaded"
                                src={finalImageURL}
                                alt={item.title}
                                onError={(e) => (e.target.src = "/placeholder.png")}
                              />
                            </a>
                            <div className="on-sale-wrap">
                              <span className="on-sale-item">
                                {Math.round(((item.oldPrice - item.price) / item.oldPrice) * 100)}%
                              </span>
                            </div>
                            <div className="list-product-btn">
                              <a onClick={() => console.log("Wishlist ID:", item.wishlistId)} href="#" className="box-icon wishlist btn-icon-action">
                                <span className="icon icon-heart"></span>
                                <span className="tooltip">Wishlist</span>
                              </a>
                              <a href="#quickView" onClick={() => console.log("Get Product ID:", item.id)} className="box-icon quickview tf-btn-loading d-xl-none">
                                <span className="icon icon-eye"></span>
                                <span className="tooltip">Quick View</span>
                              </a>
                            </div>
                          </div>

                          <div className="card-product-info">
                            <ul className="list-color-product">
                              {item.images.map((img, i) => {
                                const isMain = i === 0;
                                const url = `${isMain ? mainProimgBaseURL : moreProimgBaseURL}${img}`;
                                return (
                                  <li
                                    key={i}
                                    className={`list-color-item color-swatch ${isMain ? "line" : i === 1 ? "active" : ""}`}
                                    onMouseEnter={() => handleHover(item.id, img)}
                                    onMouseLeave={() => handleLeave(item.id)}
                                    onClick={() => handleClick(item.id, img)}
                                  >
                                    <img
                                      className="lazyloaded"
                                      src={url}
                                      alt="image-product"
                                      onError={(e) => (e.target.src = "/placeholder.png")}
                                    />
                                  </li>
                                );
                              })}
                            </ul>

                            <a href="#" className="title link">{item.title}</a>

                            <span className="price">
                              <div className="price_block">
                                ₹ {item.price.toFixed(2)}
                                <span className="price-mt">
                                  <del className="old-price">₹ {item.oldPrice.toFixed(2)}</del>
                                </span>
                              </div>
                            </span>

                            <div className="d-flex align-items-stretch flex-wrap gap-12">
                              {isInCart(item.id) ? (
                                <button type="button" className="addcart mints" onClick={() => removeFromCart(item.id)}>
                                  Remove from Cart
                                </button>
                              ) : (
                                <button
                                  type="button"
                                  className="addcart mints"
                                  onClick={() =>
                                    addToCart({
                                      id: item.id,
                                      title: item.title,
                                      mainimg: item.images[0],
                                      slug: item.slug,
                                      categoryname: item.categoryname,
                                      price: item.price,
                                    })
                                  }
                                >
                                  Add to Cart
                                </button>
                              )}
                              <button onClick={() => console.log("Wishlist ID:", item.wishlistId)} className="addcart bg-white1 d-none d-xl-block">
                                <span className="icon icon-heart"></span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              ) : (
                <p className="text-center fw-bold text-secondary py-5">No products available.</p>
              )}
            </div>
          </div>

          <div className="col-lg-6 col-md-5">
            <div className="banner-left">
              <div className="collection-position style-lg hover-img">
                <a href="https://mangatramonline.com/pulses" className="img-style">
                  <img className="d-none d-xl-block lazyloaded" src={MainPoster7} alt="banner" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SavorTheDifferenceSlider;