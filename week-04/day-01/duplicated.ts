'use strict';
export { };

const fs = require('fs');

function readFromFile(fileName: string): string {
  try {
    return fs.readFileSync(fileName, 'utf-8');
  } catch {
    console.log(`Unable to read file: ${fileName}`);
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

let fileContent = readFromFile('duplicated.txt').split('\n').map(value => value.split(''));

// let good = fileContent.map(value => value.filter(value, index => index % 2 === 0));


console.log(fileContent);