import React from 'react';
import Timer from '../components/Timer';
import HeartRain from '../components/HeartRain';

const HomePage = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center text-center min-vh-100 bg-pink-50 position-relative">
      <HeartRain />
      <h1 className="display-4 fw-bold text-danger mb-4 animate-pulse">
        Hoş geldin Merve Nur Kılıç 💖
      </h1>
      <div className="fs-5 text-dark">
        <p>📅 Konuşmaya başlayalı:</p>
        <Timer />
      </div>
    </div>
  );
};

export default HomePage;
