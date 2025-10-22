import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire, faSeedling, faClock } from "@fortawesome/free-solid-svg-icons";

export const Features = () => {
  return (
    <section>
      <div>
        <article>
          <div>
            <FontAwesomeIcon
              icon={faFire}
              className="text-4xl text-[var(--error)]"
            />
            <h3>Wood Fire Owen</h3>
            <p>Authentic italian oven</p>
          </div>
          <div>
            <FontAwesomeIcon
              icon={faSeedling}
              className="text-4xl text-[var(--success)]"
            />
            <h3>Organic ingriedients</h3>
            <p>Sourced from local farmers</p>
          </div>

          <div>
            <FontAwesomeIcon
              icon={faClock}
              className="text-4xl text-[var(--medium)]"
            />
            <h3>Fast Deliver</h3>
            <p>Average time delivery 35 minutes </p>
          </div>
        </article>
      </div>
    </section>
  );
};
