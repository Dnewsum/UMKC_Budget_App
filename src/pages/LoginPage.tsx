import React from "react";
import { Link } from "react-router-dom";

const LoginPage: React.FC = () => {
    return (
        <div className="flex min-h-screen items-start justify-center bg-gradient-to-r from-blue-800 to-blue-400 pt-10">
            <div className="w-full max-w-md space-y-6 rounded-lg bg-amber-400 p-8 shadow-md">
                <h2 className="text-center text-2xl font-bold text-gray-800">Login</h2>
                <form className="space-y-4">
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="mt-1 block w-full rounded-lg border bg-white px-4 py-2 text-gray-900 focus:ring focus:ring-blue-300 focus:outline-none"
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="mt-1 block w-full rounded-lg border bg-white px-4 py-2 text-gray-900 focus:ring focus:ring-blue-300 focus:outline-none"
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                                id="remember-me"
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                            />
                            <label
                                htmlFor="remember-me"
                                className="ml-2 text-sm text-gray-600"
                            >
                                Remember me
                            </label>
                        </div>
                        <a href="#" className="text-sm text-blue-600 hover:underline">
                            Forgot password?
                        </a>
                    </div>
                    <Link to="/dashboard">
                    <button
                        type="submit"
                        className="w-full rounded-lg bg-blue-800 px-4 py-2 text-white hover:bg-blue-900 focus:ring focus:ring-blue-300 focus:outline-none"
                    >
                        Login
                    </button>
                    </Link>
                </form>
                <p className="text-center text-sm text-gray-600">
                    Don't have an account?{" "}
                    <a href="#" className="text-blue-600 hover:underline">
                        Sign up
                    </a>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;
