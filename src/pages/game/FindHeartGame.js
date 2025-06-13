import React, { useState } from 'react';

const hearts = ['💔', '💖', '🖤', '💜', '💛', '💚'];
const correctIndex = Math.floor(Math.random() * hearts.length);

const FindHeartGame = () => {
  const [selected, setSelected] = useState(null);

  const handleSelect = (index) => {
    setSelected(index);
  };

  return (
    <div className="min-vh-100 d-flex flex-column justify-content-center align-items-center bg-light">
      <h2 className="mb-4 text-danger fw-bold">Kalbimi Bulabilir misin? ❤️</h2>
      <div className="d-flex flex-wrap justify-content-center gap-3">
        {hearts.map((emoji, index) => (
          <button
            key={index}
            onClick={() => handleSelect(index)}
            className="btn btn-outline-danger fs-2 rounded-circle"
            style={{ width: '70px', height: '70px' }}
          >
            {selected === index ? emoji : '❓'}
          </button>
        ))}
      </div>
      {selected !== null && (
        <div className="mt-4 fs-5 text-center">
          {selected === correctIndex ? (
            <span className="text-success">💖 Harika! Kalbimi buldun!</span>
          ) : (
            <span className="text-secondary">Bu değil... Ama seni hâlâ seviyorum 😅</span>
          )}
        </div>
      )}
    </div>
  );
};

export default FindHeartGame;
