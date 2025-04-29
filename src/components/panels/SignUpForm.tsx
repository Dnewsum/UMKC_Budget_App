import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FloatingLabel, Select, Checkbox, Button } from "flowbite-react";
import { FcGoogle } from "react-icons/fc";
import { jwtDecode } from "jwt-decode";
import { states } from "../../data/states";
import AxiosAPI from "../../AxiosAPI";

const SignUpForm: React.FC = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
    terms: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.terms) {
      alert("You must agree to the terms of service.");
      return;
    }

    try {
      const response = await AxiosAPI.post("/register", formData);
      const token = (response.data as { token: string }).token;

      if (token) {
        const decoded = jwtDecode(token);

        if (formData.terms) {
          localStorage.setItem("jwtToken", token);
          localStorage.setItem("user", JSON.stringify(decoded));
        } else {
          sessionStorage.setItem("jwtToken", token);
          sessionStorage.setItem("user", JSON.stringify(decoded));
        }

        AxiosAPI.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        navigate("/dashboard");
      } else {
        alert("Registration succeeded but token was not returned.");
      }
    } catch (error) {
      console.error("Registration failed:", error);
      alert("Registration failed. Please try again.");
    }
  };

  return (
    <div className="w-full p-8 md:w-1/2">
      <h1 className="mb-6 bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-center text-4xl font-extrabold text-transparent">
        Create Your Account
      </h1>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <FloatingLabel id="name" name="name" type="text" label="Full Name" required variant="outlined" onChange={handleChange} />
        <FloatingLabel id="email" name="email" type="email" label="Email Address" required variant="outlined" onChange={handleChange} />
        <FloatingLabel id="password" name="password" type="password" label="Password" required variant="outlined" onChange={handleChange} />
        <FloatingLabel id="phone" name="phone" type="tel" label="Phone Number" required variant="outlined" onChange={handleChange} />
        <FloatingLabel id="address1" name="address1" type="text" label="Address Line 1" required variant="outlined" onChange={handleChange} />
        <FloatingLabel id="address2" name="address2" type="text" label="Address Line 2" variant="outlined" onChange={handleChange} />
        <div className="flex flex-wrap gap-4">
          <div className="flex-grow">
            <FloatingLabel id="city" name="city" type="text" label="City" required variant="outlined" onChange={handleChange} />
          </div>
          <div className="w-32">
            <Select id="state" name="state" required onChange={handleChange} className="w-full">
              <option value="">State</option>
              {states.map((state) => (
                <option key={state.value} value={state.value}>
                  {state.label}
                </option>
              ))}
            </Select>
          </div>
          <div className="w-32">
            <FloatingLabel id="zip" name="zip" type="text" label="ZIP" required variant="outlined" onChange={handleChange} />
          </div>
        </div>

        <div className="flex items-start gap-2">
          <Checkbox id="terms" name="terms" checked={formData.terms} onChange={handleChange} className="mt-1" />
          <label htmlFor="terms" className="text-sm">
            I agree to the{" "}
            <a href="/terms" className="text-blue-700 hover:underline">
              Terms of Service
            </a>
            .
          </label>
        </div>

        <Button type="submit" className="w-full bg-blue-600 py-3 text-lg transition hover:bg-blue-700">
          Sign Up
        </Button>

        <div className="my-4 flex items-center">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-3 text-gray-400">or</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        <Button outline className="flex w-full items-center justify-center gap-2 py-3">
          <FcGoogle className="text-xl" /> Sign up with Google
        </Button>

        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <a href="/login" className="text-blue-700 hover:underline">
            Log In
          </a>
        </p>
      </form>
    </div>
  );
};

export default SignUpForm;
// This code defines a SignUpForm component that allows users to create an account. It includes fields for personal information, a checkbox for terms of service, and buttons for submitting the form and signing up with Google. The form data is managed using React's useState hook, and Axios is used to send a POST request to the server upon submission. The component also handles JWT token storage and navigation upon successful registration.