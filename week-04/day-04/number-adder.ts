'use strict';
export { };

function addNumbers(n: number): number {
  if (n === 1) {
    return n;
  } else {
    return n + addNumbers(n - 1);
  };
};

console.log(addNumbers(10));