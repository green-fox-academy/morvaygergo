'use strict';
export{};

let lineCount: number = 4;
let counter: number = 0;
let pixel: string = "*";

while (counter < lineCount) {
    console.log(pixel);
    pixel = pixel + "*"
    counter++;
}