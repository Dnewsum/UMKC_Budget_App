import React from "react";
import { Card } from "flowbite-react";
import SignUpLeftPanel from "../components/panels/SignUpLeftPanel";
import SignUpForm from "../components/panels/SignUpForm";

const SignUp: React.FC = () => (
  <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-800 to-blue-400 p-6">
  <Card className="w-full max-w-5xl bg-white shadow-xl">
    <div className="flex flex-col md:flex-row">
      <SignUpLeftPanel />
      <SignUpForm />
    </div>
  </Card>
</div>
);

export default SignUp;
