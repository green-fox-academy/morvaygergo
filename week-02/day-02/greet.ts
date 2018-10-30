'use strict';
export{};

let name: string = "GreenFox";

function greet(name: string = "Anonymous") {
    console.log("Greetings, dear " + name + "!")
};

greet(name);
greet();