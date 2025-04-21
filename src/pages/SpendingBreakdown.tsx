import React from "react";
import LineChart from "../components/LineChart";
import RadialChart from "../components/RadialChart";
import CategoryChart from "../components/MoneyGraph";

const SpendingBreakdown: React.FC = () => {
    return (
        <div className="p-6 bg-gradient-to-r from-blue-800 to-blue-400 min-h-screen">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* Graph Spots */}
                <div className="bg-amber-300 shadow-md rounded-lg p-4">
                    <h2 className="text-lg font-semibold mb-2">Graph 1</h2>
                    <div className=" rounded"> <LineChart/></div>
                </div>
                <div className="bg-amber-400 shadow-md rounded-lg p-4">
                    <h2 className="text-lg font-semibold mb-2">Graph 2</h2>
                    <div className=" bg-gray-200 rounded"><RadialChart/></div>
                </div>
                <div className="bg-amber-300 shadow-md rounded-lg p-4">
                    <h2 className="text-lg font-semibold mb-2">Graph 3</h2>
                    <div className=" bg-gray-200 rounded"><CategoryChart startValue={50} maxPoints={50}/>  </div>
                </div>
                <div className="bg-amber-400 shadow-md rounded-lg p-4">
                    <h2 className="text-lg font-semibold mb-2">Graph 4</h2>
                    <div className=" bg-gray-200 rounded">  </div>
                </div>
            </div>

            {/* Spending Breakdown Table */}
            <div className="bg-white shadow-md rounded-lg p-4">
                <h2 className="text-lg font-semibold mb-4">Spending Breakdown</h2>
                <div className="overflow-x-auto">
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