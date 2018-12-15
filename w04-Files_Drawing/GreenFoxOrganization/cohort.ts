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

  addStudent(student: Student): void {
    this.students.push(student);
  }

  addMentor(mentor: Mentor): void {
    this.mentors.push(mentor);
  }

  info(): void {
    console.log(`The ${this.name} cohort has ${this.students.length} students and ${this.mentors.length} mentors.`)
  }
}
