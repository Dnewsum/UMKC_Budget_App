import React from "react";

const DashboardHome: React.FC = () => {
    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-800 to-blue-400 flex flex-col items-center pt-16">
            <header className="flex w-full max-w-5xl px-4">
                <div className="w-1/2 flex flex-col  items-start">
                    <h1 className="text-4xl font-bold text-gray-800">Welcome back, (Username)!</h1>
            
                </div>
                <div className="w-1/2 flex flex-col items-center bg-amber-400 p-6 rounded-xl shadow-lg border border-gray-200 mb-6 ">
                    <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-blue-400 shadow mb-4 flex items-center justify-center bg-gray-100">
                        <img
                            src="/accounticon.png"
                            alt="Profile"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-1">Full Name</h2>
                    <p className="text-sm text-gray-800 mb-2">Spending Goal</p>
                    <span className="text-lg font-bold text-blue-600 mb-5">$5,000</span>
                    <p className="text-sm text-gray-800 mb-2">Saved so Far:</p>
                    <span className="text-lg font-semibold text-blue-600">$2,500</span>
                </div>
                
            </header>
            <div className="min-h-screen grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl px-4 pt-4 md:pt-4 ">
                <Card
                    title="Track Expenses"
                    description="Monitor your spending habits and get detailed insights and reports to make informed decisions."
                    link="/expensetable"
                    bgColor="bg-blue-500 "
                />
                <Card
                    title="AI Teacher"
                    description="Learn about budgeting and saving with our AI-powered teacher."
                    link="/ai-teacher"
                    bgColor="bg-green-500"
                />
                <Card
                    title="Analyze Reports"
                    description="Get detailed insights and reports to make informed decisions."
                    link="/spending-breakdown"
                    bgColor="bg-purple-500"
                />
            </div>
        </div>
    );
};

interface CardProps {
    title: string;
    description: string;
    link: string;
    bgColor: string;
}

const Card: React.FC<CardProps> = ({ title, description, link, bgColor }) => {
    return (
        <a
            href={link}
            className={`flex flex-col items-center justify-center p-6 rounded-lg shadow-lg text-white ${bgColor} hover:scale-105 transition-transform`}
        >
            <h2 className="text-2xl font-semibold mb-2">{title}</h2>
            <p className="text-center">{description}</p>
        </a>
    );
};

export default DashboardHome;