import React from "react";
import LineChart from "../components/LineChart";
import RadialChart from "../components/RadialChart";

const SpendingBreakdown: React.FC = () => {
    return (
        <div className="p-6 bg-gradient-to-r from-blue-800 to-blue-400 min-h-screen">
            <div className="grid grid-cols-1  gap-6 mb-8">
                {/* Graph Spots */}
                <div className=" flex min-h-[600px]">
                    <div className="w-1/2 p-4 flex flex-col justify-center items-center">
                        <h2 className="text-3xl text-amber-400 font-bold mb-2 text-center">See Your Money Like Never Before!</h2>
                        <p className="text-white text-2xl text-center p-4">
                            Manage your spending with our detailed breakdown. This graph shows your spending habits over the last month, helping you identify areas where you can save more. Use this information to adjust your budget and make informed financial decisions.
                        </p>
                    </div>
                    <div className="w-1/2 p-4 flex flex-col justify-center items-center">
                        <h2 className="text-lg text-white font-semibold mb-2 text-center">Example - Jane's Watched Spending Areas</h2>
                        <div className="bg-gray-200 rounded-2xl w-full ">
                            <LineChart />
                        </div>
                    </div>
                </div>
                <div className=" flex">
                    <div className="w-1/2 p-4">
                        <h2 className="text-lg font-semibold text-center text-white mb-2">Example - John's Focused Spending Chart</h2>
                        <div className="bg-gray-200 rounded-2xl"><RadialChart/></div>
                    </div>
                    <div className="w-1/2 p-4 flex flex-col justify-center items-center">
                        <h2 className="text-3xl font-bold mb-2 text-amber-400 text-center">Set Specific Areas to Watch!</h2>
                        <p className="text-white text-2xl text-center p-4">
                            Explore your spending distribution with this focused chart. It highlights the areas where most of your budget is allocated, giving you a clear picture of your financial priorities. Use this insight to optimize your spending and achieve your financial goals.
                        </p>
                    </div>
                </div>
            </div>

            {/* Spending Breakdown Table */}
            <h2 className="text-3xl font-bold mb-2 text-amber-400 text-center mb-8">Clean Budget Modern Tools and Much More!</h2>
            <div className="bg-white shadow-md rounded-lg p-3">
                
                <h2 className="text-lg font-semibold text-center mb-2">Spending Breakdown</h2>
                <div className="overflow-x-auto">
                <p className="text-gray-700 text-2xl text-center p-4">
                            Classic budgeting categories or custom categories help you understand where your money goes. This table provides a detailed breakdown of your spending across various categories, allowing you to see where you can cut back and save more.
                        </p>
                    <table className="table-auto w-full text-left border-collapse border border-gray-300">
                        <thead className="bg-gray-200">
                            <tr>
                                <th className="px-4 py-2 border border-gray-300">Category</th>
                                <th className="px-4 py-2 border border-gray-300">Amount</th>
                                <th className="px-4 py-2 border border-gray-300">Percentage</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="px-4 py-2 border border-gray-300">Food</td>
                                <td className="px-4 py-2 border border-gray-300">$200</td>
                                <td className="px-4 py-2 border border-gray-300">20%</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border border-gray-300">Rent</td>
                                <td className="px-4 py-2 border border-gray-300">$800</td>
                                <td className="px-4 py-2 border border-gray-300">40%</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border border-gray-300">Utilities</td>
                                <td className="px-4 py-2 border border-gray-300">$150</td>
                                <td className="px-4 py-2 border border-gray-300">15%</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border border-gray-300">Entertainment</td>
                                <td className="px-4 py-2 border border-gray-300">$100</td>
                                <td className="px-4 py-2 border border-gray-300">10%</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border border-gray-300">Savings</td>
                                <td className="px-4 py-2 border border-gray-300">$250</td>
                                <td className="px-4 py-2 border border-gray-300">25%</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default SpendingBreakdown;