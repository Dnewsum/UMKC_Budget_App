import React from "react";

const ServiceAI: React.FC = () => {
  return (
    <section
      className="
        min-h-screen                       /* full viewport height */
        bg-gradient-to-br from-blue-500 to-indigo-100
        flex items-start justify-center   /* center horizontally, align to top */
        px-4 py-12                         /* padding around */
      "
    >
      <div
        className="
          max-w-3xl w-full
          bg-white rounded-3xl shadow-2xl
          p-8 md:p-16
          flex md:flex-row items-center gap-10
        "
      >
        {/* Image/Illustration */}
        <div className="flex-shrink-0">
          <img
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/ai-teacher.svg"
            alt="AI Teacher"
            className="w-48 h-48 object-contain"
          />
        </div>
        {/* Content */}
        <div>
          <h1 className="text-4xl font-extrabold text-indigo-700 mb-4">
            Meet Your AI Teacher!
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Unlock a new era of learning with our intelligent AI Teacher. Get
            instant answers, personalized guidance, and interactive lessons—
            anytime, anywhere. Perfect for students, lifelong learners, and
            educators!
          </p>
          <ul className="mb-6 space-y-2">
            <li className="flex items-center">
              <span className="inline-flex items-center justify-center w-6 h-6 bg-indigo-100 text-indigo-700 rounded-full mr-2">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </span>
              24/7 Instant Q&A
            </li>
            <li className="flex items-center">
              <span className="inline-flex items-center justify-center w-6 h-6 bg-indigo-100 text-indigo-700 rounded-full mr-2">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8v4l3 3"
                  />
                  <circle cx="12" cy="12" r="10" />
                </svg>
              </span>
              Personalized Learning Paths
            </li>
            <li className="flex items-center">
              <span className="inline-flex items-center justify-center w-6 h-6 bg-indigo-100 text-indigo-700 rounded-full mr-2">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 17l4 4 4-4m0-5V3"
                  />
                </svg>
              </span>
              Interactive & Engaging Lessons
            </li>
          </ul>
          <a
            href="/ai-teacher"
            className="
              inline-block px-8 py-3
              bg-indigo-600 text-white font-semibold
              rounded-lg shadow hover:bg-indigo-700
              transition-colors duration-200 focus:ring-4 focus:ring-indigo-300
            "
          >
            Try AI Teacher Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServiceAI;
