import React from "react";

const DashboardHome: React.FC = () => {
    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-800 to-blue-400 flex flex-col items-center justify-center">
            <header className="text-center mb-8">
                <h1 className="text-4xl font-bold text-gray-800">Welcome to Budget App</h1>
                <p className="text-gray-600 mt-2">Manage your finances effortlessly</p>
            </header>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl px-4">
                <Card
                    title="Track Expenses"
                    description="Monitor your spending habits and stay on top of your budget."
                    link="/expenses"
                    bgColor="bg-blue-500"
                />
                <Card
                    title="Set Goals"
                    description="Define financial goals and track your progress towards achieving them."
                    link="/goals"
                    bgColor="bg-green-500"
                />
                <Card
                    title="Analyze Reports"
                    description="Get detailed insights and reports to make informed decisions."
                    link="/reports"
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