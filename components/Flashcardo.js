
"use client";

import { useState } from 'react';

const Flashcard = ({ flashcards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const handleNext = () => {
    setFlipped(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
  };

  const handlePrev = () => {
    setFlipped(false);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? flashcards.length - 1 : prevIndex - 1
    );
  };

  const { front, back } = flashcards[currentIndex];

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg overflow-hidden">
      <div
        className={`p-6 text-center cursor-pointer ${flipped ? 'bg-gray-200' : 'bg-white'
      }`}
        onClick={() => setFlipped(!flipped)}
      >
        {flipped? (   
            <ul className="text-left">
              <li className="text-gray-700 text-lg"><strong>拼音:</strong> {back.拼音}</li>
              <li className="text-gray-700 text-lg"><strong>词义:</strong> {back.词义}</li>
              <li className="text-gray-700 text-lg"><strong>英文:</strong> {back.英文}</li>
              <li className="text-gray-700 text-lg mt-2"><strong>用法:</strong> {back.用法}</li>
            </ul>
            ) : (
            <div>
           <p className="text-3xl font-bold">{front}</p>
          </div>
        )}
          </div>
        <div className="flex justify-between">
        <button
          className="mt-4 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700"
          onClick={handlePrev}
        >
          Prev
        </button>
        <button
          className="mt-4 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
</div>
    </div>
    
  );
  };

export default Flashcard;


