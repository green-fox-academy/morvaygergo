'use strict';
export { };

let watchlist: string[] = [];
let securityAlcoholLoot: number = 0;
let canEnter: string[] = [];

const queue: any[] = [
  { name: 'Amanda', alcohol: 10, guns: 1 },
  { name: 'Mark', alcohol: 0, guns: 0 },
  { name: 'Dolores', alcohol: 0, guns: 1 },
  { name: 'Wade', alcohol: 1, guns: 1 },
  { name: 'Anna', alcohol: 10, guns: 0 },
  { name: 'Rob', alcohol: 2, guns: 0 },
  { name: 'Joerg', alcohol: 20, guns: 0 }
];

for (let i = 0; i < queue.length; i++) {
  if (queue[i].guns > 0) {
    queue[i].guns = 0;
    securityAlcoholLoot += queue[i].alcohol;
    queue[i].alcohol = 0;
    watchlist.push(queue[i].name)
  } else if (queue[i].alcohol > 0) {
    securityAlcoholLoot += queue[i].alcohol;
    queue[i].alcohol = 0;
    canEnter.push(queue[i].name);
  } else {
    canEnter.push(queue[i].name);
  }
};

console.log(queue);
console.log(watchlist);
console.log(canEnter);
console.log(securityAlcoholLoot);