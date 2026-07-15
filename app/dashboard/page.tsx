"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { products } from "@/data/products";

export default function DashboardPage() {

  const [name, setName] = useState("User");


  useEffect(() => {

    const user = localStorage.getItem("user");

    if (user) {
      const data = JSON.parse(user);
      setName(data.name);
    }

  }, []);



  return (

    <main className="min-h-screen px-6 py-12">


      <div className="mx-auto max-w-7xl">


        <div className="mb-8 rounded-3xl bg-white p-8 shadow-lg">

          <h1 className="text-3xl font-bold text-gray-900">
            Welcome {name} 👋
          </h1>

          <p className="mt-2 text-gray-500">
            Find your favorite medical products and manage your account.
          </p>

        </div>



        <div className="grid gap-8 md:grid-cols-4">


          {/* Sidebar */}

          <aside className="rounded-3xl bg-white p-6 shadow-lg">


            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-blue-100 text-3xl font-bold text-blue-600">
              {name.charAt(0)}
            </div>


            <nav className="space-y-4">


              <Link
                href="/profile"
                className="block rounded-xl p-3 hover:bg-blue-50"
              >
                👤 Profile
              </Link>


              <Link
                href="/cart"
                className="block rounded-xl p-3 hover:bg-blue-50"
              >
                🛒 Cart
              </Link>


              <Link
                href="/products"
                className="block rounded-xl p-3 hover:bg-blue-50"
              >
                💊 Products
              </Link>


              <Link
                href="/checkout"
                className="block rounded-xl p-3 hover:bg-blue-50"
              >
                💳 Checkout
              </Link>


            </nav>


          </aside>




          {/* Products */}

          <section className="md:col-span-3">


            <h2 className="mb-6 text-2xl font-bold">
              Recommended Products
            </h2>



            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">


              {products.slice(0,6).map((product)=> (

                <div
                  key={product.id}
                  className="rounded-3xl bg-white p-5 shadow-lg"
                >

                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-40 w-full rounded-2xl object-cover"
                  />


                  <h3 className="mt-4 font-bold">
                    {product.name}
                  </h3>


                  <p className="mt-2 text-blue-600 font-bold">
                    ${product.price}
                  </p>


                  <Link
                    href={`/products/${product.id}`}
                    className="mt-4 block rounded-xl bg-blue-600 py-2 text-center text-white"
                  >
                    View Product
                  </Link>


                </div>

              ))}


            </div>


          </section>


        </div>


      </div>


    </main>

  );
}
