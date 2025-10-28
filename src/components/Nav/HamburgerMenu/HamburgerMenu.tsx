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
        className={`absolute inset-x-0 top-full bottom-0 h-screen bg-black/40 transition-opacity ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0  pointer-events-none"
        }`}
        onClick={closeMenu}
        aria-hidden="true"
      />
      {isOpen && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className={`absolute top-full left-0 right-0 transition-transform transition-opacity duration-300 text-xl shadow-xl bg-white/70  ${
            isOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-2 pointer-events-none"
          }`}
        >
          <ul className="flex flex-col items-center gap-2 p-4 text-xl font-bold">
            <li>
              <Link
                href="#menu"
                onClick={closeMenu}
                className="block px-3 py-2 hover:text-[var(--error)] transition-colors"
              >
                Menu
              </Link>
            </li>
            <li>
              <Link
                href="#features"
                onClick={closeMenu}
                className="block px-3 py-2 hover:text-[var(--error)] transition-colors"
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                href="#footer"
                onClick={closeMenu}
                className="block px-3 py-2 hover:text-[var(--error)] transition-colors"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="#about"
                onClick={closeMenu}
                className="block px-3 py-2 hover:text-[var(--error)] transition-colors"
              >
                About
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </section>
  );
};
