import Header from "@/components/core/Header";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header
        title="Home"
        description="Invent. Innovate. Create. For the innovative minds."
      />
      <Hero />
      {
        // Supported by section
      }
      <div className="flex flex-col pt-28 sm:pt-40">
        <h4 className="pb-10 text-center text-sm font-bold uppercase tracking-widest text-zinc-600">
          Supported by
        </h4>
        <div className="mx-auto justify-center">
          <Image
            src="/images/supportedby.png"
            alt="IIC TMSL"
            width={600}
            height={100}
            className="object-contain object-center"
          />
        </div>
      </div>
      {
        // About us section
      }
      <div id="about" className="-scroll-m-44 pt-20 sm:pt-40">
        <h1 className="flex flex-col justify-center text-center text-4xl font-bold tracking-tight sm:flex-row sm:gap-x-3 sm:text-5xl">
          About Us
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-8 text-zinc-600 sm:text-xl">
          Inspired by the objectives and vision of IIC, a MoE initiative, we
          have established IIC TMSL. This cell will be conducting various
          innovation and entrepreneurship related activities along with
          organizing periodic workshops, seminars and interactions with
          entrepreneurs and innovators. Students will get a chance to showcase
          their talents by participating in various events like Hackathons, idea
          competitions etc.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-y-4 sm:flex-row sm:gap-x-4">
          <a
            href="/about"
            className="group inline-block rounded-md bg-white px-4 py-3 text-center text-lg font-medium leading-7 text-black shadow-sm ring-1 ring-black/20 hover:bg-black hover:text-white hover:ring-black/50 sm:py-2"
          >
            Learn more{" "}
            <span
              className="text-black group-hover:text-white"
              aria-hidden="true"
            >
              ↗
            </span>
          </a>
        </div>
      </div>
      {
        // Our aim section
      }
      <div id="aim" className="relative py-28 sm:-scroll-m-20 sm:py-40">
        <div className="aim-bg mx-auto max-w-6xl rounded-2xl p-8 text-white shadow-lg sm:rounded-3xl sm:px-28 sm:py-16 sm:pb-20 sm:shadow-2xl">
          <div className="mx-auto max-w-4xl">
            <h1 className="pb-4 text-center text-base font-semibold tracking-tight text-zinc-100 sm:pb-10 sm:text-xl">
              OUR AIM
            </h1>
            <h1 className="text-center text-3xl font-bold tracking-tight sm:text-7xl">
              Promoting Innovation & Entrepreneurship
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
