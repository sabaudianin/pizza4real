"use client";
import { Hero } from "@/components/Hero/Hero";
import { Menu } from "@/components/Menu/Menu";

import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <Menu />;
    </>
  );
}
