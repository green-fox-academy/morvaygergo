'use strict';
export{};

let animals: string[] = ["koal", "pand", "zebr"];

animals.forEach((item, index, array) => {
    array[index] = item + "a";
});

console.log(animals);