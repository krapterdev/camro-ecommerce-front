// import React, { createContext, useContext, useState } from "react";

// export const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);

//   const addToCart = (product) => {
//     const exists = cartItems.find((item) => item.id === product.id);
//     if (exists) {
//       const updated = cartItems.map((item) =>
//         item.id === product.id ? { ...item, qty: item.qty + 1 } : item
//       );
//       setCartItems(updated);
//     } else {
//       setCartItems([...cartItems, { ...product, qty: 1 }]);
//     }
//   };

//   const updateQuantity = (productId, newQty) => {
//     setCartItems((prev) =>
//       prev.map((item) =>
//         item.id === productId ? { ...item, qty: newQty } : item
//       )
//     );
//   };

//   const removeFromCart = (productId) => {
//     setCartItems((prev) => prev.filter((item) => item.id !== productId));
//   };

//   const getCartCount = () => {
//     return cartItems.reduce((total, item) => total + item.qty, 0);
//   };

//   const getCartSubtotal = () => {
//     return cartItems.reduce((total, item) => total + item.price * item.qty, 0);
//   };

//   return (
//     <CartContext.Provider
//       value={{
//         cartItems,
//         addToCart,
//         updateQuantity,
//         removeFromCart,
//         getCartCount,
//         getCartSubtotal,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => useContext(CartContext);

// File: src/context/CartContext.jsx
import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // 🧠 Load cart from localStorage on first render
  useEffect(() => {
    const storedCart = localStorage.getItem("cartItems");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  // 💾 Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    const exists = cartItems.find((item) => item.id === product.id);
    if (exists) {
      const updated = cartItems.map((item) =>
        item.id === product.id ? { ...item, qty: item.qty + 1 } : item
      );
      setCartItems(updated);
      toast.info("Product quantity increased in cart.");
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
      toast.success("Product added to cart.");
    }
  };

  const updateQuantity = (productId, newQty) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === productId ? { ...item, qty: newQty } : item
      )
    );
  };

  const removeFromCart = (productId) => {
    const itemName = cartItems.find((item) => item.id === productId)?.name;
    setCartItems((prev) => prev.filter((item) => item.id !== productId));
    toast.error(`${itemName || "Item"} removed from cart.`);
  };

  const getCartCount = () => {
    return cartItems.reduce((total, item) => total + item.qty, 0);
  };

  const getCartSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.qty, 0);
  };

  const totalCartitems = () => {
  return length = cartItems.length;
};


  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        updateQuantity,
        removeFromCart,
        getCartCount,
        getCartSubtotal,
        totalCartitems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
