"use client";

import Flashcard from '@/components/Flashcardo';
import vocabularyData from '@/public/vocabulary_olevel.json';

export default function Intermediate() {
  const flashcards1 = vocabularyData.s1.u1;
  const flashcards2 = vocabularyData.s1.u2;

  return (
    <div className="flex flex-col p-4">
      <h2>O-Level Vocabulary</h2>
      <Flashcard flashcards={flashcards1} />
      <Flashcard flashcards={flashcards2} />
    </div>
  );
}
