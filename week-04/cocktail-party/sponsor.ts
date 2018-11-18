import { Person } from './person'

export class Sponsor extends Person {

  company: string;
  hiredStudents: number;

  constructor(name?: string, age?: number, gender?: string, company?: string) {
    super(name, age, gender);
    this.name = name || 'Jane Doe';
    this.age = age || 30;
    this.gender = gender || 'female';
    this.company = company || 'Google';
    this.hiredStudents = 0;
  }

  introduce(): void {
    super.introduce();
    console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} who represents ${this.company} and hired ${this.hiredStudents} students so far.`);
  }

  getGoal(): void {
    super.getGoal();
    console.log('Hire brilliant junior software developers.');
  }

  hire(): void {
    this.hiredStudents += 1;
  }
}
