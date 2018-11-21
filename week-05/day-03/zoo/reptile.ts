'use strict'

import { Animal } from './animal';

export class Reptile extends Animal {
  protected extinct: boolean;

  constructor(name: string, age: number, gender: string, size: string, indigenousTo: string, extinct: boolean) {
    super(name, age, gender, size, indigenousTo);
    this.extinct = extinct;
  }

  breed(): string {
    return 'eggs'
  }

  feed(): string {
    return 'sometimes plants but mostly meat'
  }

  isDino(): void {
    if (this.extinct) {
      console.log('I am a dinosaur!')
    }
  }
}
