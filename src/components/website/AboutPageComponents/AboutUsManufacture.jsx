import React from 'react';

const AboutUsManufacture = () => {
  return (
    <>
      <section className="flat-spacing about-us-main">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div
                className="about-us-features wow fadeInLeft"
                style={{ visibility: 'visible', animationName: 'fadeInLeft' }}
              >
                <img
                  className="ls-is-cached lazyloaded"
                  data-src="https://mangatramonline.com/products/companyprofile_08_02_25_16_03_06_120823.png"
                  src="https://mangatramonline.com/products/companyprofile_08_02_25_16_03_06_120823.png"
                  alt="Company Profile"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="about-us-content">
                <div className="sub-title primary-color">
                  Mangat Ram Dal Mills Pvt. Ltd.
                </div>
                <h3
                  className="title wow fadeInUp"
                  style={{ visibility: 'visible', animationName: 'fadeInUp' }}
                >
                  Manufacturing &amp; Processing of Pulses, Rice &amp; Poha
                </h3>
                <div className="widget-tabs style-3">
                  <div
                    className="widget-content-tab1 wow fadeInUp"
                    style={{ visibility: 'visible', animationName: 'fadeInUp' }}
                  >
                    <div className="widget-content-inner1 active">
                      <p>
                        At Mangatram, we believe that great meals start with the finest
                        ingredients. That’s why we bring you premium-quality pulses and
                        rice, carefully sourced from trusted farms and processed to
                        retain their natural goodness. Whether you're cooking a hearty
                        dal, a fragrant biryani, or a simple home-cooked meal, our
                        products ensure purity, taste, and nutrition in every bite.
                      </p>
                      <div className="tp-about__feature-list">
                        <ul>
                          <li>
                            <span className="fa fa-check"></span> 100% Natural &amp;
                            Unadulterated No artificial additives, chemicals, or
                            preservatives.
                          </li>
                          <li>
                            <span className="fa fa-check"></span> Nutrient-Rich &amp;
                            Healthy High in protein, fiber, and essential vitamins.
                          </li>
                          <li>
                            <span className="fa fa-check"></span> Perfect Texture &amp;
                            Aroma – Ideal for a variety of Indian and international dishes.
                          </li>
                          <li>
                            <span className="fa fa-check"></span> Convenient Online
                            Shopping – Hassle-free ordering with doorstep delivery.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUsManufacture;