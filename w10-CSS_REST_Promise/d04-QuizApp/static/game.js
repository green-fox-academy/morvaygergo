'use strict';

const question = document.querySelector('.question');
const answer1 = document.querySelector('.answer1');
const answer2 = document.querySelector('.answer2');
const answer3 = document.querySelector('.answer3');
const answer4 = document.querySelector('.answer4');
const container = document.querySelector('.container');
const score = document.querySelector('.score');
let points = 0;

const loadQuestion = () => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'http://localhost:8080/game');
  xhr.onload = () => {
    if (xhr.status === 200) {
      const response = JSON.parse(xhr.responseText);
      question.textContent = response.question;
      answer1.textContent = response.answer1;
      answer2.textContent = response.answer2;
      answer3.textContent = response.answer3;
      answer4.textContent = response.answer4;
      answer1.setAttribute('correct', response.answer1correct);
      answer2.setAttribute('correct', response.answer2correct);
      answer3.setAttribute('correct', response.answer3correct);
      answer4.setAttribute('correct', response.answer4correct);
      answer1.removeAttribute('disabled');
      answer2.removeAttribute('disabled');
      answer3.removeAttribute('disabled');
      answer4.removeAttribute('disabled');
      answer1.removeAttribute('class');
      answer2.removeAttribute('class');
      answer3.removeAttribute('class');
      answer4.removeAttribute('class');

    }
  }
  xhr.send();
}

loadQuestion();

container.addEventListener('click', e => {
  answer1.setAttribute('disabled', 'disabled');
  answer2.setAttribute('disabled', 'disabled');
  answer3.setAttribute('disabled', 'disabled');
  answer4.setAttribute('disabled', 'disabled');

  setTimeout(loadQuestion, 1000);

  if (e.target.getAttribute('correct') === '1') {
    points += 1;
    score.textContent = 'SCORE: ' + points.toString();
    e.target.setAttribute('class', 'green');
  } else {
    e.target.setAttribute('class', 'red');
  }
});
