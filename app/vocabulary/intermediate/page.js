"use client";

import Flashcard from '@/components/Flashcardo';
import vocabularyData from '@/public/vocabulary_olevel.json';

export default function Intermediate() {
  const flashcard1Units = [
    vocabularyData.s1.u1,
    vocabularyData.s1.u2,
    vocabularyData.s1.u3,
  vocabularyData.s1.u4,
  vocabularyData.s1.u5,
  vocabularyData.s1.u6,
  ]

   const flashcard2Units =[
    vocabularyData.s2.u1,

   ]

  return (
    <div className="flex flex-col p-4">
      <h1>O-Level Vocabulary</h1>
      <div>
      <h2>Sec One</h2>
      {flashcard1Units.map((flashcards, index) => (
        <Flashcard key={index} flashcards={flashcards} />
      ))}
      </div>
      <div>
      <h2>Sec Two</h2>
      {flashcard2Units.map((flashcards, index) => (
        <Flashcard key={index} flashcards={flashcards} />
      ))}
      </div>
    </div>
  );
}
