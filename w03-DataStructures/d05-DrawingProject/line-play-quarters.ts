'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function linePlay1(color: string, i: number, min: number, max: number) {
  ctx.strokeStyle = color;
  ctx.beginPath();
  ctx.moveTo(min, i);
  ctx.lineTo(i + 10, max);
  ctx.stroke();
};

function linePlay2(color: string, i: number, min: number, max: number) {
  ctx.strokeStyle = color;
  ctx.beginPath();
  ctx.moveTo(i, min);
  ctx.lineTo(max, i + 10);
  ctx.stroke();
};

for (let i = 0; i < 200; i += 10) {
  linePlay1("green", i, 0, 200); //0,0-10,200
  linePlay2("purple", i, 0, 200); //0,0-200,10
};

for (let i = 200; i < 400; i += 10) {
  linePlay1("green", i, 200, 400); //200,200-210,400
  linePlay2("purple", i, 200, 400); //200,200-400,210
};

function linePlay3(color: string, i: number, min: number, max: number) {
  ctx.strokeStyle = color;
  ctx.beginPath();
  ctx.moveTo(min, i);
  ctx.lineTo(min + i + 10, min);
  ctx.stroke();
};

function linePlay4(color: string, i: number, min: number, max: number) {
  ctx.strokeStyle = color;
  ctx.beginPath();
  ctx.moveTo(min + i, 0);
  ctx.lineTo(max, i + 10);
  ctx.stroke();
};

for (let i = 0; i < 200; i += 10) {
  linePlay3("green", i, 200, 400); //200,0-210,200
  linePlay4("purple", i, 200, 400); //200,0-400,10
};

function linePlay5(color: string, i: number, min: number, max: number) {
  ctx.strokeStyle = color;
  ctx.beginPath();
  ctx.moveTo(0, min + i);
  ctx.lineTo(i + 10, max);
  ctx.stroke();
};

function linePlay6(color: string, i: number, min: number, max: number) {
  ctx.strokeStyle = color;
  ctx.beginPath();
  ctx.moveTo(i, max);
  ctx.lineTo(max, max + i + 10);
  ctx.stroke();
};

for (let i = 0; i < 200; i += 10) {
  linePlay5("green", i, 200, 400); //0,200-10,400
  linePlay6("purple", i, 0, 200); //0,200-200,210
};