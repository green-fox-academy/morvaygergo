'use strict';
export{};

let str: string = "Here I am, a string to do searches on";
let substr: string = "string";

function substringFinder(str: string, substr: string): number {
    return str.indexOf(substr);
};

console.log(substringFinder(str, substr));