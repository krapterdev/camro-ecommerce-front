// src/context/CartContext.jsx
import React, { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem("cartItems");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product, qty = 1) => {
    const exists = cartItems.find(
      (item) => item.id === product.id && item.attr_id === product.attr_id
    );
    const updatedCart = exists
      ? cartItems.map((item) =>
          item.id === product.id && item.attr_id === product.attr_id
            ? { ...item, qty }
            : item
        )
      : [...cartItems, { ...product, qty }];
    setCartItems(updatedCart);
  };

  const updateQty = (productId, attrId, newQty) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === productId && item.attr_id === attrId
          ? { ...item, qty: newQty }
          : item
      )
    );
  };

  const removeFromCart = (productId, attrId) => {
    setCartItems((prev) =>
      prev.filter(
        (item) => !(item.id === productId && item.attr_id === attrId)
      )
    );
  };

  const totalItems = cartItems.reduce((acc, item) => acc + item.qty, 0);

  const cartTotal = cartItems.reduce(
    (acc, item) => acc + item.qty * item.price,
    0
  );

  const shippingCharge = cartTotal > 0 ? 50 : 0;

  const grandTotal = cartTotal + shippingCharge;

  const totalCartItems = () => cartItems.length;

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        updateQty,
        removeFromCart,
        totalItems,
        cartTotal,
        totalCartItems,
        shippingCharge,
        grandTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
