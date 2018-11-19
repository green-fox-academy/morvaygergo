'use strict';

import { Person } from './person'

export class Mentor extends Person {

  protected level: string;

  constructor(name?: string, age?: number, gender?: string, level?: string) {
    super(name, age, gender);
    this.name = name || 'Jane Doe';
    this.age = age || 30;
    this.gender = gender || 'female';
    this.level = level || 'intermediate';
  }

  protected introduce(): void {
    super.introduce();
    console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} ${this.level} level mentor.`);
  }

  protected getGoal(): void {
    super.getGoal();
    console.log('Educate brilliant junior software developers.');
  }
}
