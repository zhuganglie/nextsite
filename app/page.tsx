"use client"
import { useEffect, useState } from 'react';
import Flashcard from '../components/Flashcard';

type FlashcardType = {
  front: string;
  back: string;
};

type FlashcardData = {
  cards: FlashcardType[];
  currentCard: number;
};

const Home: React.FC = () => {
  const [flashcards, setFlashcards] = useState<FlashcardData[]>([
    { cards: [], currentCard: 0 },
    { cards: [], currentCard: 0 },
    { cards: [], currentCard: 0 },
    { cards: [], currentCard: 0 },
    { cards: [], currentCard: 0 },
    
  ]);

  useEffect(() => {
    const fetchData = async (url: string, index: number) => {
      try {
        const response = await fetch(url);
        const data: FlashcardType[] = await response.json();
        setFlashcards(prev => {
          const newFlashcards = [...prev];
          newFlashcards[index] = { ...newFlashcards[index], cards: data };
          return newFlashcards;
        });
      } catch (error) {
        console.error(`Error loading ${url}:`, error);
      }
    };

    fetchData('/flashcard1.json', 0);
    fetchData('/flashcard2.json', 1);
    fetchData('/flashcard3.json', 2);
    fetchData('/flashcard4.json', 3);
    fetchData('/flashcard5.json', 4);
  }, []);

  const nextCard = (index: number) => {
    setFlashcards(prev => {
      const newFlashcards = [...prev];
      newFlashcards[index] = {
        ...newFlashcards[index],
        currentCard: (newFlashcards[index].currentCard + 1) % newFlashcards[index].cards.length,
      };
      return newFlashcards;
    });
  };

  return (
    <article className="p-2">
      <h2>Flashcards</h2>
      <div className="grid gap-8 mt-8">
        {flashcards.map((flashcard, index) => (
          <div key={index}>
            <p className="text-left m-0 text-lg">第{index + 1}课</p>
            {flashcard.cards.length > 0 && (
              <Flashcard front={flashcard.cards[flashcard.currentCard].front} back={flashcard.cards[flashcard.currentCard].back} />
            )}
            <button onClick={() => nextCard(index)} className="my-6 rounded border border-gray-900 px-4 py-1.5">
              下一个
            </button>
          </div>
        ))}
      </div>
    </article>
  );
};

export default Home;
