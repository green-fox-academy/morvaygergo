'use strict';
export { };

function insertAsterisk(str: string): string {
  if (str.length === 1) {
    return str;
  } else {
    return str[0] + '*' + insertAsterisk(str.substring(1, str.length));
  };
};

console.log(insertAsterisk('12345'));