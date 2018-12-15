'use strict';
export{};

let lineCount: number = 11;
let counter: number = 0;
let pixel: string = "*";
let space: string = ""

if (lineCount % 2 == 0) {
    console.log("I need an odd number as lineCount!")
} else {
    for (let i: number = 1; i < lineCount; i++) {
        space = space + " "
    }
    
    while (counter < (lineCount-1)/2) {
        console.log(space + pixel);
        pixel = pixel + "**"
        space = space.substring(1)
        counter++;
    }
    
    while (counter < lineCount) {
        console.log(space + pixel);
        pixel = pixel.substring(2)
        space = space + " "
        counter++;
    }
}