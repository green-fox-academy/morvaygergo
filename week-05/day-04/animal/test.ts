'use strict';

import { test } from 'tape';
import { Animal } from './animal';

test('animal creation', t => {
  let animal = new Animal;

  const actual = animal.hunger;
  const expected = 50;

  t.equal(actual, expected);
  t.end();
});

test('animal creation', t => {
  let animal = new Animal;

  const actual = animal.thirst;
  const expected = 50;

  t.equal(actual, expected);
  t.end();
});

test('animal creation', t => {
  let animal = new Animal;
  animal.play();
  animal.play();
  animal.play();

  const actual = animal.hunger;
  const expected = 53;

  t.equal(actual, expected);
  t.end();
});

test('animal creation', t => {
  let animal = new Animal;
  animal.drink();

  const actual = animal.thirst;
  const expected = 49;

  t.equal(actual, expected);
  t.end();
});

test('animal creation', t => {
  let animal = new Animal;
  animal.eat();

  const actual = animal.hunger;
  const expected = 49;

  t.equal(actual, expected);
  t.end();
});
