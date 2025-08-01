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
            <section class="col-xl-9 account-wrapper">
              <div class="row">
                <div class="col-12 m-b30">
                  <p class="m-b0">
                    The following addresses will be used on the checkout page by
                    default.
                  </p>
                </div>
                <div class="col-md-6 m-b30">
                  <div class="address-card">
                    <div class="account-address-box">
                      <h6 class="mb-3">Billing address</h6>
                      <ul>
                        <li>John Doe</li>
                        <li>Londan</li>
                        <li>Mo. 012-345-6789</li>
                        <li>johndoe@example.com</li>
                      </ul>
                    </div>
                    <div class="account-address-bottom">
                      <a
                        href="account-billing-address.html"
                        class="d-block me-3"
                      >
                        <i class="fa-solid fa-pen me-2"></i>Edit
                      </a>
                      <a href="javascript:void(0);" class="d-block me-3">
                        <i class="fa-solid fa-trash-can me-2"></i>Remove
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 m-b30">
                  <div class="address-card">
                    <div class="account-address-box">
                      <h6 class="mb-3">Shipping address</h6>
                      <ul>
                        <li>John Doe</li>
                        <li>Londan</li>
                        <li>Mo. 012-345-6789</li>
                        <li>johndoe@example.com</li>
                      </ul>
                    </div>
                    <div class="account-address-bottom">
                      <a
                        href="account-shipping-address.html"
                        class="d-block me-3"
                      >
                        <i class="fa-solid fa-pen me-2"></i>Edit
                      </a>
                      <a href="javascript:void(0);" class="d-block me-3">
                        <i class="fa-solid fa-trash-can me-2"></i>Remove
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-12">
                  <div class="account-card-add">
                    <div class="account-address-add">
                      <svg
                        id="Line"
                        height="50"
                        viewBox="0 0 64 64"
                        width="50"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="m59.28775 26.0578-7.30176-6.251v-11.72068a.99973.99973 0 0 0 -1-1h-7.46a.99974.99974 0 0 0 -1 1v3.60693l-7.2109-6.17675a5.07688 5.07688 0 0 0 -6.6416 0l-23.97314 20.54345a2.04251 2.04251 0 0 0 1.32226 3.56787h5.98047v18.92188a8.60569 8.60569 0 0 0 8.59082 8.60059h10.481a1.00019 1.00019 0 0 0 -.00006-2h-10.48094a6.60308 6.60308 0 0 1 -6.59082-6.60059v-19.92188a1.00005 1.00005 0 0 0 -1-1l-6.99951-.05078 23.97119-20.542a3.08781 3.08781 0 0 1 4.03955 0l8.86133 7.59082a1.00655 1.00655 0 0 0 1.65039-.75934v-4.7802h5.46v11.18066a1.00013 1.00013 0 0 0 .34961.75928l7.63184 6.60156h-6.98148a.99974.99974 0 0 0 -1 1v3.7002a1.00019 1.00019 0 0 0 2-.00006v-2.70014h5.98145a2.03152 2.03152 0 0 0 1.32031-3.56982z" />
                        <path d="m43.99564 33.718a13.00122 13.00122 0 0 0 .00012 26.00244c17.24786-.71391 17.24231-25.29106-.00012-26.00244zm.00012 24.00244c-14.59461-.60394-14.58984-21.40082.00006-22.00244a11.00122 11.00122 0 0 1 -.00006 22.00244z" />
                        <path d="m49.001 45.71942h-4v-4.00049a1.00019 1.00019 0 0 0 -2 0v4.00049h-4a1.00019 1.00019 0 0 0 .00006 2h3.99994v4a1 1 0 0 0 2 0v-4h4a1 1 0 0 0 0-2z" />
                      </svg>
                    </div>
                    <h4 class="mb-3">Add New Address</h4>
                    <button class="btn btn-primary px-5">Add</button>
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
