import { Link } from "react-router-dom";

import React, { useEffect, useState } from "react";

import logo from "../../../assets/common/logo.png";
import bannerimg from "../../../assets/website/images/featurebanner-1.webp";

import FooterImg from "../../../assets/website/images/footer-img.png";
import FooterWebmartImg from "../../../assets/website/images/webmartindia.png";

const Footer = () => {
  // const [Footercategories, setFooterCategories] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:8000/categories")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setFooterCategories(data);
  //     })
  //     .catch((err) => {
  //       console.error("Error fetching categories:", err);
  //     });
  // }, []);

  return (
    <>
      {/* <ul className="footer-menu-list">
            {Footercategories.length > 0 ? (
              Footercategories.slice(0, 4).map((fcat) => (
                <li key={fcat.id} className="text-caption-1">
                  <Link
                    to={fcat.category_slug}
                    className="footer-menu_item"
                  >
                    {fcat.category_name}
                  </Link>
                </li>
              ))
            ) : (
              <li className="text-caption-1">
                <p className="footer-menu_item">
                  No Categories
                </p>
              </li>
            )}
          </ul> */}

      <footer
        className="site-footer style-1 footer-dark overlay-black-middle"
        style={{
          backgroundImage: `url(${bannerimg})`,
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
        }}
      >
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-md-4 col-sm-6">
                <div className="widget widget_about me-2">
                  <div className="footer-logo logo-white">
                    <Link to={"/"}>
                      <img src={logo} alt="" />
                    </Link>
                  </div>
                  <ul className="nav-inline">
                    <li>
                      <a
                        href="https://www.facebook.com/CamroSteels/"
                        target="_blank"
                        className="site-button-link facebook hover"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>

                    <li>
                      <a
                        href="https://www.linkedin.com/company/camro-steels"
                        target="_blank"
                        className="site-button-link linkedin hover"
                      >
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/triplycookware/"
                        target="_blank"
                        className="site-button-link instagram hover"
                      >
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://x.com/CamroSteels"
                        target="_blank"
                        className="site-button-link twitter hover"
                      >
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-xl-2 col-md-2 col-sm-4 col-6">
                <div className="widget widget_services">
                  <h5 className="footer-title">Quick Links</h5>
                  <ul>
                    <li>
                      <Link to="/about" title="About Us">
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link to="/login" title="Login / Register">
                        Login / Register
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/TermsConditions"
                        title="Terms &amp; Conditions"
                      >
                        Terms &amp; Conditions
                      </Link>
                    </li>
                    <li>
                      <Link to="/PrivacyPolicy" title="Privacy Policy">
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link to="/contact" title="Contact Us">
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-4 col-md-4 col-sm-4 col-6">
                <div className="widget widget_services">
                  <h5 className="footer-title">Shop by Type</h5>
                  <ul>
                    <li>
                      <Link to="#">
                        Triply Steller Hammered Inner Lid Pressure Cooker
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        Triply Steller Inner Lid Pressure Cooker
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        Triply Hammered Kadai with Lid in Box Packing
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        Triply Steller Inner Lid Pressure Cooker
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        Triply Steller Inner Lid Pressure Cooker
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        Triply Steller Hammered Inner Lid Pressure Cooker
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-md-4 col-sm-6">
                <div className="widget widget_about me-2">
                  <h5 className="footer-title">Contact Us</h5>
                  <ul className="widget-address">
                    <li>
                      <p>
                        <span>Address</span> : C-60/2, Wazirpur Industrial Area
                        Road, Wazirpur Industrial Area, North West, New
                        Delhi-110052, Delhi, India
                      </p>
                    </li>
                    <li>
                      <p>
                        <span>E-mail</span> : camrosteels@gmail.com
                      </p>
                    </li>
                    <li>
                      <p>
                        <span>Toll Free </span> : 18008891401
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row fb-inner">
              <div className="col-lg-6 col-md-12 text-start">
                <p className="copyright-text">
                  © 2025 CAMRO. All Rights Reserved
                  <Link to="http://webmartindia.in/" target="_blank">
                    <img src={FooterWebmartImg} />
                  </Link>
                </p>
              </div>
              <div className="col-lg-6 col-md-12 text-end">
                <div className="d-flex align-items-center justify-content-center justify-content-md-center justify-content-xl-end">
                  <span className="me-3">We Accept: </span>
                  <img src={FooterImg} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <button className="scroltop" type="button">
        <img src={`/images/top_arrow.gif`} alt="" />
      </button>
      <div
        className="modal quick-view-modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <i className="icon feather icon-x"></i>
            </button>
          </div>
        </div>
      </div>

      <button className="scroltop" type="button">
        <img src={`/images/top_arrow.gif`} alt="" />
      </button>
      <div
        className="modal quick-view-modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <i className="icon feather icon-x"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
