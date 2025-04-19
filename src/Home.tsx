import FormHome from "./components/FormHome";
import { TableHover } from "./components/TableHover";

export default function Home() {
  return (
    <main className="min-h-[calc(100vh-4rem)] bg-gradient-to-r from-blue-800 to-blue-400 px-4 pt-10 md:pt-20 flex flex-col items-center">
      {/* Top content wrapper */}
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
          <FormHome />
        </div>
      </div>

      {/* Table below */}
      
      <div className="w-full max-w-6xl mt-12">
        <h2 className="text-center text-3xl font-semibold text-white mb-6">
          Review Spending Habits Easily
        </h2>
        <TableHover />
      </div>
    </main>
  );
}
