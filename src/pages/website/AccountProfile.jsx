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
              <div class="account-card">
                <div class="profile-edit">
                  <div class="avatar-upload d-flex align-items-center">
                    <div class=" position-relative ">
                      <div class="avatar-preview thumb">
                        <div
                          id="imagePreview"
                          style={{
                            backgroundImage: `url('images/profile3.jpg')`,
                          }}
                        ></div>
                      </div>
                      <div class="change-btn  thumb-edit d-flex align-items-center flex-wrap">
                        <input
                          type="file"
                          class="form-control d-none"
                          id="imageUpload"
                          accept=".png, .jpg, .jpeg"
                        />
                        <label for="imageUpload" class="btn btn-light ms-0">
                          <i class="fa-solid fa-camera"></i>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="clearfix">
                    <h2 class="title mb-0">John Doe</h2>
                    <span class="text text-primary">johndoe@example.com</span>
                  </div>
                </div>
                <form action="#" class="row">
                  <div class="col-lg-6">
                    <div class="form-group m-b25">
                      <label class="label-title">First Name</label>
                      <input name="dzName" required class="form-control" />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="form-group m-b25">
                      <label class="label-title">Last Name</label>
                      <input name="dzName" required class="form-control" />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="form-group m-b25">
                      <label class="label-title">Email address</label>
                      <input
                        type="email"
                        name="dzEmail"
                        required
                        class="form-control"
                      />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="form-group m-b25">
                      <label class="label-title">Phone</label>
                      <input
                        type="email"
                        name="dzPhone"
                        required
                        class="form-control"
                      />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="form-group m-b25">
                      <label class="label-title">
                        New password (leave blank to leave unchanged)
                      </label>
                      <input
                        type="password"
                        name="dzOldPassword"
                        required
                        class="form-control"
                      />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="form-group m-b25">
                      <label class="label-title">Confirm new password</label>
                      <input
                        type="password"
                        name="dzNewPassword"
                        required
                        class="form-control"
                      />
                    </div>
                  </div>
                </form>
                <div class="d-flex flex-wrap justify-content-between align-items-center">
                  <button class="btn btn-primary mt-3 mt-sm-0" type="button">
                    Update profile
                  </button>
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
