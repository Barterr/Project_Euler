/**
 * Problem 6 - Sum square difference
 *
 * The sum of the squares of the first ten natural numbers is,
 *
 * 1^2 + 2^2 + ... + 10^2 = 385
 *
 * The square of the sum of the first ten natural numbers is,
 *
 * (1 + 2 + ... + 10)^2 = 55^2 = 3025
 *
 * Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.
 * Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
 */

/**
 * Returns the difference between the sum of squares and sum of the first 'n' numbers
 * @param {Number} n max number
 */
const sumSquareDifference = n => {
  let sumSquare = 0
  let sum = 0
  for (let i = 1; i <= n; i++) {
    sumSquare += Math.pow(i, 2)
    sum += i
  }
  return Math.pow(sum, 2) - sumSquare
}

module.exports = sumSquareDifference
