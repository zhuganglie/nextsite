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
    vocabularyData.s2.u2,
    vocabularyData.s2.u3,
    vocabularyData.s2.u4,
    vocabularyData.s2.u5,
    vocabularyData.s2.u6,
   ]

   const flashcard3Units =[
    vocabularyData.s3.u1,
    vocabularyData.s3.u2,
    vocabularyData.s3.u3,
    vocabularyData.s3.u4,
    vocabularyData.s3.u5,
    vocabularyData.s3.u6,
   ]

   const flashcard4Units =[
    vocabularyData.s4.u1,
    vocabularyData.s4.u2,
    vocabularyData.s4.u3,
    vocabularyData.s4.u4,
    vocabularyData.s4.u5,
   ]

  return (
    <div className="flex flex-col gap-4 p-4">
      <h1>O-Level Vocabulary</h1>

      <details>
      <summary className="font-bold text-lg">中一词语</summary>
      {flashcard1Units.map((flashcards, index) => (
        <details className="mt-2"><summary>第 {index +1} 单元</summary><Flashcard key={index} flashcards={flashcards} /></details>
      ))}
      </details>

      <details>
      <summary className="font-bold text-lg">中二词语</summary>
      {flashcard2Units.map((flashcards, index) => (
        <details className="mt-2"><summary>第 {index +1} 单元</summary><Flashcard key={index} flashcards={flashcards} /></details>
      ))}

    </details>

    <details>
      <summary className="font-bold text-lg">中三词语</summary>
      {flashcard3Units.map((flashcards, index) => (
        <details className="mt-2"><summary>第 {index +1} 单元</summary><Flashcard key={index} flashcards={flashcards} /></details>
      ))}

    </details>

    <details>
      <summary className="font-bold text-lg">中四词语</summary>
      {flashcard4Units.map((flashcards, index) => (
        <details className="mt-2"><summary>第 {index +1} 单元</summary><Flashcard key={index} flashcards={flashcards} /></details>
      ))}

    </details>
    </div>


  );
}
