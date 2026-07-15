"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleRegister(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    setLoading(true);
    setMessage("");

    const form = new FormData(e.currentTarget);

    const name = form.get("name") as string;
    const email = form.get("email") as string;
    const password = form.get("password") as string;
    const confirmPassword = form.get(
      "confirmPassword"
    ) as string;

    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      const data = await res.json();

      setMessage(data.message);

      if (data.success) {
        setTimeout(() => {
          router.push("/login");
        }, 1500);
      }
    } catch {
      setMessage("Something went wrong");
    }

    setLoading(false);
  }

  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-16">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-xl">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900">
            Create Account
          </h1>

          <p className="mt-3 text-gray-500">
            Register to start shopping
          </p>
        </div>

        <form
          onSubmit={handleRegister}
          className="space-y-5"
        >
          <input
            name="name"
            type="text"
            required
            placeholder="Full Name"
            className="w-full rounded-xl border px-4 py-3 outline-none focus:border-blue-600"
          />

          <input
            name="email"
            type="email"
            required
            placeholder="Email Address"
            className="w-full rounded-xl border px-4 py-3 outline-none focus:border-blue-600"
          />

          <input
            name="password"
            type="password"
            required
            placeholder="Password"
            className="w-full rounded-xl border px-4 py-3 outline-none focus:border-blue-600"
          />

          <input
            name="confirmPassword"
            type="password"
            required
            placeholder="Confirm Password"
            className="w-full rounded-xl border px-4 py-3 outline-none focus:border-blue-600"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:opacity-60"
          >
            {loading ? "Creating Account..." : "Create Account"}
          </button>
        </form>

        {message && (
          <p className="mt-6 text-center font-semibold text-blue-600">
            {message}
          </p>
        )}

        <p className="mt-6 text-center text-gray-600">
          Already have an account?{" "}
          <span
            onClick={() => router.push("/login")}
            className="cursor-pointer font-semibold text-blue-600 hover:underline"
          >
            Login
          </span>
        </p>
      </div>
    </main>
  );
}
