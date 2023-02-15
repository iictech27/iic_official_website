import FadeIn from "@/components/animation/FadeIn";
import Title from "@/components/core/Title";
import CuteDog from "@/components/illustrations/CuteDog";
import OurVision from "@/components/illustrations/OurVision";
import type { NextPage } from "next";

const AboutPage: NextPage = () => {
  return (
    <div>
      <Title title="About Us" />
      <FadeIn delay={0.15}>
        <h2 className="mx-auto mt-6 max-w-3xl text-center text-2xl leading-8 text-zinc-600 dark:text-zinc-500">
          &ldquo; We want to create a vibrant local innovation ecosystem. IIC
          TMSL is the Start-up supporting Mechanism of Techno Main Salt Lake. We
          want to establish Function Ecosystem for Scouting Ideas and
          Pre-incubation of Ideas and want to develop better Cognitive Ability
          for TMSL Students. &rdquo;
        </h2>
      </FadeIn>

      <section className="mx-auto max-w-5xl py-24 sm:py-40">
        <FadeIn
          delay={0.3}
          className="mx-auto mb-10 flex flex-col items-center pb-20 sm:flex-row"
        >
          <div className="inline-flex h-72 w-72 flex-shrink-0 items-center justify-center sm:mr-10 sm:h-96 sm:w-96">
            <CuteDog className="w-96" />
          </div>
          <div className="mt-6 flex-grow text-center sm:mt-0 sm:text-left">
            <h2 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
              What is IIC?
            </h2>
            <p className="mx-auto mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-500 sm:text-left sm:text-xl">
              Ministry of Human Resource Development (MHRD), Govt. of India has
              established <q>MHRD</q>s Innovation Cell (MIC)&apos; to
              systematically foster the culture of Innovation amongst all Higher
              Education Institutions (HEIs). The primary mandate of MIC is to
              encourage, inspire and nurture young students by supporting them
              to work with new ideas and transform them into prototypes while
              they are informative years. MIC has envisioned encouraging
              creation of <q>Institution</q>s Innovation Council (IICs)&apos;
              across selected HEIs.
            </p>
          </div>
        </FadeIn>
        <FadeIn
          delay={0.45}
          className="mx-auto mb-10 flex flex-col items-center pb-20 sm:flex-row"
        >
          <div className="mt-6 flex-grow text-center sm:mt-0 sm:text-left">
            <h2 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
              Our Vision
            </h2>
            <p className="mx-auto mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-500 sm:text-left sm:text-xl">
              We want to create a vibrant local innovation ecosystem. IIC TMSL
              is the Start-up supporting Mechanism of Techno Main Saltlake. We
              want to establish Function Ecosystem for Scouting Ideas and
              Pre-incubation of Ideas and want to develop better Cognitive
              Ability for TMSL Students.
            </p>
          </div>
          <div className="order-first inline-flex h-72 w-72 flex-shrink-0 items-center justify-center sm:order-none sm:ml-10 sm:h-96 sm:w-96">
            <OurVision className="w-96" />
          </div>
        </FadeIn>
        <div className="mx-auto flex flex-col sm:flex-row">
          <FadeIn
            delay={0.6}
            className="mt-6 flex-grow text-center sm:mt-0 sm:text-left"
          >
            <h2 className="mb-6 text-center text-4xl font-bold tracking-tight sm:text-5xl">
              Our Functions
            </h2>
            <ol className="mx-auto ml-6 mt-8 grid list-decimal grid-cols-1 gap-y-4 gap-x-14 text-left text-lg leading-8 text-zinc-600 dark:text-zinc-500 sm:grid-cols-2">
              {functionsList.map((item) => (
                <li key={item.id}>{item.title}</li>
              ))}
            </ol>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

const functionsList = [
  {
    id: 1,
    title:
      "To conduct various innovation and entrepreneurship-related activities prescribed by Central MIC in time bound fashion.",
  },
  {
    id: 2,
    title: "Identify and reward innovations and share success stories.",
  },
  {
    id: 3,
    title:
      "Organize periodic workshops/seminars/interactions with entrepreneurs, investors, and professionals and create a mentor pool for student innovators.",
  },
  {
    id: 4,
    title:
      "Network with peers and national entrepreneurship development organizations.",
  },
  {
    id: 5,
    title:
      "Create an Institution's Innovation portal to highlight innovative projects; carried out by the institution's faculty and students.",
  },
  {
    id: 6,
    title:
      "Organize Hackathons, idea competitions, business fairs, mini-challenges, etc., with the involvement of industries.",
  },
  {
    id: 7,
    title: "Organize industrial visits once or twice a year.",
  },
  {
    id: 8,
    title:
      "Build a start-up registration point where budding start-ups across the college can register their companies.",
  },
  {
    id: 9,
    title: "Conduct seminar/ workshop on latest technologies.",
  },
];
