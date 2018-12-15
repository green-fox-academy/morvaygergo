'use strict';
export { };

function divideTen(n: number): number {
  if (n === 0) {
    throw new TypeError('fail')
  };
  return (10 / n);
};

try {
  console.log(divideTen(100));
  console.log(divideTen(0));
} catch (e) {
  console.log(e.message);
};
