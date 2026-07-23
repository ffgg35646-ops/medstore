"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Product } from "@/types/product";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({
  product,
}: ProductCardProps) {
  const { addToCart } = useCart();
  const router = useRouter();

  function handleAddCart() {
    const user = localStorage.getItem("user");

    if (!user) {
      router.push("/login");
      return;
    }

    addToCart(product);
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <img
        src={product.image}
        alt={product.name}
        className="h-56 w-full object-cover"
      />

      <div className="p-5">
        <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
          {product.category}
        </span>

        <h3 className="mt-3 text-xl font-bold text-gray-900">
          {product.name}
        </h3>

        <p className="mt-2 text-sm text-gray-500">
          {product.description}
        </p>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-2xl font-bold text-blue-700">
            ${product.price}
          </span>

          <span className="text-yellow-500">
            ⭐ {product.rating}
          </span>
        </div>

        <div className="mt-6 flex gap-3">
          <Link
            href={`/products/${product.id}`}
            className="flex-1 rounded-xl border border-blue-600 py-3 text-center font-semibold text-blue-600 transition hover:bg-blue-600 hover:text-white"
          >
            View
          </Link>

          <button
            onClick={handleAddCart}
            className="flex-1 rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Add Cart
          </button>
        </div>
      </div>
    </div>
  );
}
