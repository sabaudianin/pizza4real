"use client";

import React from "react";
import Image from "next/image";
export const Hero = () => {
  return (
    <section className="relative px-2 py-8 lg:py-16 bg-[url(/bg.jpg)] bg-cover bg-center bg-no-repeat text-white/90 ">
      <div className="absolute inset-0 bg-black/40" />
      <article className="relative grid grid-cols-1 lg:grid-cols-2 items-center font-display py-32 max-w-7xl mx-auto">
        <h1 className="text-[clamp(2.5rem,5vw,4rem)] mb-2 font-bold ">
          Crafted with Love and passion
        </h1>
        <p className=" ">
          Locally fresh ingredients, wood fire oven , italian receipe create
          unforgettable memories.
        </p>
        <div className="text-center">
          <button className="mt-8 rounded-xl bg-[var(--success)] py-4 px-6 font-semibold text-white hover:text-black transition-colors duration-300 hover:translate-y-[-2px] transition duration-200 shadow-md">
            Show Menu
          </button>
        </div>
      </article>
    </section>
  );
};
