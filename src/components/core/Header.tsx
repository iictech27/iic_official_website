import { HeaderProps } from "@/types/header";
import Head from "next/head";
import { useRouter } from "next/router";

export default function Header({ title, description }: HeaderProps) {
  const router = useRouter();
  return (
    <Head>
      <title>
        {router.pathname === "/"
          ? "IIC TMSL: Invent. Innovate. Create. For the innovative minds."
          : `${title} - IIC TMSL`}
      </title>
      <meta name="description" content={`${description}`} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
