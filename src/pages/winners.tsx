/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import type { NextPage } from "next";
import Title from "@/components/core/Title";
import FadeIn from "@/components/animation/FadeIn";
import ScrollToBottom from "@/components/ScrollToBottom";
import { motion } from "framer-motion";
import Confetti from "react-confetti";
import WinnersCard from "@/components/animation/WinnersCard";

const Winners: NextPage = () => {
  const [dimensions, setDimensions] = useState({
    width: 1800,
    height: 1080,
  });

  useEffect(() => {
    const updateDimensions = () => {
      if (typeof window !== "undefined") {
        setDimensions({
          width: window.innerWidth - 100,
          height: window.innerHeight * 2,
        });
      }
    };

    if (typeof window !== "undefined") {
      updateDimensions();
      window.addEventListener("resize", updateDimensions);

      return () => {
        window.removeEventListener("resize", updateDimensions);
      };
    }
  }, []);

  return (
    <section>
      {/* confetti */}

      <Confetti
        width={dimensions.width}
        height={typeof window !== "undefined" ? window.innerHeight * 2 : 0}
      />

      <Title title="Hackathon Winners" />
      <FadeIn delay={0.15}>
        <h2 className="mx-auto max-w-3xl text-center text-lg leading-8 text-zinc-600 dark:text-zinc-500 sm:text-xl">
          We are thrilled to announce the winners of our recent hackathon,
          organized by IIC TMSL! After an intense and inspiring weekend of
          innovation, collaboration, and creativity, our judges have selected
          the top three teams whose projects truly stood out. Congratulations to
          all of them and Thank you to all participants for your hard work and
          passion, making this event a resounding success. We look forward to
          seeing your ideas make an impact in the real world!
        </h2>
      </FadeIn>
      {/* scroll down arrow */}
      <div className="z-[2] h-[30vh]">
        <ScrollToBottom />
      </div>
      {/* winners */}
      <FadeIn
        delay={0.7}
        className="z-[2] mx-auto my-3 flex flex-col items-center pb-20 sm:my-6 sm:flex-row"
      >
        <div className="mt-6 flex-grow text-center sm:mt-0">
          <h2 className="bg-gradient-to-r from-violet-600 to-rose-500 bg-clip-text py-2 text-4xl font-bold tracking-tight text-transparent sm:text-5xl">
            Congratulations
          </h2>
          <p>You&apos;ll be contacted soon...</p>
        </div>
      </FadeIn>
      <div className="relative grid w-full grid-cols-1 justify-items-center gap-x-8 sm:grid-cols-3">
        {winnersData.map((winner, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: index * 0.6 }} // Staggered delay
            className="relative z-[2] my-2 w-full max-w-md"
          >
            <WinnersCard
              className={`${index !== 1 && "sm:mt-20"} ${
                index === 1 && "shadow-2xl"
              }`}
              {...winner}
            />
            <div
              className={`absolute ${
                index !== 1 ? "-top-8 sm:top-10" : "-top-8"
              } left-1/2 -translate-x-1/2 rounded-full transition-transform duration-300`}
            >
              <img
                src={`/images/winners/${winner.img}.png`}
                alt={winner.team}
                className="h-20 w-20 object-cover hover:scale-110"
              />
            </div>
          </motion.div>
        ))}
      </div>
      <img
        src="/images/winners/texture2.png"
        alt="texture2"
        className="absolute top-1/2 left-1/2 z-[-1] h-full w-full -translate-x-1/2 -translate-y-1/2"
      />
    </section>
  );
};

export default Winners;

const winnersData = [
  {
    img: "3rd",
    team: "Team Gamma",
    leader: "Charlie",
    position: "3",
    members: ["Raja", "Asif", "Jane"],
    projectName: "project1 (HT102)",
  },
  {
    img: "first",
    team: "Team Alpha",
    leader: "Alice",
    position: "1",
    members: ["Raja", "Asif", "Jane"],
    projectName: "project1 (HT102)",
  },
  {
    img: "2nd",
    team: "Team Beta",
    leader: "Bob",
    position: "2",
    members: ["Raja", "Asif", "Jane"],
    projectName: "project1 (HT102)",
  },
];
