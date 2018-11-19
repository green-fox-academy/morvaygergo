'use strict';

export class Person {

  protected name: string;
  protected age: number;
  protected gender: string;

  constructor(name?: string, age?: number, gender?: string) {
    this.name = name || 'Jane Doe';
    this.age = age || 30;
    this.gender = gender || 'female';
  }

  introduce(): void {
    console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender}.`);
  }

  getGoal(): void {
    console.log('My goal is: Live for the moment!');
  }
}
