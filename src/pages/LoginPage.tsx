import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import AxiosAPI from "../AxiosAPI"; // Adjust the path accordingly
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { jwtDecode } from "jwt-decode";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  // 🔥 handleSubmit must be inside the component
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await AxiosAPI.post("/auth/login", { email, password });
      const token: string = response.data.token;

      const decoded: {
        email: string;
        user_id: string;
        username: string;
        full_name: string;
        iat: number;
        exp: number;
      } = jwtDecode(token);

      if (remember) {
        localStorage.setItem("jwtToken", token);
        localStorage.setItem("user", JSON.stringify(decoded));
      } else {
        sessionStorage.setItem("jwtToken", token);
        sessionStorage.setItem("user", JSON.stringify(decoded));
      }

      AxiosAPI.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      navigate("/dashboard");
    } catch (err: any) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="flex min-h-screen items-start justify-center bg-gradient-to-r from-blue-800 to-blue-400 pt-10">
      <div className="w-full max-w-md space-y-6 rounded-lg bg-amber-400 p-8 shadow-md">
        <h2 className="text-center text-2xl font-bold text-gray-800">Login</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email */}
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email" value="Email Address" />
            </div>
            <TextInput
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              shadow
            />
          </div>

          {/* Password */}
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password" value="Password" />
            </div>
            <TextInput
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              shadow
            />
          </div>

          {/* Remember Me + Forgot Password */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Checkbox
                id="remember"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
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

          {/* Error Message */}
          {error && <p className="text-center text-sm text-red-600">{error}</p>}

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-blue-800 hover:bg-blue-900 focus:ring focus:ring-blue-300"
          >
            Login
          </Button>
        </form>

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

export default LoginPage;
