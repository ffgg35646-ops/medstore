"use client";

import { useCart } from "@/context/CartContext";

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};


export default function AddToCartButton({
  product,
}: {
  product: Product;
}) {

  const { addToCart } = useCart();


  return (
    <button
      onClick={() => addToCart(product)}
      className="mt-8 rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white hover:bg-blue-700"
    >
      Add To Cart
    </button>
  );
}
