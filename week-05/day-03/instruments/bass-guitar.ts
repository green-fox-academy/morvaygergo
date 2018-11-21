'use strict';

import { StringedInstrument } from "./stringed";

export class BassGuitar extends StringedInstrument {
  constructor(numberOfStrings: number = 4, name: string = 'bass guitar') {
    super(name, numberOfStrings);
    this.name = name;
    this.numberOfStrings = numberOfStrings;
  }

  play(): void {
    console.log(`The ${this.name} is a ${this.numberOfStrings}-stringed instrument that goes ${this.sound()}.`);
  }

  sound(): string {
    return 'Duum-duum-duum';
  }
}
