'use strict';

import { test } from 'tape';
import { fibonacci } from './fibonacci';

test('fibonacci sequence', t => {
  const actual = fibonacci(1);
  const expected = 1;

  t.equal(actual, expected);
  t.end();
});

test('fibonacci sequence', t => {
  const actual = fibonacci(0);
  const expected = 0;

  t.equal(actual, expected);
  t.end();
});

test('fibonacci sequence', t => {
  const actual = fibonacci(10);
  const expected = 55;

  t.equal(actual, expected);
  t.end();
});

test('fibonacci sequence', t => {
  const actual = fibonacci(-1);
  const expected = 0;

  t.equal(actual, expected);
  t.end();
});

test('fibonacci sequence', t => {
  const actual = fibonacci(1.4);
  const expected = 0;

  t.equal(actual, expected);
  t.end();
});
