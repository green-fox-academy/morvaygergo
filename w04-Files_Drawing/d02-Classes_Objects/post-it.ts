'use strict';
export { };

class postIt {

  backgroundColor: string;
  text: string;
  textColor: string;

  constructor(backgroundColor: string, text: string, textColor: string) {
    this.backgroundColor = backgroundColor;
    this.text = text;
    this.textColor = textColor;
  };

};

let postIt1 = new postIt('orange', 'Idea1', 'blue');
let postIt2 = new postIt('pink', 'Awesome', 'black');
let postIt3 = new postIt('yellow', 'Superb!', 'green');

console.log(postIt1, postIt2, postIt3);
