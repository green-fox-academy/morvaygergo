'use strict';

const pets = document.querySelector('.pets');
const yes = document.querySelector('#yes');
const no = document.querySelector('#no');
let signup = document.querySelector('#signup')
let lovecats = document.querySelector('#lovecats')
let viktor = false;
let nofacts = false;


pets.addEventListener('click', e => {
  signup.disabled = false;
  
  if (e.target.id === 'fish') {
    viktor = true;
  }
});

yes.addEventListener('click', e => lovecats.disabled = false);

no.addEventListener('click', e => nofacts = true);

signup.addEventListener('click', () => {
  if (viktor && nofacts) {
    alert('Sigh, we still added you to the cat facts list');
  } else {
    alert("Thank you, you've successfully signed up for cat facts");
  }
});

lovecats.addEventListener('click', () => alert("Thank you, you've successfully signed up for cat facts"));