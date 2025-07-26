import { createContext, useContext, useState } from "react";

const QuantityContext = createContext();

export const useQuantity = (attr_id) => {
  const { qtyMap, setQtyMap } = useContext(QuantityContext);
  const qty = qtyMap[attr_id] ?? 1;

  const setQty = (val) => {
    setQtyMap((prev) => ({ ...prev, [attr_id]: val }));
  };

  return [qty, setQty];
};

export const QuantityProvider = ({ children }) => {
  const [qtyMap, setQtyMap] = useState({}); // attr_id → quantity

  return (
    <QuantityContext.Provider value={{ qtyMap, setQtyMap }}>
      {children}
    </QuantityContext.Provider>
  );
};
