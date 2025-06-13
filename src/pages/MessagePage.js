import React, { useState } from 'react';

const CORRECT_PASSWORD = 'kahve'; // 🔐 cevabın küçük harfli hali

const MessagePage = () => {
  const [input, setInput] = useState('');
  const [unlocked, setUnlocked] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim().toLowerCase() === CORRECT_PASSWORD) {
      setUnlocked(true);
      setError('');
    } else {
      setError('Cevap doğru değil 🙈');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-rose-50">
      {!unlocked ? (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md text-center max-w-md">
          <h2 className="text-xl font-bold text-pink-600 mb-4">💌 Bu mesaj sadece sana özel</h2>
          <p className="text-gray-700 mb-4">
            Soru: <strong>İlk dışarı çıktığımız gün ne içmiştim?</strong>
          </p>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Cevabı buraya yaz..."
            className="border border-gray-300 rounded px-4 py-2 mb-4 w-full"
          />
          <br />
          <button
            type="submit"
            className="bg-pink-400 text-white px-4 py-2 rounded hover:bg-pink-500 transition"
          >
            Göster
          </button>
          {error && <p className="mt-2 text-red-500">{error}</p>}
        </form>
      ) : (
        <div className="bg-white p-6 rounded shadow-md max-w-md text-center">
          <h2 className="text-xl font-bold text-pink-600 mb-4">Sadece sana yazdım... 💌</h2>
          <p className="text-gray-700 leading-relaxed">
            Seni tanıdığım için çok şanslıyım. Bu proje, sana olan sevgimin sadece küçük bir yansıması.
            Her geçen gün seni daha çok seviyorum. 💖  
            <br /><br />
            Hep birlikte nice güzel anılar biriktireceğiz. 💫
          </p>
        </div>
      )}
    </div>
  );
};

export default MessagePage;
