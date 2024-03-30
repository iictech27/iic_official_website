import FadeIn from "@/components/animation/FadeIn";
import Header from "@/components/core/Header";
import Title from "@/components/core/Title";
import LinkedIn from "@/components/logos/LinkedIn";
import type { NextPage } from "next";
import Image from "next/legacy/image";
import Link from "next/link";

const TeamPage: NextPage = () => {
  return (
    <>
      <Header
        title="Our Team"
        description="Our team consists a group of passionate people who are working hard to make IIC TMSL a success."
      />
      <div>
        <Title title="Our Team" />
        <FadeIn delay={0.15}>
          <h2 className="mx-auto mt-6 max-w-3xl text-center text-2xl leading-8 text-zinc-600 dark:text-zinc-500">
            Our team consists a group of passionate people who are working hard
            to make IIC TMSL a success.
          </h2>
          <p className="mt-5 flex items-center justify-center text-center text-xs sm:text-sm">
            Tip: Click on the Images to visit their{" "}
            <LinkedIn className="h-3 w-auto px-1 sm:h-4" /> Profiles
          </p>
        </FadeIn>
        <section>
          <FadeIn delay={0.45} className="container mx-auto py-24">
            <h2 className="mb-20 text-center text-4xl font-bold tracking-tight sm:text-5xl">
              Administrative Heads
            </h2>
            <div className="mx-auto -mb-10 -mt-4 flex flex-wrap sm:-m-4">
              {adminList.map((admin) => (
                <div
                  key={admin.id}
                  className="mx-auto mb-6 p-4 sm:mb-0 md:w-1/3"
                >
                  <div className="mx-auto aspect-square h-56 w-56 overflow-hidden rounded-full border border-zinc-200 shadow-md transition-all duration-150  ease-in-out hover:scale-110 hover:shadow-xl active:scale-95 dark:border-zinc-800">
                    <Link
                      href={`https://www.linkedin.com/in/${admin.linkedIn}`}
                      target="_blank"
                    >
                      <Image
                        alt={admin.name}
                        className="h-56 w-56 rounded-full object-cover object-center"
                        src={admin.image}
                        width={300}
                        height={300}
                        placeholder="blur"
                        blurDataURL={admin.image}
                        loading="lazy"
                      />
                    </Link>
                  </div>
                  <h2 className="mt-5 text-center text-xl font-bold text-zinc-900 dark:text-zinc-100">
                    {admin.name}
                  </h2>
                  <p className="mt-2 text-center text-base leading-relaxed text-zinc-600 dark:text-zinc-500">
                    {admin.role}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </section>
        <section>
          <FadeIn delay={0.6} className="container mx-auto py-24">
            <h2 className="mb-20 text-center text-4xl font-bold tracking-tight sm:text-5xl">
              Heads and Co-Heads
            </h2>
            <div className="mx-auto -mb-10 -mt-4 flex flex-wrap sm:-m-4">
              {teamlist.map((member) => (
                <div
                  key={member.id}
                  className="mx-auto mb-6 w-full p-4 sm:mb-0 sm:w-1/4 sm:p-10"
                >
                  <Link
                    href={`https://www.linkedin.com/in/${member.linkedIn}`}
                    target="_blank"
                  >
                    <div className="mx-auto aspect-square h-48 w-48 overflow-hidden rounded-full border border-zinc-200 shadow-md transition-all duration-150 ease-in-out hover:scale-110 hover:shadow-xl active:scale-95 dark:border-zinc-800">
                      <Image
                        alt={member.name}
                        className="h-48 w-48 rounded-full object-cover object-center"
                        src={member.image}
                        width={200}
                        height={200}
                        placeholder="blur"
                        blurDataURL={member.image}
                        loading="lazy"
                      />
                    </div>
                  </Link>

                  <h2 className="mt-5 text-center text-xl font-bold text-zinc-900 dark:text-zinc-100">
                    {member.name}
                  </h2>
                  <p className="mt-2 text-center text-sm leading-relaxed text-zinc-600 dark:text-zinc-500">
                    {member.role}
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

export default TeamPage;

const adminList = [
  {
    id: 1,
    name: "Shristi Rai",
    role: "Convenor",
    image: "/images/team/admin/shristi.webp",
    linkedIn: "shristi-rai-03a264209",
  },
  {
    id: 2,
    name: "Rohan Jha",
    role: "Co-Convenor",
    image: "/images/team/admin/rohan.webp",
    linkedIn: "rohan-jha-476296213",
  },
];

const teamlist = [
  {
    id: 1,
    name: "Sreejita Mukhopadhyay",
    role: "Head of Graphics wing.",
    image: "/images/team/heads-coheads/sreejita.webp",
    linkedIn: "sreejita-mukhopadhyay-b83256234",
  },
  {
    id: 2,
    name: "Amit Saha",
    role: "Co-Head of Graphics wing.",
    image: "/images/team/heads-coheads/amit.webp",
    linkedIn: "amit-saha-24811121b",
  },
  {
    id: 3,
    name: "Atryee Dhar",
    role: "Co-Head of Graphics wing.",
    image: "/images/team/heads-coheads/atryee.webp",
    linkedIn: "atryee-dhar-07b246218",
  },
  {
    id: 4,
    name: "Ashhar A. Ahmed",
    role: "Head of Technical wing.",
    image: "/images/team/heads-coheads/ashhar.webp",
    linkedIn: "ashhar-ali-ahmed-971aaa193",
  },
  {
    id: 5,
    name: "Kumar Aditya",
    role: "Co-Head of Technical wing.",
    image: "/images/team/heads-coheads/aditya.webp",
    linkedIn: "kumar-aditya-0ab61b234",
  },
  {
    id: 6,
    name: "Subhodeep Roy",
    role: "Co-Head of Technical wing.",
    image: "/images/team/heads-coheads/subhadeep.webp",
    linkedIn: "subhadeep3902",
  },
  {
    id: 7,
    name: "Farhan Ahmed",
    role: "Head of Press wing.",
    image: "/images/team/heads-coheads/farhan.webp",
    linkedIn: "",
  },
  {
    id: 8,
    name: "Diptesi Saha",
    role: "Co-Head of Press wing.",
    image: "/images/team/heads-coheads/diptesi.webp",
    linkedIn: "",
  },
  {
    id: 9,
    name: "Soumyadeep Adhikary",
    role: "Co-Head of Press wing.",
    image: "/images/team/heads-coheads/soumyadeep.webp",
    linkedIn: "soumya-adhikary",
  },
  {
    id: 10,
    name: "Sanjana Dey",
    role: "Head of Content wing.",
    image: "/images/team/heads-coheads/sanjana.webp",
    linkedIn: "sanjana-dey-b4588a202",
  },
  {
    id: 11,
    name: "Anuvab Chakravarty",
    role: "Co-Head of Content wing.",
    image: "/images/team/heads-coheads/anuvab.webp",
    linkedIn: "anuvab-chakravarty-001b39233",
  },
  {
    id: 12,
    name: "Ayush Dev",
    role: "Co-Head of Content wing.",
    image: "/images/team/heads-coheads/ayush.webp",
    linkedIn: "ayush-dev-35b742206",
  },
  {
    id: 13,
    name: "Sandeep Pratap",
    role: "Head of Management & Resource wing.",
    image: "/images/team/heads-coheads/sandeep.webp",
    linkedIn: "sandeep-pratap-528003202",
  },
  {
    id: 14,
    name: "Aaquib Ahmed",
    role: "Co-Head of Management & Resource wing.",
    image: "/images/team/heads-coheads/aaquib.webp",
    linkedIn: "aaquib-ahmad-81597b226",
  },
  {
    id: 15,
    name: "Firoz Ali Mondal",
    role: "Co-Head of Management & Resource wing.",
    image: "/images/team/heads-coheads/firoz.webp",
    linkedIn: "firoz-ali-mondal-624069283",
  },
  {
    id: 16,
    name: "Dewashish Kr. Tiwary",
    role: "Head of PR & Outreach wing.",
    image: "/images/team/heads-coheads/dewashish.webp",
    linkedIn: "dewashish-tiwary-43196b201",
  },
  {
    id: 17,
    name: "Payel Chaudhuri",
    role: "Co-Head of PR & Outreach wing.",
    image: "/images/team/heads-coheads/payel.webp",
    linkedIn: "payel-chaudhuri-aiml",
  },
  {
    id: 18,
    name: "Aadarsh Sharma",
    role: "Co-Head of PR & Outreach wing.",
    image: "/images/team/heads-coheads/aadarsh.webp",
    linkedIn: "aadarsh-sharma-65548a244",
  },
  {
    id: 19,
    name: "Uddipta Kar",
    role: "Head of Social Media wing.",
    image: "/images/team/heads-coheads/uddipta.webp",
    linkedIn: "uddipta-kar-199323188",
  },
  {
    id: 20,
    name: "Ruben Clifford Gomes",
    role: "Co-Head of Social Media wing.",
    image: "/images/team/heads-coheads/ruben.webp",
    linkedIn: "ruben-gomes-72500a219",
  },
  {
    id: 21,
    name: "Abhipreya Ghosh",
    role: "Head of Start-up wing.",
    image: "/images/team/heads-coheads/abhipreyo.webp",
    linkedIn: "abhipreya-ghosh-531576211",
  },
  {
    id: 22,
    name: "Abhimanyu Kanjilal",
    role: "Co-Head of Start-up wing.",
    image: "/images/team/heads-coheads/abhimanyu.webp",
    linkedIn: "abhimanyu-kanjilal-66432022a",
  },
  {
    id: 23,
    name: "Abhay Bajpayee",
    role: "Co-Head of Start-up wing.",
    image: "/images/team/heads-coheads/abhay.webp",
    linkedIn: "abhay-bajpayee-34a42825b",
  },
  {
    id: 24,
    name: "Soumyadeep Banerjee",
    role: "Head of Sponsorship wing.",
    image: "/images/team/heads-coheads/soumyadeep-sp.webp",
    linkedIn: "soumyadeep-banerjee-722447237",
  },
  {
    id: 25,
    name: "Manash Goyal",
    role: "Co-Head of Sponsorship wing.",
    image: "/images/team/heads-coheads/manash.webp",
    linkedIn: "manash-goyal-942930233",
  },
  {
    id: 26,
    name: "Isha Tirkey",
    role: "Co-Head of Sponsorship wing.",
    image: "/images/team/heads-coheads/isha.webp",
    linkedIn: "isha-tirkey-8674b1255",
  }
];
