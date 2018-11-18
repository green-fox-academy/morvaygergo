'use strict';
export { Sharpie };

class Sharpie {

  color: string;
  width: number;
  inkAmount: number;

  constructor(color: string, width: number) {
    this.color = color;
    this.width = width;
    this.inkAmount = 100;
  };

  use(): void {
    this.inkAmount -= 100;
  };

};

let mySharpie = new Sharpie('orange', 10);

// console.log(mySharpie);
// mySharpie.use();
// console.log(mySharpie);
