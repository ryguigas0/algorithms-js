/* eslint-env mocha */
const isPrime = require('../../../src').algorithms.math.isPrime;

const assert = require('assert');

describe('Prime number', () => {
  it('should return true for prime numbers', () => {
    assert.equal(isPrime(1), true);
    assert.equal(isPrime(2), true);
    assert.equal(isPrime(3), true);
    assert.equal(isPrime(7), true);
    assert.equal(isPrime(11), true);
    assert.equal(isPrime(13), true);
  });

  it('should return false for non-prime numbers', () => {
    assert.equal(isPrime(4), false);
    assert.equal(isPrime(6), false);
    assert.equal(isPrime(8), false);
    assert.equal(isPrime(10), false);
    assert.equal(isPrime(12), false);
    assert.equal(isPrime(14), false);
  });
});
