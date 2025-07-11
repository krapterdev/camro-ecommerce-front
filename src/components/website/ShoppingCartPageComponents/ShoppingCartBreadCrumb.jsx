import React from "react";
import { Link } from "react-router-dom";

const AboutUsComponent = () => {
  return (
    <>
      <div
        className="page-title"
        style={{
          backgroundImage:
            "url(https://mangatramonline.com/images/inner-1.png)",
        }}
      >
        <div className="container">
          <h3 className="heading text-left">Shopping Cart</h3>
          <ul className="breadcrumbs d-flex align-items-center justify-content-start">
            <li>
              <Link to="/" className="link">
                Home
              </Link>
            </li>
            <li>
              <i className="icon-arrRight"></i>
            </li>
            <li>Shopping Cart</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default AboutUsComponent;
