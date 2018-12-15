'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function purpleSquare(x: number, y: number, size: number) {
  ctx.fillStyle = "purple"
  ctx.fillRect(x, y, size, size);
};

for (let i = 0; i < 20; i++) {
  purpleSquare(i * 10, i * 10, 10);
};