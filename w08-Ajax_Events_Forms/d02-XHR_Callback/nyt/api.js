'use strict';

const API_BASE_URL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=c8fcaefe776f4f4495ff4a216fee2a20&q='Apollo 11'+'landing'";
const xhr = new XMLHttpRequest();

xhr.onload = () => {
  if (xhr.status === 200) {
    const response = JSON.parse(xhr.responseText);
    let articles = document.querySelector('.articles');
    for (let i = 0; i < response.response.docs.length; i++) {
      let element = document.createElement('li');
      let article = document.createElement('ul');      
      let headline = document.createElement('li');
      let snippet = document.createElement('li');
      let date = document.createElement('li');
      headline.textContent = response.response.docs[i].headline.main;
      snippet.textContent = response.response.docs[i].snippet;
      date.textContent = response.response.docs[i].pub_date;
      article.appendChild(date);
      article.appendChild(headline);
      article.appendChild(snippet);
      element.appendChild(article);      
      articles.appendChild(element);      
    }
  }
};

xhr.open('GET', `${API_BASE_URL}`);
xhr.send();
