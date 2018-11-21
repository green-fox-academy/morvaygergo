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

  getName(): string {
    return this.name;
  }

  introduce(): string {
    return `I am a(n) ${this.age} years old ${this.size}-sized ${this.gender} ${this.name} from ${this.indigenousTo}.`
  }

  abstract breed(): void

  abstract feed(): void
}