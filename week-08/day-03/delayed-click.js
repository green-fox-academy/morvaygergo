'use strict';

let message = document.querySelector('.message');

const button = document.querySelector('button');

let myFunction = () => {
  message.textContent = '2 seconds elapsed!';
}

button.addEventListener('click', () => {
  setTimeout(myFunction, 2000);
});
