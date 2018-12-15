'use strict';
export { };

const students: any[] = [
  { name: 'Theodor', age: 3, candies: 2 },
  { name: 'Paul', age: 9.5, candies: 2 },
  { name: 'Mark', age: 12, candies: 5 },
  { name: 'Peter', age: 7, candies: 3 },
  { name: 'Olaf', age: 12, candies: 7 },
  { name: 'George', age: 10, candies: 1 }
];

let candies: number[] = [];
let age: number[] = [];

let adder = (base, current) => base + current;

for (let i = 0; i < students.length; i++) {
  candies.push(students[i].candies);
};

for (let i = 0; i < students.length; i++) {
  if (students[i].candies < 5) {
    age.push(students[i].age);
  };
};

console.log(candies.reduce(adder));
console.log(age.reduce(adder));