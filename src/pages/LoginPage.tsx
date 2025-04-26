//This is our login page.
// Axios is a http client for making requests to the server. We use it to send the login request and handle the response. 
// The jwtDecode library is used to decode the JWT token received from the server.


import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import AxiosAPI from "../AxiosAPI"; // Axios instance for making API requests
import { Button, Checkbox, Label, TextInput } from "flowbite-react"; // UI components from Flowbite
import { jwtDecode } from "jwt-decode"; // Library to decode JWT tokens

// Define the LoginPage component that actually sends the login request to the server and handles the response.
// This component is responsible for rendering the login form and managing the login process.
// It uses React hooks to manage state and side effects so it remembers the user login status  
// still uses React Router for navigation.

const LoginPage: React.FC = () => {
  // State variables to manage form inputs and error messages
  const [email, setEmail] = useState(""); // Stores the email input
  const [password, setPassword] = useState(""); // Stores the password input
  const [remember, setRemember] = useState(false); // Tracks the "Remember me" checkbox
  const [error, setError] = useState(""); // Stores error messages for failed login attempts

  const navigate = useNavigate(); // React Router hook for navigation

  // Function to handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevents the default form submission behavior

    try {
      // Send login request to the server
      const response = await AxiosAPI.post("/auth/login", { email, password });
      const token: string = (response.data as { token: string }).token; // Extract the JWT token from the response

      // Decode the JWT token to extract user information
      const decoded: {
        email: string;
        user_id: string;
        username: string;
        full_name: string;
        iat: number; // Issued at timestamp
        exp: number; // Expiration timestamp
      } = jwtDecode(token);

      // Store the token and user data in localStorage or sessionStorage based on "Remember me"
      if (remember) {
        localStorage.setItem("jwtToken", token);
        localStorage.setItem("user", JSON.stringify(decoded));
      } else {
        sessionStorage.setItem("jwtToken", token);
        sessionStorage.setItem("user", JSON.stringify(decoded));
      }

      // Set the Authorization header for future Axios requests
      AxiosAPI.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      // Navigate to the dashboard after successful login
      navigate("/dashboard");
    } catch (err) {
        if (err instanceof Error) {
          setError(err.message); // now safe
        } else {
          setError("Server or network error.");
        }
      }
      
  };

  // Rending the login form and layout
  return (
    <div className="flex min-h-screen items-start justify-center bg-gradient-to-r from-blue-800 to-blue-400 pt-10">
      {/* Container for the login form */}
      <div className="w-full max-w-md space-y-6 rounded-lg bg-amber-400 p-8 shadow-md">
        <h2 className="text-center text-2xl font-bold text-gray-800">Login</h2>

        {/* Login form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email input field */}
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email">Email Address</Label>
            </div>
            <TextInput
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Update email state on input change
              placeholder="Enter your email"
              required
              shadow
            />
          </div>

          {/* Password input field */}
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password">Password</Label>
            </div>
            <TextInput
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Update password state on input change
              placeholder="Enter your password"
              required
              shadow
            />
          </div>

          {/* Remember Me checkbox and Forgot Password link */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Checkbox
                id="remember"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)} // Update "Remember me" state
              />
              <Label htmlFor="remember" className="text-gray-600">
                Remember me
              </Label>
            </div>
            <Link
              to="/forgot-password"
              className="text-sm text-blue-600 hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          {/* Error message display */}
          {error && <p className="text-center text-sm text-red-600">{error}</p>}

          {/* Submit button */}
          <Button
            type="submit"
            className="w-full bg-blue-800 hover:bg-blue-900 focus:ring focus:ring-blue-300"
          >
            Login
          </Button>
        </form>

        {/* Link to the signup page */}
        <p className="text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-600 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage; // Export the component for use in other parts of the app