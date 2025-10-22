import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

type CustomCardProps = {
  color: string;
  iconColor: string;
  text: string;
  desc?: string;
  icon: IconDefinition;
} & React.ComponentPropsWithoutRef<"button">;

type CardProps = CustomCardProps & React.ComponentPropsWithoutRef<"div">;

export const Card: React.FC<CardProps> = ({
  color,
  text,
  icon,
  desc,
  iconColor,
  className = "",
  ...props
}) => {
  return (
    <div
      className={`p-4 bg-[var(--${color})] rounded-2xl transition duration-200 hover:scale-105 shadow-md shadow  ${className} `}
      {...props}
    >
      <FontAwesomeIcon
        icon={icon}
        className={`text-4xl ${iconColor} p-2"`}
      />
      <h3 className=" text-white text-xl lg:text-3xl ">{text}</h3>
      <p className="">{desc}</p>
    </div>
  );
};
