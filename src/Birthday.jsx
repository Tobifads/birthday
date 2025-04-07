// Birthday.jsx
import React, { useState } from 'react';
import './styles.css';

const Birthday = () => {
  const [showReadMe, setShowReadMe] = useState(false);

  return (
    <div className="birthday-container">
      <h1>Happy Birthday, My Love! 🎉</h1>

      <div className="images">
        <img src="https://raw.githubusercontent.com/tobifads/birthday/main/IMG_3251.png" alt="Cute memory 1" />
        {/* Add more images as needed */}
      </div>

      <div className="music-links">
        <a href="https://music.apple.com/your-favorite-song-1" target="_blank" rel="noopener noreferrer">Song 1</a>
        <a href="https://music.apple.com/your-favorite-song-2" target="_blank" rel="noopener noreferrer">Song 2</a>
        {/* Add more songs as needed */}
      </div>

      <div className="readme-button">
        <button onClick={() => setShowReadMe(true)}>Read Me 💌</button>
      </div>

      {showReadMe && (
        <div className="readme">
          <p>Dear [Her Name],</p>
          <p>
            Wishing you the happiest birthday ever! You bring so much joy, light, and
            love into my life, and I’m grateful for every moment with you. I made this
            little website just for you, to say how much you mean to me. 🎂💖
          </p>
          <p>
            Love always,<br />[Your Name]
          </p>
        </div>
      )}
    </div>
  );
};


export default Birthday;

