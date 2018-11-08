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

function check(arr, key) {
  return arr.find(data => data.accountNumber === key)
};



function transferAmount(list: any[], from: number, to: number, cash: number) {
  if (check(list, from) && check(list, to)) {
    for (let i = 0; i < list.length; i++) {
      if (list[i].accountNumber === from) {
        list[i].balance -= cash;
      } else if (list[i].accountNumber === to) {
        list[i].balance += cash;
      }
    }
  } else {
    console.log("404 - account not found");
  }
  console.log(list);
}
check(accounts, 11234543)
console.log(getNameAndBalance(11234543));

transferAmount(accounts, 11256447534543, 43546731, 200000000);