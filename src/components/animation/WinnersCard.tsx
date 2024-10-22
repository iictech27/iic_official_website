/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const WinnersCard = ({
  className,
  position,
  team,
  leader,
  projectName,
  members,
}) => {
  console.log(members);
  return (
    <motion.div
      whileInView={{ opacity: 1, scale: 1 }}
      initial={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.6 }}
      className={`relative flex h-[32rem] w-full justify-center bg-white/50 shadow-lg backdrop-blur-3xl ${className} overflow-hidden rounded-xl`}
    >
      <svg
        className="absolute top-0 left-0 -z-10 h-36 w-full"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="rgba(255, 255, 255, 0.8)"
          d="M0,256L30,245.3C60,235,120,213,180,186.7C240,160,300,128,360,117.3C420,107,480,117,540,117.3C600,117,660,107,720,90.7C780,75,840,53,900,69.3C960,85,1020,139,1080,165.3C1140,192,1200,192,1260,170.7C1320,149,1380,107,1410,85.3L1440,64L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
        ></path>
      </svg>

      <div className="flex w-full flex-col rounded-lg p-4 shadow-md">
        {/* Position */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.6 }} // Delay for position
          className="w-full rounded-b-lg px-10 py-8 text-center"
        >
          <h1
            className={`${
              position === "1" ? "text-4xl" : "text-2xl"
            } font-semibold`}
          >
            {position}
            {position === "1" ? (
              <sup className="text-sm">st</sup>
            ) : position === "2" ? (
              <sup className="text-sm">nd</sup>
            ) : (
              <sup className="text-sm">rd</sup>
            )}
          </h1>
        </motion.div>

        {/* Team Name */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 1.2 }} // Delay for team name
          className="flex flex-grow flex-col items-center justify-center gap-y-3 text-2xl"
        >
          <h1 className="text-3xl font-bold text-blue-600 transition duration-300 hover:text-blue-800">
            {team}
          </h1>
        </motion.div>

        {/* Leader Name and members */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 1.8 }} // Delay for leader name
          className="flex flex-grow flex-col items-center justify-center gap-y-1 text-xl"
        >
          <h2 className="font-medium text-gray-600">
            <span className="font-semibold">Team Leader:</span> {leader}
          </h2>
          <ul className="text-center text-gray-600">
            <span className="text-lg font-semibold">Members :</span>
            {members.map((m: string, index: number) => (
              <li key={index} className="text-base">
                {m}
              </li>
            ))}
            <li></li>
          </ul>
        </motion.div>

        {/* Project Name */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 2.4 }} // Delay for project name
          className="flex flex-grow flex-col items-center justify-center gap-y-1 text-xl"
        >
          <h2 className="font-medium text-gray-600">
            <span className="font-semibold">Project:</span> {projectName}
          </h2>
        </motion.div>

        {/* View Live Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 2.8 }} // Delay for view link
          className="flex flex-grow flex-col items-center justify-center gap-y-1 text-lg"
        >
          <a
            href="#"
            className="font-semibold text-blue-600 transition duration-300 hover:text-blue-800"
          >
            View Project
          </a>
          <a
            href="#"
            className="text-gray-600 transition duration-300 hover:text-gray-800"
          >
            GitHub Link
          </a>
        </motion.div>
        {/* Footer with Gradient */}
        <div className="mt-4 py-2">
          <svg
            className="absolute bottom-0 left-0 -z-10 h-32 w-full"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient
                id="gradient1"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop
                  offset="0%"
                  style={{ stopColor: "rgb(126, 34, 206)", stopOpacity: 1 }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "rgb(245, 101, 138)", stopOpacity: 1 }}
                />
              </linearGradient>
            </defs>
            <path
              fill="url(#gradient1)"
              d="M0,128L30,138.7C60,149,120,171,180,186.7C240,203,300,213,360,213.3C420,213,480,203,540,197.3C600,192,660,192,720,202.7C780,213,840,235,900,224C960,213,1020,171,1080,138.7C1140,107,1200,85,1260,80C1320,75,1380,85,1410,90.7L1440,96L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
    </motion.div>
  );
};

export default WinnersCard;
