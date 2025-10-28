"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

export const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close Menu" : "Open Menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
      >
        <FontAwesomeIcon
          icon={isOpen ? faBars : faXmark}
          className="text-4xl  p-2"
        />
      </button>
    </div>
  );
};
