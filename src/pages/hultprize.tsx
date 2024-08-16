import FadeIn from "@/components/animation/FadeIn";
import Header from "@/components/core/Header";
import Head from "next/head";
import Image from "next/legacy/image";
import Link from "next/link";
import React from "react";

export default function HultPrizePage() {
  return (
    <>
      <Head>
        <meta property="og:image" content="https://iictmsl-next.vercel.app/images/hultprize/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:title" content="Hult Prize 2024" />
        <meta property="og:description" content="Welcome to Hult Prize 2024 at TMSL." />
        <meta property="og:url" content="https://iictmsl.vercel.app/hultprize" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="IIC TMSL" />
        <meta property="og:locale" content="en_US" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:site" content="@iictmsl" />
        <meta property="twitter:creator" content="@iictmsl" />
        <meta property="twitter:title" content="Hult Prize 2024" />
        <meta property="twitter:description" content="Welcome to Hult Prize 2024 at TMSL." />
        <meta property="twitter:image" content="https://iictmsl-next.vercel.app/images/hultprize/og-image.png" />
        <meta property="twitter:image:alt" content="Hult Prize 2024" />
        <meta property="twitter:image:width" content="1200" />
        <meta property="twitter:image:height" content="630" />
      </Head>
      <Header
        title="Hult Prize 2024"
        description="Welcome to Hult Prize 2024 at TMSL."
      />
      <div className="fixed right-0 z-10 hidden flex-col items-center gap-y-4 sm:right-4 sm:flex">
        <Link href="https://www.facebook.com/hultprizetmsl/">
          <FacebookLogo className="h-5 text-[#E0097E] dark:text-white sm:h-8" />
        </Link>
        <Link href="https://www.instagram.com/hult_tmsl/">
          <InstagramLogo className="h-5 text-[#E0097E] dark:text-white sm:h-8" />
        </Link>
        <Link href="https://in.linkedin.com/company/iictmsl">
          <LinkedInLogo className="h-5 text-[#E0097E] dark:text-white sm:h-8" />
        </Link>
        <div className="flex pt-10">
          <span className="-rotate-90">Follow us on</span>
        </div>
      </div>
      <FadeIn>
        <div className="pb-8 sm:pb-14">
          <HultPrizeLogo className="mx-auto mb-10 h-8 text-[#1d1e1c] dark:text-white sm:h-10" />
          <h1 className="mb-4 text-center text-5xl font-[800] tracking-tighter sm:flex-row sm:gap-x-3 sm:text-7xl">
            <span className="text-[#E0097E]">
              Welcome to <br />
              Hult Prize 2024
            </span>
          </h1>
          <h2 className="mb-6 text-center text-3xl font-[700] tracking-tighter sm:mb-20 sm:flex-row sm:gap-x-3 sm:text-5xl">
            Techno Main Salt Lake
          </h2>
          <div className="z-10 mb-6 flex flex-row items-center justify-center gap-x-3 sm:hidden">
            <Link href="https://www.facebook.com/hultprizetmsl/">
              <FacebookLogo className="h-6 text-[#E0097E]" />
            </Link>
            <Link href="https://www.instagram.com/hult_tmsl/">
              <InstagramLogo className="h-6 text-[#E0097E]" />
            </Link>
            <Link href="https://in.linkedin.com/company/iictmsl">
              <LinkedInLogo className="h-6 text-[#E0097E]" />
            </Link>
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url(/images/hultprize/tmsl.png)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          className="flex aspect-square rounded-lg shadow-lg sm:aspect-auto sm:h-[90vh]"
        />
      </FadeIn>
      <section className="mx-auto max-w-5xl py-20 sm:py-28">
        <h3 className="mb-14 text-center text-4xl font-bold tracking-tight text-[#E0097E] sm:text-5xl">
          Message from the Campus Director
        </h3>
        <FadeIn
          delay={0.3}
          className="mx-auto flex flex-col items-center sm:flex-row"
        >
          <div className="inline-flex h-72 w-72 flex-shrink-0 items-center justify-center sm:mr-10 sm:h-96 sm:w-96">
            <Image
              src="/images/hultprize/director.png"
              alt="Director"
              className="sm:h-84 sm:w-84 h-72 w-72 rounded-full"
              width={500}
              height={500}
              placeholder="blur"
              blurDataURL="/images/hultprize/director.png"
              loading="lazy"
            />
          </div>
          <div className="mt-6 flex-grow text-center sm:mt-0 sm:text-left">
            <h2 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
              Ankit Gorain
            </h2>
            <p className="mx-auto mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-500 sm:text-left sm:text-xl">
              &ldquo;It&apos;s not everyday that you have an opportunity to
              change the world. I would greatly encourage students to take the
              initiative to solve this year&apos;s Call to Action as it can
              impact not only themselves or their start-up, but the entire
              global fashion industry. This is our chance to show the world that
              our institution is dedicated to Impact.&rdquo;
            </p>
          </div>
        </FadeIn>
      </section>
      <Link
        href="https://www.hultprize.org/2023-hult-prize-challenge/"
        target="_blank"
      >
        <div className="sm:hidden">
          <Image
            src="/images/hultprize/rd-fashion-square.png"
            alt="Hult Prize 2024"
            className="rounded-xl shadow-lg"
            width={500}
            height={500}
            placeholder="blur"
            blurDataURL="/images/hultprize/rd-fashion-square.png"
            loading="lazy"
          />
        </div>
        <div className="hidden sm:block">
          <Image
            src="/images/hultprize/rd-fashion.png"
            alt="Hult Prize 2024"
            className="rounded-xl shadow-lg"
            width={1800}
            height={700}
            placeholder="blur"
            blurDataURL="/images/hultprize/rd-fashion.png"
            loading="lazy"
          />
        </div>
      </Link>
      <section className="mx-auto max-w-6xl py-20 sm:py-28 sm:pt-36">
        <div className="mx-auto flex flex-col sm:flex-row">
          <FadeIn
            delay={0.6}
            className="mt-6 flex-grow text-center sm:mt-0 sm:text-left"
          >
            <h3 className="mb-14 text-center text-4xl font-bold tracking-tight text-[#E0097E] sm:text-5xl">
              Join Us to
            </h3>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              {joinUsList.map((listItem) => (
                <div
                  key={listItem.id}
                  className="group w-full cursor-pointer rounded-xl border border-zinc-200 bg-zinc-50 p-8 shadow transition-all duration-200 ease-in-out hover:bg-[#E0097E] hover:shadow-2xl dark:border-zinc-800 dark:bg-zinc-900 dark:hover:bg-[#E0097E] dark:hover:shadow-xl dark:hover:shadow-[#E0097E]/[7%] sm:p-8"
                >
                  <h2 className="pb-3 text-left text-2xl font-bold text-[#E0097E] group-hover:text-white dark:text-zinc-100 dark:group-hover:text-white">
                    {listItem.name}
                  </h2>
                  {listItem.points?.map((point) => (
                    <li
                      key={point.id}
                      className="mt-2 text-left text-base leading-relaxed text-zinc-600 group-hover:text-zinc-200 dark:text-zinc-500 dark:group-hover:text-zinc-200"
                    >
                      {point.content}
                    </li>
                  ))}
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}

const joinUsList = [
  {
    id: 1,
    name: "Be a leader on your campus",
    points: [
      {
        id: 1,
        content:
          "Lead a team of like-minded students that want to change the world.",
      },
      {
        id: 2,
        content:
          "Position yourself as a local leader in social entrepreneurship.",
      },
      {
        id: 3,
        content:
          "Bring your community together to solve the world’s toughest social challenges.",
      },
    ],
  },
  {
    id: 2,
    name: "Join an international community",
    points: [
      {
        id: 1,
        content: "Meet people from every corner of the world.",
      },
      {
        id: 2,
        content: "Access to global network of experts.",
      },
      {
        id: 3,
        content: "Build your own personal network.",
      },
    ],
  },
  {
    id: 3,
    name: "Make real impact",
    points: [
      {
        id: 1,
        content: "Catalyze ideas to actions.",
      },
      {
        id: 2,
        content:
          "Empower students to solve the world's most pressing challenges through social enterprises.",
      },
      {
        id: 3,
        content: "Find the next Hult Prize 1 million dollars idea.",
      },
    ],
  },
];

// Hult Prize Logo

export function HultPrizeLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 235.179 39.505"
      {...props}
    >
      <g data-name="Grupo 76">
        <path
          fill="currentColor"
          d="M13.882 34.1h9.523v-.662h-.337c-2.018 0-2.692-.558-2.692-3.029V15.962c0-2.159.539-2.785 2.558-2.855v-.661h-8.648v.661h.639c2.086 0 2.658.7 2.658 2.541v6.859H5.653v-6.058c0-2.681.4-3.342 2.793-3.342v-.661H.432v.661c1.851.14 2.423.661 2.423 2.471v15.319c0 1.983-.673 2.541-2.658 2.541h-.2v.662h8.446v-.662h-.1c-2.254 0-2.691-.8-2.691-3.064V23.76h11.93v7.067c0 1.81-.47 2.611-2.658 2.611h-1.042Z"
          data-name="Trazado 15"
        />
        <path
          fill="currentColor"
          d="M91.176 11.919h-.644a.514.514 0 0 1-.369.418 2.119 2.119 0 0 1-.673.1H73.522a2.112 2.112 0 0 1-.674-.1.516.516 0 0 1-.37-.418h-.639l-.01.453-.38 5.187h.632c.189-3.238.75-3.863 2.281-3.863h5.826v17.123c0 1.809-.472 2.61-2.659 2.61h-1.044v.661h9.524v-.661h-.336c-2.02 0-2.694-.557-2.694-3.029V13.699h5.672c1.533 0 1.713.626 1.9 3.864h.631v-5.187Z"
          data-name="Trazado 16"
        />
        <path
          fill="currentColor"
          d="M59.983 31.557V15.509c0-2.158.574-2.4 2.76-2.4h1.245v-.662h-9.925v.662h.469c2.119 0 2.658.766 2.658 2.611v15.422c0 1.775-.574 2.3-2.121 2.3h-1.11v.662h15.043l1.842-4.24h-.712c-1.151 2.079-1.622 2.986-3.857 2.986h-4.943c-.976 0-1.347-.348-1.347-1.289"
          data-name="Trazado 17"
        />
        <path
          fill="currentColor"
          d="M50.367 13.103v-.659h-7.87v.659c2.779.139 3.278.727 3.278 4.054v8.62c0 5.6-3.47 7.347-6.519 7.347-3.189 0-6.519-2.6-6.519-7.347V15.703c0-2.01.809-2.6 2.651-2.6h.3v-.658h-8.606v.658c2.278.035 2.876.382 2.876 2.6v10.183c0 6.985 5.28 9.059 8.677 9.059 6.155 0 8.677-4.718 8.677-9.059v-9.6c0-2.219.811-3.154 3.055-3.188"
          data-name="Trazado 18"
        />
        <path
          fill="currentColor"
          d="M232.339 19.638h-.623c-.165 1.975-.725 2.555-1.915 2.555h-5.911v-8.374h6.969c1.186 0 2.01.614 2.438 3.507h.593l-.263-4.727h-15.838v.642h.726c2.211 0 2.639.818 2.639 2.723v14.355c0 2.041-.462 2.789-3.1 2.789h-.922v.642h17.523l.528-5.066h-.595c-.824 2.927-1.518 3.847-3.825 3.847h-5.091c-1.221 0-1.782-.308-1.782-1.873v-7.245h5.582c1.353 0 1.981.27 2.244 2.688h.623ZM195.99 33.753h19.051l.4-6.154h-.595c-.76 3.642-1.056 4.935-3.533 4.935h-11.681l14.914-19.155v-.781h-17l-.168 4.794h.6c.264-2.892.891-3.574 3.037-3.574h9.8L195.99 32.975Zm-2.8-.642c-2.277 0-2.8-.679-2.8-2.687V15.995c0-2.279.726-2.755 2.8-2.755v-.642h-8.016v.642c1.848.1 2.475.613 2.475 2.45v14.495c0 2.279-.429 2.825-2.475 2.926v.642h8.016Zm-29.405-20.108a13.152 13.152 0 0 1 1.652-.068c5.085 0 6.472 2.45 6.472 5.614 0 4.085-2.41 5.684-6.076 5.684a14.177 14.177 0 0 1-2.048-.067Zm0 11.805c.529.033.958.068 1.685.068.891 0 1.42-.035 2.246-.068a24.457 24.457 0 0 1 3.4 3.029l2.179 2.246c2.934 3.028 4.419 4.316 10.2 4.045v-.609c-2.542-.17-4.555-1.43-6.5-3.437l-2.607-2.69a39.009 39.009 0 0 0-3.761-3.534 5.768 5.768 0 0 0 4.387-5.513c0-3.472-2.736-6.053-8.846-6.053-2.145 0-2.8.034-4.156.1s-3.365.2-4.157.2v.642h.725c1.916 0 2.475.613 2.475 2.723v14.328c0 2.282-.692 2.826-2.639 2.826h-.561v.642h9.337v-.642h-.76c-1.85 0-2.643-.51-2.643-2.551Zm-18.553-11.737a13.009 13.009 0 0 1 2.279-.136c4.392 0 5.415 2.621 5.415 5.275a5.649 5.649 0 0 1-5.911 5.956 8.328 8.328 0 0 1-1.783-.272Zm0 11.466a13.21 13.21 0 0 0 2.806.269c4.888 0 7.987-2.513 7.987-6.5 0-2.621-1.582-6.018-8.481-6.018-.892 0-2.477.034-4.092.1s-3.233.171-4.157.2v.642h1.65c1.155 0 1.551.545 1.551 1.8v16.108c0 1.6-.495 1.973-2.211 1.973h-.462v.642h9.141v-.642h-1.09c-2.081 0-2.642-.716-2.642-2.62Z"
          data-name="Trazado 19"
        />
        <path
          fill="#e0097e"
          d="M111.469 8.626a2.014 2.014 0 1 1-1.945 2.014 1.981 1.981 0 0 1 1.945-2.014"
          data-name="Trazado 20"
        />
        <path
          fill="#e0097e"
          d="M118.761 8.626a2.014 2.014 0 1 1-1.944 2.014 1.979 1.979 0 0 1 1.944-2.014"
          data-name="Trazado 21"
        />
        <path
          fill="#e0097e"
          d="M111.469 3.69a1.45 1.45 0 1 1-1.4 1.45 1.425 1.425 0 0 1 1.4-1.45"
          data-name="Trazado 22"
        />
        <path
          fill="#e0097e"
          d="M118.761 3.69a1.45 1.45 0 1 1-1.4 1.45 1.426 1.426 0 0 1 1.4-1.45"
          data-name="Trazado 23"
        />
        <path
          fill="#e0097e"
          d="M111.469 0a1.208 1.208 0 1 1-1.167 1.208A1.188 1.188 0 0 1 111.469 0"
          data-name="Trazado 24"
        />
        <path
          fill="#e0097e"
          d="M118.761 0a1.208 1.208 0 1 1-1.167 1.208A1.189 1.189 0 0 1 118.761 0"
          data-name="Trazado 25"
        />
        <path
          fill="#e0097e"
          d="M104.938 14.554a1.9 1.9 0 0 1 2.751 0 2.063 2.063 0 0 1 0 2.846 1.9 1.9 0 0 1-2.751 0 2.065 2.065 0 0 1 0-2.846"
          data-name="Trazado 26"
        />
        <path
          fill="#e0097e"
          d="M110.094 9.219a1.9 1.9 0 0 1 2.752 0 2.06 2.06 0 0 1 0 2.845 1.9 1.9 0 0 1-2.749 0 2.062 2.062 0 0 1 0-2.847"
          data-name="Trazado 27"
        />
        <path
          fill="#e0097e"
          d="M101.565 11.064a1.367 1.367 0 0 1 1.979 0 1.482 1.482 0 0 1 0 2.049 1.364 1.364 0 0 1-1.978 0 1.483 1.483 0 0 1 0-2.049"
          data-name="Trazado 28"
        />
        <path
          fill="#e0097e"
          d="M106.72 5.73a1.368 1.368 0 0 1 1.98 0 1.482 1.482 0 0 1 0 2.048 1.364 1.364 0 0 1-1.978 0 1.485 1.485 0 0 1 0-2.048"
          data-name="Trazado 29"
        />
        <path
          fill="#e0097e"
          d="M99.043 8.454a1.14 1.14 0 0 1 1.65 0 1.235 1.235 0 0 1 0 1.706 1.137 1.137 0 0 1-1.649 0 1.236 1.236 0 0 1 0-1.706"
          data-name="Trazado 30"
        />
        <path
          fill="#e0097e"
          d="M104.199 3.119a1.14 1.14 0 0 1 1.65 0 1.236 1.236 0 0 1 0 1.706 1.138 1.138 0 0 1-1.65 0 1.235 1.235 0 0 1 0-1.706"
          data-name="Trazado 31"
        />
        <path
          fill="#e0097e"
          d="M125.292 14.554a1.9 1.9 0 0 0-2.75 0 2.06 2.06 0 0 0 0 2.846 1.9 1.9 0 0 0 2.75 0 2.063 2.063 0 0 0 0-2.846"
          data-name="Trazado 32"
        />
        <path
          fill="#e0097e"
          d="M120.132 9.219a1.9 1.9 0 0 0-2.753 0 2.064 2.064 0 0 0 0 2.845 1.9 1.9 0 0 0 2.749 0 2.062 2.062 0 0 0 0-2.847"
          data-name="Trazado 33"
        />
        <path
          fill="#e0097e"
          d="M128.666 11.064a1.369 1.369 0 0 0-1.981 0 1.486 1.486 0 0 0 0 2.049 1.366 1.366 0 0 0 1.979 0 1.484 1.484 0 0 0 0-2.049"
          data-name="Trazado 34"
        />
        <path
          fill="#e0097e"
          d="M123.51 5.73a1.37 1.37 0 0 0-1.981 0 1.482 1.482 0 0 0 0 2.048 1.364 1.364 0 0 0 1.978 0 1.483 1.483 0 0 0 0-2.048"
          data-name="Trazado 35"
        />
        <path
          fill="#e0097e"
          d="M131.188 8.454a1.14 1.14 0 0 0-1.65 0 1.233 1.233 0 0 0 0 1.706 1.137 1.137 0 0 0 1.649 0 1.236 1.236 0 0 0 0-1.706"
          data-name="Trazado 36"
        />
        <path
          fill="#e0097e"
          d="M126.032 3.119a1.14 1.14 0 0 0-1.65 0 1.237 1.237 0 0 0 0 1.706 1.138 1.138 0 0 0 1.65 0 1.237 1.237 0 0 0 0-1.706"
          data-name="Trazado 37"
        />
        <path
          fill="#e0097e"
          d="M104.938 24.944a1.9 1.9 0 0 0 2.751 0 2.061 2.061 0 0 0 0-2.844 1.9 1.9 0 0 0-2.751 0 2.063 2.063 0 0 0 0 2.844"
          data-name="Trazado 38"
        />
        <path
          fill="#e0097e"
          d="M110.094 30.278a1.9 1.9 0 0 0 2.752 0 2.06 2.06 0 0 0 0-2.845 1.9 1.9 0 0 0-2.749 0 2.06 2.06 0 0 0 0 2.845"
          data-name="Trazado 39"
        />
        <path
          fill="#e0097e"
          d="M101.565 28.435a1.366 1.366 0 0 0 1.979 0 1.481 1.481 0 0 0 0-2.048 1.363 1.363 0 0 0-1.978 0 1.485 1.485 0 0 0 0 2.05"
          data-name="Trazado 40"
        />
        <path
          fill="#e0097e"
          d="M106.72 33.769a1.368 1.368 0 0 0 1.98 0 1.483 1.483 0 0 0 0-2.049 1.366 1.366 0 0 0-1.978 0 1.486 1.486 0 0 0 0 2.049"
          data-name="Trazado 41"
        />
        <path
          fill="#e0097e"
          d="M99.043 31.044a1.138 1.138 0 0 0 1.65 0 1.235 1.235 0 0 0 0-1.706 1.134 1.134 0 0 0-1.649 0 1.236 1.236 0 0 0 0 1.706"
          data-name="Trazado 42"
        />
        <path
          fill="#e0097e"
          d="M104.199 36.378a1.14 1.14 0 0 0 1.65 0 1.237 1.237 0 0 0 0-1.707 1.138 1.138 0 0 0-1.65 0 1.236 1.236 0 0 0 0 1.707"
          data-name="Trazado 43"
        />
        <path
          fill="#e0097e"
          d="M125.292 24.944a1.9 1.9 0 0 1-2.75 0 2.058 2.058 0 0 1 0-2.844 1.9 1.9 0 0 1 2.75 0 2.061 2.061 0 0 1 0 2.844"
          data-name="Trazado 44"
        />
        <path
          fill="#e0097e"
          d="M120.132 30.278a1.9 1.9 0 0 1-2.753 0 2.064 2.064 0 0 1 0-2.845 1.9 1.9 0 0 1 2.749 0 2.06 2.06 0 0 1 0 2.845"
          data-name="Trazado 45"
        />
        <path
          fill="#e0097e"
          d="M128.666 28.435a1.368 1.368 0 0 1-1.981 0 1.485 1.485 0 0 1 0-2.048 1.364 1.364 0 0 1 1.979 0 1.486 1.486 0 0 1 0 2.05"
          data-name="Trazado 46"
        />
        <path
          fill="#e0097e"
          d="M123.51 33.769a1.37 1.37 0 0 1-1.981 0 1.483 1.483 0 0 1 0-2.049 1.366 1.366 0 0 1 1.978 0 1.484 1.484 0 0 1 0 2.049"
          data-name="Trazado 47"
        />
        <path
          fill="#e0097e"
          d="M131.188 31.044a1.138 1.138 0 0 1-1.65 0 1.233 1.233 0 0 1 0-1.706 1.134 1.134 0 0 1 1.649 0 1.236 1.236 0 0 1 0 1.706"
          data-name="Trazado 48"
        />
        <path
          fill="#e0097e"
          d="M126.032 36.378a1.14 1.14 0 0 1-1.65 0 1.238 1.238 0 0 1 0-1.707 1.138 1.138 0 0 1 1.65 0 1.238 1.238 0 0 1 0 1.707"
          data-name="Trazado 49"
        />
        <path
          fill="#e0097e"
          d="M111.469 30.877a2.013 2.013 0 1 0-1.945-2.013 1.979 1.979 0 0 0 1.945 2.013"
          data-name="Trazado 50"
        />
        <path
          fill="#e0097e"
          d="M118.761 30.877a2.013 2.013 0 1 0-1.944-2.013 1.978 1.978 0 0 0 1.944 2.013"
          data-name="Trazado 51"
        />
        <path
          fill="#e0097e"
          d="M111.469 35.812a1.449 1.449 0 1 0-1.4-1.447 1.424 1.424 0 0 0 1.4 1.447"
          data-name="Trazado 52"
        />
        <path
          fill="#e0097e"
          d="M118.761 35.812a1.449 1.449 0 1 0-1.4-1.447 1.425 1.425 0 0 0 1.4 1.447"
          data-name="Trazado 53"
        />
        <path
          fill="#e0097e"
          d="M111.469 39.505a1.207 1.207 0 1 0-1.167-1.209 1.189 1.189 0 0 0 1.167 1.209"
          data-name="Trazado 54"
        />
        <path
          fill="#e0097e"
          d="M118.761 39.505a1.207 1.207 0 1 0-1.167-1.209 1.189 1.189 0 0 0 1.167 1.209"
          data-name="Trazado 55"
        />
        <path
          fill="#e0097e"
          d="M125.861 23.519a1.946 1.946 0 1 0-1.945 2.013 1.979 1.979 0 0 0 1.945-2.013"
          data-name="Trazado 56"
        />
        <path
          fill="#e0097e"
          d="M125.861 15.978a1.946 1.946 0 1 0-1.945 2.012 1.98 1.98 0 0 0 1.945-2.012"
          data-name="Trazado 57"
        />
        <path
          fill="#e0097e"
          d="M130.632 23.519a1.4 1.4 0 1 0-1.4 1.447 1.423 1.423 0 0 0 1.4-1.447"
          data-name="Trazado 58"
        />
        <path
          fill="#e0097e"
          d="M130.632 15.977a1.4 1.4 0 1 0-1.4 1.45 1.422 1.422 0 0 0 1.4-1.45"
          data-name="Trazado 59"
        />
        <path
          fill="#e0097e"
          d="M134.199 23.519a1.167 1.167 0 1 0-1.166 1.207 1.187 1.187 0 0 0 1.166-1.207"
          data-name="Trazado 60"
        />
        <path
          fill="#e0097e"
          d="M134.199 15.977a1.167 1.167 0 1 0-1.166 1.207 1.187 1.187 0 0 0 1.166-1.207"
          data-name="Trazado 61"
        />
        <path
          fill="#e0097e"
          d="M104.358 15.977a1.946 1.946 0 1 0 1.946-2.013 1.98 1.98 0 0 0-1.946 2.013"
          data-name="Trazado 62"
        />
        <path
          fill="#e0097e"
          d="M104.358 23.519a1.946 1.946 0 1 0 1.946-2.012 1.981 1.981 0 0 0-1.946 2.012"
          data-name="Trazado 63"
        />
        <path
          fill="#e0097e"
          d="M99.587 15.977a1.4 1.4 0 1 0 1.4-1.447 1.427 1.427 0 0 0-1.4 1.447"
          data-name="Trazado 64"
        />
        <path
          fill="#e0097e"
          d="M99.587 23.519a1.4 1.4 0 1 0 1.4-1.449 1.423 1.423 0 0 0-1.4 1.449"
          data-name="Trazado 65"
        />
        <path
          fill="#e0097e"
          d="M96.02 15.977a1.167 1.167 0 1 0 1.167-1.207 1.188 1.188 0 0 0-1.167 1.207"
          data-name="Trazado 66"
        />
        <path
          fill="#e0097e"
          d="M96.02 23.519a1.167 1.167 0 1 0 1.167-1.207 1.188 1.188 0 0 0-1.167 1.207"
          data-name="Trazado 67"
        />
      </g>
    </svg>
  );
}

// Social media icons.

export function FacebookLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
      <title>Facebook</title>
      <path
        d="M480 257.35c0-123.7-100.3-224-224-224s-224 100.3-224 224c0 111.8 81.9 204.47 189 221.29V322.12h-56.89v-64.77H221V208c0-56.13 33.45-87.16 84.61-87.16 24.51 0 50.15 4.38 50.15 4.38v55.13H327.5c-27.81 0-36.51 17.26-36.51 35v42h62.12l-9.92 64.77H291v156.54c107.1-16.81 189-109.48 189-221.31z"
        fill-rule="evenodd"
        fill="currentColor"
      />
    </svg>
  );
}

export function InstagramLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
      <title>Instagram</title>
      <path
        d="M349.33 69.33a93.62 93.62 0 0193.34 93.34v186.66a93.62 93.62 0 01-93.34 93.34H162.67a93.62 93.62 0 01-93.34-93.34V162.67a93.62 93.62 0 0193.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32z"
        fill="currentColor"
      />
      <path
        d="M377.33 162.67a28 28 0 1128-28 27.94 27.94 0 01-28 28zM256 181.33A74.67 74.67 0 11181.33 256 74.75 74.75 0 01256 181.33m0-37.33a112 112 0 10112 112 112 112 0 00-112-112z"
        fill="currentColor"
      />
    </svg>
  );
}

export function LinkedInLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
      <title>Linkedin</title>
      <path
        d="M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32zm-273.3 373.43h-64.18V205.88h64.18zM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z"
        fill="currentColor"
      />
    </svg>
  );
}
