import React from "react";

const ServiceAI: React.FC = () => {
  return (
    <section className="/* full viewport height */ /* center horizontally, align to top */ /* padding around */ flex min-h-screen items-start justify-center bg-gradient-to-br  px-4 py-12">
      <div className="flex w-full max-w-3xl items-center gap-10 rounded-3xl bg-white p-8 shadow-2xl md:flex-row md:p-16">
        {/* Image/Illustration */}
        <div className="flex-shrink-0">
          <img
            src="/robothead.png"
            alt="AI Teacher"
            className="h-48 w-48 object-contain"
          />
        </div>
        {/* Content */}
        <div>
          <h1 className="mb-4 text-4xl font-extrabold text-amber-400">
            Meet Your AI Teacher!
          </h1>
          <p className="mb-6 text-lg text-gray-700">
            Unlock a new era of learning with our intelligent AI Teacher. Get
            instant answers, personalized guidance, and interactive lessons—
            anytime, anywhere. Perfect for students, lifelong learners, and
            educators!
          </p>
          <ul className="mb-6 space-y-2">
            <li className="flex items-center">
              <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-indigo-100 text-blue-700">
                <svg
                  className="h-4 w-4"
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
              <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-indigo-100 text-blue-700">
                <svg
                  className="h-4 w-4"
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
              <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-indigo-100 text-blue-700">
                <svg
                  className="h-4 w-4"
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
            className="inline-block rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white shadow transition-colors duration-200 hover:bg-blue-700 focus:ring-4 focus:ring-indigo-300"
          >
            Try AI Teacher Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServiceAI;
