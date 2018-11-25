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

  compareTo(other: Comparable): number {
    return
  }
}