/**
 * Problem 5 - Smallest multiple
 *
 * 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
 * What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
 */

/**
 * Returns the smallest positive number evenly divisible by all numbers from 1 to 'max'
 * @param {Number} max max number
 */
const smallestMultiple = size => {
  let result = 1
  for (let i = 1; i <= size; i++) {
    result = leastCommonMultiple(i, result)
  }
  return result
}

const greaterCommonDivisor = (a, b) => {
  if (a === 0 || b === 0) return Math.max(a, b)
  return greaterCommonDivisor(b, a % b)
}

const leastCommonMultiple = (a, b) => {
  return Math.abs(a * b) / greaterCommonDivisor(a, b)
}

console.log(smallestMultiple(20))

module.exports = smallestMultiple
