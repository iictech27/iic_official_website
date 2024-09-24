import React, { useState, useEffect } from "react";
import Link from "next/link";

const CountdownTimer = () => {
  const [targetDate, setTargetDate] = useState(
    new Date('2024-09-28T10:00:00').getTime() // Setting specific date and time
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
        days: String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(2, "0"),
        hours: String(
          Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        ).padStart(2, "0"),
        minutes: String(
          Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
        ).padStart(2, "0"),
        seconds: String(Math.floor((distance % (1000 * 60)) / 1000)).padStart(2, "0"),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="min-h-screen bg-gradient-to-br flex flex-col items-center justify-center p-4">
      <div className="bg-white bg-opacity-30 backdrop-filter backdrop-blur-md rounded-3xl shadow-xl p-8 w-full max-w-2xl border border-gray-200">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-8 dark:text-white">
          Countdown Timer
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {["days", "hours", "minutes", "seconds"].map((unit) => (
            <div
              key={unit}
              className="flex flex-col items-center justify-center bg-white bg-opacity-50 shadow-lg rounded-2xl p-4 transition-all duration-300 transform hover:bg-opacity-60 hover:scale-105 backdrop-filter backdrop-blur-lg"
            >
              <span className="text-5xl md:text-6xl font-bold text-blue-600 mb-2 animate-bounce">
                {timeLeft[unit] || "00"}
              </span>
              <span className="text-lg md:text-xl text-gray-600 capitalize">
                {unit}
              </span>
            </div>
          ))}
        </div>
        
        <button
          type="button"
          onClick={() => alert("Questions Revealed")}
          className={`w-full text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-3 mt-4 transition-opacity duration-500 ${isCountdownComplete ? "opacity-100" : "opacity-50 cursor-not-allowed"}`}
          disabled={!isCountdownComplete} // Disable button until countdown is complete
        >
          Reveal Questions
        </button>
      </div>
    </div>
  );
};

export default CountdownTimer;
