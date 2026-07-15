import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-transparent px-6 py-16">

      <div className="mx-auto max-w-7xl">

        <div className="mb-12 text-center">
          <span className="font-semibold text-blue-600">
            MEDSTORE
          </span>

          <h1 className="mt-3 text-4xl font-bold text-gray-900">
            Our Products
          </h1>

          <p className="mt-4 text-gray-600">
            Browse our healthcare products and medicines.
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

      </div>

    </main>
  );
}
