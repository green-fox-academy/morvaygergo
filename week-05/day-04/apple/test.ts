'use strict';

import { test } from 'tape';
import { Apple } from './apple';

test('return apple', t => {
  let apple = new Apple;

  const actual = apple.getApple();
  const expected = 'apple';

  t.equal(actual, expected);
  t.end();
});

test('return apple', t => {
  let apple = new Apple;

  const actual = apple.getApple();
  const expected = 'applee';

  t.equal(actual, expected);
  t.end();
});
