import React, { useState } from "react";

interface Message {
  sender: "user" | "ai";
  text: string;
}

const ChatBox: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg: Message = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    // 🔥 Replace this with actual OpenAI API call
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer YOUR_OPENAI_API_KEY`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          { role: "system", content: "You are a budget assistant." },
          ...messages.map(m => ({
            role: m.sender === "user" ? "user" : "assistant",
            content: m.text
          })),
          { role: "user", content: input }
        ]
      }),
    });

    const data = await response.json();
    const aiReply = data.choices[0].message.content;

    setMessages((prev) => [...prev, { sender: "ai", text: aiReply }]);
  };

  return (
    <div className="w-full max-w-2xl mx-auto max-h-90 bg-white shadow-lg rounded-xl p-4 h-[80vh] flex flex-col">
      <div className="flex-1 overflow-y-auto space-y-3 mb-4">
        {messages.map((msg, idx) => (
          <div key={idx} className={`max-w-[75%] px-4 py-2 rounded-xl text-white ${msg.sender === "user" ? "bg-blue-600 self-end" : "bg-gray-700 self-start"}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          className="flex-1 border border-gray-300 px-4 py-2 rounded-lg focus:outline-none"
          placeholder="Ask about budgeting or bonds..."
        />
        <button
          onClick={sendMessage}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBox;
