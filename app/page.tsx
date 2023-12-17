
"use client"

import { useEffect, useState } from 'react';
import Flashcard from '../components/Flashcard';

/*export default function Home() {
  return (
    <main >
       <h2>Welcome</h2>
     
    </main>
  );
}*/

export default function Home() {
  const [flashcards, setFlashcards] = useState([]);
  const [currentCard, setCurrentCard] = useState(0);

  useEffect(() => {
      fetch('/flashcards.json')
          .then(response => response.json())
          .then(data => setFlashcards(data))
          .catch(error => console.error("Error loading flashcards:", error));
  }, []);

  const nextCard = () => {
      setCurrentCard((currentCard + 1) % flashcards.length);
  };

  return (
    <article className="">
           <div className="h-screen flex flex-col justify-center items-center">
          {flashcards.length > 0 && (
              <Flashcard front={flashcards[currentCard].front} back={flashcards[currentCard].back} />
          )}
          <button onClick={nextCard} className="my-4 rounded  border border-gray-900 px-3 py-1">Next</button>
          </div>
      
      </article>
  );
}
