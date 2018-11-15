'use strict';
export { };

const fs = require('fs');

let fileContent = 'Gergo';
try {
  fs.writeFileSync('my-file-2.txt', fileContent);
} catch {
  console.log(`Unable to write file`);
};