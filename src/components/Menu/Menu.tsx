"use client";
import React, { useState, useMemo } from "react";
import Image from "next/image";
import { MenuType } from "@/types/types";
import { Button } from "@/ui/elements/button/Button";

import type { Category } from "@/types/types";

type FoodType = "all" | Category;

export const Menu = ({ menuData }: { menuData: MenuType[] }) => {
  const [foodFilter, setFoodFilter] = useState<FoodType>("all");

  const filteredFood = useMemo(() => {
    if (foodFilter === "all") return menuData;
    return menuData.filter((item) => item.category === foodFilter);
  }, [foodFilter, menuData]);

  return (
    <section
      id="menu"
      className="p-2 max-w-7xl mx-auto"
    >
      <h2 className="font-bold text-2xl text-center lg:text-4xl">Our Menu</h2>
      <div className="flex justify-center items-center gap-6 mb-4">
        <Button
          color="success"
          text="All"
          onClick={() => setFoodFilter("all")}
        />
        <Button
          color="success"
          text="Pizza"
          onClick={() => setFoodFilter("pizza")}
        />
        <Button
          color="success"
          text="Pasta"
          onClick={() => setFoodFilter("pasta")}
        />
      </div>
      <article>
        <div>
          <ul className="grid [grid-template-columns:repeat(auto-fit,minmax(220px,1fr))] md:[grid-template-columns:repeat(auto-fit,minmax(300px,1fr))] gap-6">
            {filteredFood.map((item) => (
              <li
                key={item.title}
                className="overflow-hidden shadow-xl rounded-xl transition duration-200 hover:scale-105 p-2 flex flex-col items-center justify-center hover:shadow-2xl"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={300}
                  height={200}
                  className="rounded-xl"
                />
                <h2 className=" text-2xl text-center font-semibold text-shadow">
                  {item.title}
                </h2>
                <p className="text-lg">{item.ingredients}</p>
                <p className="font-bold text-[var(--error)]">{item.price} $</p>
              </li>
            ))}
          </ul>
        </div>
      </article>
    </section>
  );
};
