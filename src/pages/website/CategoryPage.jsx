import React from "react";
import { useParams } from "react-router-dom";
import CatgoryPageBreadcrumb from "../../components/website/WebsiteCategory/CatgoryPageBreadcrumb";
import CatgoryProduct from "../../components/website/WebsiteCategory/CatgoryProduct";

const CategoryPage = () => {
  const { category } = useParams();

  return (
    <>
      <CatgoryPageBreadcrumb />
      {/* <CatgoryProduct /> */}
    </>
  );
};

export default CategoryPage;
