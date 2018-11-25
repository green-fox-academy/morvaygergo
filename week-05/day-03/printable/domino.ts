'use strict';

import { Printable } from "./printable";

class Domino implements Printable {
  values: number[];

  constructor(valueA: number, valueB: number) {
    this.values = [valueA, valueB];
  }

  printAllFields(): void {
    this.values.forEach((value: number) => {
      console.log(value);
    });
  }
}

let domino = new Domino(1, 3);

domino.printAllFields();