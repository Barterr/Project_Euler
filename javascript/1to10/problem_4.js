/**
 * Problem 4 - Largest palindrome product
 *
 * A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
 * Find the largest palindrome made from the product of two 3-digit numbers.
 */

/**
 * Largest palindrome product made from the product of two numbers of 'size' digits
 * @param {Number} size number of digits
 */
const largestPalindromeProduct = size => {
  const max = Number(new Array(size).fill(9).join(''))
  const min = Number('1' + new Array(size - 1).fill(0).join(''))

  let result = 0

  for (let i = max; i >= min; i--) {
    for (let j = i; j >= min; j--) {
      const number = (i * j).toString()
      const reversed = number
        .split('')
        .reverse()
        .join('')

      if (number === reversed && Number(number) > result) {
        result = Number(number)
      }
    }
  }
  return result
}

module.exports = largestPalindromeProduct
