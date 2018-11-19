'use strict';

export class Plant {

  protected color: string;
  protected waterAmount: number;

  constructor(color: string) {
    this.color = color;
    this.waterAmount = 0;
  }

  getWatered(water: number) {
    this.waterAmount += water;
  }
}
