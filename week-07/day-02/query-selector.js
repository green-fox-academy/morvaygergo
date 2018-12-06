'use strict';

// var king = document.getElementById('b325');
// console.log('king', king);
// var lamplighter = document.querySelector('.b329');
// console.log('lamplighter', lamplighter);
// var asteroids = document.querySelectorAll('div.asteroid');
// for (var i = 0; i < asteroids.length; i++) {
//   console.log(asteroids[i]);
// }

const king = document.querySelector('#b325');

console.log(king.innerHTML);

const businessLamp = document.querySelectorAll('.big');

businessLamp.forEach(value => console.log(value.innerHTML));

const section = document.querySelector('.container');

const conceitedKing = section.querySelectorAll('.asteroid');

conceitedKing.forEach(value => alert(value.innerHTML));

const noBusiness = document.querySelectorAll('div');

noBusiness.forEach(value => console.log(value.innerHTML));
