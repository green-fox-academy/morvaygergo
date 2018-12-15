'use strict';

import { Comparable } from "./comparable";

class Thing implements Comparable {
  name: string;
  completed: boolean;

  constructor(name: string) {
    this.name = name;
  }

  public complete(): void {
    this.completed = true;
  }

  compareTo(other: Thing): number {
    if (this.completed > other.completed) {
      return 1;
    } else if (this.completed < other.completed) {
      return -1;
    } else if (this.name > other.name) {
      return 1;
    } else if (this.name < other.name) {
      return -1;
    }
  }
}

let a = new Thing('something');
let b = new Thing('anything');

console.log(a.compareTo(b));

a.complete();

console.log(a.compareTo(b));
