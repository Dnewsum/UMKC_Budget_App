import React from 'react';
import { Card } from 'flowbite-react';

const About: React.FC = () => {
    return (
        <div className="container mx-auto px-4 py-8">
           
            <div className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Meet the Team</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {Array.from({ length: 4 }).map((_, index) => (
                        <Card key={index} className="text-center">
                            <img
                                src={`https://via.placeholder.com/150?text=Member+${index + 1}`}
                                alt={`Team Member ${index + 1}`}
                                className="rounded-full mx-auto mb-4 w-24 h-24"
                            />
                            <h3 className="text-lg font-semibold text-gray-800">Member {index + 1}</h3>
                            <p className="text-gray-600">Role or Position</p>
                        </Card>
                    ))}
                </div>
            </div>

            <div className="text-center">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact</h2>
                <p className="text-gray-600">
                    For support, email us at <a href="mailto:support@example.com" className="text-blue-600 hover:underline">support@example.com</a>.
                </p>
            </div>
        </div>
    );
};

export default About;