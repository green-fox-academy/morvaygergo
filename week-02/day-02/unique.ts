'use strict';
export{};

function unique(arr: number[]): number[] {
    let length: number = arr.length;
    let sorted: number[] = arr.sort();
    for (let i: number = 0; i < length; i++) {
        if (sorted[i] == sorted[i+1]) {
            sorted.splice(i, 1);
        };
    };
    return sorted;
};

console.log(unique([1, 11, 34, 11, 52, 61, 1, 34]));