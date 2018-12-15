'use strict';
export { };

let url: string = 'https//www.reddit.com/r/nevertellmethebots';

function fixer(str: string): string {
  let url2 = url.substring(0, 5) + ':' + url.substring(5);
  return url2.replace(/bots/gi, "odds");
};

console.log(fixer(url));