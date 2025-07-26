import React, { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("cart")) || [];
    } catch (error) {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product, quantity = 1) => {
    if (!product.id || !product.price || !product.size) return;

    const updated = [...cartItems];
    const index = updated.findIndex(
      (item) => item.id === product.id && item.size === product.size
    );

    if (index !== -1) {
      updated[index].quantity = quantity;
      toast.info("Cart updated");
    } else {
      updated.push({ ...product, quantity });
      toast.success("Item added to cart");
    }

    setCartItems(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const removeFromCart = (productId, attrId) => {
    const updated = cartItems.filter(
      (item) => !(item.id === productId && item.attr_id === attrId)
    );
    setCartItems(updated);
    toast.success("Item removed to cart");
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const isInCart = (productId) => {
    return cartItems.some((item) => item.id === productId);
  };

  const getCartCount = () => {
    return cartItems.length;
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, isInCart, getCartCount }}
    >
      {children}
    </CartContext.Provider>
  );
};
