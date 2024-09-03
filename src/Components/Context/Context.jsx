import React, { createContext, useState } from "react";

const ShoppingShoesContext = createContext();

const ShoppingShoesProvider = ({ children }) => {
  const [shoesCount, setShoesCount] = useState(0);
  
  return (
    <ShoppingShoesContext.Provider
      value={{
        shoesCount,
        setShoesCount,
      }}
    >
      {children}
    </ShoppingShoesContext.Provider>
  );
};

export { ShoppingShoesProvider };
export { ShoppingShoesContext };