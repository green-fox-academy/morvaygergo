'use strict';

const questionlist = document.querySelector('.questionlist');

const loadQuestions = () => {
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
  
});