import React, { createContext, useContext, useState } from "react";

const CheckoutAccessContext = createContext();

export const CheckoutAccessProvider = ({ children }) => {
  const [canAccessCheckout, setCanAccessCheckout] = useState(false);

  return (
    <CheckoutAccessContext.Provider
      value={{ canAccessCheckout, setCanAccessCheckout }}
    >
      {children}
    </CheckoutAccessContext.Provider>
  );
};

export const useCheckoutAccess = () => useContext(CheckoutAccessContext);
