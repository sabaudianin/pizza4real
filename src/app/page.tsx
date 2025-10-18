"use client";

import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 items-center px-2 py-8 lg:py-16">
      <div className=" font-display py-32">
        <h1 className="text-[clamp(2.5rem,5vw,4rem)] mb-2 font-bold">
          Crafted with Love and passion
        </h1>
        <p className="text-[var(--medium)] ">
          Locally fresh ingredients, wood fire , italian receipe create
          unforgettable memories
        </p>
        <div className="text-center">
          <button className="mt-8 rounded-xl bg-[var(--success)] py-4 px-6 font-semibold text-white hover:text-black transition-colors duration-300 hover:translate-y-[-2px] transition duration-200 shadow-md">
            Show Menu
          </button>
        </div>
      </div>
      <div className="hidden lg:block object-cover">
        <Image
          src="/pizza.png"
          alt="Pizza-hero Picture"
          width={800}
          height={600}
          className="transform transition-transform duration-200 hover:scale-105 "
        />
      </div>
    </section>
  );
}
