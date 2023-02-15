import FadeIn from "@/components/animation/FadeIn";
import Header from "@/components/core/Header";
import Title from "@/components/core/Title";
import LinkedIn from "@/components/logos/LinkedIn";
import type { NextPage } from "next";
import Image from "next/legacy/image";
import Link from "next/link";

const AlumniPage: NextPage = () => {
  return (
    <>
      <Header title="Our Alumni" description="Alumni of IIC TMSL." />
      <div>
        <Title title="Alumni" />
        <FadeIn delay={0.15}>
          <h2 className="mx-auto mt-6 max-w-3xl text-center text-2xl leading-8 text-zinc-600 dark:text-zinc-500">
            Alumni of IIC TMSL.
          </h2>
          <p className="mt-5 flex items-center justify-center text-center text-xs sm:text-sm">
            Tip: Click on the Images to visit their{" "}
            <LinkedIn className="h-3 w-auto px-1 text-black dark:text-white sm:h-4" />{" "}
            Profiles
          </p>
        </FadeIn>

        <section>
          <FadeIn delay={0.6} className="container mx-auto py-24">
            <h2 className="mb-20 text-center text-4xl font-bold tracking-tight sm:text-5xl">
              Heads and Co-Heads
            </h2>
            <div className="mx-auto -mb-10 -mt-4 flex flex-wrap sm:-m-4">
              {alumniList.map((alumni) => (
                <div
                  key={alumni.id}
                  className="mx-auto mb-6 w-full p-4 sm:mb-0 sm:w-1/4 sm:p-10"
                >
                  <Link
                    href={`https://www.linkedin.com/in/${alumni.linkedIn}`}
                    target="_blank"
                  >
                    <div className="mx-auto aspect-square h-48 w-48 overflow-hidden rounded-full border border-zinc-200 shadow-md transition-all duration-150 ease-in-out hover:scale-110 hover:shadow-xl active:scale-95 dark:border-zinc-800">
                      <Image
                        alt={alumni.name}
                        className="h-48 w-48 rounded-full border object-cover object-center"
                        src={alumni.image}
                        width={200}
                        height={200}
                        placeholder="blur"
                        blurDataURL={alumni.image}
                        loading="lazy"
                      />
                    </div>
                  </Link>

                  <h2 className="mt-5 text-center text-xl font-bold text-zinc-900 dark:text-zinc-100">
                    {alumni.name}
                  </h2>
                  <p className="mt-2 text-center text-sm leading-relaxed text-zinc-600 dark:text-zinc-500">
                    {alumni.role}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </section>
      </div>
    </>
  );
};

export default AlumniPage;

const alumniList = [
  {
    id: 1,
    name: "Animesh Gaurav",
    role: "Student Head (2017-2018)",
    image: "/images/alumni/img1.jpeg",
    linkedIn: "gauravanimesh",
  },
  {
    id: 2,
    name: "Rahul Kumar Singh",
    role: "Student Head (2018-2019)",
    image: "/images/alumni/img2.jpeg",
    linkedIn: "rahul-kumar-singh31",
  },
  {
    id: 3,
    name: "Prince Shaw",
    role: "Student Co-Head (2018-2019)",
    image: "/images/alumni/img3.jpeg",
    linkedIn: "prince-shaw-bb8a9915b",
  },
  {
    id: 4,
    name: "Medha Bose Roy",
    role: "Student Co-Head (2018-2019)",
    image: "/images/alumni/img4.jpeg",
    linkedIn: "medha-bose-roy-8263a7160",
  },
  {
    id: 5,
    name: "Kaushik Ghosh",
    role: "Student Head (2019-2020)",
    image: "/images/alumni/img5.jpeg",
    linkedIn: "kaushikthinks",
  },
  {
    id: 6,
    name: "Ritwik Gupta",
    role: "Student Co-Head (2019-2020)",
    image: "/images/alumni/img6.jpeg",
    linkedIn: "ritwik-gupta-178867130",
  },
  {
    id: 7,
    name: "Poulami Chakrabarty",
    role: "Outreach Head (2019-2020)",
    image: "/images/alumni/img7.jpeg",
    linkedIn: "poulami-chakrabarty-b93a7316a",
  },
  {
    id: 8,
    name: "Somesh Garodia",
    role: "Finance Head (2019-2020)",
    image: "/images/alumni/img8.jpeg",
    linkedIn: "somesh-garodia-074090141",
  },
  {
    id: 9,
    name: "Sumit Kumar Mahato",
    role: "PR Head (2019-2020)",
    image: "/images/alumni/img9.jpeg",
    linkedIn: "",
  },
  {
    id: 10,
    name: "Harsh Rahman",
    role: "Management Head (2019-2020)",
    image: "/images/alumni/img10.jpeg",
    linkedIn: "",
  },
];
