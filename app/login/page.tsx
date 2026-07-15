"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    setLoading(true);
    setMessage("");

    const form = new FormData(e.currentTarget);

    const email = form.get("email") as string;
    const password = form.get("password") as string;

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await res.json();

      setMessage(data.message);

      if (data.success) {
        localStorage.setItem(
          "user",
          JSON.stringify(data.user)
        );
window.dispatchEvent(new Event("userChanged"));

        setTimeout(() => {
          router.push("/dashboard");
          router.refresh();
        }, 1000);
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
            Login
          </h1>

          <p className="mt-3 text-gray-500">
            Login to your account
          </p>
        </div>

        <form
          onSubmit={handleLogin}
          className="space-y-5"
        >
          <input
            name="email"
            type="email"
            required
            placeholder="Email"
            className="w-full rounded-xl border px-4 py-3 outline-none focus:border-blue-600"
          />

          <input
            name="password"
            type="password"
            required
            placeholder="Password"
            className="w-full rounded-xl border px-4 py-3 outline-none focus:border-blue-600"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700 disabled:opacity-60"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {message && (
          <p className="mt-6 text-center font-semibold text-blue-600">
            {message}
          </p>
        )}

        <p className="mt-6 text-center text-gray-600">
          Don't have an account?{" "}
          <span
            onClick={() => router.push("/register")}
            className="cursor-pointer font-semibold text-blue-600 hover:underline"
          >
            Register
          </span>
        </p>

      </div>
    </main>
  );
}
