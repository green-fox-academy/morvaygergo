'use strict';

let paragraph = document.querySelectorAll('p');

if (paragraph[3].classList.contains('dolphin')) {
  paragraph[0].innerText = 'pear';
}

if (paragraph[0].classList.contains('apple')) {
  paragraph[2].innerText = 'dog';
}

paragraph[0].classList.add('red');

let balloon = document.querySelector('.balloon');

balloon.style.borderRadius = '0';
