'use strict';
export { };

class Station {

  gasAmount: number;

  constructor() {
    this.gasAmount = 10000;
  }

  refill(car: Car): void {
    this.gasAmount -= car.capacity;
    car.gasAmount = car.capacity;
  };

};

class Car {

  gasAmount: number;
  capacity: number;

  constructor() {
    this.gasAmount = 0;
    this.capacity = 100;
  }
};

let station = new Station;
let car = new Car;

console.log(station, car);
station.refill(car);
console.log(station, car);
station.refill(car);
console.log(station, car);
station.refill(car);
console.log(station, car);
station.refill(car);
console.log(station, car);
