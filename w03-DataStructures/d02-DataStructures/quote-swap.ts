'use strict';
export { };


let words: string[] = ['What', 'I', 'do', 'create,', 'I', 'cannot', 'not', 'understand.'];

function quoteSwap(arr: string[]): string {
  arr.splice(2, 1, "cannot");
  arr.splice(5, 1, "do");
  return arr.join(" ");
}

console.log(quoteSwap(words));