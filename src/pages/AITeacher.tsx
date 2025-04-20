import React, { useState } from "react";
import ChatBox from "../components/ChatBox";

const AITeacher: React.FC = () => {
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>(
    [],
  );
  const [input, setInput] = useState("");

  const handleSendMessage = () => {
    if (input.trim() === "") return;

    const userMessage = { sender: "User", text: input };
    setMessages((prev) => [...prev, userMessage]);

    // Simulate AI response
    const aiResponse = {
      sender: "AI",
      text: generateAIResponse(input),
    };
    setMessages((prev) => [...prev, aiResponse]);

    setInput("");
  };

  const generateAIResponse = (userInput: string): string => {
    if (userInput.toLowerCase().includes("spending")) {
      return "Let’s review your spending habits. Can you tell me more about your recent expenses?";
    } else if (userInput.toLowerCase().includes("stocks")) {
      return "Stocks represent ownership in a company. Would you like to learn about how to invest in them?";
    } else if (userInput.toLowerCase().includes("bonds")) {
      return "Bonds are a type of loan you give to an organization in exchange for interest payments. Would you like to know more?";
    } else {
      return "I’m here to help! Ask me about spending habits, stocks, or bonds.";
    }
  };

  return (
    <div className="p-6 font-sans">
      <h1 className="mb-4 text-2xl font-bold">AI Teacher</h1>
      <ChatBox />
      <div className="mb-4 h-96 overflow-y-scroll rounded-lg border border-gray-300 p-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`mb-2 ${
              message.sender === "User" ? "text-right" : "text-left"
            }`}
          >
            <strong>{message.sender}:</strong> {message.text}
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 rounded-lg border border-gray-300 p-2"
        />
        <button
          onClick={handleSendMessage}
          className="rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default AITeacher;
