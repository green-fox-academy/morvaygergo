'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function linePlay1() {
  for (let i = 0; i <= 400; i += 10) {
    ctx.strokeStyle = "green";
    ctx.beginPath();
    ctx.moveTo(0, i);
    ctx.lineTo(i + 10, 400);
    ctx.stroke();
  };
};

function linePlay2() {
  for (let i = 0; i <= 400; i += 10) {
    ctx.strokeStyle = "purple";
    ctx.beginPath();
    ctx.moveTo(i, 0);
    ctx.lineTo(400, i + 10);
    ctx.stroke();
  };
};

linePlay1();
linePlay2();