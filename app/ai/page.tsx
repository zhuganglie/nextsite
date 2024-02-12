"use client"
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { useChat } from 'ai/react';

const AI = () => {
  const { messages, input, handleInputChange, handleSubmit} = useChat();
  const refreshPage = () => {
    window.location.reload(); }

  return (
      <article className="p-2">
        <h2>Chat</h2>
        <div className="grid gap-4">
      {messages.map(m => (
        <div key={m.id}>
         <span className="font-bold">{m.role === 'user' ? 'User: ' : 'AI: '}</span> 
          <ReactMarkdown>{m.content}</ReactMarkdown>
          </div>
      ))}
 
      <form onSubmit={handleSubmit}>
        <textarea
          value={input}
          placeholder="Say something..."
          onChange={handleInputChange}
          className="p-4 min-w-full border border-black mb-2"
        />  
        <br></br>  
         <button type="submit" className="border rounded bg-black text-white max-w-max p-2 mr-2">Submit</button>
         <button onClick={refreshPage} className="border rounded bg-black text-white max-w-max p-2">New chat</button>
      </form>
     
     
    </div>
      </article>
  );
};

export default AI;

