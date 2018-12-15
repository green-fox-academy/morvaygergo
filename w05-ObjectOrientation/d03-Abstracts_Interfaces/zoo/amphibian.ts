'use strict';

import { Animal } from './animal';

export class Amphibian extends Animal {
  protected hasTail: boolean;
  protected hasLegs: boolean;

  constructor(name: string, age: number, gender: string, size: string, indigenousTo: string, hasTail: boolean, hasLegs: boolean) {
    super(name, age, gender, size, indigenousTo);
    this.hasTail = hasTail;
    this.hasLegs = hasLegs;
  }

  breed(): string {
    return 'eggs and metamorphosis';
  }

  feed(): string {
    return 'small insects and such';
  }
}
