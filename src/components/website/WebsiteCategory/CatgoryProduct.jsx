import React from "react";

const CatgoryProduct = () => {
  return (
    <>
      <section class="flat-spacing">
        <div class="container">
          <div class="tf-shop-control">
            <div class="tf-control-filter">
              <button id="filterShop" class="filterShop tf-btn-filter">
                <span class="icon icon-filter"></span>
                <span class="text">Filters</span>
              </button>
            </div>
            <div class="tf-control-sorting">
              <p class="d-none d-lg-block text-caption-1">Sort by:</p>
              <div class="tf-dropdown-sort" data-bs-toggle="dropdown">
                <div class="btn-select">
                  <span class="text-sort-value">Best Selling</span>
                  <span class="icon icon-arrow-down"></span>
                </div>
                <div class="dropdown-menu">
                  <div class="select-item" data-sort-value="best-selling">
                    <span class="text-value-item">Best Selling</span>
                  </div>
                  <div class="select-item" data-sort-value="a-z">
                    <span class="text-value-item">Alphabetically, A-Z</span>
                  </div>
                  <div class="select-item" data-sort-value="z-a">
                    <span class="text-value-item">Alphabetically, Z-A</span>
                  </div>
                  <div class="select-item" data-sort-value="price-low-high">
                    <span class="text-value-item">Price, low to high</span>
                  </div>
                  <div class="select-item" data-sort-value="price-high-low">
                    <span class="text-value-item">Price, high to low</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="wrapper-control-shop">
            <div class="meta-filter-shop">
              <div id="product-count-grid" class="count-text"></div>
              <div id="product-count-list" class="count-text"></div>
              <div id="applied-filters"></div>
              <button
                id="remove-all"
                class="remove-all-filters text-btn-uppercase"
                style="display: none;"
              >
                REMOVE ALL <i class="icon icon-close"></i>
              </button>
            </div>
            <div class="row">
              <div class="col-xl-2">
                <div class="sidebar-filter canvas-filter left">
                  <div class="canvas-wrapper">
                    <div class="canvas-header d-flex d-xl-none">
                      <h5>Filters</h5>
                      <span class="icon-close close-filter"></span>
                    </div>
                    <div class="canvas-body">
                      <div class="widget-facet facet-categories">
                        <h6 class="facet-title">Product Categories</h6>
                        <ul class="facet-content">
                          <li>
                            <a
                              href="https://mangatramonline.com/pulses"
                              class="categories-item"
                            >
                              Pulses
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://mangatramonline.com/rice"
                              class="categories-item"
                            >
                              Rice
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://mangatramonline.com/poha"
                              class="categories-item"
                            >
                              Poha
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://mangatramonline.com/besan"
                              class="categories-item"
                            >
                              Besan
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div class="widget-facet facet-fieldset">
                        <h6 class="facet-title">Availability</h6>
                        <div class="box-fieldset-item">
                          <fieldset class="fieldset-item">
                            <input
                              type="radio"
                              name="availability"
                              class="tf-check"
                              id="inStock"
                            />
                            <label for="inStock">
                              In stock <span class="count-stock">(32)</span>
                            </label>
                          </fieldset>
                          <fieldset class="fieldset-item">
                            <input
                              type="radio"
                              name="availability"
                              class="tf-check"
                              id="outStock"
                            />
                            <label for="outStock">
                              Out of stock <span class="count-stock">(2)</span>
                            </label>
                          </fieldset>
                        </div>
                      </div>
                    </div>
                    <div class="canvas-bottom d-block d-xl-none">
                      <button id="reset-filter" class="tf-btn btn-reset">
                        Reset Filters
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-10">
                <div class="tf-grid-layout tf-col-2 lg-col-2 xl-col-3">
                  {/* start product */}
                  <div
                    id="product-1"
                    class="card-product wow fadeInUp"
                    data-wow-delay="0.1s"
                    style="visibility: visible; animation-delay: 0.1s; animation-name: fadeInUp;"
                  >
                    <div class="card-product-wrapper">
                      <a
                        href="https://mangatramonline.com/pulses/arhar-dal"
                        class="product-img"
                      >
                        <img
                          class="img-product ls-is-cached lazyloaded"
                          data-src="https://mangatramonline.com/products/arhardalunpolished_26_04_25_10_43_57_109800.jpeg"
                          src="https://mangatramonline.com/products/arhardalunpolished_26_04_25_10_43_57_109800.jpeg"
                          alt="image-product"
                        />
                      </a>
                      <div class="on-sale-wrap">
                        <span class="on-sale-item">20%</span>
                      </div>

                      <div class="list-product-btn">
                        <a
                          onclick="addtowishlist(2)"
                          href="javascript:void(0);"
                          class="box-icon wishlist btn-icon-action"
                        >
                          <span class="icon icon-heart"></span>
                          <span class="tooltip">Wishlist</span>
                        </a>
                        <a
                          href="#quickView"
                          onclick="getProduct(1);"
                          data-bs-toggle="modal"
                          class="box-icon quickview tf-btn-loading d-xl-none"
                        >
                          <span class="icon icon-gitDiff1">
                            <svg
                              focusable="false"
                              width="24"
                              height="24"
                              class="icon icon--quick-buy-shopping-cart"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <path
                                d="M1 3H5L6 13H18L20 6H18"
                                stroke="currentColor"
                                stroke-width="2"
                              ></path>
                              <circle
                                cx="7"
                                cy="19"
                                r="2"
                                stroke="currentColor"
                                stroke-width="2"
                              ></circle>
                              <circle
                                cx="17"
                                cy="19"
                                r="2"
                                stroke="currentColor"
                                stroke-width="2"
                              ></circle>
                              <path
                                d="M12 2V10M8 6H16"
                                stroke="currentColor"
                                stroke-width="2"
                              ></path>
                            </svg>
                          </span>
                          <span class="tooltip">Compare</span>
                        </a>
                        <a
                          href="#"
                          onclick="getProduct(1);"
                          class="box-icon quickview1 tf-btn-loading"
                        >
                          <span class="icon icon-eye"></span>
                          <span class="tooltip">Quick View</span>
                        </a>
                      </div>
                    </div>

                    <div class="card-product-info">
                      <ul class="list-color-product">
                        <li class="list-color-item color-swatch active line">
                          <img
                            class=" ls-is-cached lazyloaded"
                            data-src="https://mangatramonline.com/products/arhardalunpolished_26_04_25_10_43_57_109800.jpeg"
                            src="https://mangatramonline.com/products/arhardalunpolished_26_04_25_10_43_57_109800.jpeg"
                            alt="image-product"
                          />
                        </li>
                        <li class="list-color-item whi-st color-swatch">
                          <img
                            class=" ls-is-cached lazyloaded"
                            data-src="https://mangatramonline.com/products/productimage_26_04_25_10_42_26_100843.jpeg"
                            src="https://mangatramonline.com/products/productimage_26_04_25_10_42_26_100843.jpeg"
                            alt="image-product"
                          />
                        </li>
                        <li class="list-color-item whi-st color-swatch">
                          <img
                            class=" ls-is-cached lazyloaded"
                            data-src="https://mangatramonline.com/products/productimage_26_04_25_10_46_31_109652.jpeg"
                            src="https://mangatramonline.com/products/productimage_26_04_25_10_46_31_109652.jpeg"
                            alt="image-product"
                          />
                        </li>
                      </ul>
                      <a href="#" class="title link">
                        Arhar Dal
                      </a>
                      <span class="price">
                        <div class="price_block">
                          ₹ 91.00{" "}
                          <span class="price-mt">
                            <del class="old-price">₹ 114.00</del>
                          </span>
                        </div>
                      </span>
                      <div class="d-flex align-items-stretch flex-wrap gap-12">
                        <button
                          href="#quickView"
                          onclick="getProduct(1);"
                          data-bs-toggle="modal"
                          type="button"
                          class="addcart mints"
                          title="Add to Cart"
                        >
                          Add to Cart
                        </button>
                        <button
                          onclick="addtowishlist(2)"
                          class="addcart bg-white1 d-none d-xl-block"
                          title="Add to Cart"
                        >
                          {" "}
                          <span class="icon icon-heart"></span>
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* end product */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CatgoryProduct;
