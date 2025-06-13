import React, { useEffect, useState } from 'react';

const Timer = () => {
  const startDate = new Date('2022-10-05T00:00:00');
  const [timePassed, setTimePassed] = useState(getTimePassed());

  function getTimePassed() {
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    return { days, hours, minutes, seconds };
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimePassed(getTimePassed());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '2rem', fontSize: '1.25rem', fontWeight: 'bold' }}>
      <p>Konuşmaya başlayalı:</p>
      <p>
        🗓️ {timePassed.days} gün {timePassed.hours} saat {timePassed.minutes} dakika {timePassed.seconds} saniye geçti
      </p>
    </div>
  );
};

export default Timer;
