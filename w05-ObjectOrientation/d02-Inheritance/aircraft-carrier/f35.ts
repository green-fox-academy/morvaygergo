'use strict';

import { Aircraft } from "./aircraft";
export class F35 extends Aircraft {

  constructor() {
    super();
    this.maxAmmo = 12;
    this.baseDamage = 50;
  }

  getType(): string {
    return 'F35';
  }
}
