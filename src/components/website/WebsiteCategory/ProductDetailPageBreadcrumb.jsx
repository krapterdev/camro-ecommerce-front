import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetailPageBreadcrumb = () => {
  const { category, slug } = useParams();

  return (
    <div>
      <h4>
        {category.toUpperCase()} : {slug.replace("-", " ").toUpperCase()}
      </h4>
    </div>
  );
};

export default ProductDetailPageBreadcrumb;
