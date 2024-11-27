/* eslint-disable @next/next/no-img-element */
import { NextPage } from "next";
// import React from 'react';
import AppButton from "../components/AppButton";
import Image from "next/image";

const startupcrafter: NextPage = () => {
  return (
    <div className="from-indigo-950 via-indigo-90 flex flex-col items-center justify-center bg-gradient-to-r to-indigo-800 px-8 py-12 lg:flex-row">
      <div className="flex flex-col space-y-8 pt-28 lg:flex-row lg:space-y-0">
        {/* Left Side */}
        <div className="mb-8 transform rounded-2xl bg-white p-8 text-center shadow-lg transition-transform hover:-translate-y-1 lg:mb-0 lg:mr-8 lg:w-3/5 lg:text-left lg:shadow-xl">
          <div className="flex items-center justify-center md:justify-start">
            <img
              src="/images/startupcrafter/scLogo.png"
              alt="Startup Crafter Logo"
              className="mb-6 h-12 w-2/3 sm:h-16 sm:w-1/2 md:w-1/3"
            />
          </div>
          {/* <h1 className="mb-6 text-5xl font-bold text-gray-800">
              Startup Crafter
            </h1> */}
          <p className="mb-6 text-sm leading-relaxed text-gray-700 sm:text-base">
            Welcome to Startup Crafter - Your go-to platform for all things
            startup-related! Whether you are looking to hire top talent, connect
            with the community, submit your groundbreaking startup ideas, or
            stay updated on upcoming events, Startup Crafter has you covered.
          </p>
          <p className="mb-6 font-semibold leading-relaxed text-gray-700">
            Empowering Ideas, Building Futures
          </p>
          <ul className="mb-8 space-y-2 leading-relaxed text-gray-700">
            <li>✓ Hire Talent</li>
            <li>✓ Create Team</li>
            <li>✓ Idea Submission</li>
            <li>✓ Event Calendar</li>
            <li>✓ Community</li>
          </ul>
          <AppButton />
        </div>

        {/* Right Side */}
        <div className="flex items-center justify-center lg:w-2/5 lg:justify-end">
          <img
            src="/images/startupcrafter/mobile2.png"
            alt="mobile"
            className="h-full w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default startupcrafter;
