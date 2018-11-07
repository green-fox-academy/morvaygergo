'use strict';
export { };

const students: any[] = [
  { name: 'Mark', age: 9.5, candies: 2 },
  { name: 'Paul', age: 12, candies: 5 },
  { name: 'Clark', age: 7, candies: 3 },
  { name: 'Pierce', age: 12, candies: 7 },
  { name: 'Sean', age: 10, candies: 1 }
];

let names: string[] = [];
let average: number[] = [];

let adder = (base, current) => base + current;

for (let i = 0; i < students.length; i++) {
  if (students[i].candies > 4) {
    names.push(students[i].name);
  };
};

for (let i = 0; i < students.length; i++) {
  average.push(students[i].candies);
};

console.log(names);
console.log((average.reduce(adder)) / average.length);
