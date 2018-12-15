'use strict';
export { };

function bunnyCounter(n: number): number {
  if (n === 1) {
    return 2;
  } else {
    return 2 + bunnyCounter(n - 1);
  };
};

console.log(bunnyCounter(100));
