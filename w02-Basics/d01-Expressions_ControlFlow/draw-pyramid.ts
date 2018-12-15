'use strict';
export{};

let lineCount: number = 4;
let counter: number = 0;
let pixel: string = "*";
let space: string = ""

for (let i: number = 1; i < lineCount; i++) {
    space = space + " "
}

while (counter < lineCount) {
    console.log(space +pixel);
    pixel = pixel + "**"
    counter++;
    space = space.substring(1)
}