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
    name: "Aaquib Ahmad",
    role: "Convenor",
    image: "/images/team/admin/Aaquib Ahmad.png",
    linkedIn: "aaquib-ahmad-5a6809248/",
},
{
  id: 2,
  name: "Aadarsh Sharma",
  role: "Convenor of External Affairs",
  image: "/images/team/admin/Aadarsh Sharma.png",
  linkedIn: "aadarsh13/",
},
{
  id: 3,
  name: "Manash Goyal",
  role: "Co-Convenor",
  image: "https://i.ibb.co/MBtsWxQ/Manash-Goyal.jpg",
  linkedIn: "manash-goyal-942930233/",
},
{
  id: 4,
  name: "Payel Chaudhuri",
  role: "Campus Director HULT Prize",
  image: "/images/team/admin/Payel Chaudhuri.jpg",
  linkedIn: "payel-chaudhuri-aiml",
}
];

const teamlist = [
  {
    id: 1,
    name: "Ashhar Ali Ahmed",
    role: "Head of Tech wing",
    image: "/images/team/heads-coheads/Ashhar Ali Ahmed.jpg",
    linkedIn: "ashhar-ali-ahmed-971aaa193",
  },
  {
    id: 2,
    name: "Kumar Aditya",
    role: "Head of Tech wing",
    image: "/images/team/heads-coheads/Kumar Aditya.jpg",
    linkedIn: "kumar-aditya-0ab61b234",
  },
  {
    id: 3,
    name: "Utsav Tiwari",
    role: "Co-Head of Tech wing",
    image: "/images/team/heads-coheads/Utsav Tiwari.jpg",
    linkedIn: "utsav-tiwari30",
  },
  {
    id: 4,
    name: "Sreejita Mukhopadhyay",
    role: "Head of Graphics wing.",
    image: "/images/team/heads-coheads/Sreejita Mukhopadhyay.jpg",
    linkedIn: "sreejita-mukhopadhyay-b83256234",
  },
  {
    id: 5,
    name: "Amit Saha",
    role: "Head of Graphics wing.",
    image: "/images/team/heads-coheads/Amit Saha.jpg",
    linkedIn: "amit-saha-24811121b",
  },
  {
    id: 6,
    name: "Atul Kumar Singh",
    role: "Co-Head of Graphics wing.",
    image: "/images/team/heads-coheads/Atul Singh.png",
    linkedIn: "atulsinghc",
  },
  {
    id: 7,
    name: "Shubham Keshri",
    role: "Head of Management and Resource wing.",
    image: "/images/team/heads-coheads/Shubham Keshri.jpg",
    linkedIn: "shubham-keshri-ba3718227",
  },
  {
    id: 8,
    name: "Sachin Sharma",
    role: "Co-head of Management wing.",
    image: "/images/team/heads-coheads/Sachin Sharma.jpg",
    linkedIn: "sachin-sharma-9bba451b0",
  },
  {
    id: 9,
    name: "Sheetal Raj",
    role: "Co-head of Management wing.",
    image: "/images/team/heads-coheads/Sheetal Raj.jpg",
    linkedIn: "sheetal-raj-964ab5271",
  },
  {
    id: 10,
    name: "Soumyadeep Adhikary",
    role: "Head of Press wing.",
    image: "/images/team/heads-coheads/Soumyadeep Adhikary.jpg",
    linkedIn: "soumyadeep-adhikary-731a5b26b",
  },
  {
    id: 11,
    name: "Akshat Alok",
    role: "Co-head of Press wing.",
    image: "/images/team/heads-coheads/Akshat Alok.jpg",
    linkedIn: "",
  },
  {
    id: 12,
    name: "Pushpendra Lal",
    role: "Head of Public Relations wing.",
    image: "/images/team/heads-coheads/Pushpendra Lal.jpg",
    linkedIn: "pushpendra-lal-598a93252",
  },
  {
    id: 13,
    name: "Shubhankar Banerjee",
    role: "Co-head of Public Relations wing.",
    image: "/images/team/heads-coheads/shubhankar banerjee.jpg",
    linkedIn: "shubhankar-banerjee-78740b258",
  },
  {
    id: 14,
    name: "Sananda Roy Chowdhury",
    role: "Co-head of Resource wing.",
    image: "/images/team/heads-coheads/Sananda Roy Chowdhury.jpg",
    linkedIn: "sananda-roy-chowdhury-224b67303",
  },
  {
    id: 15,
    name: "Vaibhav Anand",
    role: "Co-head of Resource wing.",
    image: "/images/team/heads-coheads/Vaibhav Anand.jpg",
    linkedIn: "vaibhav-anand-443015248",
  },
  {
    id: 16,
    name: "Uddipta Kar",
    role: "Head of Social Media wing.",
    image: "/images/team/heads-coheads/Uddipta Kar.jpeg",
    linkedIn: "uddipta-kar-68a618244",
  },
  {
    id: 17,
    name: "Pritam Ghosh",
    role: "Co-head of Social Media wing.",
    image: "/images/team/heads-coheads/Pritam Ghosh.jpg",
    linkedIn: "pritamghosh14",
  },
  {
    id: 18,
    name: "Srija Chandra",
    role: "Co-head of Social Media wing.",
    image: "/images/team/heads-coheads/Srija Chandra.jpg",
    linkedIn: "srija-chandra-85813a272",
  },
  {
    id: 19,
    name: "Arunabha Sengupta",
    role: "Head of Sponsorship wing.",
    image: "/images/team/heads-coheads/Arunabha.jpeg",
    linkedIn: "arunabha-sengupta-5a4048237",
  },
  {
    id: 20,
    name: "Sarthak Sarkar",
    role: "Co-head of Sponsorship wing.",
    image: "/images/team/heads-coheads/Sarthak.jpg",
    linkedIn: "sarthak-sarkar-45b327311",
  },
  {
    id: 21,
    name: "Makhdhum Hossain",
    role: "Co-head of Sponsorship wing.",
    image: "/images/team/heads-coheads/Makhdum Hossain.jpg",
    linkedIn: "makhdum-hossain-29127a184",
  },
  {
    id: 22,
    name: "Abhimanyu Kanjilal",
    role: "Head of Start-Up wing.",
    image: "/images/team/heads-coheads/Abhimanyu Kanjilal1.jpg",
    linkedIn: "abhimanyu2002",
  },
  {
    id: 23,
    name: "Harshankit Raj",
    role: "Co-head of Start-Up wing",
    image: "/images/team/heads-coheads/Harshankit Raj.jpg",
    linkedIn: "harshankitraj",
  },
  {
    id: 24,
    name: "Debabrata Debnath",
    role: "Co-head of Start-Up wing",
    image: "/images/team/heads-coheads/Debabrata Debnath.jpg",
    linkedIn: "debabrata-debnath-b28820235",
  },
  {
    id: 25,
    name: "Ayush Dev",
    role: "Head of Content Wing",
    image: "/images/team/heads-coheads/Ayush Dev.jpg",
    linkedIn: "ayush-dev-35b742206",
  },
  {
    id: 26,
    name: "Aparajita Goswami",
    role: "Co-head of Content Wing",
    image: "/images/team/heads-coheads/Aparajita Goswami.jpg",
    linkedIn: "aparajita-goswami-087420256",
  },
  {
    id: 27,
    name: "Rajgopal Kumar",
    role: "Head of UI/UX wing",
    image: "/images/team/heads-coheads/Rajgopal Kumar.png",
    linkedIn: "rajgopal-kumar",
  },
  {
    id: 28,
    name: "Soumyata Sarkar",
    role: "Head of UI/UX wing",
    image: "/images/team/heads-coheads/soumyata_sarkar.jpg",
    linkedIn: "soumyata-sarkar-005793228",
  },
];

