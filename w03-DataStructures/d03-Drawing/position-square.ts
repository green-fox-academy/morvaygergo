'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function square(x: number, y: number) {
  ctx.fillRect(x, y, 50, 50);
};

for (let i = 1; i < 4; i++) {
  square(50 + i * 100, 50 + i * 100)
};