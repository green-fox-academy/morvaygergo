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

function printLines() {
  const fileContent: string = readFromFile('my-file.txt');
  fileContent.split('\n').forEach(function(row) {
    console.log(row);
  });
};

printLines();
