'use strict';
export { };

const fs = require('fs');

function writeToFile(path: string, word: string, num: number) {
  try {
    for (let i = 0; i < num; i++) {
      fs.writeFileSync(path, word);
    };
  } catch {};
};

writeToFile('my-file-3.txt', 'word', 3);