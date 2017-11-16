/**
 * Problem 7 - 10001st prime
 *
 * By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
 *
 * What is the 10001st prime number?
 */

/**
 * Returns the nth prime number
 * @param {Number} n n'th prime number to return
 */
const primeNumber = n => {
  if (n === 1) return 2
  let i = 1
  let number = 2

  while (i !== n) {
    number += 1
    if (isPrime(number)) i += 1
  }
  return number
}

const isPrime = number => {
  if (number % 2 === 0) return false
  const max = Math.ceil(Math.sqrt(number))

  for (let i = 3; i <= max; i++) {
    if (number % i === 0) return false
  }
  return true
}

console.log(primeNumber(10001))

module.exports = primeNumber
