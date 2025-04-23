import { AppDownloadCard } from "../components/AppDownloadCard";
import FormHome from "../components/FormHome";
import HeroMockup from "../components/HeroMockUp";


export default function Home() {
  return (
    <main className="flex min-h-[calc(100vh-4rem)] flex-col items-center bg-gradient-to-r from-blue-800 to-blue-400 px-4 pt-10 md:pt-15">
      {/* Top content wrapper */}
      <h1 className="mb-5 text-center text-5xl font-extrabold text-white">
        Manage Your Money Like a Pro
      </h1>
      <h2 className="mb-20 text-center text-2xl font-semibold text-white">
        Your Personal Finance Assistant
      </h2>
      <div className="mb-25 max-w-3xl">
        <HeroMockup />
      </div>
      <div className="flex w-full max-w-6xl flex-col items-start justify-between gap-12 md:flex-row">
        {/* Left Info */}
        <div className="max-w-md space-y-4 text-white md:w-1/2">
          <h2 className="text-center text-3xl font-semibold">
            Start Saving Today!
          </h2>
          <h3 className="text-center text-xl font-medium">
            Your one-stop App for all your budgeting needs
          </h3>
          <ul className="list-disc space-y-2 pl-6 text-lg">
            <li>
              We help you visualize your spending and saving habits, so you can
              make informed decisions about your finances.
            </li>
            <li>
              Our advanced AI can teach you about budgeting and saving, putting
              you in control of your money.
            </li>
            <li>
              Stay on top of your finances with alerts and search features that
              make money management simple.
            </li>
          </ul>
          <p className="font-semibold">
            Sign up today and start saving for your future!
          </p>
        </div>

        {/* Right Form */}
        <div className="md:w-1/2">
          <div className="rounded-lg">
            <FormHome />
          </div>
        </div>
      </div>

      {/* Centered AppDownloadCard */}
      <div className="mt-25 flex justify-center">
        <AppDownloadCard />
      </div>
     
    </main>
   
  );
}
