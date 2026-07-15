"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const slides = [
  {
    id: 1,
    title: "Trusted Online Pharmacy",
    description:
      "Order medicines and healthcare products with fast delivery and trusted quality.",
    image:
      "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 2,
    title: "Premium Medicines",
    description:
      "High quality medicines from certified pharmaceutical brands.",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 3,
    title: "Vitamins & Supplements",
    description:
      "Support your health with premium vitamins and daily supplements.",
    image:
      "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 4,
    title: "Healthcare Products",
    description:
      "Everything you need for your family healthcare in one place.",
    image:
      "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 5,
    title: "Baby Care",
    description:
      "Safe and trusted baby care products for your little ones.",
    image:
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 6,
    title: "Skin Care",
    description:
      "Professional skincare solutions for healthy glowing skin.",
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 7,
    title: "Fast Delivery",
    description:
      "Receive your order quickly anywhere with secure delivery.",
    image:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1600&q=80",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-[650px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-700 ${
            index === current
              ? "opacity-100 scale-100"
              : "opacity-0 scale-105"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/55" />

          <div className="absolute inset-0 flex items-center">
            <div className="mx-auto max-w-7xl px-6">
              <div className="max-w-xl">
                <h1 className="text-5xl font-bold text-white leading-tight">
                  {slide.title}
                </h1>

                <p className="mt-6 text-lg text-gray-200">
                  {slide.description}
                </p>

                <div className="mt-8 flex gap-4">
                  <Link
                    href="/products"
                    className="rounded-full bg-blue-600 px-7 py-3 font-semibold text-white hover:bg-blue-700"
                  >
                    Shop Now
                  </Link>

                  <Link
                    href="/products"
                    className="rounded-full border border-white px-7 py-3 font-semibold text-white hover:bg-white hover:text-black"
                  >
                    View Products
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <button
            onClick={prevSlide}
            className="absolute left-5 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-3 text-3xl text-white backdrop-blur transition hover:bg-white hover:text-black"
          >
            ❮
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-5 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-3 text-3xl text-white backdrop-blur transition hover:bg-white hover:text-black"
          >
            ❯
          </button>
        </div>
      ))}

      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-3 w-3 rounded-full transition ${
              current === index
                ? "bg-blue-500 w-8"
                : "bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
