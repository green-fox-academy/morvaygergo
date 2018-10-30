'use strict';
export{};

let numList: number[] = [3, 4, 5, 6, 7];
let reverseNumList: number[] = [];
let length: number = numList.length;

console.log(numList.reverse());

for (let i: number = 0; i < length; i++) {
    reverseNumList.push(numList.shift());
};

console.log(reverseNumList);