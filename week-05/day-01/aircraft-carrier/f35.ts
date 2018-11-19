import { Aircraft } from "./aircraft";

'use strict';

export class F35 extends Aircraft {

  constructor() {
    super();
    this.maxAmmo = 12;
    this.baseDamage = 50;
  }
}