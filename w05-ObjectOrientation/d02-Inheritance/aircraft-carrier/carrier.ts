'use strict';

import { Aircraft } from "./aircraft";
import { F35 } from "./f35";
import { F16 } from "./f16";
export { Carrier };

class Carrier {

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
    let ammo: number = this.ammo;

    if (ammo <= 0) {
      console.log('Out of ammo!');
    } else {
      this.aircrafts.forEach((value: Aircraft, index: number, array: Aircraft[]): void => {
        if (array[index].isPriority() && array[index].currentAmmo < array[index].maxAmmo
          && ammo >= array[index].maxAmmo - array[index].currentAmmo) {
          ammo = array[index].refill(ammo);
        }
      });

      this.aircrafts.forEach((value: Aircraft, index: number, array: Aircraft[]): void => {
        if (array[index].currentAmmo < array[index].maxAmmo
          && ammo >= array[index].maxAmmo - array[index].currentAmmo) {
          ammo = array[index].refill(ammo);
        }
      });
    }

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
    let totalDamage: number = 0;

    this.aircrafts.forEach((value: Aircraft, index: number, array: Aircraft[]): void => {
      totalDamage += array[index].currentAmmo * array[index].baseDamage;
    });

    let ownStatus: string = `Carrier\nHP: ${this.health}, Aircraft count: ${this.aircrafts.length}, Ammo storage: ${this.ammo}, Total damage: ${totalDamage}\n`;

    let aircraftStatus: string = `Aircrafts`;

    this.aircrafts.forEach((value: Aircraft, index: number, array: Aircraft[]): void => {
      aircraftStatus += `\n` + `${index + 1}. ` + (array[index].getStatus());
    });

    let message: string = ''

    if (this.health <= 0) {
      message = `It's dead Jim :(`;
    } else {
      message = ownStatus.concat(aircraftStatus);
    }

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

myCarrier.fill();

console.log(myCarrier.getStatus());

myCarrier.fight(enemyCarrier);

console.log(myCarrier.getStatus());
console.log(enemyCarrier.getStatus());
