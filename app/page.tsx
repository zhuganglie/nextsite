
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

type FlashcardType = {
  front: string;
  back: string;
};

interface HomeState {
  flashcard1: FlashcardType[];
  flashcard2: FlashcardType[];
  currentCard: number;
}

const Home: React.FC = () => {
  const [flashcard1, setFlashcard1] = useState<FlashcardType[]>([]);
  const [flashcard2, setFlashcard2] = useState<FlashcardType[]>([]);
  const [currentCard1, setCurrentCard1] = useState<number>(0);
  const [currentCard2, setCurrentCard2] = useState<number>(0);

  useEffect(() => {
    fetch('/flashcard1.json')
      .then((response) => response.json())
      .then((data: FlashcardType[]) => setFlashcard1(data))
      .catch((error) => console.error('Error loading flashcard1:', error));
  }, []);

  const nextCard1 = () => {
    setCurrentCard1((currentCard1 + 1) % flashcard1.length);
  };

  useEffect(() => {
    fetch('/flashcard2.json')
      .then((response) => response.json())
      .then((data: FlashcardType[]) => setFlashcard2(data))
      .catch((error) => console.error('Error loading flashcard2:', error));
  }, []);

  const nextCard2 = () => {
    setCurrentCard2((currentCard2 + 1) % flashcard2.length);
  };

  return (
    <article className="p-2">
      <h2>Flashcards</h2>
     
    <div className="grid gap-8 mt-8">
      <div className="">
        <p className="text-left m-0 text-lg">第一课</p>
        {flashcard1.length > 0 && (
          <Flashcard front={flashcard1[currentCard1].front} back={flashcard1[currentCard1].back} />
        )}
        <button onClick={nextCard1} className="my-6 rounded border border-gray-900 px-4 py-1.5">
          下一个
        </button>
      </div>
<hr></hr>
      <div className="">
        <p className="text-left m-0 text-lg">第二课</p>
        {flashcard2.length > 0 && (
          <Flashcard front={flashcard2[currentCard2].front} back={flashcard2[currentCard2].back} />
        )}
        <button onClick={nextCard2} className="my-6 rounded border border-gray-900 px-4 py-1.5">
          下一个
        </button>
      </div>
     </div>
    </article>
  );
};

export default Home;

