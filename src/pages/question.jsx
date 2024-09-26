import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaSearch, FaChevronDown, FaChevronUp } from "react-icons/fa";

export const submitBtn = `px-3 py-2 bg-blue-500 text-white text-center rounded-md`;

const HackathonQuestions = () => {
  const [activeTab, setActiveTab] = useState("tier1");
  const [searchTerm, setSearchTerm] = useState("");
  const [questions, setQuestions] = useState([]);
  const [expandedQuestion, setExpandedQuestion] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const questionsPerPage = 5;

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      // Simulating API call
      const response = await new Promise((resolve) => {
        setTimeout(() => {
          resolve([
            // Tier 1 Questions
            {
              id: 1,
              problemId: "HT101",
              tier: "tier1",
              title: "Skill-Based Job Portal",
              description:
                "Build a dynamic web/app portal that allows users to input their professional skills, educational background, and work experience. Using machine learning and AI algorithms, the system will analyze the input data and recommend personalized job opportunities that match the user’s profile. Consider integrating natural language processing (NLP) for skill extraction and a job-matching algorithm based on skills and job requirements. The portal should also allow users to update their profiles and explore job suggestions over time as new opportunities are added.",
            },
            {
              id: 2,
              problemId: "HT102",
              tier: "tier1",
              title: "Simple Weather App",
              description:
                "Develop a user-friendly weather application that displays real-time weather conditions based on the user's location or a specified city. Using HTML, CSS, and JavaScript, you will fetch real-time data from a weather API like OpenWeatherMap. The app should present temperature, humidity, wind speed, and other essential metrics. Include an option to view the forecast for upcoming days. The focus is on clean UI design and ensuring the app is responsive and compatible across devices.You can make a APP too",
            },
            {
              id: 3,
              problemId: "HT103",
              tier: "tier1",
              title: "To-Do List Application",
              description:
                "Create a fully functional to-do list application where users can easily manage their tasks. Users should be able to add new tasks, edit existing ones, delete them, categorize tasks into different groups (such as work, personal, or urgent), and set deadlines with reminders. Implement task prioritization and filtering options for a better user experience. The app should offer a simple yet intuitive interface, allowing users to organize and track their productivity efficiently.",
            },
            {
              id: 4,
              problemId: "HT104",
              tier: "tier1",
              title: "Travel Expense Tracker",
              description:
                "Design an interactive app/website for tracking travel-related expenses. The app should allow users to log their daily expenses, categorize their spending (e.g., accommodation, food, transportation), and set a budget for their trips. Include a reporting feature that generates visual summaries of expenses (such as pie charts or bar graphs), helping users to track overspending or savings. Consider adding functionality to export reports for personal records or tax purposes.",
            },
            {
              id: 5,
              problemId: "HT105",
              tier: "tier1",
              title: "Open Innovation",
              description:
                "Develop an innovative solution that addresses a real-world problem of your choosing. You can explore emerging technologies such as artificial intelligence, data science, blockchain, or projects that have a significant social impact (e.g., improving accessibility, environmental sustainability, healthcare solutions). The goal is to propose a unique project that showcases creativity, technical expertise, and problem-solving ability. Focus on delivering a prototype that demonstrates how your solution can be implemented or scaled.",
            },

            // Tier 2 Questions
            {
              id: 6,
              problemId: "HT201",
              tier: "tier2",
              title: "Smart Tutor - CLC Portal",
              description:
                "Develop a portal that simplifies the process of students applying for their College Leaving Certificate (CLC). Students should be able to submit an application online, upload necessary documents, and track the status of their request. For administrators, include a dashboard to view and manage incoming applications, approve or reject them, and provide feedback or request additional documents. Consider integrating notification systems to keep students updated on the status of their application.",
            },
            {
              id: 7,
              problemId: "HT202",
              tier: "tier2",
              title: "Nutrition Tracking App",
              description:
                "Create a comprehensive app/website for tracking daily nutritional intake. Users should be able to log their meals, track calories, macronutrients, vitamins, and other dietary components. Include features for meal planning and personalized recipe recommendations based on users' dietary preferences and goals (e.g., weight loss, muscle gain, balanced diet). The app should also offer insights into nutritional habits over time, helping users make informed decisions about their health and well-being.",
            },
            {
              id: 8,
              problemId: "HT203",
              tier: "tier2",
              title: "Personal Finance Management App",
              description:
                "Build a personal finance app/website to help users manage their expenses, create budgets, and achieve their savings goals. The app should allow users to categorize their spending (e.g., food, entertainment, rent), set budget limits for each category, and receive notifications when they approach or exceed their limits. Incorporate visual spending analytics (charts and graphs) and goal-tracking features that motivate users to save money or pay off debt. Include options to connect with bank accounts or import transaction data for automatic categorization.",
            },
            {
              id: 9,
              problemId: "HT204",
              tier: "tier2",
              title: "Carbon Footprint Calculator",
              description:
                "Design an app/website that calculates users' carbon footprints based on their daily activities, such as transportation, energy use, and food consumption. Provide insights on how users can reduce their environmental impact through simple actions (e.g., switching to renewable energy, reducing meat consumption). Gamify the experience by rewarding users with badges or points for achieving sustainability goals, and incorporate social features where users can compare their progress with friends or community members.",
            },
            {
              id: 10,
              problemId: "HT205",
              tier: "tier2",
              title: "Open Innovation",
              description:
                "Develop a creative and novel solution to any problem or opportunity of your choice. You can focus on any area, such as technology, health, education, or environmental sustainability, and leverage any tools, frameworks, or technologies to build your solution. This project is an opportunity to showcase your innovative thinking and technical expertise in a real-world context, with the freedom to explore groundbreaking ideas or niche problems that interest you.",
            },
            {
              id: 11,
              problemId: "HT206",
              tier: "tier2",
              title: "Smart Personal Finance Assistant",
              description:
                "Develop an AI-powered personal finance assistant that helps users manage their finances by analyzing spending habits and providing personalized daily budgeting tips. The system should be able to identify trends in user spending, offer suggestions for cutting unnecessary expenses, and provide tailored savings strategies to help users achieve their financial goals. Incorporate features like automatic categorization of expenses, financial forecasting, and proactive alerts to prevent overspending.",
            },
            {
              id: 12,
              problemId: "HT207",
              tier: "tier2",
              title: "Mental Health Support Chatbot",
              description:
                "Create an AI-driven chatbot that provides real-time emotional support for users experiencing stress, anxiety, or other mental health challenges. The chatbot should be able to respond empathetically, offer guided meditations, and recommend mental health resources based on user input. Consider integrating NLP (Natural Language Processing) for understanding user emotions and providing suggestions for relaxation techniques or connecting users to professional help when needed.",
            },
            {
              id: 13,
              problemId: "HT208",
              tier: "tier2",
              title: "Blockchain-based Voting System",
              description:
                "Design a secure, decentralized voting platform utilizing blockchain technology to ensure transparency and verifiability of votes. The system should allow users to cast votes anonymously, while ensuring that each vote is counted accurately and cannot be tampered with. Consider incorporating cryptographic techniques to ensure the privacy of voters and the immutability of the voting records. This platform can be used for various applications, such as elections, organizational decision-making, or polls.",
            },
            {
              id: 14,
              problemId: "HT209",
              tier: "tier2",
              title: "Sustainability Tracker",
              description:
                "Build a platform that helps users track their carbon footprint by monitoring their daily activities, such as transportation, energy usage, and waste management. The platform should provide personalized suggestions for reducing environmental impact, such as adopting eco-friendly habits or using renewable energy. Include features like progress tracking, comparisons with others, and rewards for achieving sustainability goals. The platform could also offer insights into global sustainability efforts and trends.",
            },
            {
              id: 15,
              problemId: "HT210",
              tier: "tier2",
              title: "Remote Work Productivity Tracker",
              description:
                "Develop a tool to monitor and analyze productivity for individuals working remotely. The tool should track activity levels, time management, and task completion, providing insights into when users are most productive. Based on this data, it can suggest strategies for improving focus and optimizing work schedules. Additional features could include break reminders, reports on productivity patterns, and integration with task management tools to help users stay on track with their work goals.",
            },
            {
              id: 16,
              problemId: "HT211",
              tier: "tier2",
              title: "Personalized Learning Pathways",
              description:
                "Create an AI-powered educational platform that analyzes students' strengths, weaknesses, and goals to design customized learning paths. The platform should assess a student's progress and adjust the learning plan dynamically, providing personalized recommendations for resources, courses, and exercises. Consider adding features like progress tracking, performance reports, and tailored study materials that align with each student's preferred learning style.",
            },
            {
              id: 17,
              problemId: "HT212",
              tier: "tier2",
              title: "Crowdsourced Product Testing",
              description:
                "Develop a platform that allows startups to crowdsource product feedback and usability testing from real users. The platform should enable companies to post products, gather feedback from users, and generate detailed reports with analytics on user behavior, pain points, and suggestions for improvement. Include features for organizing beta tests, segmenting user feedback by demographics, and visualizing usability metrics to help startups iterate on their products more effectively.",
            },
            {
              id: 18,
              problemId: "HT213",
              tier: "tier2",
              title: "AI-based Job Recommendation System",
              description:
                "Design a platform that uses machine learning to match users with jobs based on their skills, interests, and industry trends. The system should learn from user interactions to improve the relevance of job recommendations over time. Incorporate features like skill gap analysis, job market trends, and career growth suggestions to offer users a comprehensive tool for finding jobs that align with their professional development goals.",
            },
            {
              id: 19,
              problemId: "HT214",
              tier: "tier2",
              title: "Real-Time Disaster Alert System",
              description:
                "Build a system that aggregates real-time data from multiple sources (such as weather stations, government agencies, and social media) to provide up-to-the-minute disaster alerts. The platform should inform users of imminent threats (e.g., earthquakes, floods, wildfires) and provide critical information such as evacuation routes, safety guidelines, and shelter locations. The system could include features like geo-targeted notifications and integration with local authorities for better disaster management.",
            },
            {
              id: 20,
              problemId: "HT215",
              tier: "tier2",
              title: "Remote Skill Assessment Platform",
              description:
                "Create an online platform for conducting remote skill assessments with interactive tests and real-time feedback. The platform should be suitable for recruitment, certifications, and educational purposes. It should feature customizable tests, automated grading, and analytics to assess skill levels accurately. Consider adding real-time collaboration features, video interviews, and gamified elements to enhance the assessment process.",
            },
          ]);
        }, 1000);
      });
      setQuestions(response);
      setLoading(false);
    } catch (err) {
      setError("Failed to fetch questions. Please try again later.");
      setLoading(false);
    }
  };

  const filteredQuestions = questions.filter(
    (q) =>
      q.tier === activeTab &&
      (q.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        q.description.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const indexOfLastQuestion = currentPage * questionsPerPage;
  const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage;
  const currentQuestions = filteredQuestions.slice(
    indexOfFirstQuestion,
    indexOfLastQuestion
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const toggleQuestion = (id) => {
    setExpandedQuestion(expandedQuestion === id ? null : id);
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-100">
        <div className="h-32 w-32 animate-spin rounded-full border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="rounded-lg bg-white p-8 shadow-md">
          <h2 className="mb-4 text-2xl font-bold text-red-600">Error</h2>
          <p className="text-gray-700">{error}</p>
          <button
            onClick={fetchQuestions}
            className="mt-4 rounded bg-blue-500 px-4 py-2 text-white transition duration-300 hover:bg-blue-600"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 dark:bg-black sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-12 text-center text-4xl font-bold text-gray-900 dark:text-gray-300">
          Hackathon Questions
        </h1>
        <div className="overflow-hidden rounded-lg bg-white shadow-xl dark:bg-black">
          <div className="flex border-b border-gray-200">
            <button
              className={`flex-1 py-4 px-6 text-center font-medium ${
                activeTab === "tier1"
                  ? "bg-blue-500 text-white"
                  : "text-gray-500 hover:bg-gray-50 hover:text-gray-700"
              }`}
              onClick={() => {
                setActiveTab("tier1");
                setCurrentPage(1);
              }}
            >
              Tier 1
            </button>
            <button
              className={`flex-1 py-4 px-6 text-center font-medium ${
                activeTab === "tier2"
                  ? "bg-blue-500 text-white"
                  : "text-gray-500 hover:bg-gray-50 hover:text-gray-700"
              }`}
              onClick={() => {
                setActiveTab("tier2");
                setCurrentPage(1);
              }}
            >
              Tier 2
            </button>
          </div>
          <div className="p-6">
            <div className="relative mb-6">
              <input
                type="text"
                placeholder="Search questions..."
                className="w-full rounded-full bg-gray-100 p-3 pl-10 pr-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
              />
              <FaSearch className="absolute left-3 top-3 text-gray-400" />
            </div>
            {currentQuestions.length === 0 ? (
              <p className="my-8 text-center text-gray-500">
                No questions found. Try a different search term or tier.
              </p>
            ) : (
              currentQuestions.map((question) => (
                <div
                  key={question.id}
                  className="mb-6 overflow-hidden rounded-lg bg-gray-50 shadow-md transition-all duration-300 ease-in-out"
                >
                  <div
                    className="flex cursor-pointer items-center justify-start gap-x-14 p-4"
                    onClick={() => toggleQuestion(question.id)}
                    role="button"
                    tabIndex="0"
                    aria-expanded={expandedQuestion === question.id}
                  >
                    <div className="flex basis-3/4 justify-start gap-x-14">
                      <p>
                        <span className="font-semibold dark:text-black">Problem ID : </span>
                        <span className="dark:text-black">{question.problemId}</span>
                      </p>
                      <h3 className="text-lg font-semibold text-gray-800">
                        {question.title}
                      </h3>
                    </div>
                    <div className="flex basis-1/4 justify-end">
                      {expandedQuestion === question.id ? (
                        <FaChevronUp className="text-gray-600" />
                      ) : (
                        <FaChevronDown className="text-gray-600" />
                      )}
                    </div>
                  </div>
                  {expandedQuestion === question.id && (
                    <div className="flex items-center gap-x-3 border-t border-gray-200 bg-white p-4">
                      <p className="basis-[85%] text-gray-600">
                        {question.description}
                      </p>
                      <Link
                        href="/submission"
                        className={`${submitBtn} h-fit basis-[15%] self-end`}
                      >
                        Submit Here
                      </Link>
                    </div>
                  )}
                </div>
              ))
            )}
            <div className="mt-8 flex justify-center">
              {Array.from(
                {
                  length: Math.ceil(
                    filteredQuestions.length / questionsPerPage
                  ),
                },
                (_, i) => (
                  <button
                    key={i + 1}
                    onClick={() => paginate(i + 1)}
                    className={`mx-1 rounded px-3 py-1 ${
                      currentPage === i + 1
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                  >
                    {i + 1}
                  </button>
                )
              )}
            </div>
            <Link href="https://docs.google.com/document/d/1qxYEkIfoHW7494C5hZbYE1errbTWaEAjyyh0Y2Sm5Oo/edit">  <div class="flex justify-center items-center mt-3">
  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    View Guidelines
  </button>
</div>
</Link>

          </div>
        </div>
        
      </div>
    </div>
  );
};

export default HackathonQuestions;

