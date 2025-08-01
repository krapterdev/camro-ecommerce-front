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
              <div className="account-card order-details">
                <div className="order-head">
                  <div className="head-thumb">
                    <img src="images/shop/small/pic1.png" alt="" />
                  </div>
                  <div className="clearfix m-l20">
                    <div className="badge">In Progress</div>
                    <h4 className="mb-0">Order #17493</h4>
                  </div>
                </div>
                <div className="row mb-sm-4 mb-2">
                  <div className="col-sm-6">
                    <div className="shiping-tracker-detail">
                      <span>Item</span>
                      <h6 className="title">casual shirt</h6>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="shiping-tracker-detail">
                      <span>Courier</span>
                      <h6 className="title">casual shirt</h6>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="shiping-tracker-detail">
                      <span>Start Time</span>
                      <h6 className="title">05 April 2024, 15:43:23</h6>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="shiping-tracker-detail">
                      <span>Address</span>
                      <h6 className="title">
                        Address 451 Wall Street UK, London
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="content-btn m-b15">
                  <a
                    href="shop-wishlist.html"
                    className="btn btn-secondary me-xl-3 me-2 m-b15 btnhover20"
                  >
                    Export Details
                  </a>
                  <a
                    href="product-default.html"
                    className="btn btn-outline-secondary m-b15 me-xl-3 me-2 btnhover20"
                  >
                    Request Confirmation
                  </a>
                  <a
                    href="#"
                    className="btn btn-outline-danger m-b15 btnhover20"
                  >
                    Cancel Order
                  </a>
                </div>
                <div className="clearfix">
                  <div className="dz-tabs style-3">
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                      <button
                        className="nav-link active"
                        id="nav-order-history-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-order-history"
                        role="tab"
                        aria-controls="nav-order-history"
                        aria-selected="true"
                      >
                        Order History
                      </button>
                      <button
                        className="nav-link"
                        id="nav-Item-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-Item"
                        role="tab"
                        aria-controls="nav-Item"
                        aria-selected="false"
                        tabindex="-1"
                      >
                        Item Details
                      </button>
                      <button
                        className="nav-link"
                        id="nav-courier-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-courier"
                        role="tab"
                        aria-controls="nav-courier"
                        aria-selected="false"
                        tabindex="-1"
                      >
                        Courier
                      </button>
                      <button
                        className="nav-link"
                        id="nav-receiver-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-receiver"
                        role="tab"
                        aria-controls="nav-receiver"
                        aria-selected="false"
                        tabindex="-1"
                      >
                        Receiver
                      </button>
                    </div>
                  </div>
                  <div className="tab-content" id="nav-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="nav-order-history"
                      role="tabpanel"
                      aria-labelledby="nav-order-history-tab"
                      tabindex="0"
                    >
                      <div className="widget-timeline style-1">
                        <ul className="timeline">
                          <li>
                            <div className="timeline-badge success"></div>
                            <div className="timeline-box">
                              <a
                                className="timeline-panel"
                                href="javascript:void(0);"
                              >
                                <h6 className="mb-0">Product Shiped</h6>
                                <span>08/04/2024 5:23pm</span>
                              </a>
                              <p>
                                <strong>Courier Service : </strong>UPS, R.
                                Gosling
                              </p>
                              <p>
                                <strong>Estimated Delivery Date : </strong>
                                09/04/2024
                              </p>
                            </div>
                          </li>
                          <li>
                            <div className="timeline-badge primary"></div>
                            <div className="timeline-box">
                              <a
                                className="timeline-panel"
                                href="javascript:void(0);"
                              >
                                <h6 className="mb-0">Product Shiped</h6>
                                <span>08/04/2024 5:23pm</span>
                              </a>
                              <p>
                                <strong>Tracking Number : </strong>
                                3409-4216-8759
                              </p>
                              <p>
                                <strong>Warehouse : </strong>Top Shirt 12b
                              </p>
                            </div>
                          </li>
                          <li>
                            <div className="timeline-badge"></div>
                            <div className="timeline-box">
                              <a
                                className="timeline-panel"
                                href="javascript:void(0);"
                              >
                                <h6 className="mb-0">Product Packaging</h6>
                                <span>09/04/2024 4:34pm</span>
                              </a>
                            </div>
                          </li>
                          <li>
                            <div className="timeline-badge"></div>
                            <div className="timeline-box">
                              <a
                                className="timeline-panel"
                                href="javascript:void(0);"
                              >
                                <h6 className="mb-0">Order Palced</h6>
                                <span>10/04/2024 2:36pm</span>
                              </a>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="nav-Item"
                      role="tabpanel"
                      aria-labelledby="nav-Item-tab"
                      tabindex="0"
                    >
                      <h5>Item Details</h5>
                      <div className="tracking-item">
                        <div className="tracking-product">
                          <img src="images/shop/small/pic1.png" alt="" />
                        </div>
                        <div className="tracking-product-content">
                          <h6 className="title">Collar Casual Shirt</h6>
                          <small className="d-block">
                            <strong>Price</strong> : $150
                          </small>
                          <small className="d-block">
                            <strong>Size</strong> : Xl
                          </small>
                        </div>
                      </div>
                      <div className="tracking-item-content">
                        <span>Total Price</span>
                        <h6>+ $150</h6>
                      </div>
                      <div className="tracking-item-content border-bottom border-light mb-2">
                        <span className="text-success">Total Discounts</span>
                        <h6>- $55</h6>
                      </div>
                      <div className="tracking-item-content">
                        <span>Order Total</span>
                        <h6>$95</h6>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="nav-courier"
                      role="tabpanel"
                      aria-labelledby="nav-courier-tab"
                      tabindex="0"
                    >
                      <p>
                        Commyolk Suspendisse et justo. Praesent mattis augue
                        Aliquam ornare hendrerit augue Cras tellus In pulvinar
                        lectus a est Curabitur eget orci Cras laoreet. Lorem
                        ipsum dolor sit amet, consectetuer adipiscing elit.
                        Suspendisse et justo. Praesent mattis commyolk augue
                        aliquam ornare.
                      </p>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="nav-receiver"
                      role="tabpanel"
                      aria-labelledby="nav-receiver-tab"
                      tabindex="0"
                    >
                      <h5 className="text-success mb-4">
                        Thank you Your order has been received
                      </h5>
                      <ul className="tracking-receiver">
                        <li>
                          Order Number : <strong>#17493</strong>
                        </li>
                        <li>
                          Date : <strong>17/04/2024, 02:34pm</strong>
                        </li>
                        <li>
                          Total : <strong>$95</strong>
                        </li>
                        <li>
                          Payment Methods : <strong>Cash on Delivery</strong>
                        </li>
                      </ul>
                    </div>
                  </div>
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
