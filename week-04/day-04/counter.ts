'use strict';
export { };

function countDown(n: number): number {
  if (n <= 0) {
    console.log(0);
    return n;
  } else {
    console.log(n);
    return countDown(n - 1);
  };
};

countDown(10);