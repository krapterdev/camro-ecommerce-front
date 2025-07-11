import React from "react";
import AboutUsShape from "../../../assets/website/images/ab-left-5.jpg";
import AboutUsBackgroundShape from "../../../assets/website/images/ab-left-6.jpg";


const AboutUsDirectorMsg = () => {
  return (
    <>
      <div
        className="tp-about-2__area tp-about-2__bg pt-60 pb-100 z-index"
        style={{
          backgroundImage: "url(assets/img/about/about-bg-2-2.png)",
        }}
      >
        <div className="container">
          <div className="row">
            <div
              className="col-xl-7 col-lg-7 wow tpfadeRight animated"
              data-wow-duration=".9s"
              data-wow-delay=".5s"
              style={{
                visibility: "visible",
                animationDuration: "0.9s",
                animationDelay: "0.5s",
              }}
            >
              <div className="tp-about__right-wrapper">
                <div className="tp-about__title-box">
                  <div className="tp-section-subtitle-box">
                    <span className="tp-section-subtitle section-subtitle-border">
                      Director's <span>Message</span>
                    </span>
                  </div>
                  <div className="tp-about-2__section-wrap p-relative">
                    <h3 className="tp-section-title">Vinay Singhal</h3>
                  </div>
                </div>
                <div className="tp-about__feature-list">
                  <p>
                    With over 60 years of experience in the pulses manufacturing
                    and processing industry, I have witnessed how quality,
                    commitment, and innovation play a crucial role in building
                    lasting relationships and a strong reputation. At Mangat Ram
                    Dal Mills Pvt.Ltd, our vision is to set new benchmarks in
                    the industry by delivering premium-quality pulses that meet
                    global standards.
                  </p>
                  <p>
                    Our dedication to precision, purity, and excellence ensures
                    that every batch we produce is packed with nutrition, taste,
                    and authenticity. We take pride in our state-of-the-art
                    processing techniques, which preserve the natural goodness
                    of our products while maintaining the highest hygiene
                    standards.
                  </p>
                  <p>
                    As we continue our journey, our goal remains clear to
                    provide our customers with the best-quality pulses that
                    enrich their meals and promote a healthier lifestyle.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-5 col-lg-5 pt-20 wow tpfadeLeft animated"
              data-wow-duration=".9s"
              data-wow-delay=".3s"
              style={{
                visibility: "visible",
                animationDuration: "0.9s",
                animationDelay: "0.3s",
              }}
            >
              <div className="tp-about-2__left-wrap p-relative">
                <div className="tp-about-2__bg-shape">
                  <img src={AboutUsBackgroundShape} alt="Background Shape" />
                </div>
                <div className="tp-about-2__shape-1">
                  <img src={AboutUsShape} alt="Shape" />
                </div>
                <div className="tp-about-2__main-img">
                  <img
                    src="https://mangatramonline.com/products/dm_20_05_25_08_32_17_108521.png"
                    alt="Director"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsDirectorMsg;
