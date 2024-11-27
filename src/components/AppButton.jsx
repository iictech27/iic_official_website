// import React from 'react';
import { FaGooglePlay } from "react-icons/fa"; // Importing Google Play icon from react-icons

const AppButton = () => {
  return (
    <>
      <a
        href="https://play.google.com/store/apps/details?id=com.theashhar2.STARTUP_CRAFTER"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="flex transform items-center justify-center rounded-full border-2 border-green-600 bg-gradient-to-r from-indigo-700 via-indigo-600 to-indigo-500 px-6 py-3 text-xs text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-gradient-to-r hover:from-pink-500 hover:to-indigo-500 hover:shadow-2xl focus:outline-none sm:text-base">
          <FaGooglePlay className="mr-3 transform text-2xl text-white transition duration-300 hover:rotate-12" />
          Available on the Play Store
        </button>
      </a>
    </>
  );
};

export default AppButton;
