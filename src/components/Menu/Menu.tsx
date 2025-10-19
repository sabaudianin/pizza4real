import { Button } from "@/ui/elements/button/Button";
import { pizzas } from "@/data/pizzas";
import type { PizzaType } from "@/data/pizzas";

import React from "react";
import Image from "next/image";

export const Menu = () => {
  return (
    <section id="menu">
      <h2>Our Menu</h2>
      <div>
        <Button
          color="success"
          text="All"
          onClick={() => console.log("Menu All")}
        />
        <Button
          color="success"
          text="Pizza"
          onClick={() => console.log("Menu Pizza")}
        />
        <Button
          color="success"
          text="Pasta"
          onClick={() => console.log("Menu Pasta")}
        />
      </div>
      <article>
        <div>
          <ul>
            {pizzas.map((pizza) => (
              <li key={pizza.title}>
                <Image
                  src={pizza.image}
                  alt={pizza.title}
                  width={200}
                  height={100}
                />
                <h2>{pizza.title}</h2>
                <p>{pizza.ingredients}</p>
                <p>{pizza.price}</p>
              </li>
            ))}
          </ul>
        </div>
      </article>
    </section>
  );
};
