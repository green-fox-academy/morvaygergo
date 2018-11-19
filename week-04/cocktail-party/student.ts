'use strict';

import { Person } from './person'

export class Student extends Person {

  protected previousOrganization: string;
  protected skippedDays: number;

  constructor(name?: string, age?: number, gender?: string, previousOrganization?: string) {
    super(name, age, gender);
    this.name = name || 'Jane Doe';
    this.age = age || 30;
    this.gender = gender || 'female';
    this.previousOrganization = previousOrganization || 'The School of Life';
    this.skippedDays = 0;
  }

  protected introduce(): void {
    super.introduce();
    console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} from ${this.previousOrganization} who skipped ${this.skippedDays} days from the course already.`);
  }

  protected getGoal(): void {
    super.getGoal();
    console.log('Be a junior software developer.');
  }

  protected skipDays(numberOfDays): void {
    this.skippedDays += numberOfDays;
  }
}
