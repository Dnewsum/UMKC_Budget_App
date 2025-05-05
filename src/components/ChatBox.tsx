import React, { useState } from "react";

interface Message {
  sender: "user" | "ai";
  text: string;
}

const ChatBox: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg: Message = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: input }),
      });

      if (!res.ok) throw new Error("Failed to get response from Gemini API");

      const data = await res.json();
      const aiReply: Message = { sender: "ai", text: data.response };

      setMessages((prev) => [...prev, aiReply]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { sender: "ai", text: "⚠️ Failed to reach Gemini API." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto flex h-[80vh] max-h-190 w-full max-w-2xl flex-col rounded-xl bg-white p-4 shadow-lg">
      <div className="mb-4 flex-1 space-y-3 overflow-y-auto">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`max-w-[75%] rounded-xl px-4 py-2 text-white ${
              msg.sender === "user"
                ? "self-end bg-blue-600"
                : "self-start bg-gray-700"
            }`}
          >
            {msg.text}
          </div>
        ))}
        {loading && (
          <div className="text-sm text-gray-500 italic">AI is typing...</div>
        )}
      </div>
      <div className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          className="flex-1 rounded-lg border border-gray-300 px-4 py-2 focus:outline-none"
          placeholder="Ask about budgeting or bonds..."
          disabled={loading}
        />
        <button
          onClick={sendMessage}
          className="rounded-lg bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700 disabled:opacity-50"
          disabled={loading}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBox;
