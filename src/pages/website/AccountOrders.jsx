import React from "react";
import BreadCrumb from "../../components/website/PartialComponents/BreadCrumb";
function AccountOrders() {
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
            <div className="col-xl-9 account-wrapper">
              <div className="account-card">
                <div className="table-responsive table-style-1">
                  <table className="table table-hover mb-3">
                    <thead>
                      <tr>
                        <th>Order #</th>
                        <th>Date Purchased</th>
                        <th>Status</th>
                        <th>Total</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <a
                            href="account-order-details.html"
                            className="fw-medium"
                          >
                            #34VB5540K83
                          </a>
                        </td>
                        <td>May 21, 2024</td>
                        <td>$358.75</td>
                        <td>
                          <span className="badge bg-info  m-0">
                            In Progress
                          </span>
                        </td>
                        <td>
                          <a
                            href="account-order-details.html"
                            className="btn-link text-underline p-0"
                          >
                            View
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a
                            href="account-order-details.html"
                            className="fw-medium"
                          >
                            #78A643CD409
                          </a>
                        </td>
                        <td>December 09, 2024</td>
                        <td>
                          <span>$760.50</span>
                        </td>
                        <td>
                          <span className="badge bg-danger  m-0">Canceled</span>
                        </td>
                        <td>
                          <a
                            href="account-order-details.html"
                            className="btn-link text-underline p-0"
                          >
                            View
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a href="javascript:void(0);" className="fw-medium">
                            #112P45A90V2
                          </a>
                        </td>
                        <td>October 15, 2024</td>
                        <td>$1,264.00</td>
                        <td>
                          <span className="badge bg-warning  m-0">Delayed</span>
                        </td>
                        <td>
                          <a
                            href="account-order-details.html"
                            className="btn-link text-underline p-0"
                          >
                            View
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a
                            href="account-order-details.html"
                            className="fw-medium"
                          >
                            #28BA67U0981
                          </a>
                        </td>
                        <td>July 19, 2024</td>
                        <td>$198.35</td>
                        <td>
                          <span className="badge bg-success  m-0">
                            Delivered
                          </span>
                        </td>
                        <td>
                          <a
                            href="account-order-details.html"
                            className="btn-link text-underline p-0"
                          >
                            View
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a
                            href="account-order-details.html"
                            className="fw-medium"
                          >
                            #502TR872W2
                          </a>
                        </td>
                        <td>April 04, 2024</td>
                        <td>$2,133.90</td>
                        <td>
                          <span className="badge bg-success m-0">
                            Delivered
                          </span>
                        </td>
                        <td>
                          <a
                            href="account-order-details.html"
                            className="btn-link text-underline p-0"
                          >
                            View
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a
                            href="account-order-details.html"
                            className="fw-medium"
                          >
                            #47H76G09F33
                          </a>
                        </td>
                        <td>March 30, 2024</td>
                        <td>$86.40</td>
                        <td>
                          <span className="badge bg-success m-0">
                            Delivered
                          </span>
                        </td>
                        <td>
                          <a
                            href="account-order-details.html"
                            className="btn-link text-underline p-0"
                          >
                            View
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a
                            href="account-order-details.html"
                            className="fw-medium"
                          >
                            #53U76G09E38
                          </a>
                        </td>
                        <td>April 21, 2024</td>
                        <td>$86.40</td>
                        <td>
                          <span className="badge bg-success m-0">
                            Delivered
                          </span>
                        </td>
                        <td>
                          <a
                            href="account-order-details.html"
                            className="btn-link text-underline p-0"
                          >
                            View
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a
                            href="account-order-details.html"
                            className="fw-medium"
                          >
                            #31M76G09G76
                          </a>
                        </td>
                        <td>May 07, 2024</td>
                        <td>$112.40</td>
                        <td>
                          <span className="badge bg-success m-0">
                            Delivered
                          </span>
                        </td>
                        <td>
                          <a
                            href="account-order-details.html"
                            className="btn-link text-underline p-0"
                          >
                            View
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="d-flex justify-content-center">
                  <nav aria-label="Table Pagination">
                    <ul className="pagination style-1">
                      <li className="page-item">
                        <a className="page-link" href="javascript:void(0);">
                          Prew
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="javascript:void(0);">
                          1
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="javascript:void(0);">
                          2
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="javascript:void(0);">
                          3
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="javascript:void(0);">
                          Next
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AccountOrders;
