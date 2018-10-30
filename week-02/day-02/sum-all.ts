'use strict';
export{};

let ai: number[] = [3, 4, 5, 6, 7];
let base: number = 0;

ai.forEach(function(item) {
    base = base + item;
});

console.log(base);