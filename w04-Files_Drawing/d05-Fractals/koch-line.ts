'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// function kochLine(fromX: number, fromY: number, toX: number, toY: number) {
//   ctx.strokeStyle = 'blue';
//   ctx.beginPath();
//   ctx.moveTo(fromX, fromY);
//   ctx.lineTo(toX, toY);
//   ctx.stroke();
// };

// kochLine(0, 500, 1000, 500);

// function kochLine2(fromX: number, fromY: number, toX: number, toY: number) {
//   ctx.strokeStyle = 'red';
//   ctx.beginPath();
//   ctx.moveTo(fromX, fromY);
//   ctx.lineTo((toX-fromX)/3, toY);
//   ctx.lineTo((toX-fromX)/2, toY+(((toX-fromX)/3)*0.866025))
//   ctx.lineTo((toX-fromX)/3*2, toY);
//   ctx.lineTo(toX, toY);
//   ctx.stroke();
// };

// kochLine2(0, 500, 1000, 500);

function kochLine3(fromX: number, fromY: number, toX: number, toY: number) {

  let break1X: number = (toX - fromX) / 3;
  let break1Y: number = toY;
  let tipX: number = (toX - fromX) / 2;
  let tipY: number = toY + (toX - fromX) / 3 * 0.866025;
  let break2X: number = (toX - fromX) / 3 * 2;
  let break2Y: number = toY;

  let line = () => { ctx.lineTo(toX, toY) };

  ctx.strokeStyle = 'blue';
  ctx.beginPath();
  ctx.moveTo(fromX, fromY);
  ctx.lineTo(break1X, break1Y);
  ctx.lineTo(break1X + (tipX - break1X) / 3, break1Y + (tipY - break1Y) / 3);
  ctx.lineTo(break1X, break1Y + (tipY - break1Y) / 3 * 2);
  ctx.lineTo(break1X + (tipX - break1X) / 3 * 2, break1Y + (tipY - break1Y) / 3 * 2);
  ctx.lineTo(tipX, tipY);
  ctx.lineTo(tipX + (break2X - tipX) / 3, tipY + (break2Y - tipY) / 3);
  ctx.lineTo(break2X, tipY + (break2Y - tipY) / 3);
  ctx.lineTo(tipX + (break2X - tipX) / 3 * 2, tipY + (break2Y - tipY) / 3 * 2);
  ctx.lineTo(break2X, break2Y);
  line();


  // ctx.lineTo(tipX, tipY)
  // ctx.lineTo(break2X, break2Y);
  // ctx.lineTo(toX, toY);
  ctx.stroke();
};

kochLine3(0, 500, 1000, 500);

// 1 - 6,2
// 2 - 1,3
// 3 - 2,4
// 4 - 3,5
// 5 - 4,6
// 6 - 5,1

