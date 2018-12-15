'use strict';

const king = document.querySelector('#b325');

console.log(king.innerHTML);

const businessLamp = document.querySelectorAll('.big');

businessLamp.forEach(value => console.log(value.innerHTML));

const section = document.querySelector('.container');

const conceitedKing = section.querySelectorAll('.asteroid');

conceitedKing.forEach(value => alert(value.innerHTML));

const noBusiness = document.querySelectorAll('div');

noBusiness.forEach(value => console.log(value.innerHTML));
