'use strict';

const express = require('express');
const app = express();
const bp = require('body-parser');
const path = require('path');
const PORT = 8080;

const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'quiz'
});

app.use('/static', express.static('static'));
app.use(express.json());
app.listen(PORT, () => {
  console.log(`App is listening on port: ${PORT}`);
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/game.html'));
});

app.get('/game', (req, res) => {
  connection.query('SELECT question, id FROM questions ORDER BY RAND() LIMIT 1;', (error1, result1) => {
    if (error1) {
      res.status(400).json({ message: "Internal database error" });
      return;
    }
    connection.query('SELECT answer, is_correct FROM answers WHERE question_id = ?', result1[0].id, (error2, result2) => {
      if (error2) {
        res.status(400).json({ message: "Internal database error" });
        return;
      }
      res.json({
        question: result1[0].question,
        answer1: result2[0].answer,
        answer2: result2[1].answer,
        answer3: result2[2].answer,
        answer4: result2[3].answer,
        answer1correct: result2[0].is_correct,
        answer2correct: result2[1].is_correct,
        answer3correct: result2[2].is_correct,
        answer4correct: result2[3].is_correct
      });
    });
  });
});

app.get('/questions', (req, res) => {
  connection.query('SELECT question, id FROM questions;', (error, result) => {
    if (error) {
      res.status(400).json({ message: "Internal database error" });
      return;
    }
    res.json(result);
  });
});

app.get('/manage', (req, res) => {
  res.sendFile(path.join(__dirname + '/questions.html'));
});
