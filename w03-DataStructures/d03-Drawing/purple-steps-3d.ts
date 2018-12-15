'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function purpleSquare(x: number, y: number, size: number) {
  ctx.fillStyle = "purple";
  ctx.fillRect(x, y, size, size);
};

let counter: number = 0;

for (let i = 0; i < 10; i++) {
  purpleSquare(counter, counter, (i + 1) ** 2);
  counter += (i + 1) ** 2;
};