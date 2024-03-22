
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
  const [flashcards, setFlashcards] = useState<FlashcardData[]>(Array(20).fill({ cards: [], currentCard: 0 }));

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

    const fetchAllData = async () => {
      const urls = Array.from({ length: 20 }, (_, i) => `/flashcard${i + 1}.json`);
      const fetchPromises = urls.map((url, index) => fetchData(url, index));
      await Promise.all(fetchPromises);
    };

    fetchAllData();
  }, []);

  const updateCard = (index: number, offset: number) => {
    setFlashcards(prev => {
      const newFlashcards = [...prev];
      const currentCard = (newFlashcards[index].currentCard + offset + newFlashcards[index].cards.length) % newFlashcards[index].cards.length;
      newFlashcards[index] = { ...newFlashcards[index], currentCard };
      return newFlashcards;
    });
  };

  const nextCard = (index: number) => {
    updateCard(index, 1);
  };

  const prevCard = (index: number) => {
    setFlashcards(prev => {
      const newFlashcards = [...prev];
      const currentCard = (newFlashcards[index].currentCard - 1 + newFlashcards[index].cards.length) % newFlashcards[index].cards.length;
      newFlashcards[index] = { ...newFlashcards[index], currentCard };
      return newFlashcards;
    });
  };

  return (
    <article className="p-2">
      <h2>Flashcards</h2>
      <div className="grid gap-2 mt-8">
        {flashcards.map((flashcard, index) => (
          <div key={index}>
            <p className="text-left m-0 text-lg font-bold">第{index + 1}课</p>
            {flashcard.cards.length > 0 && (
              <Flashcard front={flashcard.cards[flashcard.currentCard].front} back={flashcard.cards[flashcard.currentCard].back} />
            )}
            <button onClick={() => prevCard(index)} className="mt-2 mb-8 rounded border border-gray-900 px-4">
              &larr;
            </button>
            &nbsp;
            <button onClick={() => nextCard(index)} className="mt-2 mb-8 rounded border border-gray-900 px-4">
              &rarr;
            </button>
          </div>
        ))}
      </div>
    </article>
  );
};
export default Home;
