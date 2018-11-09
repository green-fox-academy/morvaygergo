'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function linePlay1(color: string, i: number, max: number) {
  ctx.strokeStyle = color;
  ctx.beginPath();
  ctx.moveTo(0, i);
  ctx.lineTo(i + 10, max);
  ctx.stroke();
};

function linePlay2(color: string, i: number, max: number) {
  ctx.strokeStyle = color;
  ctx.beginPath();
  ctx.moveTo(i, 0);
  ctx.lineTo(max, i + 10);
  ctx.stroke();
};

for (let i = 0; i < 400; i += 10) {
  linePlay1("green", i, 400)
};

for (let i = 0; i < 400; i += 10) {
  linePlay2("purple", i, 400)
};
