import React from "react";
import { useQuantity } from "../../context/QuantityContext";

const ProductQtyInput = ({ attr_id, min = 1, max = 10 }) => {
  const [qty, setQty] = useQuantity(attr_id); // pass attr_id here

  const handleCount = (type) => {
    if (type === "add" && qty < max) setQty(qty + 1);
    if (type === "minus" && qty > min) setQty(qty - 1);
  };

  const handleChange = (e) => {
    const val = Math.max(min, Math.min(max, Number(e.target.value)));
    setQty(val);
  };

  return (
    <div className="qty-input">
      <button
        onClick={() => handleCount("minus")}
        disabled={qty <= min}
        className="qty-count qty-count--minus"
        type="button"
      >
        -
      </button>
      <input
        className="product-qty"
        type="number"
        value={qty}
        onChange={handleChange}
        min={min}
        max={max}
      />
      <button
        onClick={() => handleCount("add")}
        disabled={qty >= max}
        className="qty-count qty-count--add"
        type="button"
      >
        +
      </button>
    </div>
  );
};

export default ProductQtyInput;
