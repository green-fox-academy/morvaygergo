'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function rectangle(x: number, y: number, color: string, size: number) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, size, size);
};

rectangle(10, 20, "green", 20);
rectangle(30, 50, "red", 15);
rectangle(100, 60, "orange", 30);
rectangle(40, 60, "blue", 20);