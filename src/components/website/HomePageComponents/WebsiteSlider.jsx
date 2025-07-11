import React from "react";
import { Link } from "react-router-dom";

const WebsiteSlider = () => {
  return (
    <>
      {/* 🔁 Bootstrap Carousel - Static UI */}
      <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <Link to="/r-1">
              <img src="images/r-1.png" className="d-block w-100" alt="Slide 1" />
            </Link>
          </div>
          <div className="carousel-item">
            <Link to="/r-3">
              <img src="images/r-3.png" className="d-block w-100" alt="Slide 2" />
            </Link>
          </div>
          <div className="carousel-item">
            <Link to="/r-2">
              <img src="images/r-2.png" className="d-block w-100" alt="Slide 3" />
            </Link>
          </div>
          <div className="carousel-item">
            <Link to="/r-4">
              <img src="images/r-4.png" className="d-block w-100" alt="Slide 4" />
            </Link>
          </div>
        </div>

        {/* 🔘 Navigation Buttons */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default WebsiteSlider;