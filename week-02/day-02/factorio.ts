'use strict';
export{};

function factorio(until: number) {
    let count: number = 1;
    let n: number = 1;
    
    while (n <= until) {
        count = count * n;
        n++;
    };
    
    console.log(count);
};

factorio(10);