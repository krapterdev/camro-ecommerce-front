import React from "react";
import { useWishlist } from "../../context/WishlistContext";

const WishlistBoxComponent = () => {
  const { wishlistItems, addToWishlist, removeFromWishlist } = useWishlist();

  const isWishlisted = wishlistItems.some(
    (item) => item.id === product.id && item.attr_id === product.attr_id
  );
  return (
    <>
      <div
        className="tab-pane fade"
        id="wishlist-pane"
        role="tabpanel"
        aria-labelledby="wishlist"
        tabIndex="0"
      >
        <div className="shop-sidebar-cart">
          <ul className="sidebar-cart-list">
            {wishlistItems.length > 0 ? (
              wishlistItems.map((item) => (
                <li key={`${item.id}_${item.attr_id}`}>
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
                        <h6 className="dz-price mb-0">₹{item.price}</h6>
                      </div>
                    </div>
                    <button
                      className="dz-close"
                      onClick={() => removeFromWishlist(item.id, item.attr_id)}
                    >
                      <div className="ti-close">x</div>
                    </button>
                  </div>
                </li>
              ))
            ) : (
              <li className="text-center">No wishlist items found</li>
            )}
          </ul>

          {/* <div className="mt-auto">
              <Link
                to="shop-wishlist.html"
                className="btn btn-secondary btn-block"
              >
                Check Your Favourite
              </Link>
            </div> */}
        </div>
      </div>
    </>
  );
};

export default WishlistBoxComponent;
