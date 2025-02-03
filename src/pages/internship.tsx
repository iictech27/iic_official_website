import Image from "next/image";
import FadeIn from "@/components/animation/FadeIn";
import Header from "@/components/core/Header";
import Title from "@/components/core/Title";

function Card({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`group w-full cursor-pointer rounded-xl border border-zinc-200 bg-zinc-50 p-4 shadow transition-all duration-200 ease-in-out hover:bg-zinc-900 hover:shadow-2xl dark:border-zinc-800 dark:bg-zinc-900 dark:hover:bg-white dark:hover:shadow-xl dark:hover:shadow-white/[7%] sm:p-8 ${className}`}>
      {children}
    </div>
  );
}

function CardContent({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`flex flex-col flex-grow text-zinc-900 group-hover:text-white dark:text-zinc-100 dark:group-hover:text-black ${className}`}>
      {children}
    </div>
  );
}

function Button({ children, className, href }: { children: React.ReactNode; className?: string; href?: string }) {
  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg ${className}`}>
      {children}
    </a>
  ) : (
    <button className={`bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg ${className}`}>
      {children}
    </button>
  );
}

const internships = [
  {
    id: 1,
    company: "Perfectplus",
    logo: "/images/internship/PP.jpg",
    role: "Junior Graphic Designer",
    location: "Salt Lake City",
    salary: "₹8,000 - ₹10,000 per month",
    experience: "Freshers",
    jd: "Perfectplus is seeking a creative and enthusiastic Junior Graphic Designer to join our team. This role is ideal for freshers eager to gain hands-on experience.",
    formLink: "https://wa.me/918981937193?text=Hi%2C%20I%27m%20interested%20in%20the%20Junior%20Graphic%20Designer%20role%2C%20referred%20by%20Ashhar%20Ali%20Ahmed",
    referral: "Ashhar Ali Ahmed",
  },
  {
    id: 2,
    company: "Perfectplus",
    logo: "/images/internship/PP.jpg",
    role: "Senior Graphic Designer",
    location: "Salt Lake City",
    salary: "₹15,000 - ₹20,000 per month",
    experience: "Freshers",
    jd: "Perfectplus is seeking a creative and experienced Graphic Designer to join the team. The candidate will work closely with our design team to create compelling visuals.",
    formLink: "https://wa.me/918981937193?text=Hi%2C%20I%27m%20interested%20in%20the%20Senior%20Graphic%20Designer%20role%2C%20referred%20by%20Ashhar%20Ali%20Ahmed",
    referral: "Ashhar Ali Ahmed",
  },
  {
    id: 3,
    company: "Perfectplus",
    logo: "/images/internship/PP.jpg",
    role: "Coordinator",
    location: "Salt Lake City",
    salary: "₹8,000 - ₹12,000 per month",
    experience: "Freshers",
    jd: "Perfectplus is looking for a highly organized Coordinator to manage tasks, track updates, and implement agile methodologies. The ideal candidate will ensure smooth workflow and efficient communication within the team.",
    formLink: "https://wa.me/918981937193?text=Hi%2C%20I%27m%20interested%20in%20the%20Coordinator%20role%2C%20referred%20by%20Ashhar%20Ali%20Ahmed",
    referral: "Ashhar Ali Ahmed",
  }
];

export default function InternshipPage() {
  return (
    <>
      <Header title="Internship Opportunities" description="Explore internships and apply now!" />
      <div className="container mx-auto px-6 py-10 text-center">
        <FadeIn delay={0.15}>
          <Title title="Internships" />
          <h2 className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Discover exciting internship opportunities and kickstart your career with leading companies.
          </h2>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {internships.map((internship) => (
              <Card key={internship.id} className="p-4 rounded-2xl shadow-lg h-full flex flex-col">
                <CardContent className="flex flex-col items-center text-center flex-grow">
                  <Image
                    src={internship.logo}
                    alt={`${internship.company} logo`}
                    width={80}
                    height={80}
                    className="mb-4 rounded-full"
                  />
                  <h2 className="text-xl font-semibold">{internship.company}</h2>
                  <p className="text-gray-600 font-medium">{internship.role}</p>
                  <p className="text-sm text-gray-500 mt-2 flex-grow">{internship.jd}</p>
                  <p className="text-sm text-gray-600 mt-2">{internship.location}</p>
                  <p className="text-sm text-gray-600 mt-1">{internship.salary}</p>
                  <p className="text-sm text-gray-600 mt-1">{internship.experience}</p>
                  <p className="text-sm font-semibold mt-2">Referral: {internship.referral}</p>
                </CardContent>
                <Button className="mt-4 w-full" href={internship.formLink}>
                  Apply Now
                </Button>
              </Card>
            ))}
          </div>
        </FadeIn>
      </div>
    </>
  );
}
