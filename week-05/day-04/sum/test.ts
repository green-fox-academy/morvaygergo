'use strict';

import { test } from 'tape';
import { Sum } from './sum';

test('return apple', t => {
  let sum = new Sum([1,2,3,4,5,6,7,8,9,10]);
  
  const actual = sum.countSum();
  const expected = 55;

  t.equal(actual, expected);
  t.end();
});

test('return apple', t => {
  let sum = new Sum([]);
  
  const actual = sum.countSum();
  const expected = 0;

  t.equal(actual, expected);
  t.end();
});

test('return apple', t => {
  let sum = new Sum([5]);
  
  const actual = sum.countSum();
  const expected = 5;

  t.equal(actual, expected);
  t.end();
});

test('return apple', t => {
  let sum = new Sum([null]);
  
  const actual = sum.countSum();
  const expected = 0;

  t.equal(actual, expected);
  t.end();
});

test('return apple', t => {
  let sum = new Sum(['string']);
  
  const actual = sum.countSum();
  const expected = 0;

  t.equal(actual, expected);
  t.end();
});
