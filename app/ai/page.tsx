"use client"
import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { useChat } from 'ai/react'; 

const AI = () => {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  const [textareaHeight, setTextareaHeight] = useState("auto");

  const refreshPage = () => {
    window.location.reload();
  };

  // Adjust textarea height based on its content
  const adjustTextareaHeight = (input: any) => {
    // Assuming a base height of 20px for empty content
    setTextareaHeight(`${Math.max(input.scrollHeight, 20)}px`);
  };

  useEffect(() => {
    adjustTextareaHeight(document.getElementById('myTextarea'));
  }, [input]);

  return (
    <article className="p-2">
      <h2>Chat</h2>
      <div className="grid gap-4">
        {messages.map((m) => (
          <div key={m.id}>
            <span className="font-bold">{m.role === 'user' ? 'User: ' : 'AI: '}</span>
            <ReactMarkdown>{m.content}</ReactMarkdown>
          </div>
        ))}
        <form onSubmit={handleSubmit}>
          <textarea
            id="myTextarea"
            value={input}
            placeholder="Say something..."
            onChange={(e) => {
              handleInputChange(e);
              adjustTextareaHeight(e.target);
            }}
            style={{ height: textareaHeight }}
            className="p-4 min-w-full border border-black mb-2"
          />
          <br />
          <button type="submit" className="border rounded bg-black text-white max-w-max p-2 mr-2">Submit</button>
          <button type="button" onClick={refreshPage} className="border rounded bg-black text-white max-w-max p-2">New chat</button>
        </form>
      </div>
    </article>
  );
};

export default AI;
