'use strict';
export{};

let lineCount: number = 8;
let counter: number = 0;
let border: string = "";
let space1: string = "";
let space2: string = "";

if (lineCount % 2 == 0) {
    console.log("I can only draw it with odd numbers!")
} else {
    for (let i: number = 0; i < lineCount; i++) {
        border = border + "%"
    }
    
    for (let i: number = 0; i < lineCount-3; i++) {
        space2 = space2 + " "
    }
    
    console.log(border)
    
    while (counter < lineCount-2) {
        console.log("%" + space1 + "%" + space2 + "%")
        space1 = space1 + " "
        space2 = space2.substring(1)
        ++counter
    }
    
    console.log(border)
}