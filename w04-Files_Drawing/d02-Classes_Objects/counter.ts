'use strict';
export { };

class counter {

  value: number;

  constructor(value?: number) {
    this.value = value || 0;
  };

  add(number?: number): void {
    this.value += number || 1;
  };
  
  get(): void {
    console.log(this.value);
  };

  reset(): void {
    this.value = 0;
  };


};

let count = new counter();
let count2 = new counter(10);

console.log(count, count2);

count.add();
count2.add(10);

console.log(count, count2);

count.get();
count2.reset();

console.log(count, count2);
