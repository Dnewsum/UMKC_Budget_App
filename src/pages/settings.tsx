import { FileInput, HelperText } from "flowbite-react";
import React from "react";

const SettingsPage: React.FC = () => {
    return (
        <div className="min-h-screen ">
            <div className="max-w-5xl mx-auto space-y-12">
                <h1 className="text-4xl font-bold text-gray-100">Settings</h1>

                <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Avatar Upload */}
                            <div>
                              <FileInput id="avatar-upload" />
                              <HelperText className="mt-1">Optional. JPG or PNG, max 2MB.</HelperText>
                            </div>
                    {/* Profile Settings */}
                    <section className="bg-amber-400 p-6 rounded-lg shadow-md space-y-4">
                        <h2 className="text-2xl font-semibold text-gray-100">Profile</h2>
                        <div>
                            
                            <label className="block text-white font-medium">Full Name</label>
                            <input
                                type="text"
                                defaultValue="Full Name"
                                className="mt-1 w-full p-2 rounded bg-gray-800 border border-gray-600 text-gray-100 placeholder-gray-400"
                            />
                        </div>
                        <div>
                            <label className="block text-white font-medium">Email Address</label>
                            <input
                                type="email"
                                defaultValue="user@example.com"
                                className="mt-1 w-full p-2 rounded bg-gray-800 border border-gray-600 text-gray-100 placeholder-gray-400"
                            />
                        </div>
                    </section>

                    {/* Password */}
                    <section className="bg-amber-400 p-6 rounded-lg shadow-md space-y-4 text-white">
                        <h2 className="text-2xl font-semibold ">Account</h2>
                        <div>
                            <label className="block  font-medium">Current Password</label>
                            <input
                                type="password"
                                className="mt-1 w-full p-2 rounded bg-gray-800 border border-gray-600 text-gray-100"
                            />
                        </div>
                        <div>
                            <label className="block text-white font-medium">New Password</label>
                            <input
                                type="password"
                                className="mt-1 w-full p-2 rounded bg-gray-800 border border-gray-600 "
                            />
                        </div>
                    </section>

                    {/* Notifications */}
                    <section className="bg-amber-400 p-6 rounded-lg shadow-md space-y-4">
                        <h2 className="text-2xl font-semibold ">Notifications</h2>
                        <label className="flex items-center space-x-3">
                            <input
                                type="checkbox"
                                defaultChecked
                                className="h-5 w-5 text-blue-500 bg-gray-800 border-gray-600 rounded"
                            />
                            <span className="text-white">Email Notifications</span>
                        </label>
                        <label className="flex items-center space-x-3">
                            <input
                                type="checkbox"
                                className="h-5 w-5 text-blue-500 bg-gray-800 border-gray-600 rounded"
                            />
                            <span className="text-white">SMS Alerts</span>
                        </label>
                    </section>

                    {/* Privacy */}
                    <section className="bg-amber-400 p-6 rounded-lg shadow-md space-y-4">
                        <h2 className="text-2xl font-semibold text-white">Privacy</h2>
                        <label className="flex items-center space-x-3">
                            <input
                                type="checkbox"
                                defaultChecked
                                className="h-5 w-5 text-blue-500 bg-gray-800 border-gray-600 rounded"
                            />
                            <span className="text-white">Public Profile</span>
                        </label>
                        <label className="flex items-center space-x-3">
                            <input
                                type="checkbox"
                                className="h-5 w-5 text-blue-500 bg-gray-800 border-gray-600 rounded"
                            />
                            <span className="text-white">Show Online Status</span>
                        </label>
                    </section>
                </form>

                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-md transition"
                    >
                        Save Changes
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SettingsPage;
