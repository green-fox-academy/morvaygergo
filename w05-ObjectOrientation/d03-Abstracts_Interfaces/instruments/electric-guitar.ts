import { StringedInstrument } from "./stringed";

'use strict';

export class ElectricGuitar extends StringedInstrument {
  constructor(numberOfStrings: number = 6, name: string = 'electric guitar') {
    super(name, numberOfStrings);
    this.name = name;
    this.numberOfStrings;
  }

  play(): void {
    console.log(`The ${this.name} is a ${this.numberOfStrings}-stringed instrument that goes ${this.sound()}.`);
  }

  sound(): string {
    return 'Twang';
  }
}
