import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <>
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
            className="object-contain"
          />
        </div>
      </div>
    </>
  );
}
