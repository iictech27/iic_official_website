import React, { useState, useEffect } from "react";

interface TimeLeft {
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
}

const ComingSoonPage: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({});
  const [email, setEmail] = useState<string>("");
  const [isValidEmail, setIsValidEmail] = useState<boolean>(true);
  const [isSubscribed, setIsSubscribed] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const difference = new Date("2024-09-26").getTime() - new Date().getTime();
      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setIsValidEmail(validateEmail(e.target.value));
  };

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isValidEmail && email) {
      setIsSubscribed(true);
      console.log("Subscribed:", email);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col justify-center items-center p-4 text-gray-800">
      <div className="max-w-4xl w-full bg-gray-100 rounded-xl shadow-xl p-10 animate-fade-in-up">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          Coming Soon
        </h1>
        <p className="text-xl md:text-2xl mb-10 text-center text-gray-600">
          We're preparing something extraordinary for you.
        </p>

        <div className="flex justify-center space-x-8 mb-12">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div
              key={unit}
              className="flex flex-col items-center bg-white rounded-lg p-4 w-24 shadow-md"
            >
              <span className="text-3xl md:text-5xl font-bold text-blue-600">
                {value}
              </span>
              <span className="text-sm md:text-base capitalize text-gray-500">
                {unit}
              </span>
            </div>
          ))}
        </div>

        {!isSubscribed ? (
          <form onSubmit={handleSubmit} className="mb-10">
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={handleEmailChange}
                className={`w-full md:w-96 px-6 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                  isValidEmail
                    ? "bg-white border border-gray-300"
                    : "bg-red-100 text-red-800 border border-red-300"
                }`}
                aria-label="Email for subscription"
              />
              <button
                type="submit"
                disabled={!isValidEmail || !email}
                className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:opacity-50 disabled:cursor-not-allowed font-semibold text-lg"
              >
                Notify Me
              </button>
            </div>
            {!isValidEmail && email && (
              <p className="mt-2 text-red-600 text-sm">
                Please enter a valid email address.
              </p>
            )}
          </form>
        ) : (
          <div className="text-center mb-10 animate-fade-in bg-green-100 p-6 rounded-lg">
            <p className="text-2xl font-semibold text-green-600">
              Thank you for subscribing!
            </p>
            <p className="text-gray-600">We'll keep you updated on our progress.</p>
          </div>
        )}
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-24"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="fill-current text-gray-100"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default ComingSoonPage;
