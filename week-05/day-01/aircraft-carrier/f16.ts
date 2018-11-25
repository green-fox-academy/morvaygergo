'use strict';

import { Aircraft } from "./aircraft";
export class F16 extends Aircraft {

  constructor() {
    super();
    this.maxAmmo = 8;
    this.baseDamage = 30;
  }

  getType(): string {
    return 'F16';
  }
}
