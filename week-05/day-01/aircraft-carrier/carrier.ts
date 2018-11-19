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
    if (this.ammo <= 0) {
      throw 'Out of ammo!';
    } else {
      while (this.ammo >= 0) {
        this.aircrafts.forEach(function(value: Aircraft, index: number, array: Aircraft[]): void {
          if (array[index].isPriority && array[index].currentAmmo < array[index].maxAmmo) {
            this.ammo = array[index].refill(this.ammo);
          }
          if (array[index].currentAmmo < array[index].maxAmmo) {
            this.ammo = array[index].refill(this.ammo);
          }
        })
      }
    }
  }

  fight(enemy: Carrier): void {
    let damage: number = 0;
    this.aircrafts.forEach(function(value: Aircraft, index: number, array: Aircraft[]): void {
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
    this.aircrafts.forEach(function(value: Aircraft, index: number, array: Aircraft[]): void {
      message.concat(array[index].getStatus(),'\n');
      maxDamage += array[index].fight();
    })
    message.concat(`Status of aircraft carrier:\n`,`HP: ${health}, Aircraft count: ${this.aircrafts.length}, Ammo storage: ${this.ammo}, Total damage: ${maxDamage}`)
    return message;
  }
}

// let myCarrier = new Carrier(100, 100);
// let enemyCarrier = new Carrier(100, 100);

// console.log(myCarrier.getStatus());

// myCarrier.add(new F35);
// myCarrier.add(new F35);
// myCarrier.add(new F35);
// myCarrier.add(new F35);
// myCarrier.add(new F16);
// myCarrier.add(new F16);
// myCarrier.add(new F16);
// myCarrier.add(new F16);

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
