import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

const addToCart = (product, prodQuantity = 1) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: (item.quantity || 0) + prodQuantity }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: prodQuantity }];
      }
    });
  };

  const subtotal = cart.reduce(
    (sum, p) => sum + p?.price * (p?.quantity || 1),
    0
  );

  const removeFromCart = (index) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
  };

  const updateQuantity = (index, delta) => {
    setCart((prevCart) =>
      prevCart.map((item, i) =>
        i === index
          ? { ...item, quantity: Math.max(1, (item.quantity || 1) + delta) }
          : item
      )
    );
  };

  return (
    <CartContext.Provider
      value={{ cart, setCart, addToCart, removeFromCart, updateQuantity, subtotal}}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
