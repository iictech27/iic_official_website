import React, { useState } from "react";
import Link from "next/link";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Account = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Mock feedback data for the dashboard
  const mockFeedbackData = [
    { id: 1, category: "Event", feedback: "Great event organization!", date: "2024-10-25" },
    { id: 2, category: "Club", feedback: "Loved the activities!", date: "2024-10-26" },
    { id: 3, category: "Committee", feedback: "Well managed committee!", date: "2024-10-27" },
    { id: 4, category: "Event", feedback: "Could improve the timing.", date: "2024-10-28" },
    { id: 5, category: "Club", feedback: "Could use more resources.", date: "2024-10-29" }
  ];

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Mock login validation
    if (username === "admin" && password === "password") {
      setIsLoggedIn(true);
      toast.success("Login successful!");
    } else {
      toast.error("Invalid credentials. Please try again.");
    }
  };

  // Filter feedback based on selected category
  const filteredFeedback = selectedCategory === "All" 
    ? mockFeedbackData 
    : mockFeedbackData.filter(item => item.category === selectedCategory);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br p-4">
      <ToastContainer />

      {/* Login Card */}
      {!isLoggedIn ? (
        <div className="w-full max-w-md rounded-3xl border border-gray-200 bg-white bg-opacity-30 p-8 shadow-xl backdrop-blur-md backdrop-filter">
          <h1 className="mb-8 text-center text-4xl font-bold text-gray-800 dark:text-white md:text-5xl">
            Admin Login
          </h1>
          <form onSubmit={handleLogin}>
            <input
              type="text"
              className="w-full mb-4 p-2 rounded-lg border border-gray-300"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              type="password"
              className="w-full mb-4 p-2 rounded-lg border border-gray-300"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button
              type="submit"
              className="w-full rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 px-5 py-3 text-sm font-medium text-white transition-opacity duration-500 hover:bg-gradient-to-l focus:outline-none focus:ring-4 focus:ring-purple-200"
            >
              Login
            </button>
          </form>
        </div>
      ) : (
        <div className="w-full rounded-3xl border border-gray-200 bg-white bg-opacity-30 p-8 shadow-xl backdrop-blur-md backdrop-filter">
          <h2 className="mb-4 text-xl font-semibold text-green-600 text-center">
            Welcome, Admin!
          </h2>
          
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-semibold text-gray-800">Feedback Entries</h3>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="rounded-lg border border-gray-300 p-2"
            >
              <option value="All">All Categories</option>
              <option value="Event">Event</option>
              <option value="Club">Club</option>
              <option value="Committee">Committee</option>
            </select>
          </div>

          {/* Feedback Table below the heading and dropdown */}
          <FeedbackTable feedbackData={filteredFeedback} />
          
          <Link href="/">
            <button className="mt-4 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 px-5 py-3 text-sm font-medium text-white transition-opacity duration-500 hover:bg-gradient-to-l focus:outline-none focus:ring-4 focus:ring-purple-200">
              Go to Home
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

const FeedbackTable = ({ feedbackData }) => {
  return (
    <div className="mt-8 w-full">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Category</th>
            <th className="py-2 px-4 border-b">Feedback</th>
            <th className="py-2 px-4 border-b">Date</th>
          </tr>
        </thead>
        <tbody>
          {feedbackData.map((feedback) => (
            <tr key={feedback.id} className="hover:bg-gray-100">
              <td className="py-2 px-4 border-b">{feedback.id}</td>
              <td className="py-2 px-4 border-b">{feedback.category}</td>
              <td className="py-2 px-4 border-b">{feedback.feedback}</td>
              <td className="py-2 px-4 border-b">{feedback.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Account;
