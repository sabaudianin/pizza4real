import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire, faSeedling } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";

export const Features = () => {
  return (
    <div className="bg-[var(--success)]/50 shadow-md shadow">
      <section
        id="#features"
        className="p-8 text-white/70 font-semibold max-w-7xl mx-auto"
      >
        <article className="grid [grid-template-columns:repeat(auto-fit,minmax(250px,1fr))] gap-6 text-center ">
          <div className="p-4 bg-[var(--success)] rounded-2xl transition duration-200 hover:scale-105 shadow-md shadow">
            <FontAwesomeIcon
              icon={faFire}
              className="text-4xl text-red-500 p-2"
            />
            <h3 className="text-xl lg:text-3xl  text-white">Wood Fire Owen</h3>
            <p>Authentic italian oven</p>
          </div>
          <div className="p-4 bg-[var(--success)] rounded-2xl transition duration-200 hover:scale-105 shadow-md shadow">
            <FontAwesomeIcon
              icon={faSeedling}
              className="text-4xl text-green-700 p-2"
            />
            <h3 className=" text-white text-xl lg:text-3xl ">
              Organic ingriedients
            </h3>
            <p className="">Sourced from local farmers</p>
          </div>

          <div className="p-4 bg-[var(--success)] rounded-2xl transition duration-200 hover:scale-105 shadow-md shadow">
            <FontAwesomeIcon
              icon={faClock}
              className="text-4xl text-blue-500 p-2"
            />
            <h3 className="text-xl lg:text-3xl text-white">Fast Delivery</h3>
            <p>Average time delivery 35 minutes </p>
          </div>
        </article>
      </section>
    </div>
  );
};
