import React from "react";

export const OrderNow = () => {
  return (
    <div className="hidden lg:flex">
      <button className="bg-[var(--error)] px-4 py-2 cursor-pointer rounded-2xl transition-transform duration-300  hover:scale-105 hover:shadow-lg font-bold lg:text-xl text-white">
        Order Now
      </button>
    </div>
  );
};
