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

  abstract breed(): void

  abstract feed(): void
}