'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

ctx.fillStyle = "green";
ctx.fillRect(((canvas.width / 2) - 5), ((canvas.height / 2) - 5), 10, 10);