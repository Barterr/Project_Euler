/**
 * Problem 10 - Summation of primes
 *
 * The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
 *
 * Find the sum of all the primes below two million.
 */

/**
 * Returns the sum of primes below num
 * @param {Number} limit max prime
 */
const sumOfPrimesBelowLimit = limit => {
  if (limit < 2) return 0
  const primes = [2]

  let number = 3
  while (number < limit) {
    if (isPrime(number)) primes.push(number)
    number += 2
  }

  return primes.reduce((a, b) => a + b)
}

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

module.exports = sumOfPrimesBelowLimit
