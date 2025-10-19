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
      className={`bg-[var(--${color})] px-4 py-2 cursor-pointer rounded-2xl transition-transform duration-300  hover:translate-y-[-2px] hover:shadow-lg font-bold lg:text-xl text-white`}
      {...props}
    >
      {text}
    </button>
  );
};
