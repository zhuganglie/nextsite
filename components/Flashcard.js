// components/Flashcard.js
import { useState } from 'react';

export default function Flashcard({ front, back }) {
    const [showFront, setShowFront] = useState(true);

    const flipCard = () => {
        setShowFront(!showFront);
    };

    return (
        <div onClick={flipCard} className="rounded border border-gray-900 min-w-full lg:w-1/2 min-h-max flex justify-center items-center cursor-pointer " >
            {showFront ? (
      <div className=" text-4xl">{front}</div>
    ) : (
      <div className=" text-lg">
        <ul>
    <li>拼音：{back.拼音}</li>
       <li>词义：{back.词义}</li> 
       <li>用法：{back.用法}</li>
        </ul>
        </div>
    )}
        </div>
    );
}

