'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function square(x: number, y: number) {
  ctx.fillRect(x, y, 10, 10);
};

for (let i = 0; i < 40; i++) {
  if (i % 2 === 0) {
    for (let j = 0; j < 600; j += 20) {
      square(j, i * 10);
    };
  } else {
    for (let k = 10; k < 600; k += 20) {
      square(k, i * 10);
    };
  };
};