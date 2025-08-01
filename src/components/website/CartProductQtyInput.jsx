import React, { useEffect, useState } from "react";
import { useCart } from "../../context/CartContext"; // Make sure path is correct

const CartProductQtyInput = ({ product }) => {
  const { updateQty } = useCart(); // method to update cart qty globally
  const [qty, setQty] = useState(product.qty || 1);
  const maxQty = 10;

  const handleIncrement = () => {
    if (qty < maxQty) setQty(qty + 1);
  };

  const handleDecrement = () => {
    if (qty > 1) setQty(qty - 1);
  };

  const handleManualChange = (e) => {
    let value = parseInt(e.target.value);
    if (!value || value < 1) value = 1;
    else if (value > maxQty) value = maxQty;
    setQty(value);
  };

  // Update cart context on qty change
  useEffect(() => {
    updateQty(product.id, product.attr_id, qty);
  }, [qty]);

  return (
    <div className="qty-input">
      <button
        type="button"
        onClick={handleDecrement}
        disabled={qty <= 1}
        className="qty-count qty-count--minus"
      >
        -
      </button>
      <input
        type="number"
        className="product-qty"
        value={qty}
        onChange={handleManualChange}
        min="1"
        max={maxQty}
      />
      <button
        type="button"
        onClick={handleIncrement}
        disabled={qty >= maxQty}
        className="qty-count qty-count--add"
      >
        +
      </button>
    </div>
  );
};

export default CartProductQtyInput;
