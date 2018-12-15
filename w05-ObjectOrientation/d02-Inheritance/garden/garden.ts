import { Flower } from "./flower";
import { Tree } from "./tree";

'use strict';

export class Garden {

  flowers: Flower[];
  trees: Tree[];

  constructor() {
    this.flowers = [];
    this.trees = [];
  }

  watering(water: number): void {

    console.log(`Watering with ${water}.`);

    let count = 0;

    this.flowers.forEach(function (value: Flower, index: number, array: Flower[]): void {
      if (array[index].waterAmount < 5) {
        console.log(`The ${array[index].color} flower needs water.`);
        count += 1;
      } else {
        console.log(`The ${array[index].color} flower doesn't need water.`);
      }
    })

    this.trees.forEach(function (value: Tree, index: number, array: Tree[]): void {
      if (array[index].waterAmount < 10) {
        console.log(`The ${array[index].color} tree needs water.`);
        count += 1;
      } else {
        console.log(`The ${array[index].color} tree doesn't need water.`);
      }
    })

    if (count > 0) {
      this.flowers.forEach(function (value: Flower, index: number, array: Flower[]) {
        if (array[index].waterAmount < 5) {
          array[index].getWatered(water / count);
        }
      })

      this.trees.forEach(function (value: Tree, index: number, array: Tree[]) {
        if (array[index].waterAmount < 10) {
          array[index].getWatered(water / count);
        }
      })
    }
  }
}

let myGarden = new Garden;

myGarden.flowers.push(new Flower('yellow'));
myGarden.flowers.push(new Flower('red'));
myGarden.flowers.push(new Flower('purple'));
myGarden.trees.push(new Tree('green'));
myGarden.trees.push(new Tree('brown'));
myGarden.trees.push(new Tree('silver'));

myGarden.watering(40);
myGarden.watering(70);
myGarden.watering(70);
