'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

ctx.fillRect(0, 0, 600, 400);

for (let i = 0; i < Math.floor((Math.random() * 100)); i++) {
  let color = Math.floor((Math.random() * 255));
  let size = Math.floor((Math.random() * 50));
  ctx.fillStyle = `rgb(${color},${color},${color})`;
  ctx.fillRect(Math.floor((Math.random() * 600)), Math.floor((Math.random() * 400)), size, size);
}


console.log(Math.floor((Math.random() * 600)));