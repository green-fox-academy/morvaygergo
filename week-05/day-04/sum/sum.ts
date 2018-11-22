'use strict';

export class Sum {
  array: number[];

  constructor(array: number[]) {
    this.array = array;
  }

  countSum(): number {
    let final: number = 0;
    for (let i = 0; i < this.array.length; i++) {
      final += this.array[i];
    }

    return final;
  }
}
