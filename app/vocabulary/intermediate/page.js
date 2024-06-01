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
    <div className="flex flex-col gap-4 p-4">
      <h1>O-Level Vocabulary</h1>

      <details>
      <summary className="font-bold text-lg">Sec 1</summary>
      {flashcard1Units.map((flashcards, index) => (
        <details className="mt-2"><summary>第 {index +1} 单元</summary><Flashcard key={index} flashcards={flashcards} /></details>
      ))}
      </details>

      <details>
      <summary className="font-bold text-lg">Sec 2</summary>
      {flashcard2Units.map((flashcards, index) => (
        <details className="mt-2"><summary>第 {index +1} 单元</summary><Flashcard key={index} flashcards={flashcards} /></details>
      ))}

    </details>
    </div>
  );
}
