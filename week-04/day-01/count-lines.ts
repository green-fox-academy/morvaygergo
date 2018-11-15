'use strict';
export { };

const fs = require('fs');

function readFromFile(fileName: string): string {
  try {
    return fs.readFileSync(fileName, 'utf-8');
  } catch(e) {
    return null;
  };
};

function lineCounter () {
  const fileContent: string = readFromFile('my-file3.txt');
  if (fileContent === null) {
    return 0
  } else {
    return fileContent.split('\n').length;
  };
};

console.log(lineCounter());