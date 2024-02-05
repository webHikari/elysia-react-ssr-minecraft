const express = require('express');
const path = require('path');

const app = express();

// Устанавливаем папку 'public' в качестве статической папки
app.use(express.static(path.join(__dirname, 'public')));

// Роутер для выдачи файлов
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
app.get('/auth', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
// Порт, на котором будет запущен сервер
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
