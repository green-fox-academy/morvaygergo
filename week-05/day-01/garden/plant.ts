'use strict';

export class Plant {

  readonly color: string;
  waterAmount: number;

  constructor(color: string) {
    this.color = color;
    this.waterAmount = 0;
  }

  getWatered(water: number): void {
    this.waterAmount += water;
  }
}
