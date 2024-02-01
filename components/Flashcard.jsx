// components/Flashcard.js
import { useState } from 'react';

export default function Flashcard({ front, back }) {
    const [showFront, setShowFront] = useState(true);

    const flipCard = () => {
        setShowFront(!showFront);
    };

    return (
        <div onClick={flipCard} className="rounded border border-gray-900 w-full lg:w-1/2 min-h-max flex justify-center items-center cursor-pointer p-8" >
            {showFront ? (
      <div className="text-4xl lg:text-6xl">{front}</div>
    ) : (
      <div className=" text-lg">
        <ul>
    <li key="pinyin">拼音：{back.拼音}</li>
       <li key="meaning">词义：{back.词义}</li> 
       <li key="usage">用法：{back.用法}</li>
        </ul>
        </div>
    )}
        </div>
    );
}

