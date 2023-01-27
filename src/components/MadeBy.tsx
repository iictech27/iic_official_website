import { HeartIcon } from "@heroicons/react/24/solid";
import React from "react";

export default function MadeBy() {
  return (
    <div className="fixed left-4 bottom-4 z-10 mx-auto flex w-auto items-center justify-center rounded border border-zinc-700 bg-black py-1 px-2 text-xs text-white dark:border-zinc-200 dark:bg-white dark:text-zinc-700 sm:left-8 sm:bottom-10">
      Made with{" "}
      <HeartIcon className="heart mx-1 inline-block h-5 w-5 text-rose-600" />
      by
      <a
        href="https://www.linkedin.com/in/uiuxarghya/"
        className="ml-1 font-semibold text-white dark:text-zinc-700"
        target="_blank"
        rel="noopener noreferrer"
      >
        Arghya Ghosh
      </a>
    </div>
  );
}
