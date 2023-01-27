export default function Hero() {
  return (
    <div>
      <div className="hidden sm:mb-8 sm:flex sm:justify-center">
        <div className="relative overflow-hidden rounded-full py-1.5 px-4 text-sm leading-6 ring-1 ring-zinc-900/10 transition-colors duration-150 ease-in-out hover:ring-zinc-900/20 dark:ring-zinc-600/60 dark:hover:ring-zinc-400/80">
          <span className="text-zinc-600 dark:text-zinc-500">
            ✨ Introducing our site 1.0 ✨
          </span>
        </div>
      </div>
      <div>
        <h1 className="flex flex-col justify-center text-center text-7xl font-[800] tracking-tighter sm:gap-x-3 sm:text-[100px] lg:flex-row">
          <span className="text-black dark:text-white">Invent.</span>
          <span className="bg-gradient-to-r from-violet-600 to-rose-500 bg-clip-text text-transparent">
            Innovate.
          </span>
          <span className="text-black dark:text-white">Create.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-center text-xl leading-8 text-zinc-600 dark:text-zinc-500">
          IIC TMSL provides a platform to aid in the overall development of
          entrepreneurship and innovation culture among students.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-y-4 sm:flex-row sm:gap-x-4">
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
        </div>
      </div>
    </div>
  );
}
