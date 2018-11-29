'use strict';

const fs = require('fs');

function readFromFile(fileName: string): string {
  try {
    return fs.readFileSync(fileName, 'utf-8');
  } catch (e) {
    console.log(e.message);
    return null;
  }
}

function writeToFile(fileName: string, content: string): void {
  if (fs.existsSync(fileName)) {
    fs.writeFileSync(fileName, content);
  } else {
    console.log('can\'t write to file');
  }
}

function copyFile(fileNameFrom: string, fileNameTo: string) {
  writeToFile(fileNameTo, readFromFile(fileNameFrom));
  return fs.existsSync(fileNameFrom) && fs.existsSync(fileNameTo) && readFromFile(fileNameFrom) === readFromFile(fileNameTo);
}

console.log(copyFile('my-file.txt', 'my-file-2.txt'));
