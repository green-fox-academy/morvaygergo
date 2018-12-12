'use strict';

const button = document.querySelector('button');
let message = document.querySelector('.message');
let counter = 0;

let myFunction = () => {
  button.addEventListener('click', () => {
    if (counter < 2) {
      counter += 1;
    } else {
      message.textContent = '5 seconds elapsed and clicked 3 times'
    }
  });
}

window.onload = setTimeout(myFunction, 5000);