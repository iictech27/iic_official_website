import Image from "next/image";

function Card({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={`bg-white shadow-lg p-4 rounded-lg h-full flex flex-col justify-between ${className}`}>{children}</div>;
}

function CardContent({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-col flex-grow">{children}</div>;
}

function Button({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <button className={`bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg ${className}`}>
      {children}
    </button>
  );
}

const internships = [
  {
    id: 1,
    company: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    role: "Software Engineer Intern",
    jd: "Work on cutting-edge AI projects and collaborate with experienced developers.",
    formLink: "https://google.com/apply",
    referral: "Ashhar Ali Ahmed",
  },
  {
    id: 2,
    company: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    role: "Cloud Engineer Intern",
    jd: "Assist in developing cloud solutions and optimizing performance.",
    formLink: "https://microsoft.com/apply",
    referral: "Kumar Aditya",
  },
  {
    id: 3,
    company: "Amazon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    role: "Data Science Intern",
    jd: "Analyze large datasets and build machine learning models.",
    formLink: "https://amazon.com/apply",
    referral: "Utsav Tiwari",
  },
];

export default function InternshipPage() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Internship Opportunities</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {internships.map((internship) => (
          <Card key={internship.id} className="p-4 rounded-2xl shadow-lg h-full flex flex-col">
            <CardContent className="flex flex-col items-center text-center flex-grow">
              <Image
                src={internship.logo}
                alt={`${internship.company} logo`}
                width={80}
                height={80}
                className="mb-4"
              />
              <h2 className="text-xl font-semibold">{internship.company}</h2>
              <p className="text-gray-600 font-medium">{internship.role}</p>
              <p className="text-sm text-gray-500 mt-2 flex-grow">{internship.jd}</p>
              <p className="text-sm font-semibold mt-2">Referral: {internship.referral}</p>
            </CardContent>
            <Button className="mt-4 w-full">
              <a href={internship.formLink} target="_blank" rel="noopener noreferrer">Apply Now</a>
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
}
