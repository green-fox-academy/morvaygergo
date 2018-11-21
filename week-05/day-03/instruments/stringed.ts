import { Instrument } from "./instrument";

'use strict';

export abstract class StringedInstrument extends Instrument {
  protected numberOfStrings: number;

  constructor(name: string, numberOfStrings: number) {
    super(name);
    this.name = name;
    this.numberOfStrings = numberOfStrings;
  }

  abstract play(): void;

  abstract sound(): void;
}
