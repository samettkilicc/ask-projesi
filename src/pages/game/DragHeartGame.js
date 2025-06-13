import React, { useState } from 'react';

const DragHeartGame = () => {
  const [dropped, setDropped] = useState(false);

  const handleDragStart = (e) => {
    e.dataTransfer.setData('text/plain', 'heart');
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const data = e.dataTransfer.getData('text/plain');
    if (data === 'heart') {
      setDropped(true);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div className="min-vh-100 d-flex flex-column justify-content-center align-items-center bg-light p-4">
      <h2 className="text-danger mb-4 fw-bold">Kalbimi yerine ulaştırır mısın? 💘</h2>
      
      <div className="d-flex flex-column align-items-center gap-5">
        {!dropped && (
          <div
            draggable
            onDragStart={handleDragStart}
            className="fs-1"
            style={{ cursor: 'grab' }}
          >
            💖
          </div>
        )}

        <div
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          className="border border-danger rounded d-flex align-items-center justify-content-center"
          style={{ width: '120px', height: '120px', backgroundColor: '#fff5f5' }}
        >
          {dropped ? '💘' : 'Hedef'}
        </div>
      </div>

      {dropped && (
        <div className="alert alert-success mt-4 text-center w-75">
          Kalbim sana ulaştı... 💘 Seni çok seviyorum!
        </div>
      )}
    </div>
  );
};

export default DragHeartGame;
