'use strict';

export function checkAnagram(stringOne: string, stringTwo: string): boolean {
  return stringOne.split('').sort().join('') === stringTwo.split('').sort().join('');
}

console.log(checkAnagram('abcdef', 'cbafde'));
