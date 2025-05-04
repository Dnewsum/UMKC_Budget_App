import React from "react";
import ChatBox from "../components/ChatBox";

const AITeacher: React.FC = () => {
  return (
    <div className="p-6 font-sans">
      <h1 className="mb-4 text-2xl font-bold">AI Teacher</h1>
      <ChatBox />
    </div>
  );
};

export default AITeacher;
