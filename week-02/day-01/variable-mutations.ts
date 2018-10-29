'use strict';
export {};

let a: number = 3;
console.log(a);
a += 3;
console.log(a);

let b: number = 100;
console.log(b);
b -= 7;
console.log(b);

let c: number = 44;
console.log(c);
c *= 2;
console.log(c);

let d: number = 125;
console.log(d);
d /= 5;
console.log(d);

let e: number = 8;
console.log(e);
e = e**3;
console.log(e);

let f1: number = 123;
let f2: number = 345;
console.log(f1 > f2);

let g1: number = 350;
let g2: number = 200;
console.log(g1 < g2*2);

let h: number = 1357988018575474;
console.log(h%11 == 0);

let i1: number = 10;
let i2: number = 3;
console.log(i1 > i2**2 && i1 < i2**3);

let j: number = 1521;
console.log(j%3 == 0 || j%5 == 0);

let k: string = 'Apple';
console.log(k);
k = k+k+k+k;
console.log(k);