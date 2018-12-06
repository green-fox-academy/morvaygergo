'use strict';

let content = document.querySelector('.animals');

let paragraph = document.querySelectorAll('p');

paragraph.forEach(value => value.innerHTML = content.innerHTML);

console.log(paragraph);
