import React from "react";

const ProductQtyInput = ({ qty, setQty }) => {
  const handleIncrement = () => setQty((prev) => prev + 1);
  const handleDecrement = () => {
    if (qty > 1) setQty((prev) => prev - 1);
  };

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
        onChange={(e) => setQty(Math.max(1, parseInt(e.target.value) || 1))}
        min="1"
      />
      <button
        type="button"
        onClick={handleIncrement}
        className="qty-count qty-count--add"
         disabled={qty >= 10}
      >
        +
      </button>
    </div>
  );
};

export default ProductQtyInput;
