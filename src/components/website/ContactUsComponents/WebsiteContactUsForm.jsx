import React from 'react'

function WebsiteContactUsForm() {
  return (
    <>
    
      <div className="page-content">
        <div className="contact-bnr">
          <div className="get1">
            <img src="images/get-touch.png" alt="" />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="contact-info style-1 text-start text-white">
                  <h2 className="title wow fadeInUp" data-wow-delay="0.1s">
                    Let’s Stay in Contact
                  </h2>
                  <p className="text wow fadeInUp" data-wow-delay="0.2s">
                    {" "}
                    Have questions or need support? Fill out the form below and
                    we’ll get back to you shortly.{" "}
                  </p>
                  <div
                    className="contact-bottom wow fadeInUp"
                    data-wow-delay="0.3s"
                  >
                    <div className="contact-left">
                      <h3>Address </h3>
                      <ul>
                        <li>
                          <a href="https://maps.app.goo.gl/dbX7fZVRAFjMP8UA9">
                            {" "}
                            C-60/2, Wazirpur Industrial Area Road, Wazirpur
                            Industrial Area, North West, New Delhi-110052,
                            Delhi, India
                          </a>
                        </li>
                      </ul>
                    </div>
                    <br />
                    <div className="contact-left">
                      <h3>E-mail</h3>
                      <ul>
                        <li>
                          <a href="mailto:camrosteels@gmail.com">
                            {" "}
                            camrosteels@gmail.com
                          </a>
                        </li>
                      </ul>
                    </div>
                    <br />
                    <div className="contact-left">
                      <h3>Call Us</h3>
                      <ul>
                        <li>
                          <a href="tel:18008891401"> Toll Free : 18008891401</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div
                  className="contact-area1 style-1 m-r20 m-md-r0 wow fadeInUp"
                  data-wow-delay="0.5s"
                >
                  <form className="dz-form dzForm">
                    <div className="dzFormMsg"></div>
                    <label className="form-label">Your Name</label>
                    <div className="input-group">
                      <input
                        required
                        type="text"
                        className="form-control"
                        name="dzName"
                      />
                    </div>
                    <label className="form-label">Email Address</label>
                    <div className="input-group">
                      <input
                        required
                        type="text"
                        className="form-control"
                        name="dzEmail"
                      />
                    </div>
                    <label className="form-label">Phone Number</label>
                    <div className="input-group">
                      <input
                        required
                        type="text"
                        className="form-control"
                        name="dzPhoneNumber"
                      />
                    </div>
                    <label className="form-label">Message</label>
                    <div className="input-group m-b30">
                      <textarea
                        name="dzMessage"
                        rows="4"
                        required
                        className="form-control m-b10"
                      ></textarea>
                    </div>

                    <div>
                      <button
                        name="submit"
                        type="submit"
                        value="submit"
                        className="btn w-100 btn-white btnhover"
                      >
                        SUBMIT
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="content-inner-2 pt-0">
          <div className="map-iframe map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.6379330906097!2d77.17168611096109!3d28.700475480890624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0224eaaaaaab%3A0x1a5532a7287b409a!2sCamro%20Cooker%20Limited!5e0!3m2!1sen!2sin!4v1752053883012!5m2!1sen!2sin"
              style={{
                border: 0,
                width: "100%",
                minHeight: "100%",
                marginBottom: "-14px",
              }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default WebsiteContactUsForm