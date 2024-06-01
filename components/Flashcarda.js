// components/Flashcarda.js
"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";

const Flashcard = ({ list }) => {
  const [flashcards, setFlashcards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showBack, setShowBack] = useState(false);

  useEffect(() => {
    const fetchFlashcards = async () => {
      const response = await axios.get("/vocabulary_alevel.json");
      setFlashcards(response.data[list]);
    };

    fetchFlashcards();
  }, [list]);

  const handleFlip = () => {
    setShowBack(!showBack);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? flashcards.length - 1 : prevIndex - 1
    );
    //setCurrentIndex((prevIndex) => (prevIndex - 1) % flashcards.length);
    setShowBack(false);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
    setShowBack(false);
  };

  if (flashcards.length === 0) return <p>Loading...</p>;

  const { front, back } = flashcards[currentIndex];

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg overflow-hidden">
        <div
          className={`p-6 text-center cursor-pointer ${showBack ? "bg-gray-200" : "bg-white"}`}
          onClick={handleFlip}
        >
          {showBack ? (
            <ul className="text-left">
              <li className="text-gray-700 text-lg"><strong>拼音：</strong>{back.拼音}</li>
              <li className="text-gray-700 text-lg"><strong>词义：</strong>{back.词义}</li>
              <li className="text-gray-700 text-lg"><strong>英文：</strong>{back.英文}</li>
              <li className="text-gray-700 text-lg mt-2"><strong>例句：</strong>{back.例句}</li>
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

Flashcard.propTypes = {
  list: PropTypes.string.isRequired,
};

export default Flashcard;
