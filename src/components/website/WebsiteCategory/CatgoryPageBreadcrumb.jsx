import React from "react";
import { useParams } from "react-router-dom";

const CategoryPageBreadcrumb = () => {
  const { category } = useParams();

  const formattedCategory = category
    ? category.toUpperCase().replace(/-/g, " ")
    : "";

  return (
    <div
      className="page-title"
      style={{
        backgroundImage: "url(https://mangatramonline.com/images/inner-1.png)",
      }}
    >
      <div className="container">
        <h3 className="heading text-left">{formattedCategory}</h3>
        <ul className="breadcrumbs d-flex align-items-center justify-content-start">
          <li>
            <a className="link" href="https://mangatramonline.com/">
              Home
            </a>
          </li>
          <li>
            <i className="icon-arrRight"></i>
          </li>
          <li>{formattedCategory}</li>
        </ul>
      </div>
    </div>
  );
};

export default CategoryPageBreadcrumb;
