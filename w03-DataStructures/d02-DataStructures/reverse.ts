'use strict';
export { };

let reversed: string = '.eslaf eb t\'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI';

function reverse(str: string): string {
  return str.split('').reverse().join('');
};


console.log(reverse(reversed));