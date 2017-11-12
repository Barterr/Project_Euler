/**
 * Problem 3 - Largest prime factor
 * The prime factors of 13195 are 5, 7, 13 and 29.
 *
 * What is the largest prime factor of the number 600851475143 ?
 */

/**
 * Largest prime factor of a number
 * @param {Number} number number to check
 */
const largestPrimeFactor = number => {
  let lastPrime = 2
  let limit = number
  while (true) {
    const factor = nextFactor(lastPrime, limit)
    if (limit === factor) return factor
    limit = limit / factor
    lastPrime = factor
  }
  return lastPrime
}

/**
 * Find next factor of 'number', starting from 'start'
 * @param {Number} start start looking from this number
 * @param {Number} number number to find the factor of
 */
const nextFactor = (start, number) => {
  for (let i = start; i < number; i++) {
    if (number % i === 0) return i
  }
  return number
}

module.exports = largestPrimeFactor
