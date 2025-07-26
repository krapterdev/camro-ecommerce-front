import React from 'react'
import ProductQtyInput from '../ProductQtyInput'
import { Link } from 'react-router-dom'

const WebsiteViewCartComponent = () => {
  return (
    <>
    
      <section className="content-inner shop-account">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="table-responsive">
                <table className="table check-tbl">
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th></th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Subtotal</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="product-item-img">
                        <img
                          src="/src/assets/website/images/triply-artisian-cookware/2.png"
                          alt="/"
                        />
                      </td>
                      <td className="product-item-name">
                        Triply Steller Inner Lid Pressure Cooker 1.5 L
                      </td>
                      <td className="product-item-price">₹40.00</td>
                      <td className="product-item-quantity">
                        <div className="quantity btn-quantity style-1 me-3">
                          <ProductQtyInput attr_id={1000} />
                        </div>
                      </td>
                      <td className="product-item-totle">₹160.00</td>
                      <td className="product-item-close">
                        <Link href="javascript:void(0);">
                          {" "}
                          <div className="ti-close">x</div>
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td className="product-item-img">
                        <img
                          src="/src/assets/website/images/triply-artisian-cookware/1.png"
                          alt="/"
                        />
                      </td>
                      <td className="product-item-name">
                        Triply Steller Inner Lid Pressure Cooker 1.5 L
                      </td>
                      <td className="product-item-price">₹56.00</td>
                      <td className="product-item-quantity">
                        <div className="quantity btn-quantity style-1 me-3">
                          <ProductQtyInput attr_id={1000} />
                        </div>
                      </td>
                      <td className="product-item-totle">₹120.00</td>
                      <td className="product-item-close">
                        <Link href="javascript:void(0);">
                          {" "}
                          <div className="ti-close">x</div>
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td className="product-item-img">
                        <img
                          src="/src/assets/website/images/triply-artisian-cookware/3.png"
                          alt="/"
                        />
                      </td>
                      <td className="product-item-name">
                        Triply Steller Inner Lid Pressure Cooker 3.5 L
                      </td>
                      <td className="product-item-price">₹30.00</td>
                      <td className="product-item-quantity">
                        <div className="quantity btn-quantity style-1 me-3">
                          <ProductQtyInput attr_id={1000} />
                        </div>
                      </td>
                      <td className="product-item-totle">₹40.00</td>
                      <td className="product-item-close">
                        <Link href="javascript:void(0);">
                          {" "}
                          <div className="ti-close">x</div>
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td className="product-item-img">
                        <img
                          src="/src/assets/website/images/triply-artisian-cookware/1.png"
                          alt="/"
                        />
                      </td>
                      <td className="product-item-name">
                        Triply Steller Inner Lid Pressure Cooker 1.5 L
                      </td>
                      <td className="product-item-price">₹42.00</td>
                      <td className="product-item-quantity">
                        <div className="quantity btn-quantity style-1 me-3">
                          <ProductQtyInput attr_id={1000} />
                        </div>
                      </td>
                      <td className="product-item-totle">₹160.00</td>
                      <td className="product-item-close">
                        <Link href="javascript:void(0);">
                          {" "}
                          <div className="ti-close">x</div>
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="row shop-form m-t30">
                <div className="col-md-6">
                  <div className="form-group">
                    <div className="input-group mb-0">
                      <input
                        name="dzEmail"
                        required="required"
                        type="text"
                        className="form-control"
                        placeholder="Coupon Code"
                      />
                      <div className="input-group-addon">
                        <button
                          name="submit"
                          value="Submit"
                          type="submit"
                          className="btn coupon"
                        >
                          Apply Coupon
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 text-end">
                  <Link href="" className="btn btn-secondary">
                    UPDATE CART
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <h4 className="title mb15">Cart Total</h4>
              <div className="cart-detail">
                <Link
                  href="javascript:void(0);"
                  className="btn btn-outline-secondary w-100 m-b20"
                >
                  Bank Offer 5% Cashback
                </Link>
                <div className="icon-bx-wraper style-4 m-b15">
                  <div className="icon-bx">
                    <i className="flaticon flaticon-ship"></i>
                  </div>
                  <div className="icon-content">
                    <span className=" font-14">FREE</span>
                    <h6 className="dz-title">Enjoy The Product</h6>
                  </div>
                </div>
                <div className="icon-bx-wraper style-4 m-b30">
                  <div className="icon-bx">
                    <img
                      src="/src/assets/website/images/shop/shop-cart/icon-box/pic2.png"
                      alt="/"
                    />
                  </div>
                  <div className="icon-content">
                    <h6 className="dz-title">Enjoy The Product</h6>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting
                    </p>
                  </div>
                </div>
                <div className="save-text">
                  <i className="icon feather icon-check-circle"></i>
                  <span className="m-l10">
                    You will save ₹504 on this order
                  </span>
                </div>
                <table>
                  <tbody>
                    <tr className="total">
                      <td>
                        <h6 className="mb-0">Total</h6>
                      </td>
                      <td className="price">₹125.75</td>
                    </tr>
                  </tbody>
                </table>
                <Link href="/checkout" className="btn btn-secondary w-100">
                  PLACE ORDER
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default WebsiteViewCartComponent