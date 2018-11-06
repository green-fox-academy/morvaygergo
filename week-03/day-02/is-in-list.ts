'use strict';
export { };

let listOfNumbers: number[] = [2, 4, 6, 8, 10, 12, 14, 16];
let check: number[] = [4, 8, 12, 16];
let booleans: boolean[] = [];

function checkNums(arr: number[]): boolean {
  arr.forEach(function (value, index, array) {
    booleans.push(listOfNumbers.includes(array[index]))
  });
  return booleans.reduce((a: boolean, b: boolean) => a && b);
};

 console.log(checkNums(check));