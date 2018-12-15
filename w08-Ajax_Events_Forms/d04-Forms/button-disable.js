'use strict';

const pets = document.querySelector('.pets');
const facts = document.querySelector('.facts');
const buttons = document.querySelector('.buttons');
let viktor = false;
let noFacts = false;

pets.addEventListener('click', e => {
  signup.disabled = false;

  if (e.target.id === 'viktor') {
    viktor = true;
  } else {
    viktor = false;
  }
});

facts.addEventListener('click', e => {
  if (e.target.id === 'yes') {
    noFacts = false;
    lovecats.disabled = false;
  } else {
    noFacts = true;
  }
});

buttons.addEventListener('click', () => {
  if (viktor && noFacts) {
    alert('Sigh, we still added you to the cat facts list');
  } else {
    alert("Thank you, you've successfully signed up for cat facts");
  }
});