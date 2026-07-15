"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";


export default function CartPage() {

  const {
    cart,
    removeFromCart,
  } = useCart();



  const subtotal = cart.reduce(
    (sum, item) => sum + item.price,
    0
  );


  const shipping = cart.length > 0 ? 5 : 0;


  const total = subtotal + shipping;



  return (

    <main className="min-h-screen px-6 py-16">


      <div className="mx-auto max-w-6xl">


        <h1 className="mb-10 text-center text-4xl font-bold">
          Shopping Cart
        </h1>



        {cart.length === 0 ? (

          <div className="rounded-3xl bg-white p-10 text-center shadow-lg">

            <h2 className="text-2xl font-bold">
              Your cart is empty
            </h2>


            <Link
              href="/products"
              className="mt-6 inline-block rounded-xl bg-blue-600 px-8 py-3 text-white"
            >
              Browse Products
            </Link>

          </div>


        ) : (


          <div className="grid gap-8 md:grid-cols-3">


            <div className="space-y-5 md:col-span-2">


              {cart.map((product)=>(

                <div
                  key={product.id}
                  className="flex items-center gap-5 rounded-3xl bg-white p-6 shadow-lg"
                >


                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-24 w-24 rounded-xl object-cover"
                  />



                  <div className="flex-1">

                    <h2 className="text-xl font-bold">
                      {product.name}
                    </h2>


                    <p className="text-blue-600 font-bold">
                      ${product.price}
                    </p>


                    <button
                      onClick={() => removeFromCart(product.id)}
                      className="mt-3 text-red-500"
                    >
                      Remove
                    </button>


                  </div>


                </div>

              ))}


            </div>




            <div className="h-fit rounded-3xl bg-white p-8 shadow-lg">


              <h2 className="mb-6 text-2xl font-bold">
                Order Summary
              </h2>



              <div className="space-y-4">


                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>



                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>${shipping.toFixed(2)}</span>
                </div>



                <hr />



                <div className="flex justify-between text-xl font-bold">

                  <span>Total</span>

                  <span className="text-blue-600">
                    ${total.toFixed(2)}
                  </span>

                </div>



              </div>



              <Link
                href="/checkout"
                className="mt-8 block rounded-xl bg-blue-600 py-4 text-center text-white"
              >
                Proceed To Checkout
              </Link>


            </div>


          </div>

        )}

      </div>


    </main>

  );
}
