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
      length: "5-6 minutes",
    },
  },
  {
    id: "03",
    description: "Any number of members can take part in the video.",
  },
  {
    id: "04",
    description:
      "A proper README.md file should exist in your GitHub repository.",
  },
  {
    id: "05",
    description: "If you're building a website, deploy it if possible.",
  },
  {
    id: "06",
    description:
      "Maintain a document containing the list of all the resources used.",
  },
  {
    id: "07",
    description:
      "Submit code in a zip file along with the resource document mentioned in point 6.",
  },
  {
    id: "08",
    description:
      "Submit designs and screenshots of the platform at every stage with the code in the zip file.",
  },
  {
    id: "09",
    description:
      "The hackathon is 48 hours long, divided into two stages (8 hours and 40 hours).",
  },
  {
    id: "10",
    description:
      "Submit code files, screenshots, and designs in a zip file at each stage via a Google form.",
  },
];
const submission = () => {
  const [date, setDate] = useState({
    stage1Start: new Date("2024-09-28T16:30:00").getTime(),
    stage1End: new Date("2024-09-28T18:00:00").getTime(),
    stage2Start: new Date("2024-09-30T06:30:00").getTime(),
    stage2End: new Date("2024-09-30T10:15:00").getTime(),
  });
  const [isCountdownComplete, setCountdownComplete] = useState({
    stage1Start: false,
    stage1End: false,
    stage2Start: false,
    stage2End: false,
  });

  useEffect(() => {
    const presentDate = new Date().getTime();
    if (date.stage1Start - presentDate < 0) {
      setCountdownComplete({ ...isCountdownComplete, stage1Start: true });
    }
    if (date.stage2Start - presentDate < 0) {
      setCountdownComplete({ ...isCountdownComplete, stage2Start: true });
    }
    if (date.stage1End - presentDate < 0) {
      setCountdownComplete({ ...isCountdownComplete, stage1End: true });
    }
    if (date.stage2End - presentDate < 0) {
      setCountdownComplete({ ...isCountdownComplete, stage2End: true });
    }
  }, []);

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
          {hackathonRequirements.map((guide, i) => (
            <li key={i} className="text-xl">
              <span className="mr-5 rounded-full p-2 font-semibold text-blue-500">
                {guide.id}
              </span>
              {guide.description}
              {guide.details && (
                <ul className="ml-16 mt-3 space-y-1">
                  <li>
                    <span className="font-semibold">Languages : </span>Hindi,
                    Bengali, English
                  </li>
                  <li>
                    <span className="font-semibold">Length : </span>5-6 mins
                  </li>
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className="mx-auto mt-16 max-w-7xl text-center">
        <h2 className="mb-2 text-center text-2xl font-bold text-gray-900 dark:text-gray-300">
          Stage 1 :
        </h2>
        <span className="mb-4 block">
          28th September - From 4:30 PM - 6:00 PM{" "}
        </span>
        <Link
          href="https://forms.gle/GieJJZBYoL8DVdLv6"
          className={isCountdownComplete.stage1End && "hidden"}
        >
          <button
            className={`${submitBtn} ${
              isCountdownComplete.stage1Start
                ? "opacity-100"
                : "cursor-not-allowed opacity-50"
            }`}
            disabled={!isCountdownComplete.stage1Start}
          >
            Submit Here
          </button>
        </Link>
        {isCountdownComplete.stage1End && (
          <span className="text-red-600">Stage 1 Submission is Over !!</span>
        )}
        <h2 className="mt-5 mb-2 text-center text-2xl font-bold text-gray-900 dark:text-gray-300">
          Stage 2 :
        </h2>
        <span className="mb-4 block">
          30th September - From 6:00 AM - 10:15 AM{" "}
        </span>
        <Link
          href="https://forms.gle/x5qGu3ta3tpvtA447"
          className={isCountdownComplete.stage2End && "hidden"}
        >
          <button
            className={`${submitBtn} ${
              isCountdownComplete.stage2Start
                ? "opacity-100"
                : "cursor-not-allowed opacity-50"
            }`}
            disabled={!isCountdownComplete.stage2Start}
          >
            Submit Here
          </button>
        </Link>
        {isCountdownComplete.stage2End && (
          <span className="text-red-600">Stage 2 Submission is Over !!</span>
        )}
      </div>
    </section>
  );
};

export default submission;
