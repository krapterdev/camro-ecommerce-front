import React, { useEffect, useState } from "react";
import { useCart } from "../../context/CartContext";

const ProductQtyInput = ({ product }) => {
  const { updateQuantity } = useCart();
  const [qty, setQty] = useState(product.qty || 1); // Ensure local state

  // Sync with cart context when qty changes
  useEffect(() => {
    updateQuantity(product.id, qty);
  }, [qty]);

  const handleQtyChange = (e) => {
    const newQty = parseInt(e.target.value);
    if (!isNaN(newQty) && newQty >= 1) {
      setQty(newQty);
    }
  };

  const handleCount = (type) => {
    setQty((prevQty) => {
      if (type === "add") return prevQty + 1;
      if (type === "minus" && prevQty > 1) return prevQty - 1;
      return prevQty;
    });
  };

  return (
    <div className="qty-input">
      <button
        onClick={() => handleCount("minus")}
        disabled={qty <= 1}
        className="qty-count qty-count--minus"
        type="button"
      >
        -
      </button>
      <input
        className="product-qty"
        type="number"
        min="1"
        value={qty}
        onChange={handleQtyChange}
      />
      <button
        onClick={() => handleCount("add")}
        className="qty-count qty-count--add"
        type="button"
      >
        +
      </button>
    </div>
  );
};

export default ProductQtyInput;
