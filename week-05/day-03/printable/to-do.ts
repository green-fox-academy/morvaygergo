'use strict';

import { Printable } from "./printable";

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

class ToDo implements Printable {
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

  printAllFields(): void {
    this.things.forEach((value: Thing) => {
      console.log(value);
    });
  }
}

let toDo = new ToDo;
let thing1 = new Thing('one')
let thing2 = new Thing('two')
let thing3 = new Thing('three')

toDo.add(thing1);
toDo.add(thing2);
toDo.add(thing3);

toDo.printAllFields();
