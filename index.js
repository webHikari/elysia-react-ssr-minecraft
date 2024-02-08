const express = require('express');
const path = require('path');
const fs = require('fs')
const dotenv = require('dotenv').config()
const app = express();
const PORT = process.env.PORT || 3000;

const observeActivity = async (page) => {
    const data = fs.readFile("./activity/" + page + ".txt",
    (error, data) => {
        if(error) {
            return console.log(error);
        }
        data++;
        fs.writeFileSync("./activity/" + page + ".txt", data);
        console.log(page +": " +  data);
    });
}


app.use(express.static(path.join(__dirname, 'public')));

// Роутер для выдачи файлов на клиент
app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
    observeActivity('index')
});
app.get('/rules', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'rules.html'));
    observeActivity('rules')
});
app.get('/social', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'social.html'));
    observeActivity('social')
});
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
    observeActivity('about')
});
app.get('/donate', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'donate.html'));
    observeActivity('donate')
});
// API Роутер
app.post('/api', (req, res) => {
    res.send('hello')
})

app.listen(PORT, () => {
    console.log(`Server dancin' on ${PORT} port`);
});
