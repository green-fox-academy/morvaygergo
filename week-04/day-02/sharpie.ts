'use strict';
export { };

class sharpie {

  color: string;
  width: number;
  inkAmount: number;

  constructor(color: string, width: number) {
    this.color = color;
    this.width = width;
    this.inkAmount = 100;
  };

  use(): void {
    this.inkAmount -= 1;
  };

};

let mySharpie = new sharpie('orange', 10);

console.log(mySharpie);
mySharpie.use();
console.log(mySharpie);
