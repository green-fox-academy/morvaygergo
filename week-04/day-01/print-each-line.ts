'use strict';
export { };

const fs = require('fs');

function fileReader() {
  try {
    let fileContent = fs.readFileSync('my-file2.txt', 'utf-8');
    if (!fileContent) {
      throw new ReferenceError('Unable to read file');
    };
    console.log(fileContent);
  } catch(e) {
    console.log(e);
  };
};

fileReader();