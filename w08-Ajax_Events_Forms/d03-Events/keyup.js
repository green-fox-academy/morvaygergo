'use strict';

window.addEventListener('keyup', e => {
  console.log(e)
  let lastKey = document.querySelector('h1');
  lastKey.innerText = `Last pressed key code is: ${e.keyCode}`;
});