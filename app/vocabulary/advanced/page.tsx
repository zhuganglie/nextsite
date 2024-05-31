import Flashcard from "@/components/Flashcarda";

export default function Advance() {
  return (
    <div className="flex flex-col p-4">
      <h2>H1 Vocabulary</h2>
      <Flashcard list="v1" />
      <Flashcard list="v2" />
    </div>
  );
}