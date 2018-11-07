'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function drawline(x: number, y: number) {
  ctx.beginPath();
  ctx.strokeStyle = "red";
  ctx.moveTo(x, y);
  ctx.lineTo(x + 50, y);
  ctx.stroke();
};

for (let i: number = 0; i < 3; i++) {
  drawline(100 + i * 10, 100 + i * 15);
};