'use strict';

const questionlist = document.querySelector('.questionlist');
const submit = document.querySelector('.submit');
const form = document.querySelector('form');

const loadQuestions = () => {
  while (questionlist.firstChild) {
    questionlist.removeChild(questionlist.firstChild);
  }

  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'http://localhost:8080/questions');
  xhr.onload = () => {
    if (xhr.status === 200) {
      const response = JSON.parse(xhr.responseText);

      for (let i = 0; i < response.length; i++) {
        let li = document.createElement('li');
        let p = document.createElement('p');
        p.innerText = response[i].question;
        let button = document.createElement('button');
        button.innerText = 'DELETE';
        button.setAttribute('id', response[i].id);
        li.appendChild(p);
        li.appendChild(button);
        questionlist.appendChild(li);
      }
    }
  }
  xhr.send();
}

loadQuestions();

questionlist.addEventListener('click', e => {
  const xhr = new XMLHttpRequest();
  xhr.open('DELETE', `http://localhost:8080/questions/${e.target.id}`);
  xhr.onload = () => {
    if (xhr.status === 200) {
      loadQuestions();
    }
  }
  xhr.send();
});

submit.addEventListener('click', e => {
  const { question, answer1, answer2, answer3, answer4, radio } = form.elements;
  const toSend = {
    question: question.value,
    answer1: answer1.value,
    answer2: answer2.value,
    answer3: answer3.value,
    answer4: answer4.value,
    radio: radio.value
  }
  const xhr = new XMLHttpRequest();
  xhr.open('POST', `http://localhost:8080/questions/`);
  xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
  xhr.onload = () => {
    if (xhr.status === 200) {
    }
  }
  xhr.send(JSON.stringify(toSend));
  loadQuestions();
});

