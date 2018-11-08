'use strict';
export { };

let stringer = (n) => n.toString();
let valid: number[] = [];

function subint(n: number, ns: number[]) {
  let strN = (n).toString;
  let strNs = ns.map(stringer);
  for (let i = 0; i < ns.length; i++) {
    if (strNs[i].includes(strN)) {
      valid.push(i);
    };
  };
  console.log(valid);
};

console.log(subint(1, [1, 11, 34, 52, 61]));