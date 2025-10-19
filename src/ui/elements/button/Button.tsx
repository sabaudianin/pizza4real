import React from "react";

type ButtonProps = {
  color: string;
  text: string;
  type?: "button" | "submit" | "reset";
} & React.ComponentPropsWithoutRef<"button">;

export const Button = ({
  color,
  text,
  type = "button",
  ...props
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={`mt-8 rounded-3xl bg-[var(--${color})] py-4 px-6 font-semibold text-white hover:text-black transition-colors duration-300 hover:translate-y-[-2px] transition duration-200 hover:shadow-xl shadow-lg active:scale-95 focus:outline-none focus:ring-4 focus:ring-[var(--${color})]/50`}
      {...props}
    >
      {text}
    </button>
  );
};
