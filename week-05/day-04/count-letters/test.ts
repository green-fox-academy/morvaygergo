'use strict';

import { test } from 'tape';
import { countLetters } from './count-letters';

test('letter counting', t => {
  const actual = countLetters('abcde')['a'];
  const expected = 1;

  t.equal(actual, expected);
  t.end();
});

test('letter counting', t => {
  const actual = countLetters('abcdeeeee')['e'];
  const expected = 5;

  t.equal(actual, expected);
  t.end();
});

test('letter counting', t => {
  const actual = countLetters('abcde')['a'];
  const expected = 0;

  t.notEqual(actual, expected);
  t.end();
});
