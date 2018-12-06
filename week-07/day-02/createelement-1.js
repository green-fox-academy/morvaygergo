'use strict';

let list = document.querySelector('ul');

let newElement = document.createElement('li');

newElement.textContent = 'The Green Fox';

list.appendChild(newElement);

let newerElement = document.createElement('li');

newerElement.textContent = 'The Lamplighter';

list.appendChild(newerElement);

console.log(list);

let container = document.querySelector('.container');

console.log(container);

container.textContent = 'I can add elements to the DOM!'

let image = document.createElement('img');

image.setAttribute('src', 'https://media.giphy.com/media/3og0IwLYKuUp4wrpIc/source.gif');

container.append(image);

console.log(image);
