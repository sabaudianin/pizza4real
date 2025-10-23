import React from "react";
import { TestimonialCard } from "./TestimonialCard/TestimonalCard";

export const Testimonials = () => {
  return (
    <section className="p-4 pb-16 text-center max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold font-display p-4">
        Customers Opinion:
      </h2>
      <div className="grid [grid-template-columns:repeat(auto-fit,minmax(250px,1fr))] gap-2 text-center">
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
      </div>
    </section>
  );
};
