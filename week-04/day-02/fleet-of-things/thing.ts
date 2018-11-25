'use strict';

export { Thing };

class Thing {
  name: string;
  completed: boolean;

  constructor(name: string) {
    this.name = name;
  }

  public complete(): void {
    this.completed = true;
  }
}
