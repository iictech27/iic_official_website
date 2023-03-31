import FadeIn from "@/components/animation/FadeIn";
import Header from "@/components/core/Header";
import Title from "@/components/core/Title";
import type { NextPage } from "next";
import Image from "next/legacy/image";

const FacultyPage: NextPage = () => {
  return (
    <>
      <Header title="Faculty" description="Faculty members of IIC TMSL." />
      <div>
        <Title title="Faculty" />
        <FadeIn delay={0.15}>
          <h2 className="mx-auto mt-6 max-w-3xl text-center text-2xl leading-8 text-zinc-600 dark:text-zinc-500">
            Faculty members of IIC TMSL.
          </h2>
        </FadeIn>
        <section>
          <FadeIn delay={0.45} className="container mx-auto py-24">
            <h2 className="mb-20 text-center text-4xl font-bold tracking-tight sm:text-5xl">
              Director
            </h2>
            <div className="mx-auto -mb-10 -mt-4 flex flex-wrap sm:-m-4">
              {directorList.map((director) => (
                <div
                  key={director.id}
                  className="mx-auto mb-6 p-4 sm:mb-0 md:w-1/3"
                >
                  <div className="mx-auto aspect-square h-56 w-56 overflow-hidden rounded-full border border-zinc-200 shadow-md transition-all duration-150  ease-in-out hover:scale-110 hover:shadow-xl active:scale-95 dark:border-zinc-800">
                    <Image
                      alt={director.name}
                      className="h-56 w-56 rounded-full object-cover object-center"
                      src={director.image}
                      width={300}
                      height={300}
                      placeholder="blur"
                      blurDataURL={director.image}
                      loading="lazy"
                    />
                  </div>
                  <h2 className="mt-5 text-center text-xl font-bold text-zinc-900 dark:text-zinc-100">
                    {director.name}
                  </h2>
                  <p className="mt-2 text-center text-base leading-relaxed text-zinc-600 dark:text-zinc-500">
                    {director.role}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </section>
        <section>
          <FadeIn delay={0.75} className="container mx-auto py-24">
            <h2 className="mb-20 text-center text-4xl font-bold tracking-tight sm:text-5xl">
              Faculty
            </h2>
            <div className="mx-auto -mb-10 -mt-4 flex flex-wrap sm:-m-4">
              {facultylist.map((faculty) => (
                <div
                  key={faculty.id}
                  className="mx-auto mb-6 w-full p-4 sm:mb-0 sm:w-1/3 sm:p-10"
                >
                  <div className="mx-auto aspect-square h-56 w-56 overflow-hidden rounded-full border border-zinc-200 shadow-md transition-all duration-150 ease-in-out hover:scale-110 hover:shadow-xl active:scale-95 dark:border-zinc-800">
                    <Image
                      alt={faculty.name}
                      className="h-56 w-56 rounded-full object-cover object-center"
                      src={faculty.image}
                      width={300}
                      height={300}
                      placeholder="blur"
                      blurDataURL={faculty.image}
                      loading="lazy"
                    />
                  </div>
                  <h2 className="mt-5 text-center text-xl font-bold text-zinc-900 dark:text-zinc-100">
                    {faculty.name}
                  </h2>
                  <p className="mt-2 text-center text-base leading-relaxed text-zinc-600 dark:text-zinc-500">
                    {faculty.role}
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

export default FacultyPage;

const directorList = [
  {
    id: 1,
    name: "Meghdut Roy Chowdhury",
    role: "Director of Global Operations, Techno India Group",
    image: "/images/faculty/img1.jpg",
  },
  {
    id: 2,
    name: "Pauline Laravoire",
    role: "Sustainability Director, Techno India Group",
    image: "/images/faculty/img2.jpg",
  },
  {
    id: 3,
    name: "Dr.Avijit Kar",
    role: "Principal & Director, Techno Main Salt Lake",
    image: "/images/faculty/img3.jpg",
  },
];

const facultylist = [
  {
    id: 1,
    name: "Prof. Soumitra Sasmal",
    role: "Registrar, Techno Main Salt Lake",
    image: "/images/faculty/img4.jpg",
  },
  {
    id: 2,
    name: "Prof. Subhajit Bhowmick",
    role: "President, IIC - Techno Main Salt Lake",
    image: "/images/faculty/subhajit.jpg",
  },
  {
    id: 3,
    name: "Prof. Sudipta Chakraborty",
    role: "Teacher Convenor, IIC TMSL",
    image: "/images/faculty/sudipta.jpg",
  },
  {
    id: 4,
    name: "Dr. Uttam Kr. Sarkar",
    role: "Co-Convenor, IIC TMSL",
    image: "/images/faculty/uttam.jpg",
  },
  {
    id: 5,
    name: "Dr. Krishnau Mandal",
    role: "Member, IIC TMSL",
    image: "/images/faculty/KRISH.jpg",
  },
  {
    id: 6,
    name: "Dr. Arijit Maity",
    role: "Member, IIC TMSL",
    image: "/images/faculty/arijit.jpg",
  },
  {
    id: 7,
    name: "Dr. Arup Saha Chaudhuri",
    role: "Member, IIC TMSL",
    image: "/images/faculty/arup.jpg",
  },
  {
    id: 8,
    name: "Dr. Alok Kumar Mohanty",
    role: "Member, IIC TMSL",
    image: "/images/faculty/ALOK.jpg",
  },
];
