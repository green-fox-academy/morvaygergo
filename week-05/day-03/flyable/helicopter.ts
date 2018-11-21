'use strict';

import { Vehicle } from './vehicle';
import { Flyable } from './flyable';

export class Helicopter extends Vehicle implements Flyable {
  constructor() {
    super();
    this.goesOnRoad = false;
    this.goesOnWater = false;
    this.goesInTheSky = true;
  }
  
  land(): void {
    console.log('Rakataka');
  }

  fly(): void {
    console.log('Rakata-takata-rakataka');
  }

  takeOff():void {
    console.log('Ratatatata');
  }
}
