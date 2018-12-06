'use strict';

let list = ['apple', 'banana', 'cat', 'dog'];

let placeholder = document.querySelectorAll('li');

placeholder.forEach((value, index) => {
  value.textContent = list[index];
});

console.log(placeholder)

const limeGreen = document.querySelector('ul');

limeGreen.classList.add('limeGreen');

