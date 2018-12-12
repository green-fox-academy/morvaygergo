'use strict';

const image = document.querySelector('.img-inspector');
const nav = document.querySelector('nav');

let size = 200;
let backgroundX = 0;
let backgroundY = 0;
image.style.backgroundSize = `${size}%`;
image.style.backgroundPosition = `${backgroundX}px ${backgroundY}px`;

nav.addEventListener('click', e => {
  if (e.target.dataset.direction === "in") {
    size *= 1.2;
    image.style.backgroundSize = `${size}%`;
  } else if (e.target.dataset.direction === "out") {
    size *= 0.8;
    image.style.backgroundSize = `${size}%`;
  }
});

nav.addEventListener('click', e => {
  if (e.target.dataset.direction === "left") {
    backgroundX -= 10;
    image.style.backgroundPosition = `${backgroundX}px ${backgroundY}px`;
  } else if (e.target.dataset.direction === "right") {
    backgroundX += 10;
    image.style.backgroundPosition = `${backgroundX}px ${backgroundY}px`;
  } else if (e.target.dataset.direction === "up") {
    backgroundY -= 10;
    image.style.backgroundPosition = `${backgroundX}px ${backgroundY}px`;
  } else if (e.target.dataset.direction === "down") {
    backgroundY += 10;
    image.style.backgroundPosition = `${backgroundX}px ${backgroundY}px`;
  }
});
