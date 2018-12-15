export class NumberOperations {
  public addNum(num1: number, num2: number): number {
    return num1 + num2;
  }

  public subNum(num1: number, num2: number): number {
    return num1 + num2;
  }
}

import { test } from 'tape';
import { subNum } from './tape-test'

test('add 2 numbers', t => {
  const operations = new NumberOperations();

  var actual = operations.addNum(1, 2);
  var expected = 3;

  t.equal(actual, expected);
  t.end();
});

test('test subNum()', t => {
  const operations = new NumberOperations();

  t.equal(operations.subNum(2, 1), 1);
  t.end();
})
