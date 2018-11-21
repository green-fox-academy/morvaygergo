import { StringedInstrument } from "./stringed";

'use strict';

export class Violin extends StringedInstrument {
  constructor(numberOfStrings: number = 4, name: string = 'violin') {
    super(name, numberOfStrings);
    this.name = name;
    this.numberOfStrings;
  }

  play(): void {
    console.log(`The ${this.name} is a ${this.numberOfStrings}-stringed instrument that goes ${this.sound()}.`);
  }

  sound(): string {
    return 'Screech';
  }
}
