import React, { useState } from 'react';
import './MiniGame.css';

const messages = [
  'Senin gülüşün en güzel melodi 😍',
  'Birlikte yaşlanalım 💍',
  'Gözlerin en sevdiğim yerin 👀',
  'Yanında olmak huzur demek 🌈',
  'Her gün seninle daha güzel 💖',
  'Birlikte kahkaha atmak gibisi yok 😂',
  'Ellerin ellerime çok yakışıyor 🤝',
  'Baktığımda kalbim çarpıyor 💓'
];

const MiniGame = () => {
  const [openedIndex, setOpenedIndex] = useState(null);
  const [shuffledMessages] = useState(() =>
    [...messages].sort(() => 0.5 - Math.random()).slice(0, 8)
  );

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center bg-rose-50">
      <h2 className="text-2xl font-bold text-pink-700 mb-6">🎁 Sürpriz Kutular</h2>
      <div className="grid-box-wrapper">
        {shuffledMessages.map((msg, index) => (
          <div
            key={index}
            onClick={() => setOpenedIndex(index)}
            className={`box ${openedIndex === index ? 'revealed' : ''}`}
          >
            {openedIndex === index ? (
              <span className="text-sm text-center px-1">{msg}</span>
            ) : (
              '🎁'
            )}
          </div>
        ))}
      </div>
      <div/>
      <div/>
      {openedIndex !== null && (
        <button
          className="mt-8 bg-pink-400 hover:bg-pink-500 text-white px-4 py-2 rounded-full"
          onClick={() => window.location.reload()}
        >
          Bir tane daha oyna 🔄
        </button>
      )}
    </div>
  );
};

export default MiniGame;