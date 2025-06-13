import React, { useState } from 'react';

const emojiOptions = [
  { emoji: '🐻', description: 'Ayıcık gibi sarılırım ama en çok civciv olan halimi sen seversin.' },
  { emoji: '🐱', description: 'Bazen sessiz ve dikkatliyim ama bu sadece seni korumak için.' },
  { emoji: '🐣', description: 'Ben tam bir civcivim çünkü kalbim senin yanında yumuşacık oluyor. 🐣💛' }
];

const WhoAmIGame = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="min-vh-100 d-flex flex-column justify-content-center align-items-center bg-white p-4">
      <h2 className="mb-4 text-primary fw-bold">Sence ben hangisiyim? 🤔</h2>
      <div className="d-flex gap-4">
        {emojiOptions.map((option, index) => (
          <button
            key={index}
            className="btn btn-outline-primary fs-1 rounded-circle"
            onClick={() => setSelected(index)}
            style={{ width: '80px', height: '80px' }}
          >
            {option.emoji}
          </button>
        ))}
      </div>
      {selected !== null && (
        <div className="mt-4 alert alert-info fs-5 text-center w-75">
          {emojiOptions[selected].description}
        </div>
      )}
    </div>
  );
};

export default WhoAmIGame;
