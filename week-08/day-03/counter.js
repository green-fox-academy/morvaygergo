'use strict';

const button = document.querySelector('button');

button.addEventListener('click', () => {
  let items = document.querySelectorAll('li');
  let result = document.querySelector('.result');
  result.textContent = `There are ${items.length} items in the list.`;
});