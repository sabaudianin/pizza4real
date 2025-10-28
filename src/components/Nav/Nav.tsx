"use client";

import React from "react";
import Link from "next/link";

import { HamburgerMenu } from "./HamburgerMenu/HamburgerMenu";

export const Nav = () => {
  return (
    <section
      id="nav"
      className="mx-auto flex justify-between items-center max-w-screen-2xl "
    >
      <p className="text-3xl lg:text-4xl font-bold text-[var(--success)]">
        Pizza
        <span className="text-white [-webkit-text-stroke:1px_rgba(0,0,0,0.75)] [text-stroke:1px_rgba(0,0,0,0.75)] drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]">
          4
        </span>
        <span className="text-[var(--error)]">Real</span>
      </p>
      <nav className="w-1/2 justify-around lg:text-2xl gap-1 hidden lg:flex">
        <Link
          href="#menu"
          className="hover:text-[var(--error)] transition-colors duration-300 font-medium"
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
          href="#footer"
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

      <HamburgerMenu />
    </section>
  );
};
