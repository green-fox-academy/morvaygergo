'use strict';

export abstract class Instrument {
  protected name: string;

  constructor(){}

  abstract play(): void;
}
