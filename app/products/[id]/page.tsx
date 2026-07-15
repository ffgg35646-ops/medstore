import { products } from "@/data/products";
import Link from "next/link";
import AddToCartButton from "@/components/AddToCartButton";

interface ProductDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductDetailsPage({
  params,
}: ProductDetailsPageProps) {
  const { id } = await params;

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold">
          Product Not Found
        </h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-6xl rounded-3xl bg-white p-8 shadow-lg">

        <div className="grid gap-10 md:grid-cols-2">

          <img
            src={product.image}
            alt={product.name}
            className="h-[450px] w-full rounded-2xl object-cover"
          />

          <div>
            <span className="rounded-full bg-blue-100 px-4 py-1 text-sm text-blue-700">
              {product.category}
            </span>

            <h1 className="mt-5 text-4xl font-bold">
              {product.name}
            </h1>

            <p className="mt-4 text-yellow-500">
              ⭐ {product.rating}
            </p>

            <p className="mt-5 text-gray-600">
              {product.description}
            </p>

            <div className="mt-6 text-3xl font-bold text-blue-700">
              ${product.price}
            </div>
            <AddToCartButton product={product} />

            <Link
              href="/products"
              className="mt-5 block text-blue-600"
            >
              ← Back To Products
            </Link>
          </div>

        </div>

      </div>
    </main>
  );
}
