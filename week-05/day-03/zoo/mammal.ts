'use strict'

import { Animal } from './animal';

export class Mammal extends Animal {
  protected domestic: boolean;

  constructor(name: string, age: number, gender: string, size: string, indigenousTo: string, domestic: boolean) {
    super(name, age, gender, size, indigenousTo);
    this.domestic = domestic;
  }

  breed(): string {
    return 'eggs'
  }

  feed(): string {
    return 'literally anything'
  }

  isDomestic(): void {
    this.domestic ? console.log('I am your pet'): console.log('I live in the wilderness')
  }
}