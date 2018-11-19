'use strict';
export { };

const fs = require('fs');

function writeToFile(path: string, word: string, num: number) {
  try {
    let content: string = '';
    for (let i = 0; i < num; i++) {
      content += word + '\n';
    };
    content = content.substring(0, content.length - 1)
    fs.writeFileSync(path, content);
  } catch { };
};

writeToFile('my-file-3.txt', 'word', 5);
