'use strict';

export { ToDo };

class Thing {
  name: string;
  completed: boolean;

  constructor(name: string) {
    this.name = name;
  }

  public complete(): void {
    this.completed = true;
  }
}

class ToDo {
  private things: Thing[];

  constructor() {
    this.things = [];
  }

  add(thing: Thing): void {
    this.things.push(thing);
  }

  print(): void {
    let message: string = '';
    for (let i = 0; i < this.things.length; i++) {
      if (this.things[i].completed) {
        console.log(`${i + 1}. [x] ${this.things[i].name}`);
      } else {
        console.log(`${i + 1}. [ ] ${this.things[i].name}`);
      }
    }
  }
}
