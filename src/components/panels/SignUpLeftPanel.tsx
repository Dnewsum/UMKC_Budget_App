import React from "react";

const SignUpLeftPanel: React.FC = () => (
  <div className="hidden w-full flex-col justify-center p-8 md:flex md:w-1/2">
    <h2 className="mb-4 text-2xl font-bold">Why Create an Account?</h2>
    <ul className="mb-6 list-inside list-disc space-y-2 text-gray-700">
      <li>Personalized budget tracking</li>
      <li>Secure data encryption</li>
      <li>Access on any device, anytime</li>
      <li>AI Teacher for learning Finance</li>
      <li>Monthly spending reports</li>
    </ul>
    <p className="text-sm text-gray-600">
      By signing up, you agree to our{" "}
      <a href="/terms" className="text-blue-600 hover:underline">
        Terms of Service
      </a>{" "}
      and{" "}
      <a href="/privacy" className="text-blue-600 hover:underline">
        Privacy Policy
      </a>
      .
    </p>
  </div>
);

export default SignUpLeftPanel;
