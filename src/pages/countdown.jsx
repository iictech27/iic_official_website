import React, { useState, useEffect } from "react";
import Link from "next/link";

const CountdownTimer = () => {
  const [targetDate, setTargetDate] = useState(
    new Date("2024-10-23T11:00:00").getTime() // Setting specific date and time
  );
  const [timeLeft, setTimeLeft] = useState({});
  const [isCountdownComplete, setIsCountdownComplete] = useState(false); // State to track if countdown is complete

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ days: "00", hours: "00", minutes: "00", seconds: "00" });
        setIsCountdownComplete(true); // Set flag when countdown completes
        return;
      }

      setTimeLeft({
        days: String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(
          2,
          "0"
        ),
        hours: String(
          Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        ).padStart(2, "0"),
        minutes: String(
          Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
        ).padStart(2, "0"),
        seconds: String(Math.floor((distance % (1000 * 60)) / 1000)).padStart(
          2,
          "0"
        ),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br p-4">
      <div className="w-full max-w-4xl rounded-3xl border border-gray-200 bg-white bg-opacity-30 p-8 shadow-xl backdrop-blur-md backdrop-filter">
        <h1 className="mb-8 text-center text-4xl font-bold text-gray-800 dark:text-white md:text-5xl">
          Revealing Winners in....
        </h1>
        <div className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-4">
          {["days", "hours", "minutes", "seconds"].map((unit) => (
            <div
              key={unit}
              className="flex transform flex-col items-center justify-center rounded-2xl bg-white bg-opacity-50 p-4 shadow-lg backdrop-blur-lg backdrop-filter transition-all duration-300 hover:scale-105 hover:bg-opacity-60"
            >
              <span className="mb-2 animate-bounce text-5xl font-bold text-blue-600 md:text-6xl">
                {timeLeft[unit] || "00"}
              </span>
              <span className="text-lg capitalize text-gray-600 md:text-xl">
                {unit}
              </span>
            </div>
          ))}
        </div>

        {/* Show button only after countdown is complete */}
        {/* {isCountdownComplete && (
          <Link href="/question">
            <button
              type="button"
              className="mt-4 w-full rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 px-5 py-3 text-sm font-medium text-white opacity-100 transition-opacity duration-500 hover:bg-gradient-to-l focus:outline-none focus:ring-4 focus:ring-purple-200"
            >
              Reveal Winners
            </button>
          </Link>
        )} */}
        {/* Show button only after countdown is complete */}
        {isCountdownComplete && (
          <Link href="/skillde-hackathon-winners-page">
            <button
              type="button"
              className="mt-4 w-full rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 px-5 py-3 text-sm font-medium text-white opacity-100 transition-opacity duration-500 hover:bg-gradient-to-l focus:outline-none focus:ring-4 focus:ring-purple-200"
            >
              Reveal Winners
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default CountdownTimer;
//skillde-hackathon-winners-page
