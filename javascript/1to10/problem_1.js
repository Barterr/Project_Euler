/**
 * Problem 1 - Multiples of 3 and 5
 *
 * If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
 * Find the sum of all the multiples of 3 or 5 below 1000.
 */

/**
 * Sum of all multiples of 3 and 5 up to maxNumber
 * @param {Number} maxNumber
 */
const multiplesOf3or5 = maxNumber => {
  let result = 0
  for (let i = 0; i < maxNumber; i++) {
    if (i % 3 === 0 || i % 5 === 0) result += i
  }
  return result
}

module.exports = multiplesOf3or5
