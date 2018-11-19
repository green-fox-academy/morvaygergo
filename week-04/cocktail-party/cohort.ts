import { Student } from "./student";
import { Mentor } from "./mentor";

'use strict';

export class Cohort {

  protected name: string;
  protected students: Student[];
  protected mentors: Mentor[];

  constructor(name) {
    this.name = name;
    this.students = [];
    this.mentors = [];
  }

  protected addStudent(student: Student): void {
    this.students.push(student);
  }

  protected addMentor(mentor: Mentor): void {
    this.mentors.push(mentor);
  }

  protected info(): void {
    console.log(`The ${this.name} cohort has ${this.students.length} students and ${this.mentors.length} mentors.`)
  }
}
