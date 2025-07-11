import React from 'react';

const ContactUsForm = () => {
  // Dummy function placeholder
  const contactUs = () => {
    console.log("Form submitted (replace with your actual logic)");
  };

  return (
    <>
      <section className="contact-page-section">
        <div className="container">
          <div className="row clearfix">
            <div className="info-column col-lg-5 col-md-12 col-sm-12">
              <div className="inner-column">
                <div className="title-box">
                  <h4>Store Information</h4>
                </div>
                <div className="lower-box">
                  <ul className="info-list">
                    <li>
                      <span className="icon fa-regular fa-location-dot"></span>
                      Address: M-16, Phase-1, Badli Industrial Estate, <br />
                      Delhi - 110042
                    </li>
                    <li className="d-block">
                      <span className="icon fa-light fa-phone"></span>
                      <a href="tel:011-47565560">011-47565560</a> <br />
                      <a href="tel:+91-9354809808">+91-9354809808</a> <br />
                    </li>
                    <li>
                      <span className="icon fa-sharp fa-light fa-envelope"></span>
                      <a href="mailto:customercare@mangatram.co.in">customercare@mangatram.co.in</a> <br />
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="map-column col-lg-7 col-md-12 col-sm-12">
              <div className="contact-form-box">
                <div className="form-title-box">
                  <h4>Get in Touch With Us</h4>
                </div>
                <div className="contact-form">
                  <form method="post" action="" id="contact-form">
                    <div className="row clearfix">
                      <div className="col-lg-12" id="error_messages"></div>
                      <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                        <input
                          type="text"
                          id="index_names"
                          name="username"
                          placeholder="Name"
                          required
                        />
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                        <input
                          type="text"
                          id="index_mobiles"
                          name="company"
                          placeholder="Mobile Number*"
                          required
                        />
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                        <input
                          type="email"
                          id="index_emails"
                          name="email"
                          placeholder="Email Address"
                          required
                        />
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                        <input
                          type="text"
                          id="index_subjects"
                          name="Subject"
                          placeholder="Subject"
                          required
                        />
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                        <textarea
                          className="darma"
                          name="message"
                          id="index_messages"
                          placeholder="Write Your Message..."
                        ></textarea>
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12 form-group text-center">
                        <button
                          className="theme-btn btn-style-four"
                          type="button"
                          onClick={contactUs}
                          name="submit-form"
                        >
                          <span className="txt">Send Your Query</span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUsForm;
