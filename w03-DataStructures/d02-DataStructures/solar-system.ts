'use strict';
export { };

let planetList: string[] = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Uranus', 'Neptune'];

function putSaturn(arr: string[]): string[] {
  arr.splice(5, 0, "Saturn");
  return arr;
};

console.log(putSaturn(planetList));