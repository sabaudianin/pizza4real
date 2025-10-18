import React from "react";
import Link from "next/link";

export const Nav = () => {
  return (
    <div className=" fixed top-0 w-full z-50 backdrop-blur-[10px] px-6 py-6 lg:py-12 bg-[var(--navColor)]  ">
      <section className="mx-auto flex justify-between items-center  max-w-7xl">
        <p className="text-xl lg:text-4xl font-bold text-[var(--success)]">
          Pizza
          <span className="text-white [-webkit-text-stroke:1px_rgba(0,0,0,0.75)] [text-stroke:1px_rgba(0,0,0,0.75)] drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]">
            4
          </span>
          <span className="text-[var(--error)]">Real</span>
        </p>
        <nav className="w-1/2 flex justify-around lg:text-2xl gap-1">
          <Link
            href="#menu"
            className="hover:text-[var(--error)] transition-colors durtion-300 font-medium"
          >
            Menu
          </Link>
          <Link
            href="#features"
            className="hover:text-[var(--error)] transition-colors duration-300 font-medium"
          >
            Features
          </Link>
          <Link
            href="#contact"
            className="hover:text-[var(--error)] transition-colors duration-300 font-medium"
          >
            Contact
          </Link>
          <Link
            href="#about"
            className="hover:text-[var(--error)] transition-colors duration-300 font-medium"
          >
            About
          </Link>
        </nav>
        <button className="bg-[var(--success)] px-4 py-2 cursor-pointer rounded-xl transition-transform duration-300  hover:translate-y-[-2px] hover:shadow-lg font-bold lg:text-xl">
          Order Now
        </button>
      </section>
    </div>
  );
};
