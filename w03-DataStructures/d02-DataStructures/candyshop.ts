'use strict';
export { };

let shopItems: any[] = ['Cupcake', 2, 'Brownie', false];

function sweets(arr: string[]): string[] {
  let supplement: string[] = ['Croissant', 'Ice cream'];
  arr.forEach(function (value, index, array) {
    if (typeof value != 'string') {
      array[index] = supplement.shift();
    };
  });
  return arr;
};

console.log(sweets(shopItems));