import React, { useState, useEffect } from "react";
import { FaSearch, FaChevronDown, FaChevronUp } from "react-icons/fa";

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
            { id: 1, tier: "tier1", title: "Skill-Based Job Portal", description: "Build a web portal where users can input their skills, and the system will recommend suitable jobs based on their profile using ML/AI." },
            { id: 2, tier: "tier1", title: "Simple Weather App", description: "Develop a basic weather app using HTML, CSS, and JavaScript. Fetch real-time data from an API and display the current weather conditions." },
            { id: 3, tier: "tier1", title: "To-Do List Application", description: "Create a to-do list app that allows users to add, edit, delete tasks, categorize them, and set deadlines for each task." },
            { id: 4, tier: "tier1", title: "Travel Expense Tracker", description: "Design an app to track travel expenses, categorize spending, and generate reports for budgeting purposes." },
            { id: 5, tier: "tier1", title: "Open Innovation", description: "Propose and build an innovative solution to any problem of your choice. Explore AI, data science, blockchain, or social impact initiatives." },
  
            // Tier 2 Questions
            { id: 6, tier: "tier2", title: "Smart Tutor - CLC Portal", description: "Develop a portal for students to apply for a college leaving certificate (CLC) with admin functionality for approval or rejection of applications." },
            { id: 7, tier: "tier2", title: "Nutrition Tracking App", description: "Create an app for tracking daily nutritional intake, meal planning, and personalized recipe recommendations." },
            { id: 8, tier: "tier2", title: "Personal Finance Management App", description: "Build an app to help users track spending, set budgets, and achieve savings goals with visual spending analytics and goal tracking." },
            { id: 9, tier: "tier2", title: "Carbon Footprint Calculator", description: "Design an app to calculate carbon footprints and provide insights on reducing environmental impact with gamified sustainability features." },
            { id: 10, tier: "tier2", title: "Open Innovation", description: "Create a novel solution in any domain of your choice, using any technology stack or method to solve a problem or explore an opportunity." }
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
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Error</h2>
          <p className="text-gray-700">{error}</p>
          <button
            onClick={fetchQuestions}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 dark:bg-black">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12 dark:text-gray-300">
          Hackathon Questions
        </h1>
        <div className="bg-white shadow-xl rounded-lg overflow-hidden dark:bg-black">
          <div className="flex border-b border-gray-200">
            <button
              className={`flex-1 py-4 px-6 text-center font-medium ${
                activeTab === "tier1"
                  ? "bg-blue-500 text-white"
                  : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
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
                  : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
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
            <div className="mb-6 relative">
              <input
                type="text"
                placeholder="Search questions..."
                className="w-full p-3 pl-10 pr-4 text-gray-700 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
              />
              <FaSearch className="absolute left-3 top-3 text-gray-400" />
            </div>
            {currentQuestions.length === 0 ? (
              <p className="text-center text-gray-500 my-8">
                No questions found. Try a different search term or tier.
              </p>
            ) : (
              currentQuestions.map((question) => (
                <div
                  key={question.id}
                  className="mb-6 bg-gray-50 rounded-lg shadow-md overflow-hidden transition-all duration-300 ease-in-out"
                >
                  <div
                    className="p-4 cursor-pointer flex justify-between items-center"
                    onClick={() => toggleQuestion(question.id)}
                    role="button"
                    tabIndex="0"
                    aria-expanded={expandedQuestion === question.id}
                  >
                    <h3 className="text-lg font-semibold text-gray-800">
                      {question.title}
                    </h3>
                    {expandedQuestion === question.id ? (
                      <FaChevronUp className="text-gray-600" />
                    ) : (
                      <FaChevronDown className="text-gray-600" />
                    )}
                  </div>
                  {expandedQuestion === question.id && (
                    <div className="p-4 bg-white border-t border-gray-200">
                      <p className="text-gray-600">{question.description}</p>
                    </div>
                  )}
                </div>
              ))
            )}
            <div className="mt-8 flex justify-center">
              {Array.from(
                { length: Math.ceil(filteredQuestions.length / questionsPerPage) },
                (_, i) => (
                  <button
                    key={i + 1}
                    onClick={() => paginate(i + 1)}
                    className={`mx-1 px-3 py-1 rounded ${
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default HackathonQuestions;
