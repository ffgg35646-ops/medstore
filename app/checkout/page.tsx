"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";

export default function CheckoutPage() {

  const { cart } = useCart();

  const [message, setMessage] = useState("");

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price,
    0
  );

  const shipping = cart.length > 0 ? 5 : 0;

  const total = subtotal + shipping;


  async function placeOrder() {

    const user = localStorage.getItem("user");

    if (!user) {
      setMessage("Please login first");
      return;
    }


    const userData = JSON.parse(user);


    try {

      const res = await fetch("/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          userEmail: userData.email,

          items: cart.map((item) => ({
            id: item.id,
            name: item.name,
            price: item.price,
            quantity: 1,
          })),

          total,
        }),
      });


      const data = await res.json();


      if (data.success) {
        setMessage("Order placed successfully");
      } else {
        setMessage("Something went wrong");
      }


    } catch {

      setMessage("Server error");

    }

  }



  return (

    <main className="min-h-screen px-6 py-16">

      <div className="mx-auto max-w-6xl">

        <h1 className="mb-10 text-center text-4xl font-bold">
          Checkout
        </h1>


        <div className="grid gap-8 md:grid-cols-2">


          <div className="rounded-3xl bg-white p-8 shadow-xl">

            <h2 className="mb-6 text-2xl font-bold">
              Shipping Information
            </h2>


            <div className="space-y-4">

              <input
                placeholder="Full Name"
                className="w-full rounded-xl border px-4 py-3"
              />

              <input
                placeholder="Phone Number"
                className="w-full rounded-xl border px-4 py-3"
              />

              <input
                placeholder="Email Address"
                className="w-full rounded-xl border px-4 py-3"
              />

              <input
                placeholder="Full Address"
                className="w-full rounded-xl border px-4 py-3"
              />

            </div>

          </div>



          <div className="rounded-3xl bg-white p-8 shadow-xl">

            <h2 className="mb-6 text-2xl font-bold">
              Payment Method
            </h2>


            <label className="flex gap-3 rounded-xl border p-4">
              <input type="radio" name="payment" />
              Cash On Delivery
            </label>


            <label className="mt-4 flex gap-3 rounded-xl border p-4">
              <input type="radio" name="payment" />
              Credit Card
            </label>


          </div>


        </div>



        <div className="mt-8 rounded-3xl bg-white p-8 shadow-xl">

          <h2 className="mb-6 text-2xl font-bold">
            Order Summary
          </h2>


          {cart.map((item) => (

            <div
              key={item.id}
              className="flex justify-between border-b py-3"
            >

              <span>{item.name}</span>

              <span>${item.price}</span>

            </div>

          ))}



          <div className="mt-6 flex justify-between text-xl font-bold">

            <span>Total</span>

            <span className="text-blue-600">
              ${total.toFixed(2)}
            </span>

          </div>



          <button
            onClick={placeOrder}
            className="mt-8 w-full rounded-xl bg-blue-600 py-4 font-semibold text-white"
          >
            Place Order
          </button>


          {message && (
            <p className="mt-5 text-center font-semibold text-blue-600">
              {message}
            </p>
          )}


        </div>


      </div>

    </main>

  );
}
