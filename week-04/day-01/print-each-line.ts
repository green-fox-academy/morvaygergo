'use strict';
export { };

const fs = require('fs');

function readFromFile(fileName: string): string {
  try {
    return fs.readFileSync(fileName, 'utf-8');
  } catch(e) {
    console.log('Unable to read file - ' + e);
    return null;
  };
};

function printLines() {
  const fileContent: string = readFromFile('my-file.txt');
  fileContent.split('\n').forEach(function(row) {
    console.log(row);
  });
};

printLines();