'use strict';
export { };

let girls: string[] = ['Eve', 'Ashley', 'Claire', 'Kat', 'Jane'];
let boys: string[] = ['Joe', 'Fred', 'Tom', 'Todd', 'Neef', 'Jeff'];

function makingMatches(arr: string[], arr2: string[]): string[] {
  let couples: string[] = [];
  while (girls.length > 0 && boys.length > 0) {
    couples.push(girls.shift());
    couples.push(boys.shift());
  };
  return couples;
};

console.log(makingMatches(girls, boys));