'use strict';
export { };

function power(n: number, m: number): number {
  if (m === 1) {
    return n
  } else {
    return n * power(n, m - 1)
  };
};

console.log(power(6, 10));