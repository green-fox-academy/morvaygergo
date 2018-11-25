'use strict';

import { Comparable } from "./comparable";

class Domino implements Comparable {
  values: number[];

  constructor(valueA: number, valueB: number) {
    this.values = [valueA, valueB];
  }

  printAllFields(): void {
    this.values.forEach((value: number) => {
      console.log(value);
    });
  }

  compareTo(other: Comparable): number {
    return
  }
}
