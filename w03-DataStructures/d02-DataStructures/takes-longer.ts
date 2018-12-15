'use strict';
export { };

let quote: string = 'Hofstadter\'s Law: It you expect, even when you take into account Hofstadter\'s Law.'

function fixer(str: string): string {
  return quote.substring(0, 21) + "always takes longer than " + quote.substring(21);
};

console.log(fixer(quote));