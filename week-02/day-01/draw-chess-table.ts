'use strict';
export{};

let unit1: string = "% ";
let unit2: string = " %";
let row: string = "";
let chess: string[] = [];

for (let i: number = 0; i < 8; i++) {
    for (let j: number = 0; j < 4; j++) {
        if (i % 2 == 0) {
            row = row + unit1;
        } else {
            row = row + unit2;
        };
    };
    chess.push(row);
    row = "";
};

console.log(chess);