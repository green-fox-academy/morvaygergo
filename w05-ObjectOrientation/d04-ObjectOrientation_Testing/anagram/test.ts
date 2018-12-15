'use strict';

import { test } from 'tape';
import { checkAnagram } from './anagram';

test('anagram strings', t => {
  const actual = checkAnagram('asdfghjkl','lkjhgfdsa');
  const expected = true;

  t.equal(actual, expected);
  t.end();
});

test('anagram strings', t => {
  const actual = checkAnagram('','');
  const expected = true;

  t.equal(actual, expected);
  t.end();
});

test('anagram strings', t => {
  const actual = checkAnagram('asdfghjkl','lkjhgfdsassss');
  const expected = false;

  t.equal(actual, expected);
  t.end();
});
