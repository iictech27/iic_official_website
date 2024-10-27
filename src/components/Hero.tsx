/* eslint-disable @next/next/no-html-link-for-pages */
import FadeIn from "@/components/animation/FadeIn";
import Link from "next/link"; 

export default function Hero() {
  return (
    <div>
      <div className="mb-8 mt-16 sm:flex sm:justify-center">
        <div className="relative w-auto overflow-hidden rounded-full py-1.5 text-sm leading-6 ring-1 ring-zinc-900/10 transition-colors duration-150 ease-in-out hover:ring-zinc-900/20 dark:ring-zinc-600/60 dark:hover:ring-zinc-400/80 sm:px-4">
        <a
            href="/countdown"
            className="flex justify-center gap-x-2 font-medium text-[#1d1e1c] dark:text-white sm:text-lg"
          >
            {/* <HultPrizeLogo className="h-5 text-[#1d1e1c] dark:text-white sm:h-6" /> */}
            Check our
            <span className="bg-gradient-to-r from-violet-600 to-rose-500 bg-clip-text text-transparent">
              HACKATHON&apos;s
            </span>
            result
            <span
              className="text-black group-hover:text-white dark:text-white dark:group-hover:text-black"
              aria-hidden="true"
            >
              &#8599;
            </span>
          </a>
        </div>

        <span className="relative right-1 hidden h-5 w-5 animate-bounce items-center justify-center sm:flex">
          <span className="absolute inline-flex h-full w-full animate-ping rounded bg-[#E0097E] opacity-75"></span>
          <span className="relative inline-flex rounded bg-[#E0097E] p-0.5 px-1 text-xs text-white">
            New
          </span>
        </span>
      </div>
      <div>
        <FadeIn delay={0.15}>
          <h1 className="flex flex-col justify-center text-center text-7xl font-[800] tracking-tighter sm:gap-x-3 sm:text-[100px] lg:flex-row">
            <span className="text-black dark:text-white">Invent.</span>
            <span className="bg-gradient-to-r from-violet-600 to-rose-500 bg-clip-text text-transparent">
              Innovate.
            </span>
            <span className="text-black dark:text-white">Create.</span>
          </h1>
        </FadeIn>
        <FadeIn delay={0.3}>
          <p className="mx-auto mt-6 max-w-3xl text-center text-xl leading-8 text-zinc-600 dark:text-zinc-500">
            IIC TMSL provides a platform to aid in the overall development of
            entrepreneurship and innovation culture among students.
          </p>
        </FadeIn>
        <FadeIn
          delay={0.45}
          className="mt-8 flex flex-col justify-center gap-y-4 sm:flex-row sm:gap-x-4"
        >
          <a
            href="#"
            className="inline-block rounded-md bg-black px-4 py-3 text-center text-lg font-medium leading-7 text-white shadow-sm ring-1 ring-black/50 transition-colors duration-150 ease-in-out hover:bg-white hover:text-black hover:ring-black/20 dark:bg-white dark:text-black dark:hover:bg-zinc-900 dark:hover:text-white sm:py-2"
          >
            Get started{" "}
          </a>
          <a
            href="#about"
            className="group inline-block rounded-md bg-white px-4 py-3 text-center text-lg font-medium leading-7 text-black shadow-sm ring-1 ring-black/20 transition-colors duration-150 ease-in-out hover:bg-black hover:text-white hover:ring-black/50 dark:bg-black dark:text-white dark:ring-white/40 dark:hover:bg-white dark:hover:text-black sm:py-2"
          >
            Learn more{" "}
            <span
              className="text-black group-hover:text-white dark:text-white dark:group-hover:text-black"
              aria-hidden="true"
            >
              &darr;
            </span>
          </a>
        </FadeIn>
      </div>

      <Link href="/feedback">
        <button className="fixed bottom-8 right-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-3 text-white shadow-lg transition-transform transform hover:scale-105 focus:outline-none">
          Feedback
        </button>
      </Link>
    </div>
  );
}
