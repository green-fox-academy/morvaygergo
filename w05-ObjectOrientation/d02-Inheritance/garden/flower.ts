import { Plant } from "./plant";

'use strict';

export class Flower extends Plant {

  constructor(color: string) {
    super(color);
  }

  getWatered(water: number): void {
    super.getWatered(water);
    this.waterAmount += water * 0.75;
  }

}