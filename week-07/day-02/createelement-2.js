'use strict';

let list = document.querySelector('ul');

let element = list.querySelector('li');

list.removeChild(element);

const planetData = [
  {
    category: 'inhabited',
    content: 'Foxes',
    asteroid: true,
  },
  {
    category: 'inhabited',
    content: 'Whales and Rabbits',
    asteroid: true,
  },
  {
    category: 'uninhabited',
    content: 'Baobabs and Roses',
    asteroid: true,
  },
  {
    category: 'inhabited',
    content: 'Giant monsters',
    asteroid: false,
  },
  {
    category: 'inhabited',
    content: 'Sheep',
    asteroid: true,
  },
];

planetData.forEach((value, index) => {
  if (value.asteroid) {
    let newElement = document.createElement('li');
    newElement.className = value.category;
    newElement.textContent = value.content;
    list.appendChild(newElement);
  }
});

console.log(list);
