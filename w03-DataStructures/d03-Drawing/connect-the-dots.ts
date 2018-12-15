'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let coordinates: number[][] = [[50, 100], [70, 70], [80, 90], [90, 90], [100, 70], [120, 100], [85, 130], [50, 100]];

function dotConnect(crd: number[][]) {
  for (let i = 0; i < crd.length; i++) {
    ctx.beginPath();
    ctx.moveTo(crd[i][0], crd[i][1]);
    ctx.lineTo(crd[i + 1][0], crd[i + 1][1]);
    ctx.stroke();
  };
};

dotConnect(coordinates);