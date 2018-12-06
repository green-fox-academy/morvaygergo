'use strict';

let image = document.querySelector('img');

console.log(image.src);

image.setAttribute('src', 'https://media.giphy.com/media/3og0IwLYKuUp4wrpIc/source.gif');

let link = document.querySelector('a');

link.setAttribute('href', 'http://greenfoxacademy.com/');

let disable = document.querySelector('.this-one');

disable.disabled = true;

disable.innerText = 'Don\'t click me!';
