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

function getPostRatio(): string {
  let logs = readFromFile('log.txt').split('\n');

  let split = logs.map(value => value.split('   '));

  let post = split.filter(value => value[2] === 'POST /');

  let get = split.filter(value => value[2] === 'GET /');

  return `The get-post ratio is: ${get.length / post.length}`
}

function uniqeIPs(): string[] {
  let uniqueIPs: string[] = [];

  let logs = readFromFile('log.txt').split('\n');

  let split = logs.map(value => value.split('   '));

  let ips = split.map(value => value[1]);

  ips.forEach((value: string) => {
    if (!uniqueIPs.includes(value)) {
      uniqueIPs.push(value);
    }
  });

  return uniqueIPs
}
