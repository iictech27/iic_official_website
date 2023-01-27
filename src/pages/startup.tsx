import Header from "@/components/core/Header";
import Title from "@/components/core/Title";
import type { NextPage } from "next";

const StartupPage: NextPage = () => {
  return (
    <>
      <Header
        title="Startup's"
        description="Startup's supported by IIC TMSL."
      />
      <div>
        <Title title="Startup's" />
        <div>
          <h2 className="mx-auto mt-6 max-w-3xl text-center text-2xl leading-8 text-zinc-600 dark:text-zinc-500">
            Startup&apos;s supported by IIC TMSL.
          </h2>
        </div>
        <section>
          <div className="container mx-auto py-24">
            <h2 className="mb-20 text-center text-4xl font-bold tracking-tight sm:text-5xl">
              IIC-SMP
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-center text-2xl leading-8 text-zinc-600 dark:text-zinc-500">
              IICSMP is the start-up mentor-ship program of IIC-TMSL. We are
              currently working with 15+ start-ups. It is an initiative to
              support start-ups from Ideation Stage to Company Registration
              Stage.
            </p>
          </div>
        </section>
        <section>
          <div className="container mx-auto py-24">
            <h2 className="mb-20 text-center text-4xl font-bold tracking-tight sm:text-5xl">
              Our Startup&apos;s
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              {startupList.map((startup) => (
                <div
                  key={startup.id}
                  className="group w-full cursor-pointer rounded-xl border border-zinc-200 bg-zinc-50 p-4 shadow transition-all duration-200 ease-in-out hover:bg-zinc-900 hover:shadow-2xl dark:border-zinc-800 dark:bg-zinc-900 dark:hover:bg-white dark:hover:shadow-xl dark:hover:shadow-white/[7%] sm:p-8"
                >
                  <h2 className="text-left text-2xl font-bold text-zinc-900 group-hover:text-white dark:text-zinc-100 dark:group-hover:text-black">
                    {startup.name}
                  </h2>
                  <p className="mt-2 text-left text-sm leading-relaxed text-zinc-600 group-hover:text-zinc-400 dark:text-zinc-500 dark:group-hover:text-zinc-600">
                    {startup.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default StartupPage;

const startupList = [
  {
    id: 1,
    name: "Majdoor Mera Naam",
    description:
      "Majdoor Mera Naam Pvt. Ltd. is linking the internet and social media in order to create a better platform in which labour can be provided with a better environment to work on.",
  },
  {
    id: 2,
    name: "DOSEAB 1",
    description:
      "Through this innovative product based project, predictions about upcoming medical emergency can be made. This will be done by monitoring the real time data of heart rate, oxygen saturation, blood pressure and body temperature. These data will also be collected in a database. A constant track of these conditions can give a warning to the person beforehand and can ultimately save his/her life",
  },
  {
    id: 3,
    name: "E-Box",
    description:
      "You don't have to pay electricity bills anymore you can generate your own energy and use it by your need.",
  },
  {
    id: 4,
    name: "Online stationary and robotics item shop",
    description:
      "The idea is to make the essentials more accessible to the students. This would be done through an online platform. The essentials would include stationaries and online notes from semesters. Apart from that the machinery and circuits for the robotics will also be available.",
  },
  {
    id: 5,
    name: "Green Spectrum",
    description:
      "This impact based Startup idea aims at using biodegradable materials to create small and lucrative bags and pen-holders that are otherwise made by non-decomposable plastic. This would bring a sharp decrease in the volume of plastic waste present in the environment.",
  },
  {
    id: 6,
    name: "VEN-NEER",
    description:
      "Manufacturing dental veneers and dental screws which are basically not manufactured in India and required engineers for manufacturing it.",
  },
  {
    id: 7,
    name: "Trendflip",
    description:
      "It is a platform for content creators where they can submit their blogs and make money from it.",
  },
  {
    id: 8,
    name: "Shoes for blind",
    description:
      "Using electronics to help blind people have a better experience while walking.",
  },
  {
    id: 9,
    name: "Bio-luminescence",
    description:
      "It is an idea to use plants as source of light. Based on MIT research papers we have developed this idea where we can permanently replace household as well as street lights by injecting some hormones to a particular plant by converting them into a bio-luminescence object. It is a eco-friendly, affordable solution which can save energy.",
  },
  {
    id: 10,
    name: "All in one place",
    description:
      "An app that will provide all public service to the door step. Using this app you can avail multiple type of services sitting from home.",
  },
  {
    id: 11,
    name: "Maadbuddy",
    description:
      "A platform which provides several services related to digital marketing. Like: Graphic Designing, Social Listening, SEO etc.",
  },
  {
    id: 12,
    name: "Tourcera",
    description:
      "A tourism agency which will give a premium travel experience. It will help you to find your perfect travel companion.",
  },
  {
    id: 13,
    name: "Shutter X",
    description:
      "Shutter X is a platform where photographers, graphic designers, and models can showcase their digital artistic talent and get paid. It basically works as a freelancing platform & online shop for photography, digital artwork and modelling.",
  },
  {
    id: 14,
    name: "Yoursdoc",
    description: "Healthcare relevant and an unique idea.",
  },
];
