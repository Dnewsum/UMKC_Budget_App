import React, { useEffect, useState } from "react";
import Gauge from "../components/Gauge";

const DashboardHome: React.FC = () => {
  const [username, setUsername] = useState<string>("User");
  const [fullName, setFullName] = useState<string>("Full Name");

  useEffect(() => {
    const storedUser = localStorage.getItem("user") || sessionStorage.getItem("user");
    if (storedUser) {
      const user = JSON.parse(storedUser);
      setUsername(user.username || "User");
      setFullName(user.full_name || "Full Name"); // Only if you added full_name to your JWT
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-800 to-blue-400 py-16 px-4">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left column: Welcome + Gauge */}
        <div className="flex flex-col justify-start space-y-8">
          <h1 className="text-4xl font-bold text-white">
            Welcome back, <span className="text-blue-200">{username}</span>!
          </h1>
          <section className="bg-amber-400 p-6 rounded-lg shadow-md flex flex-col items-center space-y-4">
            <h2 className="text-3xl text-center font-semibold text-white">Dashboard</h2>
            <Gauge />
          </section>
        </div>

        {/* Right column: Profile Card */}
        <div className="relative flex flex-col items-center bg-amber-400 rounded-xl shadow-lg p-6 space-y-4">
          <a
            href="/settings"
            className="absolute top-4 left-4 text-gray-700 hover:text-gray-900 transition-colors"
            aria-label="Settings"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z"
              />
            </svg>
          </a>

          <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-blue-400 shadow-inner">
            <img
              src="/accounticon.png"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>

          <h2 className="text-2xl font-bold text-gray-800">{fullName}</h2>

          <div className="w-full bg-gray-100 p-4 rounded-lg text-center">
            <p className="text-sm text-gray-600">Spending Goal</p>
            <p className="text-lg font-semibold text-blue-600">$5,000</p>
          </div>

          <div className="w-full bg-gray-100 p-4 rounded-lg text-center">
            <p className="text-sm text-gray-600">Saved So Far</p>
            <p className="text-lg font-semibold text-blue-600">$2,500</p>
          </div>
        </div>
      </div>

      {/* Feature Cards Grid */}
      <div className="max-w-5xl mx-auto mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <FeatureCard
          title="Track Expenses"
          description="Monitor your spending habits and get detailed insights and reports to make informed decisions."
          link="/expensetable"
          bgColor="bg-blue-500"
        />
        <FeatureCard
          title="AI Teacher"
          description="Learn about budgeting and saving with our AI-powered teacher."
          link="/ai-teacher"
          bgColor="bg-green-500"
        />
        <FeatureCard
          title="Analyze Reports"
          description="Get detailed insights and reports to make informed decisions."
          link="/spending-breakdown"
          bgColor="bg-purple-500"
        />
      </div>
    </div>
  );
};

interface FeatureCardProps {
  title: string;
  description: string;
  link: string;
  bgColor: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  link,
  bgColor,
}) => (
  <a
    href={link}
    className={`flex flex-col items-center justify-center p-6 rounded-lg shadow-lg text-white ${bgColor} hover:scale-105 transition-transform`}
  >
    <h3 className="text-2xl font-semibold mb-2">{title}</h3>
    <p className="text-center">{description}</p>
  </a>
);

export default DashboardHome;
