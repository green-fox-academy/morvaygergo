'use strict';

import { Comparable } from "./comparable";

class Domino implements Comparable {
  private values: number[];

  constructor(valueA: number, valueB: number) {
    this.values = [valueA, valueB];
  }

  printAllFields(): void {
    this.values.forEach((value: number) => {
      console.log(value);
    });
  }

  compareTo(other: Domino): number {
    if (this.values[0] > other.values[0]) {
      return 1;
    } else if (this.values[0] = other.values[0]) {
      return 0;
    } else {
      return -1;
    }
  }
}

// let dominoes: Domino[] = [];

// dominoes.push(new Domino(5, 2));
// dominoes.push(new Domino(4, 6));
// dominoes.push(new Domino(1, 5));
// dominoes.push(new Domino(6, 7));
// dominoes.push(new Domino(2, 4));
// dominoes.push(new Domino(7, 1));

let a = new Domino(1, 1);
let b = new Domino(2, 2);
let c = new Domino(3, 3);

// dominoes.push(a);
// dominoes.push(b);
// dominoes.push(c);

// dominoes.sort(function (a: Domino , b: Domino): number {
//   return a.compareTo(b);
// });

// console.log(dominoes);

console.log(a.compareTo(b));
console.log(b.compareTo(a));
console.log(a.compareTo(c));
