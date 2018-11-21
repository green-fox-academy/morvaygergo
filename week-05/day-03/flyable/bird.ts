'use strict';

import { Animal } from '../zoo/animal';
import { Flyable } from './flyable'

export class Birdy extends Animal implements Flyable {

  constructor(name: string, age: number, gender: string, size: string, indigenousTo: string) {
    super(name, age, gender, size, indigenousTo);
  }

  breed(): string {
    return 'eggs';
  }

  feed(): string {
    return 'everything from insects to cattle';
  }

  land(): void {
    console.log('Wohooo');
  }

  fly(): void {
    console.log('Yip-yap-yip-yap');
  }

  takeOff():void {
    console.log('Whoop-whoop-whoop');
  }
}
