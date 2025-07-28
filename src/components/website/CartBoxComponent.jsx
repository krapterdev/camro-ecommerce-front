import React, { useContext, useMemo } from "react";
import ProductQtyInput from "./ProductQtyInput";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import WishlistBoxComponent from "./WishlistBoxComponent";

const CartBoxComponent = () => {
  const { cartItems, removeFromCart, getCartCount ,totalCartitems } = useContext(CartContext);

  // Subtotal calculation using qty * price
  const subtotal = useMemo(() => {
    return cartItems.reduce((total, item) => {
      return total + item.price * item.qty;
    }, 0);
  }, [cartItems]);

  return (
    <>
      <div
        className="offcanvas dz-offcanvas offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasRight"
      >
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        >
          &times;
        </button>
        <div className="offcanvas-body">
          <div className="product-description">
            <div className="dz-tabs">
              <ul className="nav nav-tabs center" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="shopping-cart"
                    data-bs-toggle="tab"
                    data-bs-target="#shopping-cart-pane"
                    type="button"
                    role="tab"
                    aria-controls="shopping-cart-pane"
                    aria-selected="true"
                  >
                    Shopping Cart
                    <span className="badge badge-light">{totalCartitems()}</span>
                  </button>
                </li>

                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="wishlist"
                    data-bs-toggle="tab"
                    data-bs-target="#wishlist-pane"
                    type="button"
                    role="tab"
                    aria-controls="wishlist-pane"
                    aria-selected="false"
                  >
                    Wishlist
                    <span className="badge badge-light">3</span>
                  </button>
                </li>
              </ul>

              <div className="tab-content" id="dz-shopcart-sidebar">
                <div
                  className="tab-pane fade show active"
                  id="shopping-cart-pane"
                  role="tabpanel"
                  aria-labelledby="shopping-cart"
                  tabIndex="0"
                >
                  <div className="shop-sidebar-cart">
                    <ul className="sidebar-cart-list">
                      {cartItems.length > 0 ? (
                        cartItems.map((item, index) => (
                          <li key={index}>
                            <div className="cart-widget">
                              <div className="dz-media me-3">
                                <img
                                  src={`${
                                    import.meta.env.VITE_REACT_APP_STORAGE_URL
                                  }/product/${item.image}`}
                                  alt={item.name}
                                />
                              </div>

                              <div className="cart-content">
                                <h6 className="title">
                                  <Link to={`/${item.slug}`}>{item.name}</Link>
                                </h6>
                                <div className="d-flex align-items-center">
                                  <div className="btn-quantity light quantity-sm me-3">
                                    <ProductQtyInput product={item} />
                                  </div>
                                  <h6 className="dz-price mb-0">
                                    ₹{item.price * item.qty}
                                  </h6>
                                </div>
                              </div>

                              <Link
                                className="dz-close"
                                onClick={() =>
                                  removeFromCart(item.id, item.attr_id)
                                }
                              >
                                <i className="ti-close">x</i>
                              </Link>
                            </div>
                          </li>
                        ))
                      ) : (
                        <li className="text-center">Cart is empty</li>
                      )}
                    </ul>
                    <div className="cart-total">
                      <h5 className="mb-0">Subtotal:</h5>
                      <h5 className="mb-0">₹{subtotal}</h5>
                    </div>

                    <div className="mt-auto">
                      <div className="shipping-time">
                        <div className="dz-icon">
                          <i className="flaticon flaticon-ship"></i>
                        </div>
                        <div className="shipping-content">
                          <h6 className="title pe-4">
                            Congratulations, you've got free shipping!
                          </h6>
                          <div className="progress">
                            <div
                              className="progress-bar progress-animated border-0"
                              style={{ width: "75%" }}
                              role="progressbar"
                            >
                              <span className="sr-only">75% Complete</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Link
                        to="/checkout"
                        className="btn btn-outline-secondary btn-block m-b20"
                      >
                        Checkout
                      </Link>
                      <Link
                        to="/viewcart"
                        className="btn btn-secondary btn-block"
                      >
                        View Cart
                      </Link>
                    </div>
                  </div>
                </div>

                <WishlistBoxComponent />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartBoxComponent;
