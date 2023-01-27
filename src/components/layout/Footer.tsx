import Logo from "@/components/core/Logo";

export default function Footer() {
  return (
    <footer className="border-t-2 border-zinc-200 text-zinc-600 dark:border-zinc-800 dark:bg-black">
      <div className="container mx-auto mt-10 flex flex-col flex-wrap py-4 px-5 pb-14 sm:flex-row">
        <div className="flex flex-col pb-4">
          <div className="mx-auto flex-shrink-0 pb-4 text-center md:mx-0 md:text-left">
            <a className="flex items-center justify-center font-medium text-zinc-900 md:justify-start">
              <Logo className="h-10 w-10 text-[rgb(10,30,89)] dark:text-white" />

              <span className="ml-3 text-3xl font-bold text-[rgb(10,30,89)] dark:text-white">
                TMSL
              </span>
            </a>
            <p className="mt-2 text-sm text-zinc-500">
              A Govt. of India - MoE Initiative
            </p>
          </div>
          <p className="text-center text-sm text-zinc-500 sm:text-left">
            &copy; {new Date().getFullYear()} IIC TMSL. All rights reserved.
          </p>
        </div>

        <span className="mt-2 inline-flex justify-center sm:ml-auto sm:mt-0 sm:justify-start">
          <a className="text-zinc-500">
            <svg
              fill="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="h-5 w-5"
              viewBox="0 0 24 24"
            >
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </a>
          <a className="ml-4 text-zinc-500">
            <svg
              fill="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="h-5 w-5"
              viewBox="0 0 24 24"
            >
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
            </svg>
          </a>
          <a className="ml-4 text-zinc-500">
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="h-5 w-5"
              viewBox="0 0 24 24"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </a>
          <a className="ml-4 text-zinc-500">
            <svg
              fill="currentColor"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="0"
              className="h-5 w-5"
              viewBox="0 0 24 24"
            >
              <path
                stroke="none"
                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
              ></path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
          </a>
        </span>
      </div>
    </footer>
  );
}
