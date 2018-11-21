'use strict';

import { Animal } from './animal';

export class Bird extends Animal {
  protected canFly: boolean;

  constructor(name: string, age: number, gender: string, size: string, indigenousTo: string, canFly: boolean) {
    super(name, age, gender, size, indigenousTo);
    this.canFly = canFly;
  }

  breed(): string {
    return 'eggs';
  }

  feed(): string {
    return 'everything from insects to cattle';
  }

  fly(): void {
    this.canFly ? console.log('Fly birdie fly!') : console.log('Run birdie run!')
  }
}
