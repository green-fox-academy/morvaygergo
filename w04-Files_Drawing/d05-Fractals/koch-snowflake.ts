'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let until = 1;

function drawLine(fromX: number, fromY: number, toX: number, toY: number) {
  ctx.beginPath();
  ctx.moveTo(fromX, fromY);
  ctx.lineTo(toX, toY);
  ctx.stroke();
};

function line1(fromX: number, fromY: number, toX: number, toY: number) {
  if (until > 0) {
    drawLine(fromX, fromY, toX, toY);
    line1(fromX, fromY, (toX - fromX) / 3, toY);
    line6((toX - fromX) / 3, toY, (toX - fromX) / 2, toY - ((toX - fromX) / 3 * 0.866025));
    line2((toX - fromX) / 2, toY - ((toX - fromX) / 3 * 0.866025), (toX - fromX) / 3 * 2, toY);
    line1((toX - fromX) / 3 * 2, toY, toX, toY);
    until -= 1;
  };
};

function line2(fromX: number, fromY: number, toX: number, toY: number) {
  if (until > 0) {
    drawLine(fromX, fromY, toX, toY);
    line2(fromX, fromY, (toX - fromX) / 3, (toY - fromY) / 3);
    line1((toX - fromX) / 3, (toY - fromY) / 3, toX, (toY - fromY) / 3);
    line3(toX, (toY - fromY) / 3, (toX - fromX) / 3 * 2, (toY - fromY) / 3 * 2);
    line2((toX - fromX) / 3 * 2, (toY - fromY) / 3 * 2, toX, toY);
    until -= 1;
  };
};

function line3(fromX: number, fromY: number, toX: number, toY: number) {
  if (until > 0) {
    drawLine(fromX, fromY, toX, toY);
    line3(fromX, fromY, (fromX - toX) / 3 * 2, (fromY - toY) / 3 * 2);
    line2((fromX - toX) / 3 * 2, (fromY - toY) / 3 * 2, fromX, (fromY - toY) / 3 * 2);
    line4(fromX, (fromY - toY) / 3 * 2, (fromX - toX) / 3, (fromY - toY) / 3 * 2);
    line3((fromX - toX) / 3, (fromY - toY) / 3 * 2, toX, toY);
    until -= 1;
  };
};

function line4(fromX: number, fromY: number, toX: number, toY: number) {
  if (until > 0) {
    drawLine(fromX, fromY, toX, toY);
    line4(fromX, fromY, (fromX - toX) / 3 * 2, toY);
    line3((fromX - toX) / 3 * 2, toY, (fromX - toX) / 2, toY + ((fromX - toX) / 3 * 0.866025));
    line5((fromX - toX) / 2, toY + ((fromX - toX) / 3 * 0.866025), (fromX - toX) / 3, toY);
    line4((fromX - toX) / 3, toY, toX, toY);
    until -= 1;
  };
};

function line5(fromX: number, fromY: number, toX: number, toY: number) {
  if (until > 0) {
    drawLine(fromX, fromY, toX, toY);
    line5(fromX, fromY, (fromX - toX) / 3 * 2, (fromY - toY) / 3 * 2);
    line4((fromX - toX) / 3 * 2, (fromY - toY) / 3 * 2, toX, (fromY - toY) / 3 * 2);
    line6(toX, (fromY - toY) / 3 * 2, (fromX - toX) / 3, (fromY - toY) / 3);
    line5((fromX - toX) / 3, (fromY - toY) / 3, toX, toY);
    until -= 1;
  };
};

function line6(fromX: number, fromY: number, toX: number, toY: number) {
  if (until > 0) {
    drawLine(fromX, fromY, toX, toY);
    line6(fromX, fromY, (toX - fromX) / 3, (fromY - toY) / 3);
    line5((toX - fromX) / 3, (fromY - toY) / 3, fromX, (fromY - toY) / 3 * 2);
    line4(fromX, (fromY - toY) / 3 * 2, (toX - fromX) / 3 * 2, (fromY - toY) / 3 * 2);
    line6((toX - fromX) / 3 * 2, (fromY - toY) / 3 * 2, toX, toY);
    until -= 1;
  };
};

line1(0, 500, 1000, 500);