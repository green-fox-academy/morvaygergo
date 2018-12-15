'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function centerSquare(size: number) {
  ctx.strokeRect(((canvas.width - size) / 2), ((canvas.height - size) / 2), size, size);
};

for (let i = 3; i > 0; i--) {
  centerSquare(i * 100);
};