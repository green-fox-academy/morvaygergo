'use strict';

export abstract class Animal {
  protected name: string;
  protected age: number;
  protected gender: string;
  protected size: string;
  protected indigenousTo: string;

  constructor(name: string, age: number, gender: string, size: string, indigenousTo: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.size = size;
    this.indigenousTo = indigenousTo;
  }

  getName(): void {
    console.log(`I am a ${this.name}!`);
  }

  breed(): void {

  }

  feed(): void {

  }
}