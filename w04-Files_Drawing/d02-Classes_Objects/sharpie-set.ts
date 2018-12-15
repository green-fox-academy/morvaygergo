'use strict';

import { Sharpie } from './sharpie'

class SharpieSet {

  sharpies: Sharpie[];

  constructor(sharpies: Sharpie[]) {
    this.sharpies = sharpies;
  }

  countUsable(): void {
    let count = 0;
    this.sharpies.forEach(function (value: Sharpie, index: number, array: Sharpie[]) {
      if (array[index].inkAmount > 0) {
        count += 1;
      }
    });
    console.log(count);
  }

  removeTrash(): Sharpie[] {
    this.sharpies.forEach(function (value: Sharpie, index: number, array: Sharpie[]) {
      if (array[index].inkAmount !> 0) {
        array.splice(index, 1);
      }
    });
    return this.sharpies;
  }
}

function createSet(): Sharpie[] {
  let mySet = [];
  mySet.push(new Sharpie('blue', 10));
  mySet.push(new Sharpie('black', 10));
  mySet.push(new Sharpie('red', 10));
  mySet.push(new Sharpie('pink', 10));
  mySet.push(new Sharpie('yellow', 10));
  mySet.push(new Sharpie('orange', 10));
  mySet.push(new Sharpie('green', 10));
  return mySet;
}

let mySet = new SharpieSet(createSet());

console.log(mySet);
mySet.countUsable();
console.log(mySet.removeTrash());

mySet.sharpies[0].use();
mySet.sharpies[2].use();

console.log(mySet);
mySet.countUsable();
console.log(mySet.removeTrash());
