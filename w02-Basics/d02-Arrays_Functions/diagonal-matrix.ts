'use strict';
export { };

let n: number = 5;
let row: string = '';
let matrix: string[] = [];

for (let i: number = 0; i < n; i++) {
  for (let j: number = 0; j < n; j++) {
    if (j === i) {
      row += '1';
    } else {
      row += '0';
    };
  };
  matrix.push(row);
  row = '';
};

matrix.reverse();
matrix.forEach((item, index, array) => {
  console.log(array[index]);
});
