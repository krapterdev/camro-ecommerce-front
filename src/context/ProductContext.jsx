// src/context/ProductContext.jsx
import React, { createContext, useContext, useState } from "react";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [productQty, setProductQty] = useState(1);

  const increaseQty = () => setProductQty((prev) => prev + 1);
  const decreaseQty = () => setProductQty((prev) => (prev > 1 ? prev - 1 : 1));
  const resetQty = () => setProductQty(1);

  return (
    <ProductContext.Provider
      value={{ productQty, setProductQty, increaseQty, decreaseQty, resetQty }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => useContext(ProductContext);
