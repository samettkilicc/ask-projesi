import { useEffect } from 'react';

const HeartRain = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      const heart = document.createElement('div');
      heart.className = 'heart';
      heart.innerText = '💖';
      heart.style.left = Math.random() * 100 + 'vw';
      heart.style.animationDuration = 2 + Math.random() * 3 + 's';
      document.body.appendChild(heart);

      setTimeout(() => {
        heart.remove();
      }, 5000);
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return null;
};

export default HeartRain;
