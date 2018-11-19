import { Aircraft } from "./aircraft";

'use strict';

export class F16 extends Aircraft {

  constructor() {
    super();
    this.maxAmmo = 8;
    this.baseDamage = 30;
  }
}