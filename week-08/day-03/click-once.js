'use strict';

const button = document.querySelector('button');

//solution 1.
// button.addEventListener('click', e => {
//   console.log(e.timeStamp);
//   button.disabled = true;
// });

//solution 2.
let listener = e => {
  console.log(e.timeStamp);
  button.removeEventListener('click', listener);
}

button.addEventListener('click', listener);