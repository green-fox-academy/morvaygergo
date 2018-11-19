'use strict';
export { };

const fs = require('fs');

function readFromFile(fileName: string): string {
  try {
    return fs.readFileSync(fileName, 'utf-8');
  } catch {
    console.log(`Unable to read file: ${fileName}`);
    return null;
  };
};

function collectIP(): string[] {
  
  const uniqueIPs: string[] = [];

  function txtToArray(txt: string): string[] {
    return txt.split('\n');
  };
  
  
  function checkIP(ip): void {

  };
  
  // const fileContent: string = readFromFile('log.txt');
  // fileContent.split('\n').forEach(function(row): void {
  //   row.split(' ').forEach(function(splitRow): void {
  //     if (uniqueIPs.some(isthere)) {
  //       uniqueIPs.push(splitRow[8])
  //     };


  //   });
  //   console.log(row);
  // });


  return uniqueIPs;
};

// console.log(logs);

collectIP();
