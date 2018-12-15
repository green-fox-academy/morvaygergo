'use strict';
export{};

let drinks: string[] = ["Gin", "Whiskey", "Wine", "Beer"];

drinks.forEach(function(item, index, array) {
    array[index] = item + item;
});

console.log(drinks);