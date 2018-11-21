'use strict';

import { Amphibian } from "./amphibian";
import { Bird } from "./bird";
import { Fish } from "./fish";
import { Mammal } from "./mammal";
import { Reptile } from "./reptile";
import { Animal } from "./animal";

let amphibian = new Amphibian('frog', 1, 'male', 'small', 'Europe', false, true);
let bird = new Bird('penguin', 10, 'female', 'medium', 'Antarctica', false);
let fish = new Fish('shark', 5, 'female', 'large', 'the Pacific', 'salt');
let mammal = new Mammal('cat', 10, 'male', 'small', 'Europe', true);
let reptile = new Reptile('triceratops', 25000000, 'female', 'huge', 'Pangea', true);

let zoo: Animal[] = [amphibian, bird, fish, mammal, reptile];

console.log('Who is in the zoo?');
for (let i = 0; i < zoo.length; i++) {
  console.log(zoo[i].introduce());
}

console.log('How do you breed?');
for (let i = 0; i < zoo.length; i++) {
  console.log(`The ${zoo[i].getName()} breeds with ${zoo[i].breed()}.`);
}

console.log('What do you eat?');
for (let i = 0; i < zoo.length; i++) {
  console.log(`The ${zoo[i].getName()} eats ${zoo[i].feed()}.`);
}

bird.fly();
fish.saltOrFresh();
mammal.isDomestic();
reptile.isDino();
