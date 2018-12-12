'use click';

document.querySelector('div').addEventListener('click', (event) => {
  event.target.innerText = 'Yeah, click event is fired!';
});