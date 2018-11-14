'use strict';
export { };

const fs = require('fs');

function fileReader(fileName: string): number {
  let fileContent = fs.readFileSync(fileName, 'utf-8');
  return fileContent.split('\n').length;
};

console.log(fileReader('my-file3.txt'));