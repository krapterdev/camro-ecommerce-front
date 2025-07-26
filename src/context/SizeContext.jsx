import { createContext, useContext, useState } from "react";

const SizeContext = createContext();
export const useSize = () => useContext(SizeContext);

export const SizeProvider = ({ children }) => {
  const [sizeAttrId, setSizeAttrId] = useState(null);

  return (
    <SizeContext.Provider value={{ sizeAttrId, setSizeAttrId }}>
      {children}
    </SizeContext.Provider>
  );
};
