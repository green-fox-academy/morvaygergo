import { StringedInstrument } from "./stringed";

'use strict';

export class BassGuitar extends StringedInstrument {
  constructor(name: string) {
    super(name);
    this.name = name;
    this.numberOfStrings = 4;
  }

  play(): string {
    return `The ${typeof this} is a ${this.numberOfStrings}-stringed instrument that goes ${this.sound()}.`
  }

  sound(): string {
    return 'Duum-duum-duum'
  }
}
