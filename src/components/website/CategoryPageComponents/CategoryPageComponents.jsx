import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ProductSideMenuPageComponents from "../ProductPageComponents/ProductSideMenuPageComponents";
import { CartContext } from "../../../context/CartContext";

const CategoryPageComponents = ({ category_id, category_slug }) => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);

  const webURL = import.meta.env.VITE_WEBSITE_APP_API_BASE_URL;
  const imgUrl = import.meta.env.VITE_REACT_APP_STORAGE_URL;

  useEffect(() => {
    if (category_id) {
      axios
        .get(`${webURL}/productbycatid/${category_id}`)
        .then((res) => {
          setProducts(res.data || []);
        })
        .catch((err) => {
          console.error("Failed to load category products", err);
        });
    }
  }, [category_id]);

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
    <section className="content-inner-6">
      <div className="container-fluid">
        <div className="row">
          <ProductSideMenuPageComponents />
          <div className="col-80 col-xl-9">
            <div className="row gx-xl-4 g-3">
              {products.length > 0 ? (
                products.map((product, index) => (
                  <div className="col-6 col-md-4 col-sm-6" key={index}>
                    <div className="shop-card">
                      <div className="dz-media">
                        <Link to={`/${category_slug}/${product.product_slug}`}>
                          <img
                            src={`${imgUrl}/product/${product.product_image1}`}
                            alt={product.product_name}
                          />
                        </Link>
                        <div className="shop-meta">
                          {/* <Link
                            className="btn btn-secondary btn-md btn-rounded"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            <i className="fa-solid fa-eye d-md-none d-block"></i>
                            <span className="d-md-block d-none">
                              Add to cart
                            </span>
                          </Link> */}

                          <Link
                            className="btn btn-secondary btn-md btn-rounded"
                            onClick={(e) => {
                              e.preventDefault();
                              const attr = product.product_attrs?.[0];
                              handleAddToCart(product, attr);
                            }}
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
                          <Link
                            to={`/${category_slug}/${product.product_slug}`}
                          >
                            {product.product_name}
                            {/* {" | "}
                            {product.product_attrs[0].size
                              .charAt(0)
                              .toUpperCase() +
                              product.product_attrs[0].size.slice(1)}
                            {product.product_attrs[0].size_type
                              .charAt(0)
                              .toUpperCase() +
                              product.product_attrs[0].size_type.slice(1)}
                            {" | "}
                            {product.product_attrs[0].weight
                              .charAt(0)
                              .toUpperCase() +
                              product.product_attrs[0].weight.slice(1)}
                            {product.product_attrs[0].weight_type
                              .charAt(0)
                              .toUpperCase() +
                              product.product_attrs[0].weight_type.slice(1)} */}
                          </Link>
                        </h5>
                        <span className="price">
                          <span className="old">₹
                            {Math.floor(
                              parseFloat(product.product_attrs[0].mrp_price)
                            )}
                          </span>
                          <span className="new">
                            ₹
                            {Math.floor(
                              parseFloat(product.product_attrs[0].selling_price)
                            )}
                          </span>
                        </span>
                      </div>
                      <div className="product-tag">
                        {product.product_attrs[0].discount && (
                          <span className="badge1">
                            {Math.floor(
                              parseFloat(product.product_attrs[0].discount)
                            )}
                            % Off
                          </span>
                        )}
                        {/* <span className="badge1">NEW</span> */}
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-12 text-center py-4">
                  <h6 className="text-muted">
                    No products found for this category.
                  </h6>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryPageComponents;
