"use client";
import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGhost } from "@fortawesome/free-solid-svg-icons";

export const Banner = () => {
  return (
    <section className="h-[400px] max-w-7xl text-center bg-orange-200 mx-auto rounded-xl p-4  shadow-xl shadow-[var(--error)] flex flex-col justify-around items-center">
      <span className="font-bold font-display text-[var(----medium)] text-xl">
        {" "}
        Halloween Price Drop!!!{" "}
      </span>
      <div>
        <FontAwesomeIcon
          icon={faGhost}
          className="text-4xl text-[var(--success)]"
        />
        <FontAwesomeIcon
          icon={faGhost}
          className="text-4xl text-white"
        />
        <FontAwesomeIcon
          icon={faGhost}
          className="text-4xl text-[var(--error)]"
        />
      </div>
      <div>
        <Image
          src={"/pizza.png"}
          alt={"Promotion"}
          width={300}
          height={100}
          className=""
        />
        <span className="text-sm font-semibold">Pizza Capriciosa</span>
      </div>

      <p className="flex items-baseline gap-2 font-bold text-lg md:text-xl">
        <span
          className="
        relative 
        text-gray-400 
        line-through 
        text-base 
        font-normal
    "
        >
          12.99 $
        </span>

        <span className="text-red-600 text-2xl animate-bounce ">9.99 $</span>
      </p>
    </section>
  );
};
