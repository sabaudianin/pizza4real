import React from "react";
import { Card } from "@/ui/elements/card/Card";
import { faComment } from "@fortawesome/free-solid-svg-icons";

export const Testimonials = () => {
  return (
    <section className="text-black bg-red-500 text-center">
      <Card
        color="--error"
        text={"The best pizza i ever ate..."}
        icon={faComment}
        iconColor="--success"
      />
      <Card
        color="--error"
        text={"Will order again!"}
        icon={faComment}
        iconColor="red-500"
      />
      <Card
        color="--error"
        text={"Fast delivery and perfect taste."}
        icon={faComment}
        iconColor="red-500"
      />
    </section>
  );
};
