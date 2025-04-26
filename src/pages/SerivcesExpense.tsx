import React from "react";
import ExpenseTable from "../components/ExpenseTable";


const ServicesExpense: React.FC = () => {
  return (
    <main className="p-4 min-h-screen relative">
      <header className="mb-6">
        <h1 className="text-4xl font-bold text-amber-400 text-center">Services Expense Overview</h1>
        <p className="text-white text-center text-xl mt-2">
          Find all those charges and fees that slip through manual budgeting. Mint Condition leverages AI and visualization to give you total control over your budget.
        </p>
      </header>

      {/* Table Section */}
      <section className="mb-8 flex flex-col items-center relative z-50">
        <ExpenseTable />

        {/* Overlayed Arrow */}
        <img
          src="/arrow.png"
          alt="Arrow pointing to table"
          className="absolute w-32 left-1/2 top-full -translate-x-80 -translate-y-26"
        />
      </section>

      {/* Text Box Section */}
      <div className="flex justify-center relative">
        <div className="bg-amber-400 w-full max-w-2xl shadow-md rounded-lg p-4 mb-8">
          <p className="text-gray-800 text-center text-2xl mt-2">
            Using color and quick visual cues: Users can find info and charges faster so they can get back to using their money the way they want.
          </p>
        </div>
      </div>
    </main>
  );
};

export default ServicesExpense;
