'use strict';

export class Aircraft {

  maxAmmo: number;
  currentAmmo: number;
  baseDamage: number;

  constructor() {
    this.maxAmmo = 0;
    this.currentAmmo = 0;
    this.baseDamage = 0;
  }

  fight(): number {
    let damage: number = this.currentAmmo * this.baseDamage;
    this.currentAmmo = 0;
    return damage;
  }

  refill(ammo: number): number {
    let need: number = this.maxAmmo - this.currentAmmo;
    this.currentAmmo = this.maxAmmo;
    return ammo - need;
  }

  getType(): string {
    return typeof this;
  }

  getStatus(): string {
    return `Type ${this.getType()}, Ammo: ${this.currentAmmo}, Base Damage: ${this.baseDamage}, All Damage: ${this.baseDamage * this.maxAmmo}`
  }

  isPriority(): boolean {
    return this.getType() === 'F35';
  }
}