import { Instrument } from "./instrument";

'use strict';

export abstract class StringedInstrument extends Instrument {
  protected numberOfStrings: number;

  constructor(name: string) {
    super(name);
    this.name = name;
  }

  abstract play(): void;

  abstract sound(): void;
}
