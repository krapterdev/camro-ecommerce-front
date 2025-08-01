import React, { useState, useContext, useEffect } from "react";
import ProductQtyInput from "../ProductQtyInput";
import { useSize } from "../../../context/SizeContext";
import { useQuantity } from "../../../context/QuantityContext";
import { useCart } from "../../../context/CartContext";
import { Link } from "react-router-dom";

const ProductBottomDetailsComponents = ({ productData }) => {
  const imgUrl = import.meta.env.VITE_REACT_APP_STORAGE_URL;
  const { qty } = useQuantity();
  const { sizeAttrId, setSizeAttrId } = useSize();
  const { addToCart } = useCart();

  const selectedAttr = productData.product_attrs.find(
    (attr) => attr.id === sizeAttrId
  );

  useEffect(() => {
    if (productData.product_attrs?.length) {
      setSizeAttrId(productData.product_attrs[0]?.id);
    }
  }, [productData]);

  const handleAddToCart = () => {
    const selected = productData.product_attrs.find(
      (attr) => attr.id === sizeAttrId
    );
    if (!selected) return;

    const cartPayload = {
      id: productData.id,
      attr_id: selected.id,
      name: productData.product_name,
      slug: productData.product_slug,
      image: productData.product_image1,
      size: selected.size,
      size_type: selected.size_type,
      weight: selected.weight,
      weight_type: selected.weight_type,
      price: selected.selling_price,
      hsncode: selected.hsncode,
      product_desc: selected.product_desc,
    };

    addToCart(cartPayload, qty);
  };

  return (
    <>
      <section className="content-inner123">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="fixed-shop-card">
                <img
                  src={`${imgUrl}/product/${productData.product_image1}`}
                  alt={productData.product_name}
                />
                <h3>{productData.product_name}</h3>
              </div>
            </div>

            <div className="col-md-6">
              <div className="d-flex align-items-center gap-3">
                <ProductQtyInput attr_id={sizeAttrId} />

                <select
                  className="default-select1"
                  value={sizeAttrId || ""}
                  onChange={(e) => setSizeAttrId(parseInt(e.target.value))}
                >
                  <option value="">Capacity</option>
                  {productData.product_attrs.map((attr) => (
                    <option key={attr.id} value={attr.id}>
                      {attr.weight} {attr.weight_type}
                    </option>
                  ))}
                </select>

                <Link
                  onClick={handleAddToCart}
                  className="btn btn-outline-secondary bg-black2 btn-icon bg-light br-60"
                >
                  <i className="icon feather icon-heart"></i>Add To Cart
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductBottomDetailsComponents;
