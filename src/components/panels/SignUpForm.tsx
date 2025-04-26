import React from "react";
import { FloatingLabel, Select, Checkbox, Button } from "flowbite-react";
import { FcGoogle } from "react-icons/fc";
import { states } from "../../data/states"; // adjust if path differs

const SignUpForm: React.FC = () => (
  <div className="w-full p-8 md:w-1/2">
    <h1 className="mb-6 bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-center text-4xl font-extrabold text-transparent">
      Create Your Account
    </h1>

    <form className="space-y-4">
      {/* Full Name */}
      <div className="relative">
        <FloatingLabel
          id="name"
          name="name"
          type="text"
          label="Full Name"
          required
          variant="outlined"
        />
      </div>

      {/* Email */}
      <div className="relative">
        <FloatingLabel
          id="email"
          name="email"
          type="email"
          label="Email Address"
          required
          variant="outlined"
        />
      </div>

      {/* Password */}
      <div className="relative">
        <FloatingLabel
          id="password"
          name="password"
          type="password"
          label="Password"
          placeholder="••••••••"
          required
          variant="outlined"
        />
      </div>

      {/* Phone */}
      <div className="relative">
        <FloatingLabel
          id="phone"
          name="phone"
          type="tel"
          label="Phone Number"
          required
          variant="outlined"
        />
      </div>

      {/* Address Line 1 */}
      <div className="relative">
        <FloatingLabel
          id="address1"
          name="address1"
          type="text"
          label="Address Line 1"
          required
          variant="outlined"
        />
      </div>

      {/* Address Line 2 */}
      <div className="relative">
        <FloatingLabel
          id="address2"
          name="address2"
          type="text"
          label="Address Line 2"
          variant="outlined"
        />
      </div>

      {/* City / State / ZIP */}
      <div className="flex flex-wrap gap-4">
        <div className="flex-grow">
          <FloatingLabel
            id="city"
            name="city"
            type="text"
            label="City"
            required
            variant="outlined"
          />
        </div>

        <div className="w-32">
          <Select id="state" name="state" required className="w-full">
            <option value="">State</option>
            {states.map((state) => (
              <option key={state.value} value={state.value}>
                {state.label}
              </option>
            ))}
          </Select>
        </div>

        <div className="w-32">
          <FloatingLabel
            id="zip"
            name="zip"
            type="text"
            label="ZIP"
            required
            variant="outlined"
          />
        </div>
      </div>

      {/* Terms Checkbox */}
      <div className="flex items-start gap-2">
        <Checkbox id="terms" required className="mt-1" />
        <label htmlFor="terms" className="text-sm">
          I agree to the{" "}
          <a href="/terms" className="text-blue-700 hover:underline">
            Terms of Service
          </a>
          .
        </label>
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        className="w-full bg-blue-600 py-3 text-lg transition hover:bg-blue-700"
      >
        Sign Up
      </Button>

      {/* Divider */}
      <div className="my-4 flex items-center">
        <hr className="flex-grow border-gray-300" />
        <span className="mx-3 text-gray-400">or</span>
        <hr className="flex-grow border-gray-300" />
      </div>

      {/* Google Sign-Up */}
      <div className="space-y-2">
        <Button
          outline
          className="flex w-full items-center justify-center gap-2 py-3"
        >
          <FcGoogle className="text-xl" /> Sign up with Google
        </Button>
      </div>

      {/* Login Link */}
      <p className="mt-6 text-center text-sm text-gray-600">
        Already have an account?{" "}
        <a href="/login" className="text-blue-700 hover:underline">
          Log In
        </a>
      </p>
    </form>
  </div>
);

export default SignUpForm;
