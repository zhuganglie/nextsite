"use client"
import React, { useState, useEffect, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import { useChat } from 'ai/react'; 

const AI = () => {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  const [textareaHeight, setTextareaHeight] = useState("auto");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const refreshPage = () => {
    window.location.reload();
  };

  // Adjust textarea height based on its content
  const adjustTextareaHeight = () => {
    if (textareaRef.current) {
      // Assuming a base height of 20px for empty content
      setTextareaHeight(`${Math.max(textareaRef.current.scrollHeight, 20)}px`);
    }
  };

  useEffect(() => {
    adjustTextareaHeight();
  }, [input]);

  return (
    <article className="p-2">
      <h1>AI Tutor</h1>
      <div className="grid gap-4">
        {messages.map((m) => (
          <div key={m.id}>
            <span className="font-bold">{m.role === 'user' ? 'User: ' : 'AI: '}</span>
            <ReactMarkdown>{m.content}</ReactMarkdown>
          </div>
        ))}
        <form onSubmit={handleSubmit}>
          <textarea
            ref={textareaRef}
            value={input}
            placeholder="Say something..."
            onChange={(e) => {
              handleInputChange(e);
              adjustTextareaHeight();
            }}
            style={{ height: textareaHeight }}
            className="p-4 min-w-full border border-gray-500 mb-2"
          />
          <br />
          <button type="submit" className="border rounded bg-gray-500 hover:bg-gray-700 text-white max-w-max p-2 mr-2">Submit</button>
          <button type="button" onClick={refreshPage} className="border rounded bg-gray-500 hover:bg-gray-700 text-white max-w-max p-2">New Chat</button>
        </form>
      </div>
    </article>
  );
};

export default AI;
