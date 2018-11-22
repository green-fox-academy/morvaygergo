'use strict';

import { test } from 'tape';
import { Sharpie } from './sharpie';

test('sharpie creation', t => {
  let sharpie = new Sharpie('black', 10);

  const actual = sharpie.color;
  const expected = 'black';

  t.equal(actual, expected);
  t.end();
});

test('sharpie creation', t => {
  let sharpie = new Sharpie('black', 10);

  const actual = sharpie.width;
  const expected = 10;

  t.equal(actual, expected);
  t.end();
});

test('sharpie creation', t => {
  let sharpie = new Sharpie('black', 10);

  const actual = sharpie.inkAmount;
  const expected = 100;

  t.equal(actual, expected);
  t.end();
});

test('sharpie creation', t => {
  let sharpie = new Sharpie('black', 10);
  sharpie.use();

  const actual = sharpie.inkAmount;
  const expected = 99;

  t.equal(actual, expected);
  t.end();
});
