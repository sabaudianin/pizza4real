import React from "react";
import { TestimonialCard } from "./TestimonialCard/TestimonalCard";

export const Testimonials = () => {
  return (
    <section className="grid [grid-template-columns:repeat(auto-fit,minmax(250px,1fr))] gap-2 text-center p-4">
      <TestimonialCard
        text={"The best pizza i ever ate..."}
        author="John Doe"
      />
      <TestimonialCard
        text={"Will order again!"}
        author="Mary Jane"
      />
      <TestimonialCard
        text={"Fast delivery and perfect taste."}
        author="Clark Kent"
      />
    </section>
  );
};
