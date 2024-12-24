import React, { useEffect } from 'react';
import './index.css';

const WelcomePage = () => {
  useEffect(() => {
    const tg = window.Telegram.WebApp;
    tg.ready(); // Уведомляем Telegram, что приложение готово
  }, []);

  const handleOpenApp = () => {
    window.Telegram.WebApp.close(); // Закрытие стартового экрана
  };

  return (
    <div className="welcome-page">
      <div className="container">
        <h1>Welcome to TonQuest!</h1>
        <div className="gif-wrapper">
          <img src="./1.png" alt="Sunglasses GIF" />
        </div>
        <p>
          Start completing <br /> quests and <br /> earning prizes!
        </p>
        <button className="btn" onClick={handleOpenApp}>
          Open the app!
        </button>
      </div>
    </div>
  );
};

export default WelcomePage;
