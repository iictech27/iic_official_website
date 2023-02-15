import FadeIn from "@/components/animation/FadeIn";
import { TitleProps } from "@/types/title";

export default function Title({ title }: TitleProps) {
  return (
    <FadeIn className="pt-20 pb-40">
      <h1 className="flex flex-col justify-center text-center text-5xl font-[800] tracking-tighter sm:flex-row sm:gap-x-3 sm:text-7xl">
        <span className="text-black dark:text-white">{title}</span>
      </h1>
    </FadeIn>
  );
}
