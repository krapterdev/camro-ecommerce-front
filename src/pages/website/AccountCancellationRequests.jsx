import React from "react";
import BreadCrumb from "../../components/website/PartialComponents/BreadCrumb";
function AccountAddress() {
  return (
    <>
      <BreadCrumb
        title="About Us"
        items={[{ label: "Home", href: "/" }, { label: "About Us" }]}
      />

      <div className="content-inner-1">
        <div className="container">
          <div className="row">
            <aside className="col-xl-3">
              <div className="toggle-info">
                <h5 className="title mb-0">Account Navbar</h5>
                <a className="toggle-btn" href="#accountSidebar">
                  Account Menu
                </a>
              </div>
              <div className="sticky-top account-sidebar-wrapper">
                <div className="account-sidebar" id="accountSidebar">
                  <div className="profile-head">
                    <div className="user-thumb">
                      <img
                        className="rounded-circle"
                        src="images/profile4.jpg"
                        alt="Susan Gardner"
                      />
                    </div>
                    <h5 className="title mb-0">Sahil Kumar</h5>
                    <span className="text text-primary">
                      info@sahilkumar.com
                    </span>
                  </div>
                  <div className="account-nav">
                    <ul>
                      <li className="active">
                        <a href="account-dashboard.html">Dashboard</a>
                      </li>
                      <li>
                        <a href="account-orders.html">Orders</a>
                      </li>
                      <li>
                        <a href="account-downloads.html">Downloads</a>
                      </li>
                      <li>
                        <a href="account-return-request.html">Return request</a>
                      </li>
                      <li>
                        <a href="account-profile.html">Profile</a>
                      </li>
                      <li>
                        <a href="account-address.html">Address</a>
                      </li>
                      <li>
                        <a href="account-address.html">Logout</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </aside>
            <section className="col-xl-9 account-wrapper">
              <div className="row">
                <div className="col-md-6 m-b30">
                  <div className="order-cancel-card">
                    <div className="order-head">
                      <h6 className="mb-0">
                        Request No:{" "}
                        <span className="text-primary">#1374837</span>
                      </h6>
                    </div>
                    <a
                      href="account-return-request-detail.html"
                      className="order-cancel-box"
                    >
                      <div className="cancel-media">
                        <img src="images/shop/small/pic1.png" alt="" />
                      </div>
                      <div className="order-cancel-content">
                        <span>March 21, 2024</span>
                        <h5 className="title mb-0">Collar Casual Shirt</h5>
                        <p className="mb-2">
                          Quantity: <strong className="text-black">1</strong>
                        </p>
                        <h6 className="mb-0">$105</h6>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-md-6 m-b30">
                  <div className="order-cancel-card">
                    <div className="order-head">
                      <h6 className="mb-0">
                        Request No:{" "}
                        <span className="text-primary">#1374837</span>
                      </h6>
                    </div>
                    <a
                      href="account-return-request-detail.html"
                      className="order-cancel-box"
                    >
                      <div className="cancel-media">
                        <img src="images/shop/small/pic2.png" alt="" />
                      </div>
                      <div className="order-cancel-content">
                        <span>March 21, 2024</span>
                        <h5 className="title mb-0">Collar Casual Shirt</h5>
                        <p className="mb-2">
                          Quantity: <strong className="text-black">1</strong>
                        </p>
                        <h6 className="mb-0">$304</h6>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-lg-6 m-b30">
                  <h4>Reason For Cancellation</h4>
                  <div className="custom-control custom-checkbox mb-1">
                    <input
                      className="form-check-input radio"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <label className="form-check-label" for="flexRadioDefault1">
                      I have changed my mind
                    </label>
                  </div>
                  <div className="custom-control custom-checkbox mb-1">
                    <input
                      className="form-check-input radio"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault2"
                    />
                    <label className="form-check-label" for="flexRadioDefault2">
                      Expected delivery time is very long
                    </label>
                  </div>
                  <div className="custom-control custom-checkbox mb-1">
                    <input
                      className="form-check-input radio"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault3"
                    />
                    <label className="form-check-label" for="flexRadioDefault3">
                      I want to change address for the order
                    </label>
                  </div>
                  <div className="custom-control custom-checkbox mb-1">
                    <input
                      className="form-check-input radio"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault4"
                    />
                    <label className="form-check-label" for="flexRadioDefault4">
                      I want to convert my order to Prepaid
                    </label>
                  </div>
                  <div className="custom-control custom-checkbox mb-1">
                    <input
                      className="form-check-input radio"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault5"
                    />
                    <label className="form-check-label" for="flexRadioDefault5">
                      Price for the product has decreased
                    </label>
                  </div>
                  <div className="custom-control custom-checkbox mb-1">
                    <input
                      className="form-check-input radio"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault6"
                    />
                    <label className="form-check-label" for="flexRadioDefault6">
                      I have purchased the product elsewhere
                    </label>
                  </div>
                </div>
                <div className="col-lg-6">
                  <h4>Refund status</h4>
                  <p>
                    There will be no refund as the order is purchased using
                    Cash-On-Delivery
                  </p>
                  <a
                    href="#"
                    className="btn btn-secondary me-xl-3 me-2 btnhover20"
                  >
                    Submit Request
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default AccountAddress;
