'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function rainbowSquare(size: number, color1: number, color2: number, color3: number) {
  ctx.fillStyle = `rgb(${color1},${color2},${color3})`;
  ctx.fillRect(((canvas.width - size) / 2), ((canvas.height - size) / 2), size, size);
};

for (let i = canvas.height; i > 0; i -= (canvas.height / 10)) {
  rainbowSquare(i, 255, i * 0.5, 255 - i / 10);
};