import React from "react";
import { Link } from "react-router-dom";

function ProductSideMenuPageComponents() {
  return (
    <>
      <div className="col-20 col-xl-3">
        <div className="sticky-xl-top">
          <Link href="" className="panel-close-btn">
            <svg
              width="35"
              height="35"
              viewBox="0 0 51 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M37.748 12.5L12.748 37.5"
                stroke="white"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.748 12.5L37.748 37.5"
                stroke="white"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
          <div className="shop-filter mt-xl-2 mt-0">
            <aside>
              <div className="widget widget_search">
                <div className="form-group">
                  <div className="input-group">
                    <input
                      name="dzSearch"
                      required="required"
                      type="search"
                      className="form-control"
                      placeholder="Search Product"
                    />
                    <div className="input-group-addon">
                      <button
                        name="submit"
                        value="Submit"
                        type="submit"
                        className="btn"
                      >
                        <i className="icon feather icon-search"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="cat-list">
                <div className="categories12">
                  <button
                    className="btn1 btn-primary1"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseExample1"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                    onClick="toggleIcon(this)"
                  >
                    <div className="d-flex justify-content-between bmi">
                      <div className=""> Shop by Type </div>
                    </div>
                  </button>
                </div>

                <div className="collapse show" id="collapseExample1">
                  <div className="card card-body">
                    <div className="widget widget_categories">
                      <ul>
                        <li className="cat-item cat-item-26">
                          <Link href="#">Pressure Cooker</Link>
                          <input type="checkbox" />
                        </li>
                        <li className="cat-item cat-item-36">
                          <Link href="#">Cookware</Link>
                          <input type="checkbox" />
                        </li>
                        <li className="cat-item cat-item-36">
                          <Link href="#">Accessories</Link>
                          <input type="checkbox" />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="cat-list">
                <div className="categories12">
                  <button
                    className="btn1 btn-primary1"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseExample2"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                    onClick="toggleIcon(this)"
                  >
                    <div className="d-flex justify-content-between bmi">
                      <div className=""> Lid Type </div>
                    </div>
                  </button>
                </div>

                <div className="collapse" id="collapseExample2">
                  <div className="card card-body">
                    <div className="widget widget_categories">
                      <ul>
                        <li className="cat-item cat-item-26">
                          <Link href="#">Inner Lid</Link>
                          <input type="checkbox" />
                        </li>
                        <li className="cat-item cat-item-36">
                          <Link href="#">Outer Lid </Link>
                          <input type="checkbox" />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="cat-list">
                <div className="categories12">
                  <button
                    className="btn1 btn-primary1"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseExample3"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                    onClick="toggleIcon(this)"
                  >
                    <div className="d-flex justify-content-between bmi">
                      <div className=""> Price </div>
                    </div>
                  </button>
                </div>

                <div className="collapse" id="collapseExample3">
                  <div className="card card-body">
                    <div className="widget widget_categories">
                      <ul>
                        <li className="cat-item cat-item-26">
                          <Link href="#">₹2,000.00 - ₹3,000.00 </Link>
                          <input type="checkbox" />
                        </li>
                        <li className="cat-item cat-item-36">
                          <Link href="#">₹3,000.00 - ₹4,000.00 </Link>
                          <input type="checkbox" />
                        </li>
                        <li className="cat-item cat-item-36">
                          <Link href="#">₹4,000.00 - ₹5,000.00 </Link>
                          <input type="checkbox" />
                        </li>
                        <li className="cat-item cat-item-36">
                          <Link href="#">₹6,000.00 - ₹7,000.00 </Link>
                          <input type="checkbox" />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="cat-list">
                <div className="categories12">
                  <button
                    className="btn1 btn-primary1"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseExample4"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                    onClick="toggleIcon(this)"
                  >
                    <div className="d-flex justify-content-between bmi">
                      <div className=""> Capacity </div>
                    </div>
                  </button>
                </div>

                <div className="collapse" id="collapseExample4">
                  <div className="card card-body">
                    <div className="widget widget_categories">
                      <div className="btn-group product-size m-0">
                        <input
                          type="radio"
                          className="btn-check"
                          name="btnradio1"
                          id="btnradio101"
                          checked=""
                        />
                        <label className="btn" htmlFor="btnradio101">
                          1 L
                        </label>

                        <input
                          type="radio"
                          className="btn-check"
                          name="btnradio1"
                          id="btnradiol02"
                        />
                        <label className="btn" htmlFor="btnradiol02">
                          1.5 L
                        </label>

                        <input
                          type="radio"
                          className="btn-check"
                          name="btnradio1"
                          id="btnradiol03"
                        />
                        <label className="btn" htmlFor="btnradiol03">
                          2 L
                        </label>
                        <input
                          type="radio"
                          className="btn-check"
                          name="btnradio1"
                          id="btnradiol04"
                        />
                        <label className="btn" htmlFor="btnradiol04">
                          3 L
                        </label>

                        <input
                          type="radio"
                          className="btn-check"
                          name="btnradio1"
                          id="btnradiol05"
                        />
                        <label className="btn" htmlFor="btnradiol05">
                          5 L
                        </label>
                        <input
                          type="radio"
                          className="btn-check"
                          name="btnradio1"
                          id="btnradiol06"
                        />
                        <label className="btn" htmlFor="btnradiol06">
                          6.5
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="cat-list">
                <div className="categories12">
                  <button
                    className="btn1 btn-primary1"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseExample"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                    onClick="toggleIcon(this)"
                  >
                    <div className="d-flex justify-content-between bmi">
                      <div className=""> Shop By Category </div>
                    </div>
                  </button>
                </div>

                <div className="collapse" id="collapseExample">
                  <div className="card card-body">
                    <div className="widget widget_categories">
                      <ul>
                        <li className="cat-item cat-item-26 active">
                          <Link href="#">Triply Artisian</Link>
                          <input type="checkbox" />
                        </li>
                        <li className="cat-item cat-item-36">
                          <Link href="#">Triply Artisian Golden</Link>
                          <input type="checkbox" />
                        </li>
                        <li className="cat-item cat-item-43">
                          <Link href="#">Triply Hammered</Link>
                          <input type="checkbox" />
                        </li>
                        <li className="cat-item cat-item-27">
                          <Link href="#">Triply Honeycomb</Link>
                          <input type="checkbox" />
                        </li>
                        <li className="cat-item cat-item-40">
                          <Link href="#">Brass</Link> <input type="checkbox" />
                        </li>
                        <li className="cat-item cat-item-40">
                          <Link href="#">Hotpot / Casserole</Link>
                          <input type="checkbox" />
                        </li>
                        <li className="cat-item cat-item-40">
                          <Link href="#">Steller Encapsulated</Link>
                          <input type="checkbox" />
                        </li>
                        <li className="cat-item cat-item-43">
                          <Link href="#">Mapple Flat Bottom</Link>
                          <input type="checkbox" />
                        </li>
                        <li className="cat-item cat-item-36">
                          <Link href="#">Cast Iron</Link>
                          <input type="checkbox" />
                        </li>
                        <li className="cat-item cat-item-36">
                          <Link href="#">Accessaries</Link>
                          <input type="checkbox" />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductSideMenuPageComponents;
