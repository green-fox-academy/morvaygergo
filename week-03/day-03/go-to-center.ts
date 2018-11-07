'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function center(x: number, y: number) {
  ctx.beginPath();
  ctx.strokeStyle = "green";
  ctx.moveTo(x,y);
  ctx.lineTo(300,200);
  ctx.stroke();
  };

for (let i: number = 0; i < 3; i++) {
  center(100 + i * 10,100 + i * 15);
};