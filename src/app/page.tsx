"use client";
import { Hero } from "@/components/Hero/Hero";
import { Menu } from "@/components/Menu/Menu";

import Link from "next/link";
import Image from "next/image";
import { Banner } from "@/components/Banner/Banner";
import { Features } from "@/components/Features/Features";
import { PizzaCounter } from "@/components/PizzaCounter/PizzaCounter";

export default function Home() {
  return (
    <>
      <Hero />
      <Banner />
      <Menu />
      <Features />
      <PizzaCounter />
    </>
  );
}
