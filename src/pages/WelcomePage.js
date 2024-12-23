import React, { useEffect } from 'react';
import './WelcomePage.css';

const WelcomePage = () => {
  useEffect(() => {
    const tg = window.Telegram.WebApp;
    tg.ready(); // Уведомляем Telegram, что приложение готово
  }, []);

  const handleOpenApp = () => {
    window.Telegram.WebApp.close(); // Закрытие стартового экрана
  };

  return (
    <div class="welcome-page">
        <div class="container">
          <h1>Welcome to TonQuest!</h1>
          <div class="gif-wrapper">
            <img src="sunglasses.png" alt="Sunglasses GIF" />
          </div>
          <p>Start completing <br> quests and <br> earning prizes!</p>
          <button class="btn" onClick={handleOpenApp}>
            Open the app!
          </button>
        </div>
    </div>
  );
};

export default WelcomePage;
