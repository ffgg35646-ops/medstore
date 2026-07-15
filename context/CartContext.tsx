"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";


type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};


type CartContextType = {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  cartCount: number;
};


const CartContext = createContext<CartContextType | undefined>(
  undefined
);



export function CartProvider({
  children,
}: {
  children: ReactNode;
}) {

  const [cart, setCart] = useState<Product[]>([]);



  function addToCart(product: Product) {

    setCart((prev) => [
      ...prev,
      product,
    ]);

  }



  function removeFromCart(id: number) {

    setCart((prev) =>
      prev.filter((item) => item.id !== id)
    );

  }



  const cartCount = cart.length;



  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        cartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}



export function useCart() {

  const context = useContext(CartContext);


  if (!context) {
    throw new Error(
      "useCart must be used inside CartProvider"
    );
  }


  return context;
}
