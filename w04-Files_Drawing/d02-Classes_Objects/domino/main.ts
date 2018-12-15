'use strict';

import { Domino } from "./domino";
export { };

function initializeDominoes(): Domino[] {
  let dominoes = [];
  dominoes.push(new Domino(5, 2));
  dominoes.push(new Domino(4, 6));
  dominoes.push(new Domino(1, 5));
  dominoes.push(new Domino(6, 7));
  dominoes.push(new Domino(2, 4));
  dominoes.push(new Domino(7, 1));
  return dominoes;
}

function print(dominoes: Domino[]): void {
  dominoes.forEach(function (value) {
    console.log(value);
  });
}

let dominoes = initializeDominoes();
/** You have the list of Dominoes */
/** Order them into one snake where the adjacent dominoes have the same numbers on their adjacent sides */
/** eg: [2, 4], [4, 3], [3, 5] ... */

print(dominoes);


let snake: Domino[] = [];

while (dominoes.length !== 0) {
  dominoes.forEach(function (value: Domino, index: number, array: Domino[]): void {
    if (snake.length === 0) {
      snake.push(value);
      dominoes.splice(index, 1);
    } else if (snake[snake.length - 1].values[1] === array[index].values[0]) {
      snake.push(array[index]);
      dominoes.splice(index, 1);
    }
  })
}

console.log(snake);
