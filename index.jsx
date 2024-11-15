import React from 'react';
import ReactDOM from 'react-dom/client'; // Импортируем из 'react-dom/client'
import App from './App'; // Импортируем основной компонент приложения

// Получаем корневой элемент
const root = ReactDOM.createRoot(document.getElementById('root')); // Создаем корень

// Рендерим приложение
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);