'use strict';
export { };

const numbers: number[] = [1, 2, 3, 4, 5, 6, 8];

function containsSeven(arr: number[]): string {
  if (numbers.indexOf(7) >= 0) {
    return 'Hooorrray!'
  } else {
    return 'Noooooooo!'
  };
};

console.log(containsSeven(numbers));

function containsSeven2(arr: number[]): string {
  if (numbers.some( (e) => e === 7)) {
    return 'Hooorrray!'
  } else {
    return 'Noooooooo!'
  };
};

console.log(containsSeven2(numbers));