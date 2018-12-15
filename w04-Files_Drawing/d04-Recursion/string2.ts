'use strict';
export { };

function xDeleter(str: string): string {
  if (str.length === 1 && str !== 'x') {
    return str;
  } else if (str[0] === 'x') {
    return xDeleter(str.substring(1, str.length));
  } else {
    return str[0] + xDeleter(str.substring(1, str.length));
  };
};

console.log(xDeleter('xaxaxaxaxa'));
