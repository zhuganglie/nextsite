import Flashcard from "@/components/Flashcarda";

export default function Advance() {
  return (
    <div className="flex flex-col p-4">
      <h1>H1 Vocabulary</h1>
      <Flashcard list="v1" />
      <Flashcard list="v2" />
      <Flashcard list="v3" />
      <Flashcard list="v4" />
    </div>
  );
}