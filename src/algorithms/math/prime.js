/**
 * Raises base to a power keeping mod in check
 * @param  {Number} n   Number
 * @return {Boolean}    `true` when `n` is prime, `false` when not
 */
const isPrime = (n) => {
  for (let i = 2; i <= Math.sqrt(n); i += 1) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

isPrime(4);

module.exports = isPrime;
