'use strict';

export { };
import { Animal } from './animal';

class Farm {
  animals: Animal[]

  constructor() {
    this.animals = new Array();
  }

  breed(): void {
    this.animals.push(new Animal);
  }

  slaughter(): void {
    let maxHunger: number = 0;
    let mostHungry: number;

    this.animals.forEach((value: Animal, index: number, array: Animal[]): number => {
      if (array[index].hunger > maxHunger) {
        maxHunger = array[index].hunger;
        mostHungry = index;
      }
      return mostHungry;
    });

    this.animals.splice(mostHungry, 1);
  }
}


let myFarm = new Farm;

myFarm.breed();
myFarm.breed();
myFarm.breed();

myFarm.animals[0].eat();
myFarm.animals[2].eat();

console.log(myFarm.animals);

myFarm.slaughter();

console.log(myFarm.animals);
