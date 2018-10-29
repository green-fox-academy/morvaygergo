'use strict';
export {};

let currentHours: number = 14;
let currentMinutes: number = 34;
let currentSeconds: number = 42;

let day: number = 24*60*60;
let current: number = day-(currentHours*60*60)-(currentMinutes*60)-currentSeconds;

console.log(current);