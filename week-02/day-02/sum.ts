'use strict';
export{};

function sum(until: number) {
    let count: number = 0;
    let n: number = 0;
    
    while (n <= until) {
        count = count + n;
        n++;
    };
    
    console.log(count);
};

sum(6);