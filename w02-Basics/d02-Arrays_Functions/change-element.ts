'use strict';
export{};

let numList: number[] = [1, 2, 3, 8, 5, 6];

let newNumList: any[] = numList.map(function(item, index) {
    if (item == 8) {
        item = 4;
    };
    return item;
});

console.log(newNumList);