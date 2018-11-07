'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.moveTo(100, 100);
ctx.lineTo(300, 100);
ctx.stroke();
ctx.beginPath();
ctx.strokeStyle = "green";
ctx.moveTo(300, 100);
ctx.lineTo(300, 300);
ctx.stroke();
ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.moveTo(300, 300);
ctx.lineTo(100, 300);
ctx.stroke();
ctx.beginPath();
ctx.strokeStyle = "purple";
ctx.moveTo(100, 300);
ctx.lineTo(100, 100);
ctx.stroke();