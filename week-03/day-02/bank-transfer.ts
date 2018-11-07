'use strict';
export { };

const accounts: any[] = [
  { clientName: 'Igor', accountNumber: 11234543, balance: 203004099.2 },
  { clientName: 'Vladimir', accountNumber: 43546731, balance: 5204100071.23 },
  { clientName: 'Sergei', accountNumber: 23456311, balance: 1353600.0 }
];

let data: any[] = [];

function getNameAndBalance(account: number) {
  for (let i = 0; i < accounts.length; i++) {
    if (accounts[i].accountNumber === account) {
      data.push(accounts[i].clientName);
      data.push(accounts[i].balance);
    };
  };
  return data;
};

// function finder(arr, ) {
//   return arr.name ===
// };

function transferAmount(accounts: any[], from: number, to: number, cash: number) {

};



console.log(getNameAndBalance(11234543));