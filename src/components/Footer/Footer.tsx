import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  return (
    <div className="bg-[var(--medium)] ">
      <section
        id="footer"
        className="max-w-7xl mx-auto p-4 text-white/90 text-center "
      >
        <div className="grid [grid-template-columns:repeat(auto-fit,minmax(250px,1fr))] gap-4 p-4 pb-8">
          <div className="p-2 ">
            <p className="text-3xl lg:text-4xl font-bold text-[var(--success)]">
              Pizza
              <span className="text-white [-webkit-text-stroke:1px_rgba(0,0,0,0.75)] [text-stroke:1px_rgba(0,0,0,0.75)] drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]">
                4
              </span>
              <span className="text-[var(--error)]">Real</span>
            </p>
            <p className="text-white/80 text-sm p-2">
              Bringing orginal italian taste to You since 2018.
            </p>
            <ul className="flex justify-center items-center">
              <li>
                <Link href="#">
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className="text-2xl p-2 text-blue-400 hover:text-blue-600 transition-colors duration-300"
                  />
                </Link>
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-2xl p-2 text-pink-400 hover:text-orange-400 transition-colors duration-300"
                />
              </li>
            </ul>
          </div>
          <div className="p-2">
            <h3 className="text-[var(--error)] font-medium">Quick Links:</h3>
            <ul className="text-sm p-2 space-y-2">
              <li className="hover:text-[var(--error)] transition-colors duration-300 font-medium">
                <Link href="#menu">Menu</Link>
              </li>
              <li className="hover:text-[var(--error)] transition-colors duration-300 font-medium">
                <Link href="#features">Features</Link>
              </li>
              <li className="hover:text-[var(--error)] transition-colors duration-300 font-medium">
                <Link href="#about">About</Link>
              </li>
              <li className="hover:text-[var(--error)] transition-colors duration-300 font-medium">
                <Link href="#">Back To top</Link>
              </li>
            </ul>
          </div>
          <div className="p-2 text-lg">
            <h3 className="text-[var(--success)] text-2xl font-medium p-2">
              Contact
            </h3>
            <p>Pizzas Street 999</p>
            <p>pizza4Real@pizza.com</p>
            <p>+48 793386445</p>
          </div>
        </div>
        <hr />

        <div>
          <p className="text-xs pt-4">
            &copy;{new Date().getFullYear()} Pizza4Real. All Rights Reserved{" "}
          </p>
          <p className="text-sm">Develop & Design rafbobbob@gmail.com</p>
        </div>
      </section>
    </div>
  );
};
