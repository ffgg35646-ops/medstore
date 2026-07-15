import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-20 bg-gray-900 text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 md:grid-cols-3">

        <div>
          <h2 className="text-2xl font-bold text-blue-400">
            MedStore
          </h2>

          <p className="mt-4 text-sm text-gray-300">
            Your trusted online pharmacy for medicines,
            healthcare products, and wellness solutions.
          </p>
        </div>


        <div>
          <h3 className="mb-4 font-semibold">
            Quick Links
          </h3>

          <div className="flex flex-col gap-2 text-sm text-gray-300">
            <Link href="/">Home</Link>
            <Link href="/products">Products</Link>
            <Link href="/cart">Cart</Link>
            <Link href="/profile">Profile</Link>
          </div>
        </div>


        <div>
          <h3 className="mb-4 font-semibold">
            Contact
          </h3>

          <p className="text-sm text-gray-300">
            Email: support@medstore.com
          </p>

          <p className="mt-2 text-sm text-gray-300">
            Phone: +20 100 000 0000
          </p>
        </div>

      </div>

      <div className="border-t border-gray-700 py-4 text-center text-sm text-gray-400">
        © 2026 MedStore. All rights reserved.
      </div>
    </footer>
  );
}
