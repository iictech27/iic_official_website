import React, { useState } from "react";
import Link from "next/link";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Feedback = () => {
  const [feedback, setFeedback] = useState("");
  const [category, setCategory] = useState("");
  const [rating, setRating] = useState("");
  const [submittedFeedback, setSubmittedFeedback] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  
  // New states for event question
  const [eventAnswer, setEventAnswer] = useState("");
  const [isEventQuestionVisible, setIsEventQuestionVisible] = useState(true);

  const handleEventAnswerSubmit = (e) => {
    e.preventDefault();
    if (eventAnswer.toLowerCase() === "envisage") {
      // Allow feedback submission
      setIsEventQuestionVisible(false);
    } else {
      toast.error("Please enter the correct answer.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFeedback = {
      category,
      rating,
      feedback,
      date: new Date().toLocaleString(),
    };

    // Update the submitted feedback list
    setSubmittedFeedback((prev) => [...prev, newFeedback]);
    setSubmitted(true);
    setFeedback(""); // Reset feedback input after submission
    setCategory(""); // Reset category after submission
    setRating(""); // Reset rating after submission
    toast.success("Thank you for your feedback!");
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br p-4">
      <ToastContainer />

      <div className="w-full max-w-md rounded-3xl border border-gray-200 bg-white bg-opacity-30 p-8 shadow-xl backdrop-blur-md backdrop-filter">
        <h1 className="mb-8 text-center text-4xl font-bold text-gray-800 dark:text-white md:text-5xl">
          We Value Your Feedback
        </h1>

        {isEventQuestionVisible ? (
          <form onSubmit={handleEventAnswerSubmit}>
            <h2 className="mb-4 text-lg font-semibold">What is the flagship event of IIC? (Starts with 'E')</h2>
            <input
              type="text"
              className="w-full mb-4 p-2 rounded-lg border border-gray-300"
              placeholder="Your answer"
              value={eventAnswer}
              onChange={(e) => setEventAnswer(e.target.value)}
              required
            />
            <button
              type="submit"
              className="w-full rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 px-5 py-3 text-sm font-medium text-white transition-opacity duration-500 hover:bg-gradient-to-l focus:outline-none focus:ring-4 focus:ring-purple-200"
            >
              Proceed
            </button>
          </form>
        ) : submitted ? (
          <div className="text-center mb-6">
            <h2 className="mb-4 text-xl font-semibold text-green-600">
              Thank you for your feedback!
            </h2>
            <Link href="/">
              <button className="mt-4 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 px-5 py-3 text-sm font-medium text-white transition-opacity duration-500 hover:bg-gradient-to-l focus:outline-none focus:ring-4 focus:ring-purple-200">
                Go Back Home
              </button>
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <select
              className="w-full mb-4 p-2 rounded-lg border border-gray-300"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              <option value="" disabled>Select a category</option>
              <option value="Event">Event</option>
              <option value="Club">Club</option>
              <option value="Committee">Committee</option>
            </select>

            <input
              type="number"
              className="w-full mb-4 p-2 rounded-lg border border-gray-300"
              placeholder="Rating (1-5)"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              min="1"
              max="5"
            />

            <textarea
              className="w-full h-32 p-4 mb-4 rounded-lg border border-gray-300"
              placeholder="Your feedback..."
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              required
            />

            <button
              type="submit"
              className="w-full rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 px-5 py-3 text-sm font-medium text-white transition-opacity duration-500 hover:bg-gradient-to-l focus:outline-none focus:ring-4 focus:ring-purple-200"
            >
              Submit Feedback
            </button>
          </form>
        )}

        {submittedFeedback.length > 0 && (
          <div className="mt-8">
            <h2 className="text-2xl font-semibold">Submitted Feedback</h2>
            <ul className="mt-4 space-y-2">
              {submittedFeedback.map((item, index) => (
                <li key={index} className="p-4 border rounded-lg border-gray-300 bg-white bg-opacity-70">
                  <p><strong>Category:</strong> {item.category}</p>
                  <p><strong>Rating:</strong> {item.rating}</p>
                  <p><strong>Feedback:</strong> {item.feedback}</p>
                  <p className="text-gray-500"><strong>Date:</strong> {item.date}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Feedback;
