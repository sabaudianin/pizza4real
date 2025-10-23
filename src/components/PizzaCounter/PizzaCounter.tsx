"use client";
import React from "react";
import { useState, useEffect } from "react";

const INITIAL_PIZZA_COUNT = 10945;
const START_DATE = new Date(2025, 9, 23);

const getRandomDailyIncrease = (min: number = 10, max: number = 30): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const PizzaCounter: React.FC = () => {
  const [counter, setCounter] = useState<number>(INITIAL_PIZZA_COUNT);

  useEffect(() => {
    //set today date
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    START_DATE.setHours(0, 0, 0, 0);
    //set days left in ms
    const msInDay = 24 * 60 * 60 * 1000;
    const differenceInDays = Math.floor(
      (today.getTime() - START_DATE.getTime()) / msInDay
    );
    let totalIncrease = 0;
    //simplyg generate increase for last day
    if (differenceInDays > 0) {
      for (let i = 0; i < differenceInDays; i++) {
        totalIncrease += getRandomDailyIncrease();
      }
    }
    //update state only on component mount
    const result = INITIAL_PIZZA_COUNT + totalIncrease;
    setCounter(result);
  }, []);

  return (
    <section className=" text-center bg-[var(--error)] p-8">
      <div className="mx-auto max-w-7xl  font-medium">
        <p>To this day we Sell:</p>
        <p className="font-bold font-display p-2 animate-ping">{counter}</p>
        <p>pizzas, and the amount is still increasing.</p>
      </div>
    </section>
  );
};
