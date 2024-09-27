import React, { useEffect, useState } from "react";
import { submitBtn } from "./question";
import Link from "next/link";

const hackathonRequirements = [
  {
    id: "01",
    description:
      "Create a public GitHub repository with no commits after the event ends.",
  },
  {
    id: "02",
    description:
      "Upload a video on YouTube explaining the working of your application/website/product.",
    details: {
      languages: ["Hindi", "English", "Bengali"],
      length: "2-5 minutes",
    },
  },
  {
    id: "03",
    description: "Submit PDF with Screenshots of your Project.",
  },
  {
    id: "04",
    description: "Any number of members can take part in the video.",
  },
  {
    id: "05",
    description:
      "A proper README.md file should exist in your GitHub repository.",
  },
  {
    id: "06",
    description: "If you're building a website, deploy it if possible.",
  },
  {
    id: "07",
    description:
      "Maintain a document containing the list of all the resources used.",
  },
  {
    id: "08",
    description:
      "Submit code in a zip file along with the resource document mentioned in point 6.",
  },
  {
    id: "09",
    description:
      "Submit designs and screenshots of the platform at every stage with the code in the zip file.",
  },
  {
    id: "10",
    description:
      "The hackathon is 48 hours long, divided into two stages (8 hours and 40 hours).",
  },
  {
    id: "11",
    description:
      "Submit code files, screenshots, and designs in the github repo itself.",
  },
];

const Submission = () => {
  const [date, setDate] = useState({
    stage1Start: new Date("2024-09-28T15:00:00").getTime(),
    stage1End: new Date("2024-09-28T18:30:00").getTime(),
    stage2Start: new Date("2024-09-30T06:30:00").getTime(),
    stage2End: new Date("2024-09-30T11:00:00").getTime(),
  });

  const [isCountdownComplete, setCountdownComplete] = useState({
    stage1Start: false,
    stage1End: false,
    stage2Start: false,
    stage2End: false,
  });

  useEffect(() => {
    const updateCountdown = () => {
      const presentDate = new Date().getTime();
      setCountdownComplete((prev) => ({
        stage1Start: date.stage1Start - presentDate < 0,
        stage1End: date.stage1End - presentDate < 0,
        stage2Start: date.stage2Start - presentDate < 0,
        stage2End: date.stage2End - presentDate < 0,
      }));
    };

    updateCountdown();
    const intervalId = setInterval(updateCountdown, 1000);

    return () => clearInterval(intervalId);
  }, [date]);

  return (
    <section className="min-h-screen bg-gray-100 py-12 px-4 dark:bg-black sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-12 text-center text-4xl font-bold text-gray-900 dark:text-gray-300">
          Hackathon Idea Submission
        </h1>
        <h2 className="mb-12 text-center text-2xl font-bold text-gray-900 dark:text-gray-300">
          SUBMISSION GUIDELINES:
        </h2>
        <ul className="mx-auto max-w-[90%] list-inside list-none space-y-5 text-gray-500 dark:text-gray-400">
          {hackathonRequirements.map((guide) => (
            <li key={guide.id} className="text-xl">
              <span className="mr-5 rounded-full p-2 font-semibold text-blue-500">
                {guide.id}
              </span>
              {guide.description}
              {guide.details && (
                <ul className="ml-16 mt-3 space-y-1">
                  <li>
                    <span className="font-semibold">Languages: </span>
                    {guide.details.languages.join(", ")}
                  </li>
                  <li>
                    <span className="font-semibold">Length: </span>
                    {guide.details.length}
                  </li>
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className="mx-auto mt-16 max-w-7xl text-center">
        <h2 className="mb-2 text-center text-2xl font-bold text-gray-900 dark:text-gray-300">
          Stage 1:
        </h2>
        <span className="mb-4 block">
          28th September - From 3:15 PM - 6:30 PM
        </span>
        <Link
          href="https://forms.gle/GieJJZBYoL8DVdLv6"
          className={isCountdownComplete.stage1End ? "hidden" : ""}
        >
          <button
            className={`${submitBtn} ${
              isCountdownComplete.stage1Start
                ? "opacity-100"
                : "cursor-not-allowed opacity-50"
            }`}
            disabled={!isCountdownComplete.stage1Start}
          >
            {isCountdownComplete.stage1End
              ? "Submission Over"
              : "Submit Here"}
          </button>
        </Link>
        {isCountdownComplete.stage1End && (
          <span className="text-red-600">Stage 1 Submission is Over !!</span>
        )}

        <h2 className="mt-5 mb-2 text-center text-2xl font-bold text-gray-900 dark:text-gray-300">
          Stage 2:
        </h2>
        <span className="mb-4 block">
          30th September - From 6:00 AM - 11:00 AM
        </span>
        <Link
          href="https://forms.gle/x5qGu3ta3tpvtA447"
          className={isCountdownComplete.stage2End ? "hidden" : ""}
        >
          <button
            className={`${submitBtn} ${
              isCountdownComplete.stage2Start
                ? "opacity-100"
                : "cursor-not-allowed opacity-50"
            }`}
            disabled={!isCountdownComplete.stage2Start}
          >
            {isCountdownComplete.stage2End
              ? "Submission Over"
              : "Submit Here"}
          </button>
        </Link>
        {isCountdownComplete.stage2End && (
          <span className="text-red-600">Stage 2 Submission is Over !!</span>
        )}
      </div>
    </section>
  );
};

export default Submission;
