'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function toCenter(x: number, y: number) {
  ctx.beginPath();
  ctx.strokeStyle = "green";
  ctx.moveTo(x, y);
  ctx.lineTo(canvas.width / 2, canvas.height / 2);
  ctx.stroke();
};

for (let i = 0; i <= 600; i += 20) {
  toCenter(i, 0);
};

for (let i = 0; i <= 600; i += 20) {
  toCenter(i, 400);
};

for (let i = 0; i <= 400; i += 20) {
  toCenter(0, i);
};

for (let i = 0; i <= 400; i += 20) {
  toCenter(600, i);
};