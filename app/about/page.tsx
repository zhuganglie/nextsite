"use client"
import React from 'react';
import { useChat } from 'ai/react';


const About = () => {
  const { messages, input, handleInputChange, handleSubmit} = useChat();
  const refreshPage = () => {
    window.location.reload(); }

  return (
      <article>
        <h2>About</h2>
        <div className="grid gap-4">
      {messages.map(m => (
        <div key={m.id}>
          {m.role === 'user' ? 'User: ' : 'AI: '}
          {m.content }
        </div>
      ))}
 
      <form onSubmit={handleSubmit}>
        <input
          value={input}
          placeholder="Say something..."
          onChange={handleInputChange}
          className="p-4 min-w-full"
        />    
      </form>
      <button onClick={refreshPage}>Reset</button>
    </div>
      </article>
  );
};

export default About;

