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
              <div className="account-card confirmed-request text-center">
                <div className="cancel-btn m-auto mb-sm-4 mb-2">
                  <i className="fa-solid fa-check"></i>
                </div>
                <h2>Cancellation Confirmed</h2>
                <a
                  className="btn btn-outline-secondary btn-lg btnhover20 m-t15"
                  href="account-order-details.html"
                >
                  Check Status
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default AccountAddress;
