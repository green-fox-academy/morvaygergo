'use strict';

export function countLetters(str: string): Object {
  let dictionary = {};

  str.split('').forEach(function(value: string){
    if (dictionary[value] > 0) {
      dictionary[value] += 1;
    } else {
      dictionary[value] = 1;
    }
  });

  return dictionary;
}

console.log(countLetters('asdfghasdasdasas'));
