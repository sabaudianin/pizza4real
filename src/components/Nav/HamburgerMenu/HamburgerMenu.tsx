"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

export const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const closeMenu = () => {
    setIsOpen(false);
  };
  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <section className="lg:hidden">
      <button
        onClick={toggleMenu}
        aria-label={isOpen ? "Close Menu" : "Open Menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        className="p-3"
      >
        <FontAwesomeIcon
          icon={isOpen ? faXmark : faBars}
          className="text-4xl  p-2"
        />
      </button>
      <div
        className={`absolute inset-x-0 top-full bottom-0  h-screen bg-black/40 transition-opacity ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={closeMenu}
        aria-hidden="true"
      />
      {isOpen && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className={`absolute w-full right-0  flex  flex-col items-center justify-between p-4 shadow-xl gap-4 transition-transform duration-300 text-xl bg-white/70  ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <Link
            href="#menu"
            className="hover:text-[var(--error)] transition-colors duration-300 font-medium"
            onClick={closeMenu}
          >
            Menu
          </Link>
          <Link
            href="#features"
            className="hover:text-[var(--error)] transition-colors duration-300 font-medium"
            onClick={closeMenu}
          >
            Features
          </Link>
          <Link
            href="#footer"
            className="hover:text-[var(--error)] transition-colors duration-300 font-medium"
            onClick={closeMenu}
          >
            Contact
          </Link>
          <Link
            href="#about"
            className="hover:text-[var(--error)] transition-colors duration-300 font-medium"
            onClick={closeMenu}
          >
            About
          </Link>
        </nav>
      )}
    </section>
  );
};
