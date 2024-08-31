/* eslint-disable @next/next/no-img-element */
import FadeIn from "@/components/animation/FadeIn";
import Header from "@/components/core/Header";
import Title from "@/components/core/Title";
import type { NextPage } from "next";

const ActivityPage: NextPage = () => {
  return (
    <>
      <Header
        title="Initiatives"
        description="Initiatives are the backbone of any organization. We at IIC TMSL are working hard to make our initiatives a success."
      />
      <div>
        <Title title="Initiatives" />
        <FadeIn delay={0.15}>
          <h2 className="mx-auto mt-6 max-w-3xl text-center text-2xl leading-8 text-zinc-600 dark:text-zinc-500">
            Initiatives are the backbone of any organization. Some of the
            initiatives that we have taken up are listed below.
          </h2>
        </FadeIn>
        <section className="mx-auto max-w-5xl py-24 sm:py-40">
        <FadeIn
            delay={0.25}
            className="mx-auto mb-10 flex flex-col items-center pb-24 sm:flex-row"
          >
            <div className="mt-6 flex-grow text-center sm:mt-0 sm:text-left">
              <h2 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
                STARTUP CRAFTER
              </h2>
              <p className="mx-auto mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-500 sm:text-left sm:text-xl">
                (Launched on: September, 2024) Meet Startup Crafter, an all-in-one app created by the talented team at IIC TMSL. Startup Crafter is built for entrepreneurs who are looking to grow their ventures, connect with talent, and access valuable resources. Whether you’re a startup founder in need of freelancers, looking for interns, and mentorship or seeking help with registration and incubation, this app provides everything you need in one place. Startup Crafter is the ultimate platform for fostering innovation and building a thriving startup ecosystem. 
              </p>
            </div>
            <div className="order-first inline-flex h-56 w-56 flex-shrink-0 items-center justify-center sm:order-none sm:ml-10 sm:h-72 sm:w-72">
              <img
                src="/images/activity/STARTUP-CRAFTER-LOGO.png"
                alt="RISE"
                className="h-56 w-56 rounded-full object-cover object-center shadow-lg sm:h-72 sm:w-72"
              />
            </div>
          </FadeIn>
          <FadeIn
            delay={0.2}
            className="mx-auto mb-10 flex flex-col items-center pb-24 sm:flex-row"
          >
            <div className="inline-flex h-28 w-auto flex-shrink-0 items-center justify-center sm:mr-10 sm:h-40 sm:w-auto">
              <img
                src="/images/activity/iicintern.png"
                alt="IIC Internship Portal"
                className="h-28 w-auto object-cover object-center sm:h-40 sm:w-auto"
              />
            </div>
            <div className="mt-6 flex-grow text-center sm:mt-0 sm:text-left">
              <h2 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
                Internship Portal
              </h2>
              <p className="mx-auto mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-500 sm:text-left sm:text-xl">
                IIC TMSL launched an internship portal in the month of October
                to help students for getting internships according to their
                skillset.
              </p>
            </div>
          </FadeIn>
          <FadeIn
            delay={0.25}
            className="mx-auto mb-10 flex flex-col items-center pb-24 sm:flex-row"
          >
            <div className="mt-6 flex-grow text-center sm:mt-0 sm:text-left">
              <h2 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
                RISE
              </h2>
              <p className="mx-auto mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-500 sm:text-left sm:text-xl">
                (Launched on: 30th October, 2019) RISE is another initiative of
                IIC TMSL where we provide free courses to enhance the skill-set
                on latest technology trends like AI/ML, Data Sc, Robotics etc.
                We are also planning to do short length Webinars with
                Entrepreneurs and Industry Experts to upgrade the knowledge of
                TMSL students.
              </p>
            </div>
            <div className="order-first inline-flex h-56 w-56 flex-shrink-0 items-center justify-center sm:order-none sm:ml-10 sm:h-72 sm:w-72">
              <img
                src="/images/activity/rise.png"
                alt="RISE"
                className="h-56 w-56 rounded-full object-cover object-center shadow-lg sm:h-72 sm:w-72"
              />
            </div>
          </FadeIn>
          <FadeIn
            delay={0.3}
            className="mx-auto mb-10 flex flex-col items-center pb-24 sm:flex-row"
          >
            <div className="inline-flex h-20 w-auto flex-shrink-0 items-center justify-center sm:mr-10 sm:h-28 sm:w-auto">
              <img
                src="/images/activity/iicblog.png"
                alt="IIC Blog"
                className="h-20 w-auto object-cover object-center sm:h-28 sm:w-auto"
              />
            </div>
            <div className="mt-6 flex-grow text-center sm:mt-0 sm:text-left">
              <h2 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
                Blog
              </h2>
              <p className="mx-auto mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-500 sm:text-left sm:text-xl">
                (January 2020 Onwards) IIC TMSL has launched IIC blog to update
                the knowledge of the students of TMSL regarding business,
                startup and technology. It is a great opportunity for content
                creators to showcase their talent by writing blogs on above
                mentioned topics.
              </p>
            </div>
          </FadeIn>
          <FadeIn
            delay={0.35}
            className="mx-auto mb-10 flex flex-col items-center pb-24 sm:flex-row"
          >
            <div className="mt-6 flex-grow text-center sm:mt-0 sm:text-left">
              <h2 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
                Innopedia
              </h2>
              <p className="mx-auto mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-500 sm:text-left sm:text-xl">
                (Launched on 13th March, 2020) Innopedia, an initiative by IIC
                TMSL, aims at making you aware of the latest advancements in
                terms of innovations around you. The innovaters themselves would
                explain the attributes of their products or concepts through our
                YouTube channel related to innovation.
              </p>
            </div>
            <div className="order-first inline-flex h-56 w-56 flex-shrink-0 items-center justify-center sm:order-none sm:ml-10 sm:h-72 sm:w-72">
              <img
                src="/images/activity/innopedia.png"
                alt="Innopedia"
                className="h-56 w-56 rounded-full object-cover object-center sm:h-72 sm:w-72"
              />
            </div>
          </FadeIn>
          <FadeIn
            delay={0.4}
            className="mx-auto mb-10 flex flex-col items-center pb-24 sm:flex-row"
          >
            <div className="inline-flex h-56 w-56 flex-shrink-0 items-center justify-center sm:mr-10 sm:h-72 sm:w-72">
              <img
                src="/images/activity/envisage.png"
                alt="ENVISAGE"
                className="h-56 w-56 rounded-full object-cover object-center shadow-lg sm:h-72 sm:w-72"
              />
            </div>
            <div className="mt-6 flex-grow text-center sm:mt-0 sm:text-left">
              <h2 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
                ENVISAGE
              </h2>
              <p className="mx-auto mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-500 sm:text-left sm:text-xl">
                (24th-26th April, 2020) ENVISAGE is born out of the dreams and
                aspirations of the youth who have the zest and the zeal to take
                their future in their own hands. Supporting the growing startup
                culture in the country, we are promised to inculcate and
                identify the best ideas and b-plans. Envisage, the official
                E-Summit of TMSL, is the platform for budding entrepreneurs to
                showcase the power of their ideas and to be appreciated and
                mentored by the best in the fields.
              </p>
            </div>
          </FadeIn>
          <FadeIn
            delay={0.45}
            className="mx-auto mb-10 flex flex-col items-center pb-24 sm:flex-row"
          >
            <div className="mt-6 flex-grow text-center sm:mt-0 sm:text-left">
              <h2 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
                BONDHU
              </h2>
              <p className="mx-auto mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-500 sm:text-left sm:text-xl">
                (Launched on: 22nd April, 2020) BONDHU is an online platform
                ideated and developed by the team of innovators at Institution’s
                Innovation Council, Techno Main Salt Lake(Official
                Entrepreneurship and Innovation Cell recognised by MHRD, GOI),
                which aims to connect the volunteers with the elders with the
                help of technology that they can visit from anywhere. In the
                hard times, example being the current lockdown due to the
                COVID-19 pandemic - young people come forward to help the elders
                by delivering the essentials to them.
              </p>
            </div>
            <div className="order-first inline-flex h-20 w-auto flex-shrink-0 items-center justify-center sm:order-none sm:ml-10 sm:h-28 sm:w-auto">
              <img
                src="/images/activity/mybondhu.png"
                alt="BONDHU"
                className="h-20 w-auto sm:h-28 sm:w-auto"
              />
            </div>
          </FadeIn>
          <FadeIn
            delay={0.5}
            className="mx-auto mb-10 flex flex-col items-center pb-24 sm:flex-row"
          >
            <div className="inline-flex h-60 w-60 flex-shrink-0 items-center justify-center sm:mr-10 sm:h-72 sm:w-72">
              <img
                src="/images/activity/startup.png"
                alt="Start-up Services"
                className="h-60 w-60 object-cover object-center sm:h-72 sm:w-72"
              />
            </div>
            <div className="mt-6 flex-grow text-center sm:mt-0 sm:text-left">
              <h2 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
                Start-up Services
              </h2>
              <p className="mx-auto mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-500 sm:text-left sm:text-xl">
                (Launched on: 25th April, 2020) IIC TMSL launched its new
                initiative where students and people from outside the college
                can get their idea mentored under the club. They get technical,
                marketing or any other assistance by the club for converting
                their idea into a viable product or service. A ‘ Mitra ‘ is
                appointed to the start-ups selected after several rounds of
                meetings. The ‘ Mitra ‘ looks after the needs of the start-up
                and also act as a mentor to them.
              </p>
            </div>
          </FadeIn>
          <FadeIn
            delay={0.55}
            className="mx-auto mb-10 flex flex-col items-center pb-24 sm:flex-row"
          >
            <div className="mt-6 flex-grow text-center sm:mt-0 sm:text-left">
              <h2 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
                EAD
              </h2>
              <p className="mx-auto mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-500 sm:text-left sm:text-xl">
                IIT KGP in association with IIC TMSL organized Entrepreneurship
                Awareness Drive on 19th October 2019 in Techno Main Saltlake
                campus. More than 1000 participants had registered & 350
                participants were shortlisted to attend this.
              </p>
              <h2 className="my-6 text-4xl font-bold tracking-tight sm:text-5xl">
                E-Start
              </h2>
              <p className="mx-auto mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-500 sm:text-left sm:text-xl">
                IIT KGP in association with IIC TMSL organized E-Start which is
                a platform to validate ideas and build business models with an
                exclusive mentorship offered by experienced entrepreneurs on
                19th October 2019 in Techno Main Saltlake campus. 20 teams got
                selected to pitch their idea.
              </p>
            </div>
            <div className="order-first inline-flex h-56 w-56 flex-shrink-0 items-center justify-center sm:order-none sm:ml-10 sm:h-72 sm:w-72">
              <img
                src="/images/activity/ead21.png"
                alt="EAD"
                className="h-56 w-56 rounded-full object-cover object-center shadow-lg sm:h-72 sm:w-72"
              />
            </div>
          </FadeIn>
        </section>
      </div>
    </>
  );
};

export default ActivityPage;
