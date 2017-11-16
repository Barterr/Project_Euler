/**
 * Problem 9 - Special Pythagorean triplet
 *
 * A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
 *
 *        a^2 + b^2 = c^2
 *
 * For example, 32 + 42 = 9 + 16 = 25 = 52.
 *
 * There exists exactly one Pythagorean triplet for which a + b + c = 1000.
 *
 * Find the product abc.
 */

/**
 * Returns the product of the pythagorean triplet where it's sum equals 'number'
 * @param {Number} sum number that a+b+c equals
 */
const pythagoreanTripletProduct = sum => {
  let a = 0
  let b = 0
  let c = 0

  while (a < sum) {
    a++
    b = a

    while (a + b + c < sum) {
      b++
      c = Math.sqrt(a ** 2 + b ** 2)

      if (a + b + c === sum) return a * b * c
    }
  }
}

module.exports = pythagoreanTripletProduct
