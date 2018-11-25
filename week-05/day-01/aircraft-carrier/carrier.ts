import { Aircraft } from "./aircraft";
import { F35 } from "./f35";
import { F16 } from "./f16";

'use strict';

export class Carrier {

  aircrafts: Aircraft[];
  ammo: number;
  health: number;

  constructor(ammo: number, health: number) {
    this.ammo = ammo;
    this.health = health;
    this.aircrafts = [];
  }

  add(aircraft: Aircraft): void {
    this.aircrafts.push(aircraft);
  }

  fill(): void {
    let ammo = this.ammo;

    this.aircrafts.forEach(function(value: Aircraft, index: number, array: Aircraft[]): void {
    if (ammo < 12) {
      console.log('Out of ammo!');
    } else if (array[index].isPriority && array[index].currentAmmo < array[index].maxAmmo && ammo > 0) {
      ammo = array[index].refill(ammo);
    }
    });

    this.aircrafts.forEach(function(value: Aircraft, index: number, array: Aircraft[]): void {
    if (ammo < 8) {
      console.log('Out of ammo!');
    } else if (array[index].currentAmmo < array[index].maxAmmo && ammo > 0) {
      ammo = array[index].refill(ammo);
    }
    });

    this.ammo = ammo;
  }

  fight(enemy: Carrier): void {
    let damage: number = 0;
    this.aircrafts.forEach((value: Aircraft, index: number, array: Aircraft[]): void => {
      damage += array[index].fight();
    })
    enemy.health -= damage;
  }

  getStatus(): string {
    let message: string = '';
    let maxDamage: number = 0;
    let health: string = '';

    if (this.health > 0) {
      health = this.health.toString();
    } else {
      health = `It's dead Jim :(`
    }

    message.concat('Status of aircrafts on board:\n');

    console.log(message);

    this.aircrafts.forEach(function(value: Aircraft, index: number, array: Aircraft[]): void {
      message.concat(array[index].getStatus(),'\n');
      maxDamage += array[index].fight();
    })

    message.concat(`Status of aircraft carrier:\n`,`HP: ${this.health}, Aircraft count: ${this.aircrafts.length}, Ammo storage: ${this.ammo}, Total damage: ${maxDamage}`);

    return message;
  }
}

let myCarrier = new Carrier(60, 100);
let enemyCarrier = new Carrier(100, 100);

myCarrier.add(new F16);
myCarrier.add(new F16);
myCarrier.add(new F16);
myCarrier.add(new F16);
myCarrier.add(new F35);
myCarrier.add(new F35);
myCarrier.add(new F35);
myCarrier.add(new F35);


// myCarrier.aircrafts[0].refill(12);
// myCarrier.aircrafts[1].refill(12);

// myCarrier.fight(enemyCarrier);

// enemyCarrier.getStatus();
// myCarrier.getStatus();

myCarrier.fill();

console.log(myCarrier, enemyCarrier);

// myCarrier.aircrafts.forEach(function(value: Aircraft, index: number, array: Aircraft[]): void {
//   array[index].refill(100);
// })

// myCarrier.aircrafts[0].refill(100);

// console.log(myCarrier.getStatus());

// // try {
// //   myCarrier.fill();
// // } catch(e) {
// //   console.log(e)
// // }

// // console.log(myCarrier.getStatus());

// myCarrier.fight(enemyCarrier);

// console.log(myCarrier, enemyCarrier);
