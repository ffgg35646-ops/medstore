import { products } from "@/data/products";
import ProductCard from "./ProductCard";

export default function FeaturedProducts() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="mb-12 text-center">
        <span className="font-semibold text-blue-600">
          OUR PRODUCTS
        </span>

        <h2 className="mt-3 text-4xl font-bold text-gray-900">
          Featured Products
        </h2>

        <p className="mt-4 text-gray-500">
          Explore our most popular healthcare products.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </section>
  );
}
