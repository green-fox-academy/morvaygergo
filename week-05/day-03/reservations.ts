'use strict';
export { };

interface Reservationy {
  getDowBooking(): string;
  getCodeBooking(): string;
}

class Reservation implements Reservationy {
  constructor(){}

  getDowBooking(): string {
    let days: string[] = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN']
    return days[Math.floor(Math.random() * 7)]
  }

  getCodeBooking(): string {
    return Math.random().toString(36).substr(2, 8).toLocaleUpperCase();
  }

  printReservation(): void {
    console.log(`Booking# ${this.getCodeBooking()} for ${this.getDowBooking()}`)
  }
}

let res1 = new Reservation;
let res2 = new Reservation;
let res3 = new Reservation;
let res4 = new Reservation;
let res5 = new Reservation;
let res6 = new Reservation;
let res7 = new Reservation;
let res8 = new Reservation;

res1.printReservation();
res2.printReservation();
res3.printReservation();
res4.printReservation();
res5.printReservation();
res6.printReservation();
res7.printReservation();
res8.printReservation();

