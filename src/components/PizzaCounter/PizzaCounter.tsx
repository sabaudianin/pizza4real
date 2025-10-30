"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";

const INITIAL_PIZZA_COUNT = 10945;

const START_DATE = new Date(2025, 9, 23);

const getRandomDailyIncrease = (
  min: number = 10,
  max: number = 30,
  daySeed: number
): number => {
  const random = Math.sin(daySeed + 1000 * daySeed * (daySeed % 10)) * 10000;
  const seededValue = Math.abs(random - Math.floor(random));

  return Math.floor(seededValue * (max - min + 1)) + min;
};

export const PizzaCounter: React.FC = () => {
  const counterRef = useRef<HTMLElement>(null);

  const [finalCount, setFinalCount] = useState<number>(INITIAL_PIZZA_COUNT);

  const [animatedCounter, setAnimatedCounter] = useState<number>(0);

  const [hasAnimated, setHasAnimated] = useState(false);

  //counter
  useEffect(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const startDate = new Date(
      START_DATE.getFullYear(),
      START_DATE.getMonth(),
      START_DATE.getDate()
    );
    startDate.setHours(0, 0, 0, 0);

    const msInDay = 24 * 60 * 60 * 1000;

    const differenceInDays = Math.max(
      0,
      Math.floor((today.getTime() - startDate.getTime()) / msInDay)
    );

    let totalIncrease = 0;

    if (differenceInDays > 0) {
      for (let i = 0; i < differenceInDays; i++) {
        totalIncrease += getRandomDailyIncrease(10, 30, i);
      }
    }

    setFinalCount(INITIAL_PIZZA_COUNT + totalIncrease);
  }, []);

  // animation
  useEffect(() => {
    if (!hasAnimated || animatedCounter >= finalCount) return;

    const duration = 2000;
    const steps = 60;
    const stepInterval = duration / steps;

    const increasePerStep = Math.ceil((finalCount - 0) / steps);

    let currentStep = 0;
    let currentCount = animatedCounter;

    const interval = setInterval(() => {
      currentStep++;

      currentCount += increasePerStep;

      if (currentStep >= steps || currentCount > finalCount) {
        setAnimatedCounter(finalCount);
        clearInterval(interval);
        return;
      }

      setAnimatedCounter(currentCount);
    }, stepInterval);

    return () => clearInterval(interval);
  }, [hasAnimated, finalCount]);

  // 3. Intersection Observer do wyzwalania animacji
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // element jest widoczny i animacja  nie byla uruchomiona
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 } // 50% elementu jest widoczne
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <section
      ref={counterRef}
      className="text-center bg-[var(--error)] text-white p-8 transition-opacity duration-1000"
    >
      <div className="mx-auto max-w-7xl font-medium">
        <p className="text-lg lg:text-xl">To this day we sell:</p>

        <p className="font-bold font-display p-2 text-6xl lg:text-9xl tracking-tight transition-all duration-700">
          {animatedCounter.toLocaleString("pl-PL")}
        </p>
        <p className="text-lg lg:text-xl">
          pizzas, and this number still grownig.
        </p>
      </div>
    </section>
  );
};
