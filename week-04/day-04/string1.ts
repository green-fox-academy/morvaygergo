'use strict';
export { };

function fromXToY(str: string): string {
  if (str.length === 1 && str !== 'x') {
    return str;
  } else if (str[0] === 'x') {
    return 'y' + fromXToY(str.substring(1, str.length));
  } else {
    return str[0] + fromXToY(str.substring(1, str.length));
  };
};

console.log(fromXToY('xaxaxaxaxa'));