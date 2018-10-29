'use strict';
export{};

let a: number = 24;
let out: number = 0;

if (a%2 == 0) {
    ++out
}

console.log(out);

let b: number = 13;
let out2: string = '';

if (10 < b && b < 20) {
    out2 = "Sweet!";
} else if (10 > b) {
    out2 = "Less!"
} else if (b < 20) {
    out2 = "More!"
}

console.log(out2);

let c: number = 123;
let credits: number = 100;
let isBonus: boolean = false;

// if credits are at least 50,
// and is_bonus is false decrement c by 2
// if credits are smaller than 50,
// and is_bonus is false decrement c by 1
// if is_bonus is true c should remain the same

console.log(c);

let d: number =  8;
let time: number = 120;
let out3: string = '';

// if d is dividable by 4
// and time is not more than 200
// set out3 to "check"
// if time is more than 200
// set out3 to "Time out"
// otherwise set out3 to "Run Forest Run!"

console.log(out3);