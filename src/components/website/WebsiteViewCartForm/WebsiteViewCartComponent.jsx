import React, { useContext } from "react";
import ProductQtyInput from "../ProductQtyInput";
import { Link } from "react-router-dom";
import { useCart } from "../../../context/CartContext";

const WebsiteViewCartComponent = () => {
  const webURL = import.meta.env.VITE_WEBSITE_APP_API_BASE_URL;
  const imgUrl = import.meta.env.VITE_REACT_APP_STORAGE_URL;

  const { cartItems, removeFromCart } = useCart();
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
                    {cartItems.map((item, index) => (
                      <tr key={index}>
                        <td className="product-item-img">
                          <img
                            src={`${imgUrl}/product/${item.image}`}
                            alt="/"
                          />
                        </td>
                        <td className="product-item-name">{item.name}</td>
                        <td className="product-item-price">₹40.00</td>
                        <td className="product-item-quantity">
                          <div className="quantity btn-quantity style-1 me-3">
                            <ProductQtyInput attr_id={item.attr_id} />{" "}
                          </div>
                        </td>
                        <td className="product-item-totle">₹{item.price}</td>
                        <td className="product-item-close">
                          <Link href="javascript:void(0);">
                            <div
                              className="ti-close"
                              onClick={() =>
                                removeFromCart(item.id, item.attr_id)
                              }
                            >
                              x
                            </div>
                          </Link>
                        </td>
                      </tr>
                    ))}
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
  );
};

export default WebsiteViewCartComponent;
