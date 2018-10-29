'use strict';
export{};

let lineCount: number = 6;
let counter: number = 0;
let pixel: string = "%";
let space: string = ""

for (let i: number = 1; i < lineCount; i++) {
    pixel = pixel + "%"
}

console.log(pixel)

for (let i: number = 1; i < lineCount-1; i++) {
    space = space + " "
}

for (let i: number = 1; i < lineCount-1; i++) {
    console.log("%" + space + "%")
}

console.log(pixel)