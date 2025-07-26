import React from "react";
import ProductDesReviewComponents from "./ProductDesReviewComponents";
import ProductDetailsComponents from "./ProductDetailsComponents";
import ProductBottomDetailsComponents from "./ProductBottomDetailsComponents";

function ProductDetailPageComponents({ productData }) {
  return (
    <>
      <ProductDetailsComponents productData={productData} />

      <ProductDesReviewComponents productData={productData} />

      <ProductBottomDetailsComponents productData={productData} />
    </>
  );
}


export default ProductDetailPageComponents;
