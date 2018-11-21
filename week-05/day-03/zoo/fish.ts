'use strict'

import { Animal } from './animal';
import { runInThisContext } from 'vm';

export class Fish extends Animal {
  protected saltOrFreshWater: string;

  constructor(name: string, age: number, gender: string, size: string, indigenousTo: string, saltOrFreshWater: string) {
    super(name, age, gender, size, indigenousTo);
    this.saltOrFreshWater = saltOrFreshWater;
  }

  breed(): string {
    return 'eggs'
  }

  feed(): string {
    return 'other fish'
  }

  saltOrFresh(): void {
    console.log('Where do I live?')

    if (this.saltOrFreshWater === 'salt') {
      console.log('I live in the oceans')
    } else if (this.saltOrFreshWater === 'fresh') {
      console.log('I live in rivers and lakes')
    } else {
      console.log('I don\'t know')
    }
  }
}
