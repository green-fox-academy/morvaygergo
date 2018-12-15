'use strict';
export { };

class Student {

  learn(): void {
  }

  question(teacher: Teacher): void {
    teacher.answer();
  }

}

class Teacher {
  
  answer(): void {
  }

  teach(student: Student): void {
    student.learn();
  }

}
