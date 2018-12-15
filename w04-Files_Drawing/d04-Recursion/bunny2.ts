'use strict';
export { };

function monsterBunnyCounter(n: number): number {
  if (n === 1) {
    return 2;
  } else if (n % 2 === 0) {
    return 3 + monsterBunnyCounter(n - 1);
  } else {
    return 2 + monsterBunnyCounter(n - 1);
  };
};

console.log(monsterBunnyCounter(4));
console.log(monsterBunnyCounter(8));
console.log(monsterBunnyCounter(16));
