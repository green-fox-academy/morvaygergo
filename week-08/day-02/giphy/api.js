const API_BASE_URL = 'https://api.giphy.com/v1/gifs/search?api_key=XbWuWMZ1MsnVsD4zcsPOVsPSX7b4vUxX&q=funny%20cat&limit=16&offset=0&rating=G&lang=en'

const xhr = new XMLHttpRequest();

xhr.onload = () => {
  if (xhr.status === 200) {
    const response = JSON.parse(xhr.responseText);
    console.log(response.data[0].images);
    let images = document.querySelector('.images');
    for (let i = 0; i < response.data.length; i++) {
      let image = document.createElement('img');
      image.setAttribute('src', `${response.data[i].images.downsized_still.url}`);
      image.addEventListener('click', () => {
        image.setAttribute('src', `${response.data[i].images.downsized.url}`);
      });
      images.appendChild(image);
    }
  }
};

xhr.open('GET', `${API_BASE_URL}`);
xhr.send();
