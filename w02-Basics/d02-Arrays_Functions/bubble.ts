'use strict';
export{};

function bubble(arr, bool?) {
    if (bool == true) {
        arr = arr.sort();
        arr = arr.reverse();
    } else {
        arr = arr.sort();
    }
    return arr;
};

console.log(bubble([1, 11, 34, 11, 52, 61, 1, 34],true));