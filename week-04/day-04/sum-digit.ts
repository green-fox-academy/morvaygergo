'use strict';
export { };

function digitSum(n: number): number {
  if (n <= 1) {
    return n
  } else {
    return (n % 10) + digitSum(Math.floor(n / 10));
  }
}

console.log(digitSum(55555));
console.log(digitSum(5555555555));